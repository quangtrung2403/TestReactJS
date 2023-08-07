import React, { useRef, useEffect, useState } from 'react';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl, { LngLat } from 'mapbox-gl';
import { mapKey } from '../api/router';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import MapboxDraw from '@mapbox/mapbox-gl-draw';
import './map.scss';
import GeoJSONData from '../hook/GeoJsonData';


mapboxgl.accessToken = mapKey;

export default function MapControl() {
	const geojson = GeoJSONData();
	const mapContainer = useRef(null);
	const map = useRef(null);
	const [lng, setLng] = useState(106.443);//kinh do
	const [lat, setLat] = useState(20.846);// vi do

	useEffect(() => {
		if (map.current) return; // initialize map only once
		map.current = new mapboxgl.Map({
			container: mapContainer.current,
			style: 'mapbox://styles/mapbox/streets-v12',
			center: [lng, lat],
			zoom: 7.52,
			hash: 'current-position',
			attributionControl: false,
			transformRequest: (url, resourceType) => {
				if (resourceType === 'Source' && url.startsWith('http://myHost')) {
					return {
						url: url.replace('http', 'https'),
						headers: { 'my-custom-header': true },
						credentials: 'include'
					};
				}
			}
		});

		// hiện thị khoảng cách trên mản đồ tương ứng vs khoảng cách trên mặt đất
		const scale = new mapboxgl.ScaleControl({
			minWidth: "100px",
			unit: 'imperial' // đơn vị đo km
		});
		map.current.addControl(scale, 'bottom-right');
		scale.setUnit('metric');

		//  search Map
		map.current.addControl(
			new MapboxGeocoder({
				accessToken: mapKey,
				mapboxgl: mapboxgl
			}),
		);

		// xac dinh vi tri hien tai
		map.current.addControl(new mapboxgl.GeolocateControl({
			positionOptions: {
				enableHighAccuracy: true
			},
			trackUserLocation: true,
			showUserHeading: true
		}), 'bottom-right')

		map.current.on('load', () => {
			map.current.addSource('quan-khu', {
				type: 'geojson',
				data: geojson
			})
			map.current.addLayer({
				id: 'quan-khu-location',
				type: 'fill',
				source: 'quan-khu',
				paint: {
					'fill-color': 'rgb(218,37,29)',
					'fill-opacity': 0.6
				}
			})
			map.current.addLayer({
				id: 'quan-khu-name',
				type: 'symbol',
				source: 'quan-khu',
				layout: {
					"text-field": ['format', ['get', 'name'], { 'font-scale': 1 }],
					'text-size': 14,
				},
				paint: {
					'text-color': '#000',
				}
			});
		})

		//  phong to man hinh
		map.current.addControl(new mapboxgl.FullscreenControl({
			container: document.querySelector('#map')
		}), 'bottom-right')

		// Add navigation control (the +/- zoom buttons)
		map.current.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
		const draw = new MapboxDraw({
			displayControlsDefault: false,
			controls: {
				point: true,
				line_string: true,
				polygon: true,
				trash: true
			},
		});
		map.current.addControl(draw);
		map.current.on('draw-create', function (e) {
			if (LngLat.lng && LngLat.lat === 'polygon') {
				let x = draw.getAll();
				console.log(x['features'][0]['geometry']['coordinates'][0]);
			}
		})
		map.current.on('move', () => {
			setLng(map.current.getCenter().lng.toFixed(4));
			setLat(map.current.getCenter().lat.toFixed(4));
		});
	}, [geojson, lat, lng]);

	return (
		<div className='mapbox'>
			<div ref={mapContainer} className="map-container" style={{ top: "200px" }} />
		</div>
	);
}