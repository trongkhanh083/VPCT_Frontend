import React, { Component } from 'react'

export default class Menu extends Component {
  render() {
    return (
        <div>
        {/* Main Sidebar Container */}
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/* Brand Logo */}
            <a href="/home" className="brand-link">
            <img src="dist/img/project_logo.jpg" alt="Logo" className="brand-image img-circle elevation-3" style={{opacity: '8'}} />
            <span className="brand-text font-weight-bold">Hệ thống QL CSDL</span><br />
            <span className="brand-text font-weight-light user-panel mt-3 pb-3 mb-3 d-flex" style={{fontSize: 16, paddingLeft: 16}}>
                Nhiệm vụ KH&CN trực tuyến
            </span>
            </a>
            {/* Sidebar */}
            <div className="sidebar">
            {/* SidebarSearch Form */}
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
                <li className="nav-item menu-open">
                    <a href="/home" className="nav-link active">
                    <i className="nav-icon fas fa-tachometer-alt" />
                    <p>
                        Chương trình
                        <i className="right fas" />
                    </p>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/duty" className="nav-link">
                    <i className="nav-icon fas fa-th" />
                    <p>
                        Nhiệm vụ KH&CN
                    </p>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-chart-pie" />
                    <p>
                        Thống kê
                        <i className="right fas fa-angle-left" />
                    </p>
                    </a>
                    <ul className="nav nav-treeview">
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Báo cáo kết quả thực hiện chương trình</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Mẫu báo cáo sơ kết</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Báo cáo tổng hợp nhiệm vụ</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Thông tin chi tiết nhiệm vụ</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Tìm kiếm nhiệm vụ KH&CN</p>
                        </a>
                    </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-copy" />
                    <p>
                        Danh mục
                        <i className="fas fa-angle-left right" />
                    </p>
                    </a>
                    <ul className="nav nav-treeview">
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Chuyên gia</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Giai đoạn</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Lĩnh vực khoa học</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Chuyên ngành</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Đơn vị chủ quản</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Học hàm</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Học vị</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Chức danh</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Chức vụ</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Dạng sản phẩm</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Loại sản phẩm</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Loại chương trình</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Cơ quan quản lý</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Loại công văn</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Loại file đính kèm nhiệm vụ</p>
                        </a>
                    </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-edit" />
                    <p>
                        Quản trị hệ thống
                        <i className="fas fa-angle-left right" />
                    </p>
                    </a>
                    <ul className="nav nav-treeview">
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Nhóm người dùng</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Người dùng</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Nhật ký đăng nhập</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Nhật ký lỗi</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Cấu hình hệ thống</p>
                        </a>
                    </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">
                    <i className="nav-icon far fa-plus-square" />
                    <p>
                        Trợ giúp
                        <i className="fas fa-angle-left right" />
                    </p>
                    </a>
                    <ul className="nav nav-treeview">
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>API chia sẻ dữ liệu</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Quy trình sử dụng</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Thông tin phần mềm</p>
                        </a>
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
