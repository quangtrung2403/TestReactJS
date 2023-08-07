import React, { memo, useContext, useEffect, useRef, useState } from "react";
import { Link, NavLink, Navigate, useLocation } from "react-router-dom";
import { useLogRender } from "@/hook/useLogRender";
import { authUser } from "@/stores/auth";
import { useDispatch, useSelector } from "react-redux";
import './Header.scss';
import { AppContext } from "../Context/AppContext";
import { logoutAction } from "../stores/auth/action";

const ModalLoginLogOut = ({ onClose }) => {
  const user = useSelector(authUser);
  const dispatch = useDispatch();
  const modalRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const logOutUser = () => {
    dispatch(logoutAction());
    return <Navigate to="/" />;
  }

  if (user && user.id) {
    return (
      <div className='modalUser' ref={modalRef}>
        <div className='modalUser__card'>
          <div className='modalUser-avatar'>
            <div className='modalUser-avatar__img'>
              {user && user.avatar_url ? (
                <span><img src={user.avatar_url} alt="author" /></span>
              ) : (<span>B</span>)}
            </div>
            <p className='mb-0'>{user.name}</p>
            <p className='mb-0'>{user.group.name}</p>
            <div className='text-center mt-2'>
              <p className='note__content'
                style={{
                  backgroundColor: user.role.meta.color,
                  borderColor: user.role.meta.color,
                  color: user.role.meta['text-color'],
                  caretColor: user.role.meta['text-color'],
                }}>
                {user.role.name}
              </p>
            </div>
            <div className='d-flex align-items-center modalUser-action'>
              <NavLink to='/ho-so/'>
                <span>Hồ Sơ</span>
              </NavLink>
              <button className='modalUser-logOut' onClick={logOutUser}>
                <span>Đăng Xuất</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};


const Header = memo(() => {
  const { data } = useContext(AppContext);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const user = useSelector(authUser);
  const location = useLocation();
  useLogRender("Layout-Header");
  let content = null;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  if (user && user.id) {
    content = (
      <>
        <li className="nav-item">
          <Link to="/auth" className="nav-link"> {user.username} </Link>
        </li>
        <li className="nav-item">
          <Link to="/auth/logout" className="nav-link"> LogOut </Link>
        </li>
      </>
    );
  } else {
    content = (
      <li className="nav-item">
        <Link to="/login" className="nav-link"> Login </Link>
      </li>
    );
  }
  return (
    <header className="site-header">
      {location.pathname === '/' || location.pathname === '/login' ? (
        <div className="site-identity">
          <div className='position-absolute'>
            <div className='heading-login' style={{ backgroundColor: `${data.color.backgroundColorHeader}` }}>
              <div className='text-start'>
                <NavLink to='/'>
                  <img src={data.img} alt='img-login' style={{ height: '70px', paddingLeft: '24px' }} />
                </NavLink>
              </div>
              <div className='heading-login__title text-center'>
                {windowWidth > 960
                  ? `${data.title_first} ${data.title_second}`
                  : (
                    <React.Fragment>
                      <p className='mb-0'>{data.title_first}</p>
                      <p className='mb-0'>{data.title_second}</p>
                    </React.Fragment>
                  )}
              </div>
              <nav className="site-navigation">
                <ul className="nav">
                  <li className="nav-item">
                    <Link to="/" className="nav-link"> Home </Link>
                  </li>
                  {content}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      ) : (location.pathname === '/auth' || location.pathname === '/auth/table-control' || location.pathname === '/auth/map-control') && (
        <div className="heading__login justify-content-between"
          style={{
            padding: "0px 13px 4px",
            boxShadow: "0 4px 4px rgba(0,0,0,.08)",
            height: "60px",
            position: "fixed",
            width: "100%",
            zIndex: "10",
            top: "0",
            backgroundColor: "#fff",
          }}>
          <div className='main-control'>
            <i className="fa-solid fa-bars"></i>
            <NavLink to={`/`}><img src='https://gtvtqs.samcom.com.vn/static/img/logo.png' alt="lobo-banner" /></NavLink>
            <div className='main-control__title'>
              <NavLink to={`/`}>{data.title_first} {data.title_second} </NavLink>
            </div>
          </div>
          <div className='main-control-avatar' onClick={toggleModal}>
            <div className='main-control-avatar__box'>
              {user && user.avatar_url ? (
                <span><img src={user.avatar_url} alt="author" /></span>
              ) : (<span>B</span>)}
            </div>
            <div type="submit">
              <span>{user && user.name}</span>
            </div>
            {modalOpen && <ModalLoginLogOut onClose={closeModal} />}
          </div>
        </div>
      )}

    </header>
  );
});

export default Header;
