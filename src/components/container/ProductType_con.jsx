import React, { Component } from 'react';
import {getLoaisanphamAPI} from "../../../src/api/todos";

export default class ProductType_con extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaisanphams: [],
        };
    }

    async componentDidMount() {
        await this.fetchData();
    }

    fetchData = async () => {
        const loaisanphams = await getLoaisanphamAPI();
        this.setState({ loaisanphams });
    };
    render() {
        const { loaisanphams } = this.state;
        return (
            <div>
                {/* Content Wrapper. Contains page content */}
                <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-3">
                                <h5>Quản lý Loại sản phẩm</h5>
                            </div>
                            <div className="col-sm-3">
                                <td className="project-actions text-right">
                                    <a className="btn btn-success btn-sm mr-2" href="#">
                                    <i className="fas fa-plus" /> Thêm 
                                    </a>
                                </td>
                            </div>
                            <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="/category/product-type">Loại sản phẩm</a></li>
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
                                    {loaisanphams.length > 0 ? (
                                    <div className="table-responsive">
                                        <table className="table table-bordered table-hover text-center">
                                            <thead className="thead-light">
                                            <tr>
                                                <th>STT</th>
                                                <th></th>
                                                <th>Tên loại sản phẩm</th>
                                                <th></th>
                                            </tr>
                                            </thead>

                                            <tbody>
                                            {loaisanphams?.map((item, key) => (
                                            <tr key={key}>
                                                <td>{key + 1}</td>
                                                <td>
                                                    <div class="form-check text-center">
                                                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                    </div>
                                                </td>
                                                <td>{item.name}</td>
                                                <td>
                                                    <a className="btn btn-warning btn-sm mr-2" href="#">
                                                    <i className="fas fa-pencil-alt" /> Sửa
                                                    </a>
                                                    <a className="btn btn-danger btn-sm" href="#">
                                                    <i className="fas fa-trash" /> Xóa
                                                    </a>
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
