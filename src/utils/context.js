import { UrlImage } from "../api/router";

const data = {
	id: "1",
	title_first: "HỆ THỐNG THÔNG TIN ĐỊA LÝ",
	title_second: "MẠNG GIAO THÔNG VẬN TẢI QUÂN SỰ",
	img: `${UrlImage}/logoColor.e5de23ce.png`,
	login_img: `${UrlImage}/footerLogin.cf032540.svg`,
	list: {
		news: "Bản Tin",
		introduce: "Giới Thiệu",
		file: "Tài Liệu",
		contact: "Liên Hệ",
		login: "Đăng nhập",
		password: "Quên mật khẩu",
	},
	icon: {
		search: "fa-solid fa-magnifying-glass",
		question: "fa-solid fa-circle-question",
	},
	color: {
		backgroundColorHeader: "rgb(0,114,91)",
		backgroundNavbar: "rgb(218, 42, 28)",
		backgroundFooter: "rgb(123, 27, 14)",
		textColor: "#fff",
		border: "0.0625rem solid #ff8076",
		colorItem: "rgba(0, 0, 0, 0.87)",
		borderAdvance: "rgb(234, 84, 72)",
		borderContent: "rgb(195, 83, 71)",
	},
}

export { data }