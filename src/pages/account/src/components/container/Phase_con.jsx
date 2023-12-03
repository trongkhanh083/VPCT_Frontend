import React, { Component } from 'react';
import '../../css/table.css';

export default class Phase_con extends Component {
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
                                <h5>Quản lý Giai đoạn</h5>
                            </div>
                            <div className="col-sm-4">
                                <td className="project-actions text-right">
                                    <a className="btn btn-success btn-sm mr-2" href="#">
                                    <i className="fas fa-plus" /> Thêm 
                                    </a>
                                    <a className="btn btn-warning btn-sm mr-2" href="#">
                                    <i className="fas fa-pencil-alt" /> Sửa
                                    </a>
                                    <a className="btn btn-danger btn-sm mr-2" href="#">
                                    <i className="fas fa-trash" /> Xóa
                                    </a>
                                    <a className="btn btn-info btn-sm mr-2" href="#">
                                    <i className="fas fa-redo"></i> Làm mới
                                    </a>
                                </td>
                            </div>
                            <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="/category/phase">Giai đoạn</a></li>
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
                                    
                                    <table id="example1" className="table table-bordered table-striped text-center">
                                        <thead>
                                        <tr>
                                            <th>Thứ tự</th>
                                            <th>Bắt đầu</th>
                                            <th>Kết thúc</th>
                                            <th>Mặc định</th>
                                        </tr>
                                        </thead>

                                        <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Trịnh Cường</td>
                                            <td></td>
                                            <td>
                                                <div class="form-check text-center">
                                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Hoàng Trang</td>
                                            <td></td>
                                            <td>
                                                <div class="form-check text-center">
                                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Trịnh Cường</td>
                                            <td></td>
                                            <td>
                                                <div class="form-check text-center">
                                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Đinh Thị Vân Chi</td>
                                            <td></td>
                                            <td>
                                                <div class="form-check text-center">
                                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td></td>
                                            <td></td>
                                            <td>
                                                <div class="form-check text-center">
                                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td></td>
                                            <td></td>
                                            <td>
                                                <div class="form-check text-center">
                                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td></td>
                                            <td></td>
                                            <td>
                                                <div class="form-check text-center">
                                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>8</td>
                                            <td></td>
                                            <td></td>
                                            <td>
                                                <div class="form-check text-center">
                                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td></td>
                                            <td></td>
                                            <td>
                                                <div class="form-check text-center">
                                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>10</td>
                                            <td>Đoàn Xuân Hòa</td>
                                            <td></td>
                                            <td>
                                                <div class="form-check text-center">
                                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>11</td>
                                            <td>Trịnh Cường</td>
                                            <td></td>
                                            <td>
                                                <div class="form-check text-center">
                                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>12</td>
                                            <td>Trịnh Cường</td>
                                            <td></td>
                                            <td>
                                                <div class="form-check text-center">
                                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
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
