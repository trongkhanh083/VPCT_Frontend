import React, { Component } from 'react';
import { getNhiemvuAPI, delNhiemVusAPI } from "../../src/api/todos";

export default class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nhiemvus: [],
        };
    }

    async componentDidMount() {
        await this.fetchData();
    }

    fetchData = async () => {
        const nhiemvus = await getNhiemvuAPI();
        this.setState({ nhiemvus });
    };

    delNhiemVu = async (id) => {
        if (window.confirm("Bạn có chắc chắn xóa hay không?")) {
            await delNhiemVusAPI(id);
            window.location.reload();
        }
    };

    render() {
        const { nhiemvus } = this.state;
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
                            <div className="col-sm-3">
                                <h5>Quản lý Nhiệm vụ KH&CN</h5>
                            </div>
                            <div className="col-sm-3">
                                <td className="project-actions text-right">
                                    <a className="btn btn-success btn-sm mr-2" href="/action/addDuty">
                                    <i className="fas fa-plus" /> Thêm 
                                    </a>
                                </td>
                            </div>
                            <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="/home">Nhiệm vụ</a></li>
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
                                            <th>Mã số NV</th>
                                            <th>Tên đề tài, dự án</th>
                                            <th>Chủ nhiệm</th>
                                            <th>Bắt đầu</th>
                                            <th>Kết thúc</th>
                                            <th>Nghiệm thu</th>
                                            <th>Tổng KP thực hiện</th>
                                            <th>Tổng KP ngoài NS</th>
                                            <th>Tổng KP NSNN</th>
                                            <th>Lãnh đạo VPCT phụ trách</th>
                                            <th>Chuyên viên tổng hợp kế toán phụ trách</th>
                                            <th>Vụ chuyên ngành phụ trách</th>
                                            <th>Xuất bản</th>
                                            <th></th>
                                        </tr>
                                        </thead>

                                        <tbody>
                                        {nhiemvus?.map((item, key) => (
                                                        <tr key={key}>
                                                            <td>{key + 1}</td>
                                                            
                                                            <td>{item.maNhiemVu}</td>
                                                            <td>{item.name}</td>
                                                            <td>{item.president}</td>
                                                            <td>{item.startDate_Month} / {item.startDate_Year}</td>
                                                            <td>{item.endDate_Month} / {item.endDate_Year}</td>
                                                            <td>{item.ngiemThu_Month} / {item.ngiemThu_Year}</td>
                                                            <td>{item.kinhPhi_Total}</td>
                                                            <td>{item.khac_Total}</td>
                                                            
                                                            <td>{item.nganSachNhaNuoc_Total}</td>
                                                            <td>{item.vpcT_Leader}</td>
                                                            
                                                            <td>{item.planning_Specialist}</td>
                                                            <td>{item.departmentAdmin}</td>
                                                            <td>
                                                            <div class="form-check text-center">
                                                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" checked="checked" />
                                                                </div>
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
                                                                    onClick={() => this.delNhiemVu(item.id)}
                                                                >
                                                                <i className="fas fa-trash" /> Xóa
                                                                </button>
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
        )
    }
}
