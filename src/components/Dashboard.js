import React, { Component } from 'react'

export default class Dashboard extends Component {
  render() {
    return (
        <div>
            {/* Content Wrapper. Contains page content */}
            <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <section className="content-header">
                <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                    <h1>Quản lý chương trình</h1>
                    </div>
                    <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><a href="/home">Chương trình</a></li>
                        <li className="breadcrumb-item active">Dữ liệu</li>
                    </ol>
                    </div>
                </div>
                </div>{/* /.container-fluid */}
            </section>

            {/* Main content */}
            <section className="content">
                <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                    {/* /.card */}
                    <div className="card">
                        {/* /.card-header */}
                        <div className="card-body">
                        <table id="example1" className="table table-bordered table-striped">
                            <thead>
                            <tr>
                                <th>STT</th>
                                <th>Mã số</th>
                                <th>Tên chương trình</th>
                                <th>Chủ nhiệm CT</th>
                                <th>Phó chủ nhiệm CT</th>
                                <th>Ủy viên, Thư ký khoa học</th>
                                <th>Ủy viên</th>
                                <th>Ủy viên</th>
                                <th>Ủy viên</th>
                                <th>Thư ký hành chính</th>
                                <th>Xuất bản</th>
                                <th>Tải file</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td></td>
                                <td>KC.05/16-20</td>
                                <td>Nghiên cứu ứng dụng và phát triển năng lượng</td>
                                <td>Trần Chí Thanh</td>
                                <td>Phạm Hoàng Lương</td>
                                <td>Lê Chí Hiệp</td>
                                <td>Hoàng Tiến Dũng</td>
                                <td>Trịnh Cường</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td className="project-actions text-right">
                                    <a className="btn btn-primary btn-sm" href="#">
                                    <i className="fas fa-plus" />
                                    Thêm
                                    </a>
                                    <a className="btn btn-info btn-sm" href="#">
                                    <i className="fas fa-pencil-alt" />
                                    Sửa
                                    </a>
                                    <a className="btn btn-danger btn-sm" href="#">
                                    <i className="fas fa-trash" />
                                    Xóa
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>KC.02/16-20</td>
                                <td>Nghiên cứu ứng dụng và phát triển công nghệ vật liệu mới</td>
                                <td>Nguyễn Việt Bắc</td>
                                <td>Nguyễn Văn Khôi</td>
                                <td>Nguyễn Khải Hoàn</td>
                                <td>Phạm Thành Huy</td>
                                <td>Hoàng Trang</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td className="project-actions text-right">
                                    <a className="btn btn-primary btn-sm" href="#">
                                    <i className="fas fa-plus" />
                                    Thêm 
                                    </a>
                                    <a className="btn btn-info btn-sm" href="#">
                                    <i className="fas fa-pencil-alt" />
                                    Sửa
                                    </a>
                                    <a className="btn btn-danger btn-sm" href="#">
                                    <i className="fas fa-trash" />
                                    Xóa
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>KX.06/11-15</td>
                                <td>Nghiên cứu và phát triển hội nhập quốc tế về khoa học và công nghệ</td>
                                <td>Trần Việt Thanh</td>
                                <td>Mai Hà</td>
                                <td>Nghiêm Quốc Đạt</td>
                                <td>Tạ Bá Hưng</td>
                                <td>Trịnh Cường</td>
                                <td></td>
                                <td></td>
                                <td>Trần Mai Anh</td>
                                <td></td>
                                <td className="project-actions text-right">
                                    <a className="btn btn-primary btn-sm" href="#">
                                    <i className="fas fa-plus" />
                                    Thêm 
                                    </a>
                                    <a className="btn btn-info btn-sm" href="#">
                                    <i className="fas fa-pencil-alt" />
                                    Sửa
                                    </a>
                                    <a className="btn btn-danger btn-sm" href="#">
                                    <i className="fas fa-trash" />
                                    Xóa
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>KX.03/11-15</td>
                                <td>Nghiên cứu khoa học phát triển văn hóa, con người và nâng cao chất lượng nguồn nhân lực</td>
                                <td>Mai Quỳnh Nam</td>
                                <td>Phạm Duy Đức</td>
                                <td>Vũ Văn Quân</td>
                                <td></td>
                                <td>Đinh Thị Vân Chi</td>
                                <td></td>
                                <td>Hoàng Thị Hiền</td>
                                <td></td>
                                <td></td>
                                <td className="project-actions text-right">
                                    <a className="btn btn-primary btn-sm" href="#">
                                    <i className="fas fa-plus" />
                                    Thêm 
                                    </a>
                                    <a className="btn btn-info btn-sm" href="#">
                                    <i className="fas fa-pencil-alt" />
                                    Sửa
                                    </a>
                                    <a className="btn btn-danger btn-sm" href="#">
                                    <i className="fas fa-trash" />
                                    Xóa
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>KX.02/11-15</td>
                                <td>Nghiên cứu khoa học phát triển xã hội và quản lý phát triển xã hội ở Việt Nam đến năm 2020</td>
                                <td>Trần Đức Cương</td>
                                <td>Thang Văn Phúc</td>
                                <td>Đoàn Minh Huấn</td>
                                <td>Bùi Tất Thắng</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td className="project-actions text-right">
                                    <a className="btn btn-primary btn-sm" href="#">
                                    <i className="fas fa-plus" />
                                    Thêm 
                                    </a>
                                    <a className="btn btn-info btn-sm" href="#">
                                    <i className="fas fa-pencil-alt" />
                                    Sửa
                                    </a>
                                    <a className="btn btn-danger btn-sm" href="#">
                                    <i className="fas fa-trash" />
                                    Xóa
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>KX.01/11-15</td>
                                <td>Nghiên cứu khoa học phát triển kinh tế và quản lý kinh tế ở Việt Nam đến năm 2020</td>
                                <td>Nguyễn Văn Nam</td>
                                <td>Trần Đình Thiên</td>
                                <td>Đỗ Đức Bình</td>
                                <td>Lê Xuân Bá</td>
                                <td></td>
                                <td></td>
                                <td>Hồ Thị Hải Yến</td>
                                <td></td>
                                <td></td>
                                <td className="project-actions text-right">
                                    <a className="btn btn-primary btn-sm" href="#">
                                    <i className="fas fa-plus" />
                                    Thêm 
                                    </a>
                                    <a className="btn btn-info btn-sm" href="#">
                                    <i className="fas fa-pencil-alt" />
                                    Sửa
                                    </a>
                                    <a className="btn btn-danger btn-sm" href="#">
                                    <i className="fas fa-trash" />
                                    Xóa
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>KC.10/11-15</td>
                                <td>Nghiên cứu ứng dụng và phát triển công nghệ tiên tiến phục vụ bảo vệ và chăm sóc sức khỏe cộng đồng</td>
                                <td>Phạm Gia Khánh</td>
                                <td>Trịnh Văn Lẩu</td>
                                <td>Lê Quang Bách</td>
                                <td>Lê Quan Nghiệm</td>
                                <td></td>
                                <td></td>
                                <td>Nguyễn Văn Ba</td>
                                <td></td>
                                <td></td>
                                <td className="project-actions text-right">
                                    <a className="btn btn-primary btn-sm" href="#">
                                    <i className="fas fa-plus" />
                                    Thêm 
                                    </a>
                                    <a className="btn btn-info btn-sm" href="#">
                                    <i className="fas fa-pencil-alt" />
                                    Sửa
                                    </a>
                                    <a className="btn btn-danger btn-sm" href="#">
                                    <i className="fas fa-trash" />
                                    Xóa
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>KC.09/11-15</td>
                                <td>Nghiên cứu khoa học và công nghệ phục vụ quản lý biển, hải đảo và phát triển kinh tế biển</td>
                                <td>Trần Nghi</td>
                                <td>Trần Đức Thạnh</td>
                                <td>Bùi Xuân Thông</td>
                                <td>Đỗ Văn Khương</td>
                                <td></td>
                                <td></td>
                                <td>Nguyễn Đình Thái</td>
                                <td></td>
                                <td></td>
                                <td className="project-actions text-right">
                                    <a className="btn btn-primary btn-sm" href="#">
                                    <i className="fas fa-plus" />
                                    Thêm 
                                    </a>
                                    <a className="btn btn-info btn-sm" href="#">
                                    <i className="fas fa-pencil-alt" />
                                    Sửa
                                    </a>
                                    <a className="btn btn-danger btn-sm" href="#">
                                    <i className="fas fa-trash" />
                                    Xóa
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>KC.08/11-15</td>
                                <td>Nghiên cứu khoa học và công nghệ phục vụ phòng tránh thiên tai, bảo vệ môi trường và sử dụng hợp lý tài nguyên thiên nhiên</td>
                                <td>Lê Mạnh Hùng</td>
                                <td>Đặng Thị Kim Chi</td>
                                <td>Trần Tuấn Anh</td>
                                <td>Tô Văn Trường</td>
                                <td></td>
                                <td></td>
                                <td>Ngô Thị Minh Nguyệt</td>
                                <td></td>
                                <td></td>
                                <td className="project-actions text-right">
                                    <a className="btn btn-primary btn-sm" href="#">
                                    <i className="fas fa-plus" />
                                    Thêm 
                                    </a>
                                    <a className="btn btn-info btn-sm" href="#">
                                    <i className="fas fa-pencil-alt" />
                                    Sửa
                                    </a>
                                    <a className="btn btn-danger btn-sm" href="#">
                                    <i className="fas fa-trash" />
                                    Xóa
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>KC.07/11-15</td>
                                <td>Nghiên cứu ứng dụng và phát triển công nghệ sau thu hoạch</td>
                                <td>Lê Đức Mạnh</td>
                                <td>Phan Thanh Tinh</td>
                                <td>Hà Duyên Tư</td>
                                <td>Đoàn Xuân Hòa</td>
                                <td>Đoàn Xuân Hòa</td>
                                <td></td>
                                <td>Lê Thị Hải Yến</td>
                                <td></td>
                                <td></td>
                                <td className="project-actions text-right">
                                    <a className="btn btn-primary btn-sm" href="#">
                                    <i className="fas fa-plus" />
                                    Thêm 
                                    </a>
                                    <a className="btn btn-info btn-sm" href="#">
                                    <i className="fas fa-pencil-alt" />
                                    Sửa
                                    </a>
                                    <a className="btn btn-danger btn-sm" href="#">
                                    <i className="fas fa-trash" />
                                    Xóa
                                    </a>
                                </td>
                            </tr>
                            <tr>
                            <td></td>
                                <td>KC.05/16-20</td>
                                <td>Nghiên cứu ứng dụng và phát triển năng lượng</td>
                                <td>Trần Chí Thanh</td>
                                <td>Phạm Hoàng Lương</td>
                                <td>Lê Chí Hiệp</td>
                                <td>Hoàng Tiến Dũng</td>
                                <td>Trịnh Cường</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td className="project-actions text-right">
                                    <a className="btn btn-primary btn-sm" href="#">
                                    <i className="fas fa-plus" />
                                    Thêm 
                                    </a>
                                    <a className="btn btn-info btn-sm" href="#">
                                    <i className="fas fa-pencil-alt" />
                                    Sửa
                                    </a>
                                    <a className="btn btn-danger btn-sm" href="#">
                                    <i className="fas fa-trash" />
                                    Xóa
                                    </a>
                                </td>
                            </tr>
                            <tr>
                            <td></td>
                                <td>KC.05/16-20</td>
                                <td>Nghiên cứu ứng dụng và phát triển năng lượng</td>
                                <td>Trần Chí Thanh</td>
                                <td>Phạm Hoàng Lương</td>
                                <td>Lê Chí Hiệp</td>
                                <td>Hoàng Tiến Dũng</td>
                                <td>Trịnh Cường</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td className="project-actions text-right">
                                    <a className="btn btn-primary btn-sm" href="#">
                                    <i className="fas fa-plus" />
                                    Thêm 
                                    </a>
                                    <a className="btn btn-info btn-sm" href="#">
                                    <i className="fas fa-pencil-alt" />
                                    Sửa
                                    </a>
                                    <a className="btn btn-danger btn-sm" href="#">
                                    <i className="fas fa-trash" />
                                    Xóa
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Necko</td>
                                <td>Firefox 2.0</td>
                                <td>Win 98+ / OSX.2+</td>
                                <td>1.8</td>
                                <td>A</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Necko</td>
                                <td>Firefox 2.0</td>
                                <td>Win 98+ / OSX.2+</td>
                                <td>1.8</td>
                                <td>A</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Necko</td>
                                <td>Firefox 2.0</td>
                                <td>Win 98+ / OSX.2+</td>
                                <td>1.8</td>
                                <td>A</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Necko</td>
                                <td>Firefox 2.0</td>
                                <td>Win 98+ / OSX.2+</td>
                                <td>1.8</td>
                                <td>A</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Necko</td>
                                <td>Firefox 2.0</td>
                                <td>Win 98+ / OSX.2+</td>
                                <td>1.8</td>
                                <td>A</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Necko</td>
                                <td>Firefox 2.0</td>
                                <td>Win 98+ / OSX.2+</td>
                                <td>1.8</td>
                                <td>A</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Necko</td>
                                <td>Firefox 2.0</td>
                                <td>Win 98+ / OSX.2+</td>
                                <td>1.8</td>
                                <td>A</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Necko</td>
                                <td>Firefox 2.0</td>
                                <td>Win 98+ / OSX.2+</td>
                                <td>1.8</td>
                                <td>A</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Necko</td>
                                <td>Firefox 2.0</td>
                                <td>Win 98+ / OSX.2+</td>
                                <td>1.8</td>
                                <td>A</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Necko</td>
                                <td>Firefox 2.0</td>
                                <td>Win 98+ / OSX.2+</td>
                                <td>1.8</td>
                                <td>A</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Necko</td>
                                <td>Firefox 2.0</td>
                                <td>Win 98+ / OSX.2+</td>
                                <td>1.8</td>
                                <td>A</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Necko</td>
                                <td>Firefox 2.0</td>
                                <td>Win 98+ / OSX.2+</td>
                                <td>1.8</td>
                                <td>A</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Necko</td>
                                <td>Firefox 2.0</td>
                                <td>Win 98+ / OSX.2+</td>
                                <td>1.8</td>
                                <td>A</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Necko</td>
                                <td>Firefox 2.0</td>
                                <td>Win 98+ / OSX.2+</td>
                                <td>1.8</td>
                                <td>A</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
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
    )
  }
}
