import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div>
                {/* Navbar */}
                <nav className="main-header navbar navbar-expand navbar-light" style={{backgroundColor: '#e3f2fd'}}>
                {/* Left navbar links */}
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link text-info" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
                        </li>
                        <li className="nav-item ml-3">
                            <Link to="/home" className="nav-link text-info">
                                <i className="nav-icon fas fa-tachometer-alt" /> Chương trình
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/duty" className="nav-link text-info">
                            <i className="nav-icon fas fa-th" /> Nhiệm vụ KH&CN
                            </Link>
                        </li>
                        
                    </ul>
                    {/* Right navbar links */}
                    <ul className="navbar-nav ml-auto">
                        {/* Navbar Search */}
                        <li className="nav-item">
                            <a className="nav-link text-info" data-widget="navbar-search" href="#" role="button">
                                <i className="fas fa-search" />
                            </a>
                            <div className="navbar-search-block">
                                <form className="form-inline">
                                    <div className="input-group input-group-sm">
                                        <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                                        <div className="input-group-append">
                                        <button className="btn btn-navbar" type="submit">
                                            <i className="fas fa-search" />
                                        </button>
                                        <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                                            <i className="fas fa-times" />
                                        </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </li>
                        {/* Notifications Dropdown Menu */}
                        <li className="nav-item dropdown">
                            <a className="nav-link text-info" data-toggle="dropdown" href="#">
                                <i className="far fa-bell" />
                                <span className="badge badge-warning navbar-badge">15</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                                <span className="dropdown-item dropdown-header">15 Notifications</span>
                                <div className="dropdown-divider" />
                                <a href="#" className="dropdown-item">
                                <i className="fas fa-envelope mr-2" /> 4 new messages
                                <span className="float-right text-muted text-sm">3 mins</span>
                                </a>
                                <div className="dropdown-divider" />
                                <a href="#" className="dropdown-item">
                                <i className="fas fa-users mr-2" /> 8 friend requests
                                <span className="float-right text-muted text-sm">12 hours</span>
                                </a>
                                <div className="dropdown-divider" />
                                <a href="#" className="dropdown-item">
                                <i className="fas fa-file mr-2" /> 3 new reports
                                <span className="float-right text-muted text-sm">2 days</span>
                                </a>
                                <div className="dropdown-divider" />
                                <a href="#" className="dropdown-item dropdown-footer">See All Notifications</a>
                            </div>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-info" data-widget="fullscreen" href="#" role="button">
                            <i className="fas fa-expand-arrows-alt" />
                        </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-info" data-widget="control-sidebar" data-controlsidebar-slide="true" href="#" role="button">
                            <i className="fas fa-th-large" />
                        </a>
                        </li>

                        <li className="nav-item">
                        <Link to="/profile" className="text-success btn btn-outline-success mr-2">
                            <i class="fas fa-user-cog"></i> sysadmin 
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/login" className="text-danger btn btn-outline-danger">
                            <i class="fas fa-sign-out-alt"></i> Đăng xuất 
                        </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}
