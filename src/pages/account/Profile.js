import React, { Component } from 'react'

export default class Profile extends Component {
  render() {
    return (
        <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <section className="content-header">
            <div className="container-fluid">
                <div className="row mb-2">
                <div className="col-sm-6">
                    <h1>Quản trị hệ thống</h1>
                </div>
                <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><a href="/home">Chương trình</a></li>
                    <li className="breadcrumb-item active">Hồ sơ</li>
                    </ol>
                </div>
                </div>
            </div>{/* /.container-fluid */}
            </section>
            {/* Main content */}
            <section className="content">
            <div className="container-fluid">
                <div className="row">
                <div className="col-md-3">
                    {/* Profile Image */}
                    <div className="card card-primary card-outline">
                    <div className="card-body box-profile">
                        <div className="text-center">
                        <img className="profile-user-img img-fluid img-circle" src="../../dist/img/avatardefault.png" alt="User profile picture" />
                        </div>
                        <h3 className="profile-username text-center">Quản trị hệ thống</h3>
                        <p className="text-muted text-center">Quản trị hệ thống</p>
                        <ul className="list-group list-group-unbordered mb-3">
                        <li className="list-group-item">
                            <b>Email</b> <a className="float-right">tddat@most.gov.vn</a>
                        </li>
                        <li className="list-group-item">
                            <b>Tên đăng nhập</b> <a className="float-right">sysadmin</a>
                        </li>
                        <li className="list-group-item">
                            <b>Địa chỉ</b> <a className="float-right">VPCT</a>
                        </li>
                        <li className="list-group-item">
                            <b>Điện thoại</b> <a className="float-right">0912775463</a>
                        </li>
                        <li className="list-group-item">
                            <b>Ngày tham gia</b> <a className="float-right"></a>
                        </li>
                        </ul>
                    </div>
                    {/* /.card-body */}
                    </div>
                    {/* /.card */}
                </div>
                {/* /.col */}
                <div className="col-md-9">
                    <div className="card">
                    <div className="card-header p-2">
                        <ul className="nav nav-pills">
                        <li className="nav-item"><a className="nav-link active" href="#activity" data-toggle="tab">Đổi thông tin</a></li>
                        <li className="nav-item"><a className="nav-link" href="#timeline" data-toggle="tab">Đổi mật khẩu</a></li>
                        <li className="nav-item"><a className="nav-link" href="#settings" data-toggle="tab">Hoạt động gần đây</a></li>
                        </ul>
                    </div>{/* /.card-header */}
                    <div className="card-body">
                        <div className="tab-content">
                        <div className="active tab-pane" id="activity">
                            {/* Post */}
                            <form className="form-horizontal">
                            <div className="form-group row">
                                <label htmlFor="inputName" className="col-sm-2 col-form-label">Họ và tên(*)</label>
                                <div className="col-sm-10">
                                <input type="email" className="form-control" id="inputName" placeholder="Quản trị hệ thống" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                <input type="email" className="form-control" id="inputEmail" placeholder="tddat@most.gov.vn" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputName2" className="col-sm-2 col-form-label">Điện thoại</label>
                                <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputName2" placeholder="0912775463" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputExperience" className="col-sm-2 col-form-label">Địa chỉ</label>
                                <div className="col-sm-10">
                                <textarea className="form-control" id="inputExperience" placeholder="VPCT" defaultValue={""} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputSkills" className="col-sm-2 col-form-label">Mô tả</label>
                                <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputSkills" placeholder="Phó giám đốc" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputSkills" className="col-sm-2 col-form-label">Ảnh đại diện</label>
                                <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputSkills" placeholder="" />
                                </div>
                            </div>
                            
                            <div className="form-group row">
                                <div className="offset-sm-2 col-sm-10">
                                <button type="submit" className="btn btn-danger">Lưu</button>
                                </div>
                            </div>
                            </form>
                            {/* /.post */}
                        </div>
                        {/* /.tab-pane */}
                        <div className="tab-pane" id="timeline">
                            {/* The timeline */}
                            <form className="form-horizontal">
                            <div className="form-group row">
                                <label htmlFor="inputName" className="col-sm-2 col-form-label">Tên đăng nhập(*)</label>
                                <div className="col-sm-10">
                                <input type="email" className="form-control" id="inputName" placeholder="sysadmin" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Mật khẩu cũ(*)</label>
                                <div className="col-sm-10">
                                <input type="email" className="form-control" id="inputEmail" placeholder="" />
                                </div>
                                <p style={{fontSize: 14, paddingLeft: 160, color: 'blue'}}>
                                    Mật khẩu là chuỗi hơn 8 ký tự gồm chữ hoa, thường, chữ số và ký tự đặc biệt
                                </p>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputName2" className="col-sm-2 col-form-label">Mật khẩu mới(*)</label>
                                <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputName2" placeholder="" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputExperience" className="col-sm-2 col-form-label">Nhắc lại mật khẩu</label>
                                <div className="col-sm-10">
                                <textarea className="form-control" id="inputExperience" placeholder="" defaultValue={""} />
                                </div>
                            </div>
                            
                            <div className="form-group row">
                                <div className="offset-sm-2 col-sm-10">
                                <button type="submit" className="btn btn-danger">Lưu</button>
                                </div>
                            </div>
                            </form>
                        </div>
                        {/* /.tab-pane */}
                        <div className="tab-pane" id="settings">
                            
                        </div>
                        {/* /.tab-pane */}
                        </div>
                        {/* /.tab-content */}
                    </div>{/* /.card-body */}
                    </div>
                    {/* /.card */}
                </div>
                {/* /.col */}
                </div>
                {/* /.row */}
            </div>{/* /.container-fluid */}
            </section>
            {/* /.content */}
        </div>
    )
  }
}
