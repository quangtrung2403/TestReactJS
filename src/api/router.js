const URL = "http://wlp.howizbiz.com";
const Endpoint = "https://gtvtqs.samcom.com.vn/";
const mapKey = 'pk.eyJ1IjoidmlldG5hbXN0YXIwMSIsImEiOiJjbGtoYml1cDUwN256M2tucmJvMms2MDNrIn0.FsWHmQkRjxouofZBpusWrA';

const routers = {
	img: "/static/img",
	login: '/web-authenticate',
	getMe: '/me',
	logout: '/logout',
	listQuankhu: 'api/militaries',
	createNewQuankhu: 'api/layers/75/features',
	updateQuankhu: 'api/layers/75/features',
	deleteQuankhu: 'api/layers/75/features'
}

const UrlImage = URL + routers.img;

export { URL, Endpoint, routers, UrlImage, mapKey }