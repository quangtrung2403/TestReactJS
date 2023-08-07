export const validateFormLogin = (dataForm) => {
	const errors = {};
	if (!dataForm.username) {
		errors.username = "Trường tên đăng nhập không được bỏ trống.";
	}

	if (!dataForm.password) {
		errors.password = "Trường mật khẩu không được bỏ trống.";
	} else if (dataForm.password.length < 8) {
		errors.password = "Trường mật khẩu phải có tối thiểu 8 ký tự.";
	}
	return errors;
}

