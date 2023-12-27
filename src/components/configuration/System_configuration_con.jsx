import React, { Component } from 'react';

export default class System_configuration_con extends Component {
    render() {
        return (
            <div>
                {/* Content Wrapper. Contains page content */}
                <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-2">
                                <h5>Cấu hình hệ thống</h5>
                            </div>
                            <div className="col-sm-4">
                            </div>
                            <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="/system/configuration">Cấu hình</a></li>
                                <li className="breadcrumb-item active">Dữ liệu</li>
                            </ol>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main content */}
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-bordered table-hover text-center">
                                            <thead className="thead-light">
                                            <tr>
                                                <th>Mã cấu hình</th>
                                                <th>Ghi chú</th>
                                                <th>Giá trị thiết lập</th>
                                            </tr>
                                            </thead>

                                            <tbody>
                                            <tr>
                                                <td>IsSendEmail</td>
                                                <td>Cho phép gửi Email thông báo</td>
                                                <td>
                                                    <div class="form-check form-switch">
                                                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" /> 
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Email_password</td>
                                                <td>Email_password</td>
                                                <td>
                                                <div class="form-group text-center">
                                                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Admin123" />
                                                </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Email_user</td>
                                                <td>Email_user</td>
                                                <td>
                                                <div class="form-group text-center">
                                                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="itc.vielina@gmail.com" />
                                                </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Email_port</td>
                                                <td>Email_port</td>
                                                <td>
                                                <div class="form-group text-center">
                                                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="587" />
                                                </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Email_smtp</td>
                                                <td>Email_smtp</td>
                                                <td>
                                                <div class="form-group text-center">
                                                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="smtp.gmail.com" />
                                                </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Email</td>
                                                <td>Email</td>
                                                <td>
                                                <div class="form-group text-center">
                                                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="itc.vielina@gmail.com" />
                                                </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Title_email</td>
                                                <td>Title_email</td>
                                                <td>
                                                <div class="form-group text-center">
                                                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Mật khẩu tài khoản đăng nhập hệ thống quản lý CSDL Nhiệm vụ KH7CN trực tuyến" />
                                                </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Message_confirm</td>
                                                <td>Message_confirm</td>
                                                <td>
                                                <div class="form-group text-center">
                                                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Mật khẩu mới đã được gửi tới email của bạn" />
                                                </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Message_error</td>
                                                <td>Message_error</td>
                                                <td>
                                                <div class="form-group text-center">
                                                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Tên đăng nhập hoặc mật khẩu không đúng" />
                                                </div>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    </div>
                                    {/* /.card-body */}
                                </div>
                                {/* /.card */}
                            </div>
                            {/* /.col */}
                        </div>
                        {/* /.row */}
                    </div>
                    {/* /.container-fluid */}
                </section>
                {/* /.content */}
                </div>
                {/* /.content-wrapper */}
            </div>
        );
    }
}
