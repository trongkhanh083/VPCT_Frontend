import React, { Component } from 'react';
import '../../css/table.css';
import { getUsersAPI } from "../../../src/api/todos";

export default class User_con extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        };
    }

    async componentDidMount() {
        await this.fetchData();
    }

    fetchData = async () => {
        const users = await getUsersAPI();
        this.setState({ users });
    };

    render() {
        const { users } = this.state;
    
        return (
            <div>
                {/* Content Wrapper. Contains page content */}
                <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-2">
                                <h5>Quản lý Người dùng</h5>
                            </div>
                            <div className="col-sm-4">
                                <td className="project-actions text-right">
                                    <a className="btn btn-success btn-sm mr-2" href="#">
                                    <i className="fas fa-plus" /> Thêm 
                                    </a>
                                </td>
                            </div>
                            <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="/system/user">Người dùng</a></li>
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
                                    
                                    <table id="example1" className="table table-responsive table-bordered table-striped">
                                        <thead>
                                        <tr>
                                            <th>STT</th>
                                            
                                            <th>Tên đăng nhập</th>
                                            <th>Họ và tên</th>
                                            <th>Địa chỉ</th>
                                            <th>Số điện thoại</th>
                                            <th>Email</th>
                                            <th></th>
                                        </tr>
                                        </thead>

                                        <tbody>
                                        {users?.map((item, key) => (
                                                        <tr key={key}>
                                                            <td>{key + 1}</td>
                                                            
                                                            <td>{item.userName}</td>
                                                            <td>{item.fullName}</td>
                                                            <td>{item.address}</td>
                                                            <td>{item.phoneNumber}</td>
                                                            <td>{item.email}</td>
                                                            
                                                            <td>
                                                                <a className="btn btn-warning btn-sm mr-2" href="#">
                                                                <i className="fas fa-pencil-alt" /> Sửa
                                                                </a>
                                                                <a className="btn btn-danger btn-sm mr-2" href="#">
                                                                <i className="fas fa-trash" /> Xóa
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    ))}
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
