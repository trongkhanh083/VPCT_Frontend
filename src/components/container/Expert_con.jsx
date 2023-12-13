import React, { Component } from 'react';
import '../../css/table.css';

import {getChuyengiasAPI} from "../../../src/api/todos";
export default class Expert_con extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chuyengias: [],
        };
    }

    async componentDidMount() {
        await this.fetchData();
    }

    fetchData = async () => {
        const chuyengias = await getChuyengiasAPI();
        this.setState({ chuyengias });
    };
    render() {
        const { chuyengias } = this.state;
        return (
            <div>
                {/* Content Wrapper. Contains page content */}
                <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row border-bottom mb-4 pb-4">
                        <div className="col-sm-5">
                                <label className="font-weight-normal" for="reportType">Loại chương trình </label>
                                <select class="custom-select option-select">
                                    <option value="" disabled selected hidden>Tất cả</option>
                                    <option className='opchildren' value="1">Tất cả</option>
                                    <option className='opchildren' value="2">Chương trình trọng điểm cấp nhà nước</option>
                                    <option className='opchildren' value="3">Chương trình độc lập quỹ gen</option>
                                </select>
                            </div>
                            <div className="col-sm-3">
                                <label className="font-weight-normal" for="reportType">Giai đoạn </label>
                                <select class="custom-select option-select">
                                    <option value="" disabled selected hidden>Tất cả</option>
                                    <option className='opchildren' value="1">Tất cả</option>
                                    <option className='opchildren' value="1">2006-2010</option>
                                    <option className='opchildren' value="2">2011-2015</option>
                                    <option className='opchildren' value="3">2016-2020</option>
                                    <option className='opchildren' value="3">2015-2025</option>
                                </select>
                            </div>
                            <div className="col-sm-4">
                            <label className="font-weight-normal" for="reportType">Chương trình </label>
                                <select class="custom-select option-select">
                                    <option value="" disabled selected hidden>Chọn chương trình</option>
                                    <option className='opchildren' value="1">Nghiên cứu ứng dụng và phát triển năng lượng</option>
                                    <option className='opchildren' value="1">Nghiên cứu ứng dụng và phát triển công nghệ vật liệu mới</option>
                                    <option className='opchildren' value="2">Nghiên cứu và phát triển hội nhập quốc tế về khoa học và công nghệ</option>
                                    <option className='opchildren' value="3">Nghiên cứu khoa học phát triển văn hóa, con người và nâng cao chất lượng nguồn nhân lực</option>
                                    <option className='opchildren' value="3">Nghiên cứu khoa học phát triển xã hội và quản lý phát triển xã hội ở Việt Nam đến năm 2020</option>
                                </select>
                            </div>
                        </div>
                        
                        <div className="row mb-2">
                            <div className="col-sm-2">
                                <h5>Quản lý Chuyên gia</h5>
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
                                <li className="breadcrumb-item"><a href="/category/expert">Chuyên gia</a></li>
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
                                            <th></th>
                                            <th>Họ và tên</th>
                                            <th>Số điện thoại</th>
                                            <th>Chức danh</th>  
                                            <th>Học hàm</th>
                                            <th>Chức vụ</th>
                                            <th>Học vị</th>
                                            <th>Cơ quan</th>
                                            <th>Chuyên ngành</th>
                                            <th></th>
                                        </tr>
                                        </thead>

                                        <tbody>
                                        
                                        {chuyengias?.map((item, key) => (
                                                        <tr key={key}>
                                                            <td>{key + 1}</td>
                                                            <td>
                                                                <div className="form-check text-center">
                                                                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                                </div>
                                                            </td>
                                                            <td>{item.name}</td>
                                                            <td>{item.phoneNumber}</td>
                                                            {/* <td></td> */}
                                                            <td>{item.chucDanh && item.chucDanh.name}</td>
                                                            <td>{item.hocHam && item.hocHam.name}</td>
                                                            {/* <td>{item.chucVu}</td> */}
                                                            {/* <td>{item.hocVi}</td> */}
                                                            <td>{item.coQuanChuTri}</td>
                                                            <td>{item.chuyenNganh}</td>
                                                            <td></td>
                                                            <td></td>
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
