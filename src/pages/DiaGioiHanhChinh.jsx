import React, { useEffect, useState } from 'react';
import { useLogRender } from '@/hook/useLogRender';
import './map.scss';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAction } from '../stores/user/actionUser';
import RenderTable from './RenderTable';
import Pagination from './Pagination';
import CreateNewMap from './CreateNewMap';
import MapControl from './MapControl';

const DiaGioiHanhChinh = () => {
  useLogRender('PageNeedAuth');
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { pagination } = useSelector((state) => state.user);
  const [searchInput, setsearchInput] = useState('');
  const [sort, setSort] = useState('');
  const [clicked, setClicked] = useState(true);
  const [isTableView, setIsTableView] = useState(true);

  const handleTableViewClick = () => {
    setIsTableView(true);
  };

  const handleMapViewClick = () => {
    setIsTableView(false);
  };

  useEffect(() => {
    dispatch(
      getUserAction({
        page: 1,
        itemsPerPage: 10,
        sort: sort,
        input: searchInput,
      }),
    );
  }, [dispatch, searchInput, sort]);

  const handleSearchChange = (event) => {
    setsearchInput(event.target.value);
    dispatch(
      getUserAction({
        page: pagination.page,
        itemsPerPage: pagination.itemsPerPage,
        sort: sort,
        input: event.target.value,
      }),
    );
  };

  const sortTable = () => {
    setClicked((prevState) => !prevState);
    if (clicked) {
      setSort('-name');
      dispatch(
        getUserAction({
          page: pagination.page,
          itemsPerPage: pagination.itemsPerPage,
          sort: '-name',
          input: searchInput,
        }),
      );
    } else {
      setSort('name');
      dispatch(
        getUserAction({
          page: pagination.page,
          itemsPerPage: pagination.itemsPerPage,
          sort: 'name',
          input: searchInput,
        }),
      );
    }
  };

  return (
    <React.Fragment>
      <div className="page-container d-flex justify-content-between w-100">
        <ul className="nav">
          <li className="nav-link" onClick={handleTableViewClick}>
            <NavLink to="/auth" className="nav-item">
              Dạng bảng
            </NavLink>
          </li>
          <li className="nav-link" onClick={handleMapViewClick}>
            <NavLink to="/auth" className="nav-item">
              Dạng Bản Đồ
            </NavLink>
          </li>
        </ul>
        <div className="search-item">
          <div className="search-info">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              value={searchInput}
              name="search-name"
              onChange={handleSearchChange}
              id="search-name"
              placeholder="Tìm kiếm theo tên"
            />
            <i className="fa-solid fa-filter " onClick={sortTable}></i>
            <Button variant="success" onClick={handleShow}>
              + Thêm mới
            </Button>
          </div>
        </div>
        <CreateNewMap show={show} handleClose={handleClose} />
      </div>
      {isTableView ? (
        <div className="table-responsive w-100 ps-3 pe-3">
          <RenderTable />
          <Pagination searchInput={searchInput} sort={sort} />
        </div>
      ) : (
        <MapControl />
      )}
    </React.Fragment>
  );
};
export default DiaGioiHanhChinh;