import { useEffect } from 'react';
import { getMapAction } from '../stores/map/actionMap';
import { useDispatch, useSelector } from 'react-redux';


export default function GeoJSONData() {
	const dispatch = useDispatch();
	const { dataMap } = useSelector((state) => state.map);

	useEffect(() => {
		dispatch(getMapAction());
	}, [dispatch]);

	const features = [];

	for (const quankhu_data of dataMap) {
		const quankhu_id = quankhu_data["id"];
		const quankhu_name = quankhu_data["name"];
		const quankhu_type = quankhu_data["center_point"];
		const quankhu_code = quankhu_data["code"];
		const quankhu_geometry = quankhu_data["geometry"];
		const quankhu_description = quankhu_data["description"]
		const quankhu_datatype = quankhu_data["type_data"]
		const feature = {
			"type": "Feature",
			"properties": {
				"id": quankhu_id,
				"name": quankhu_name,
				"center_point": quankhu_type,
				"code": quankhu_code,
				"description": quankhu_description,
				"type_data": quankhu_datatype,
			},
			"geometry": {
				type: "MultiPolygon",
				coordinates: quankhu_geometry.coordinates,
			},
		};
		features.push(feature);
	}

	const geojson = {
		"type": "FeatureCollection",
		"features": features,
	};

	return geojson
}
