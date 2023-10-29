import React, { Component } from 'react'

export default class Table extends Component {
  render() {
    return (
        <div className="content-wrapper">
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
                <div id="jsGrid1" />
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
