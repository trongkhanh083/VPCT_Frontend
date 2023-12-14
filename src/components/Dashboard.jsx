import React, { Component } from 'react';
import '../css/table.css';
import { getProgramsAPI, delProgramsAPI } from "../api/todos";

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            programs: [],
        };
    }

    async componentDidMount() {
        await this.fetchData();
    }

    fetchData = async () => {
        const programs = await getProgramsAPI();
        this.setState({ programs });
    };

    delProgram = async (id) => {
        if (window.confirm("Bạn có chắc chắn xóa hay không?")) {
            await delProgramsAPI(id);
            window.location.reload();
        }
    };

    render() {
        const { programs } = this.state;

        return (
            <div>
                {/* Content Wrapper. Contains page content */}
                <div className="content-wrapper">
                    {/* Content Header (Page header) */}
                    <section className="content-header">
                    <div className="container-fluid">
                        <div className="row border-bottom mb-4 pb-4">
                            <div className="col-sm-4"></div>
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
                        </div>
                        
                        <div className="row mb-2">
                            <div className="col-sm-2">
                                <h5>Quản lý chương trình</h5>
                            </div>
                            <div className="col-sm-4">
                                <td className="project-actions text-right">
                                    <a className="btn btn-success btn-sm mr-2" href="/action/addProgram">
                                    <i className="fas fa-plus" /> Thêm 
                                    </a>
                                </td>
                            </div>
                            <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="/home">Chương trình</a></li>
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
                                        <table
                                            id="example1"
                                            className="table table-responsive table-bordered table-striped"
                                            style={{ width: '100%' }}
                                        >
                                                <thead>
                                                    <tr>
                                                        <th style={{ width: '5%' }}>STT</th>
                                                        <th style={{ width: '5%' }}></th>
                                                        <th style={{ width: '5%' }}>Mã số</th>
                                                        <th style={{ width: '20%' }}>Tên chương trình</th>
                                                        <th style={{ width: '10%' }}>Chủ nhiệm CT</th>
                                                        <th style={{ width: '10%' }}>Phó chủ nhiệm CT</th>
                                                        <th style={{ width: '10%' }}>Ủy viên, Thư ký khoa học</th>
                                                        <th style={{ width: '10%' }}>Ủy viên</th>
                                                        <th style={{ width: '10%' }}>Ủy viên</th>
                                                        <th style={{ width: '10%' }}>Ủy viên</th>
                                                        <th style={{ width: '10%' }}>Thư ký hành chính</th>
                                                        <th style={{ width: '5%' }}>Xuất bản</th>
                                                        <th style={{ width: '5%' }}></th>
                                                        <th style={{ width: '10%' }}>Tải file</th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                
                                                    {programs?.map((item, key) => (
                                                        <tr key={key}>
                                                            <td>{key + 1}</td>
                                                            <td>
                                                                <div class="form-check text-center">
                                                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                                </div>
                                                            </td>
                                                            <td>{item.maChuongTrinh}</td>
                                                            <td>{item.name}</td>
                                                            <td>{item.president}</td>
                                                            <td>{item.vicePresident}</td>
                                                            <td>{item.admin_Secretary}</td>
                                                            <td>{item.member1}</td>
                                                            <td>{item.member2}</td>
                                                            <td>{item.member3}</td>
                                                            <td>{item.member_Secretary}</td>
                                                            
                                                            <td>
                                                                <div class="form-check text-center">
                                                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" checked="checked" />
                                                                </div>
                                                            </td>
                                                            <td className="project-actions text-right">
                                                                <a className="btn btn-info btn-sm mb-1" href="#">
                                                                <i className="fas fa-pencil-alt" /> Chuyên gia
                                                                </a>
                                                                <a className="btn btn-success btn-sm" href="#">
                                                                <i className="fas fa-pencil-alt" /> Nhiệm vụ
                                                                </a>
                                                            </td>
                                                            <td>
                                                                <a className="btn btn-warning btn-sm mb-1" href="#">
                                                                <i className="fas fa-pencil-alt" /> Sửa
                                                                </a>
                                                                <button 
                                                                    className="btn btn-danger btn-sm" 
                                                                    type="button"
                                                                    aria-label="Delete"
                                                                    title="Delete"
                                                                    onClick={() => this.delProgram(item.id)}
                                                                >
                                                                <i className="fas fa-trash" /> Xóa
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))  }
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
