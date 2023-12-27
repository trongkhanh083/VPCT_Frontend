import React, { useState, useEffect } from "react";
import {getNhiemvubyProgramsAPI} from "../api/todos";

function SearchByNhiemvu({ programId }) {
 
    const [program, setProgram] = useState({});

    useEffect(() => {
        async function fetchData() {
            const programData = await getNhiemvubyProgramsAPI(programId);
            setProgram(programData);
        }
        fetchData();
    }, [programId]);

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
                                <h5>Quản lý Nhiệm vụ</h5>
                            </div>
                            <div className="col-sm-4">
                            </div>
                            <div className="col-sm-5">
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
                                    <div className="table-responsive">
                                        <table className="table table-bordered table-hover">
                                            <thead className="thead-light">
                                            <tr>
                                                <th>Mã số NV</th>
                                                <th style={{ width: '70%' }}>Tên đề tài, dự án</th>
                                                <th>Chủ nhiệm</th>
                                                <th>Bắt đầu</th>
                                                <th>Kết thúc</th>
                                                <th>Nghiệm thu</th>
                                                <th>Tổng KP thực hiện</th>
                                                <th>Tổng KP ngoài NS</th>
                                                <th>Tổng KP NSNN</th>
                                                <th>Lãnh đạo VPCT phụ trách</th>
                                                <th>Chuyên viên kế toán phụ trách</th>
                                                <th>Chuyên viên tổng hợp kế toán phụ trách</th>
                                                <th>Vụ chuyên ngành phụ trách</th>
                                                <th>Trạng thái</th>
                                                <th>Xuất bản</th>
                                            </tr>
                                            </thead>

                                            <tbody>
                                                <tr>
                                                <td>{program?.maNhiemVu || ""}</td>
                                                <td>{program?.name || ""}</td>
                                                <td>{program?.president || ""}</td>
                                                <td>{program?.startDate_Month  || ""} / {program?.startDate_Year || ""}</td>
                                                <td>{program?.endDate_Month} / {program?.endDate_Year}</td>
                                                <td>{program?.ngiemThu_Month} / {program?.ngiemThu_Year}</td>
                                                <td>{program?.kinhPhi_Total || ""}</td>
                                                <td>{program?.khac_Total || ""}</td>
                                                <td>{program?.nganSachNhaNuoc_Total || ""}</td>
                                                <td>{program?.vpcT_Leader || ""}</td>
                                                <td></td>
                                                <td>{program?.planning_Specialist || ""}</td>
                                                <td>{program?.departmentAdmin || ""}</td>
                                                <td >Thực hiện</td>
                                                <td>
                                                    <div class="form-check text-center">
                                                        <input 
                                                            class="form-check-input" 
                                                            type="checkbox" 
                                                            value="" 
                                                            checked="checked" 
                                                        />
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

export default SearchByNhiemvu;