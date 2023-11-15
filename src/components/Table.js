import React, { Component } from 'react'
import * as XLSX from "xlsx"
import { useState } from "react"
export default class Table extends Component {
//   render() {
//     return (
//         <div className="content-wrapper">
//             {/* Content Header (Page header) */}
//             <section className="content-header">
//             <div className="container-fluid">
//                 <div className="row mb-2">
//                 <div className="col-sm-6">
//                     <h1>Quản lý Nhiệm vụ KH&CN</h1>
//                 </div>
//                 <div className="col-sm-6">
//                     <ol className="breadcrumb float-sm-right">
//                     <li className="breadcrumb-item"><a href="#">Nhiệm vụ</a></li>
//                     <li className="breadcrumb-item active">Dữ liệu</li>
//                     </ol>
//                 </div>
//                 </div>
//             </div>{/* /.container-fluid */}
//             </section>
//             {/* Main content */}
//             <section className="content">
//             <div className="card">
//                 {/* /.card-header */}
//                 <div className="card-body">
//                 <div id="jsGrid1" />
//                 </div>
//                 {/* /.card-body */}
//             </div>
//             {/* /.card */}
//             </section>
//             {/* /.content */}
//         </div>
//     )
//   }




constructor(props) {
    super(props);
    this.state = {
        data: [],
    };
}

handleFileUpload = (e) => {
    const reader = new FileReader();
    reader.readAsBinaryString(e.target.files[0]);
    reader.onload = (e) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: "binary" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const parsedData = XLSX.utils.sheet_to_json(sheet);
        this.setState({ data: parsedData });
    };
}
render() {
    const { data } = this.state;
    return (

        <div className="content-wrapper">
            <input
                type="file"
                accept=".xlsx, .xls"
                onChange={this.handleFileUpload}
            />

            {data.length > 0 && (
                <table className="table">
                    <thead>
                        <tr>
                            {Object.keys(data[0]).map((key) => (
                                <th key={key}>{key}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index}>
                                {Object.values(row).map((value, index) => (
                                    <td key={index}>{value}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            {/* Content Header (Page header) */}
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Quản lý Nhiệm vụ KH&CN</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="#">Nhiệm vụ</a></li>
                                <li className="breadcrumb-item active">Dữ liệu</li>
                            </ol>
                        </div>
                    </div>
                </div>{/* /.container-fluid */}
            </section>
            {/* Main content */}
            <section className="content">
                <div className="card">
                    {/* /.card-header */}
                    <div className="card-body">
                        {/* <div id="jsGrid1" /> */}
                        <table id="example1" className="table table-bordered table-striped">
                            {/* <table id="example1" className="table table-bordered table-striped"> */}
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
                                    <th>Chuyên viên kế toán phụ trách</th>
                                    <th>Chuyên viên tổng hợp kế toán phụ trách</th>
                                    <th>Vụ chuyên ngành phụ trách</th>
                                    <th>Trạng thái</th>
                                    <th>Xuất bản</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    {/* /.card-body */}
                </div>
                {/* /.card */}
            </section>
            {/* /.content */}
        </div>
    )
}
}
