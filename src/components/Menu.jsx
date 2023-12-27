import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../css/menu.css';

export default class Menu extends Component {

  render() {
    return (
        <div>
            {/* Main Sidebar Container */}
            <aside className="main-sidebar sidebar-light-primary elevation-4" style={{ backgroundColor: '#16537e' }}>
                {/* Brand Logo */}
                <Link to="/home" className="brand-link">
                <img src="https://vnu.edu.vn/upload/2019/06/24238/image/VNU-UET%20logo.jpg" alt="Logo" className="brand-image img-circle elevation-3" />
                
                <span className="brand-text font-weight-bold" style={{ color: 'white' }}>Hệ thống QL CSDL</span><br />
                </Link>
                {/* Sidebar */}
                <div className="sidebar">
                {/* SidebarSearch Form */}
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="info">
                    <b style={{ color: 'white' }}>Nhiệm vụ KH&CN trực tuyến</b>
                    </div>
                </div>
                <div className="form-inline">
                    <div className="input-group" data-widget="sidebar-search">
                    <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                    <div className="input-group-append">
                        <button className="btn btn-sidebar">
                        <i className="fas fa-search fa-fw" />
                        </button>
                    </div>
                </div>
                </div>
                {/* Sidebar Menu */}
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    {/* Add icons to the links using the .nav-icon class
                    with font-awesome or any other icon font library */}
                        <li className="nav-item">
                            <Link to="/home" className="nav-link" style={{ color: 'white' }}>
                            <i className="nav-icon fas fa-tachometer-alt" />
                            <p>
                                Chương trình
                                <i className="right fas" />
                            </p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/duty" className="nav-link" style={{ color: 'white' }}>
                            <i className="nav-icon fas fa-th" />
                            <p>
                                Nhiệm vụ KH&CN
                            </p>
                            </Link>
                        </li>

                    <li className={`nav-item has-treeview ${window.location.pathname.startsWith('/statistical') ? 'menu-open' : ''}`}>
                        <Link className="nav-link" to="#submenu2" style={{ color: 'white' }}>  
                        <i className="nav-icon fas fa-chart-pie" />
                        <p>
                            Thống kê
                            <i className="right fas fa-angle-left" />
                        </p>
                        </Link>
                        <ul className="nav nav-treeview" id="submenu2" aria-expanded="false">
                            <li className="nav-item">
                                <NavLink to="/statistical/program_report" className="nav-link" style={{ color: 'white' }}>
                                <i className="far fa-circle nav-icon" />
                                <p>Báo cáo kết quả thực hiện chương trình</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/statistical/template_report" className="nav-link" style={{ color: 'white' }}>
                                <i className="far fa-circle nav-icon" />
                                <p>Mẫu báo cáo sơ kết</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/statistical/mission_report" className="nav-link" style={{ color: 'white' }}>
                                <i className="far fa-circle nav-icon" />
                                <p>Báo cáo tổng hợp nhiệm vụ</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/statistical/mission_information" className="nav-link" style={{ color: 'white' }}>
                                <i className="far fa-circle nav-icon" />
                                <p>Thông tin chi tiết nhiệm vụ</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/statistical/search_for_tasks" className="nav-link" style={{ color: 'white' }}>
                                <i className="far fa-circle nav-icon" />
                                <p>Tìm kiếm nhiệm vụ KH&CN</p>
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className={`nav-item has-treeview ${window.location.pathname.startsWith('/category') ? 'menu-open' : ''}`}>
                    <Link class="nav-link " to="#submenu3" style={{ color: 'white' }}>     
                        <i className="nav-icon fas fa-copy" />
                        <p>
                            Danh mục
                            <i className="fas fa-angle-left right" />
                        </p>
                        </Link>
                        <ul class="nav nav-treeview" id="submenu3" aria-expanded="false">
                            <li className="nav-item">
                                <NavLink to="/category/expert" className="nav-link" style={{ color: 'white' }}>
                                <i className="far fa-circle nav-icon" />
                                <p>Chuyên gia</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/category/phase" className="nav-link" style={{ color: 'white' }}>
                                <i className="far fa-circle nav-icon" />
                                <p>Giai đoạn</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/category/science" className="nav-link" style={{ color: 'white' }}>
                                <i className="far fa-circle nav-icon" />
                                <p>Lĩnh vực khoa học</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/category/specialized" className="nav-link" style={{ color: 'white' }}>
                                <i className="far fa-circle nav-icon" />
                                <p>Chuyên ngành</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/category/manager" className="nav-link" style={{ color: 'white' }}>
                                <i className="far fa-circle nav-icon" />
                                <p>Đơn vị chủ quản</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/category/facility" className="nav-link" style={{ color: 'white' }}>
                                <i className="far fa-circle nav-icon" />
                                <p>Cơ quan chủ trì</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/category/academic" className="nav-link" style={{ color: 'white' }}>
                                <i className="far fa-circle nav-icon" />
                                <p>Học hàm</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/category/degree" className="nav-link" style={{ color: 'white' }}>
                                <i className="far fa-circle nav-icon" />
                                <p>Học vị</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/category/title" className="nav-link" style={{ color: 'white' }}>
                                <i className="far fa-circle nav-icon" />
                                <p>Chức danh</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/category/position" className="nav-link" style={{ color: 'white' }}>
                                <i className="far fa-circle nav-icon" />
                                <p>Chức vụ</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/category/product-form" className="nav-link" style={{ color: 'white' }}>
                                <i className="far fa-circle nav-icon" />
                                <p>Dạng sản phẩm</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/category/product-type" className="nav-link" style={{ color: 'white' }}>
                                <i className="far fa-circle nav-icon" />
                                <p>Loại sản phẩm</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <Link to="/category/program-type" className="nav-link" style={{ color: 'white' }}>
                                <i className="far fa-circle nav-icon" />
                                <p>Loại chương trình</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/category/manage-agency" className="nav-link" style={{ color: 'white' }}>
                                <i className="far fa-circle nav-icon" />
                                <p>Cơ quan quản lý</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/category/dispatch-type" className="nav-link" style={{ color: 'white' }}>
                                <i className="far fa-circle nav-icon" />
                                <p>Loại công văn</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/category/file-type" className="nav-link" style={{ color: 'white' }}>
                                <i className="far fa-circle nav-icon" />
                                <p>Loại file đính kèm nhiệm vụ</p>
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className={`nav-item has-treeview ${window.location.pathname.startsWith('/system') ? 'menu-open' : ''}`}>
                    <Link class="nav-link " to="#submenu4" style={{ color: 'white' }}>   
                        <i className="nav-icon fas fa-edit" />
                        <p>
                            Quản trị hệ thống
                            <i className="fas fa-angle-left right" />
                        </p>
                        </Link>
                        <ul class="nav nav-treeview" id="submenu4" aria-expanded="false">
                            <li className="nav-item">
                                <NavLink to="/system/user" className="nav-link" style={{ color: 'white' }}>
                                <i className="far fa-circle nav-icon" />
                                <p>Người dùng</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/system/configuration" className="nav-link" style={{ color: 'white' }}>
                                <i className="far fa-circle nav-icon" />
                                <p>Cấu hình hệ thống</p>
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className={`nav-item has-treeview ${window.location.pathname.startsWith('/information') ? 'menu-open' : ''}`}>
                    <Link class="nav-link " to="#submenu5" style={{ color: 'white' }}>   
                        <i className="nav-icon far fa-plus-square" />
                        <p>
                            Trợ giúp
                            <i className="fas fa-angle-left right" />
                        </p>
                        </Link>
                        <ul class="nav nav-treeview" id="submenu5" aria-expanded="false">
                            <li className="nav-item">
                                <NavLink to="/information/usage_process" className="nav-link" style={{ color: 'white' }}>
                                <i className="far fa-circle nav-icon" />
                                <p>Quy trình sử dụng</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/information/infor_software" className="nav-link" style={{ color: 'white' }}>
                                <i className="far fa-circle nav-icon" />
                                <p>Thông tin phần mềm</p>
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                    </ul>
                </nav>
                {/* /.sidebar-menu */}
                </div>
                {/* /.sidebar */}
            </aside>
        </div>
    )
  }
}