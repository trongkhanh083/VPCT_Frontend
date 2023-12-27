import React, { Component } from 'react';
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

    handleRoleChange = (userId, role, selected) => {
        const updatedUsers = this.state.users.map(user => {
            if (user.id === userId) {
                if (selected) {
                    user.roles.push(role);
                } else {
                    const index = user.roles.indexOf(role);
                    if (index > -1) {
                        user.roles.splice(index, 1);
                    }
                }
            }
            return user;
        });
    
        this.setState({ users: updatedUsers }, async () => {
            try {
                const response = await fetch('https://localhost:7220/api/UserRoles/AssignRole', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        userId,
                        role,
                        selected
                    }),
                });
    
                const data = await response.json();
                if (data.message !== 'Role assignment updated successfully') {
                    // Revert the state back to its original state
                    this.setState({ users: this.state.users });
                    console.error("Error updating role:", data.error);
                }
            } catch (error) {
                // Revert the state back to its original state
                this.setState({ users: this.state.users });
                console.error("Error updating role:", error);
            }
        });
    };
    

    render() {
        const { users } = this.state;

        return (
            <div>
                <div className="content-wrapper">
                    <section className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-2">
                                    <h5>Quản lý Người dùng</h5>
                                </div>
                                <div className="col-sm-4">
                                    <td className="project-actions text-right">
                                        <a className="btn btn-warning btn-sm mr-2" href="/system/user">
                                        <i className="fas fa-pencil-alt" /> Lưu
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

                    <section className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <div className="card">
                                        <div className="card-body">
                                        {users.length > 0 ? (
                                        <div className="table-responsive">
                                            <table className="table table-bordered table-hover text-center">
                                                <thead className="thead-light">
                                                    <tr>
                                                        <th>STT</th>
                                                        <th>Tên đăng nhập</th>
                                                        <th>Họ và tên</th>
                                                        <th>Địa chỉ</th>
                                                        <th>Số điện thoại</th>
                                                        <th>Email</th>
                                                        <th>Lãnh đạo</th>
                                                        <th>Chuyên viên theo dõi nhiệm vụ</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {users.map((item, key) => (
                                                        <tr key={key}>
                                                            <td>{key + 1}</td>
                                                            <td>{item.userName}</td>
                                                            <td>{item.fullName}</td>
                                                            <td>{item.address}</td>
                                                            <td>{item.phoneNumber}</td>
                                                            <td>{item.email}</td>
                                                            <td>
                                                                <div className="form-check text-center">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        checked={item.roles.includes("LanhDao")}
                                                                        onChange={(e) => this.handleRoleChange(item.id, "LanhDao", e.target.checked)}
                                                                    />
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="form-check text-center">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        checked={item.roles.includes("ChuyenVien")}
                                                                        onChange={(e) => this.handleRoleChange(item.id, "ChuyenVien", e.target.checked)}
                                                                    />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                            </div>
                                            ) : (
                                                <p className="text-center">No data available in table</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}