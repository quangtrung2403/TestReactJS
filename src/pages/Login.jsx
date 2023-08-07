import React, { useContext, useEffect, useState } from "react";
import { logger } from "@/utils/logger";
import { useLogRender } from "@/hook/useLogRender";
import { useDispatch, useSelector } from "react-redux";
import { authLoading, loginAction } from "@/stores/auth";
import { validateFormLogin } from "../hook/validateForm";
import { NavLink, useLocation } from "react-router-dom";
import './FormLogin.scss';
import { AppContext } from "../Context/AppContext";

const Login = () => {
  useLogRender("Login");
  const [dataLogin, setDataLogin] = useState({});
  const loading = useSelector(authLoading);
  const dispatch = useDispatch();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const { data } = useContext(AppContext);
  let location = useLocation();


  const onChangeForm = (e) => {
    let { name, value } = e.target;
    logger.log("onChangeForm", name, value);
    setDataLogin({ ...dataLogin, [name]: value });
  };

  const onsubmit = async (e) => {
    e.preventDefault();
    let is_validate = validateFormLogin(dataLogin);
    if (is_validate) {
      dispatch(loginAction(dataLogin));
    } else {
      setErrors(is_validate);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // hàm xử lý ẩn hiện mật khẩu
  const clickShowandHideEye = () => {
    setShowPassword(!showPassword);
  };


  return (
    <div className='form-login card w-100'>
      <div className='form-login__content d-flex flex-column'>
        <NavLink to="/" className='d-flex align-items-center justify-content-center w-100'>
          <img className="card-img-top " src={data.img} alt="Card-img" />
        </NavLink>
        {location.pathname === '/login' && (
          <form className='w-100' onSubmit={(e) => onsubmit(e)} >
            <div className='form-login__title text-center'>{data.list.login}</div>
            {
              (windowWidth <= 960) && (
                <div className='mx-auto text-center special-text'>
                  <p className='mb-1'>{data.title_first}</p>
                  <p>{data.title_second}</p>
                </div>
              )
            }
            <div className="form-input">
              <input type="text" name="username" id="username"
                className='border-1 form-control'
                placeholder='Tên đăng nhập' disabled={loading}
                onChange={onChangeForm} />
              <i className="fa-regular fa-user" style={{ left: "35px" }}></i>
              {errors.username !== "" && (<div className="error">{errors.username}</div>)}
            </div>
            <div className="form-input">
              <input type={showPassword ? 'text' : 'password'}
                name="password" id="password"
                className='border-1 form-control'
                placeholder='Mật Khẩu' disabled={loading}
                onChange={onChangeForm} />
              <i className="fa-solid fa-lock" style={{ left: "35px" }}></i>
              {errors.password !== "" && (<div className="error">{errors.password}</div>)}
              {showPassword ? (
                <i className="fa-solid fa-eye" onClick={clickShowandHideEye} style={{ right: '35px', cursor: 'pointer' }}></i>
              ) : (
                <i className="fa-solid fa-eye-slash" onClick={clickShowandHideEye} style={{ right: '35px', cursor: 'pointer' }}></i>
              )}
            </div>
            <div className="form-input">
              <button type='submit'
                className='w-100 d-flex justify-content-center align-items-center' disabled={loading}
                style={{ backgroundColor: `${data.color.backgroundColorHeader}` }}>
                &nbsp;{data.list.login}
              </button>
            </div>
            <div className="check-input" style={{
              color: `${data.color.backgroundColorHeader}`,
            }}>{data.list.password}</div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
