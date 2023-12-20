import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {getChuyengiabyProgramsAPI} from "../../src/api/todos";
import "../css/table.css";

function SearchByChuyengia({ programId }) {
 
  const [program, setProgram] = useState({});

  useEffect(() => {
    async function fetchData() {
  

      const programData = await getChuyengiabyProgramsAPI(programId);
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
                                <h5>Quản lý Chuyên gia</h5>
                            </div>
                            <div className="col-sm-4">
                            </div>
                            <div className="col-sm-5">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="/home">Chuyên gia</a></li>
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
                                            <th style={{ width: '5%' }}>STT</th>
                                            {/* <th style={{ width: '10%' }}>Tên chương trình</th>
                                            <th style={{ width: '10%' }}>Mã CT</th> */}
                                            <th style={{ width: '10%' }}>Tên chuyên gia</th>
                                            {/* <th style={{ width: '10%' }}>Ngày sinh</th> */}
                                            <th style={{ width: '10%' }}>Số điện thoại</th>
                                            {/* <th style={{ width: '20%' }}>Địa chỉ</th>
                                            <th style={{ width: '10%' }}>Email</th> */}
                                            <th style={{ width: '5%' }}>Học hàm</th>
                                            <th style={{ width: '5%' }}>Học vị</th>
                                            <th style={{ width: '10%' }}>Cơ quan chủ trì</th>
                                            {/* <th style={{ width: '10%' }}>Đơn vị chủ quản</th> */}
                                            <th style={{ width: '10%' }}>Chuyên ngành</th>
                                            {/* <th style={{ width: '10%' }}>Lĩnh vực</th> */}
                                        </tr>
                                        </thead>

                                        <tbody>
                                            <tr>

                                                <td>{program?.id}</td>
                                                {/* <td>{program.chuongTrinh.name}</td>
                                                <td>{program.chuongTrinh.maChuongTrinh}</td> */}
                                                {/* <td>{program.chuongTrinh?.name ?? "N/A"}</td> */}
                                                {/* <td>{program.chuongTrinh?.maChuongTrinh ?? "N/A"}</td> */}

                                                <td>{program?.name}</td>
                                                {/* <td>{program.dateOfBirth ? program.dateOfBirth.split("T")[0] : "N/A"}</td> */}

                                                <td>{program?.phoneNumber}</td>
                                                {/* <td>{program.address}</td>
                                                <td>{program.email}</td> */}
                                                <td>{program?.hocHam?.name ?? "N/A"}</td>
                                                <td>{program?.hocVi?.name ?? "N/A"}</td>
                                                <td>{program?.coQuanChuTri?.name ?? "N/A"}</td>
                                                {/* <td>{program.donViChuQuan?.name ?? "N/A"}</td> */}
                                                <td>{program?.chuyenNganh?.name ?? "N/A"}</td>
                                                {/* <td>{program.linhVuc?.name ?? "N/A"}</td> */}

                                                {/* <td>{program.hocHam.name}</td>
                                                <td>{program.hocVi.name}</td>
                                                <td>{program.coQuanChuTri.name}</td>
                                                <td>{program.donViChuQuan.name}</td>
                                                <td>{program.chuyenNganh.name}</td>
                                                <td>{program.linhVuc.name}</td> */}
                                                 
                                            </tr>
                                        {/* {program.map((item, key) => (
                                                        <tr key={key}>
                                                            <td>{key + 1}</td>
                                                            
                                                            <td>{item.name}</td>
                                                            <td>{item.address}</td>
                                                            
                                                            
                                                        </tr>
                                                    ))} */}
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

export default SearchByChuyengia;