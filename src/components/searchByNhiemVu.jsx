import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {getNhiemvubyProgramsAPI} from "../api/todos";
import "../css/table.css";

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
                                    
                                    <table id="example1" className="table table-responsive table-bordered table-striped" style={{ width: '100%' }}>
                                        <thead>
                                        <tr>
                                        {/* <th style={{ width: '5%' }}>STT</th> */}
                                            <th style={{ width: '10%' }}>Mã số NV</th>
                                            <th style={{ width: '350%' }}>Tên đề tài, dự án</th>
                                            <th style={{ width: '10%' }}>Chủ nhiệm</th>
                                            <th style={{ width: '98%' }}>Bắt đầu</th>
                                            <th style={{ width: '8%' }}>Kết thúc</th>
                                            <th style={{ width: '8%' }}>Nghiệm thu</th>
                                            <th style={{ width: '6%' }}>Tổng KP thực hiện</th>
                                            <th style={{ width: '6%' }}>Tổng KP ngoài NS</th>
                                            <th style={{ width: '6%' }}>Tổng KP NSNN</th>
                                            <th style={{ width: '8%' }}>Lãnh đạo VPCT phụ trách</th>
                                            <th style={{ width: '8%' }}>Chuyên viên kế toán phụ trách</th>
                                            <th style={{ width: '8%' }}>Chuyên viên tổng hợp kế toán phụ trách</th>
                                            <th style={{ width: '8%' }}>Vụ chuyên ngành phụ trách</th>
                                            <th style={{ width: '8%' }}>Trạng thái</th>
                                            <th style={{ width: '5%' }}>Chức năng</th>
                                            
                                        
                                        </tr>
                                        </thead>

                                        <tbody>
                                        
                                            <tr>
                                            {/* <td>{program.id || ""}</td> */}
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

                                                            <td >
                                                               Thực hiện
                                                            </td>
                                                            <td>
                                                            <a
                                                                className="btn btn-warning btn-sm mb-1"
                                                                type="button"
                                                                aria-label="Edit"
                                                                title="Edit"
                                                                href={`/action/editNhiemVu/${program?.id}`}
                                                                >
                                                                <i className="fas fa-pencil-alt" /> Sửa
                                                                </a>
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

export default SearchByNhiemvu;