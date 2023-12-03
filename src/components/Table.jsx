import React, { Component } from 'react';

export default class Table extends Component {
    render() {
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
                            <div className="col-sm-4">
                                <td className="project-actions text-right">
                                    <a className="btn btn-success btn-sm mr-2" href="#">
                                    <i className="fas fa-plus" /> Thêm 
                                    </a>
                                    <a className="btn btn-warning btn-sm mr-2" href="#">
                                    <i className="fas fa-pencil-alt" /> Sửa
                                    </a>
                                    <a className="btn btn-danger btn-sm mr-2" href="#">
                                    <i className="fas fa-trash" /> Xóa
                                    </a>
                                    <a className="btn btn-info btn-sm mr-2" href="#">
                                    <i className="fas fa-redo"></i> Làm mới
                                    </a>
                                </td>
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
                                    
                                    <table id="example1" className="table table-responsive table-bordered table-striped">
                                        <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>Mã số NV</th>
                                            <th>Tên đề tài, dự án</th>
                                            <th>Chủ nhiệm</th>
                                            <th>Bắt đầu</th>
                                            <th>Kết thúc</th>
                                            <th>Tổng KP thực hiện</th>
                                            <th>Tổng KP ngoài NS</th>
                                            <th>Tổng KP NSNN</th>
                                            <th>Lãnh đạo VPCT phụ trách</th>
                                            <th>Chuyên viên kế toán phụ trách</th>
                                            <th>Vụ chuyên ngành phụ trách</th>
                                            <th>Trạng thái</th>
                                            <th>Xuất bản</th>
                                        </tr>
                                        </thead>

                                        <tbody>
                                        <tr>
                                            <td>1</td>
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
                                            <td>Thực hiện</td>
                                            <td>
                                                <div class="form-check text-center">
                                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" checked="checked" />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
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
                                            <td>Thực hiện</td>
                                            <td>
                                                <div class="form-check text-center">
                                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" checked="checked" />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>KX.06/11-15</td>
                                            <td>Nghiên cứu và phát triển hội nhập quốc tế về khoa học và công nghệ</td>
                                            <td>Trần Việt Thanh</td>
                                            <td>Mai Hà</td>
                                            <td>Nghiêm Quốc Đạt</td>
                                            <td>Tạ Bá Hưng</td>
                                            <td>Trịnh Cường</td>
                                            <td></td>
                                            <td>Trần Mai Anh</td>
                                            <td></td>
                                            <td></td>
                                            <td>Thực hiện</td>
                                            <td>
                                                <div class="form-check text-center">
                                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" checked="checked" />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
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
                                            <td>Thực hiện</td>
                                            <td>
                                                <div class="form-check text-center">
                                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" checked="checked" />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
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
                                            <td>Thực hiện</td>
                                            <td>
                                                <div class="form-check text-center">
                                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" checked="checked" />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
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
                                            <td>Thực hiện</td>
                                            <td>
                                                <div class="form-check text-center">
                                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" checked="checked" />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
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
                                            <td>Thực hiện</td>
                                            <td>
                                                <div class="form-check text-center">
                                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" checked="checked" />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>8</td>
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
                                            <td>Thực hiện</td>
                                            <td>
                                                <div class="form-check text-center">
                                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" checked="checked" />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
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
                                            <td>Thực hiện</td>
                                            <td>
                                                <div class="form-check text-center">
                                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" checked="checked" />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>10</td>
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
                                            <td>Thực hiện</td>
                                            <td>
                                                <div class="form-check text-center">
                                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" checked="checked" />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>11</td>
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
                                            <td>Thực hiện</td>
                                            <td>
                                                <div class="form-check text-center">
                                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" checked="checked" />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>12</td>
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
                                            <td>Thực hiện</td>
                                            <td>
                                                <div class="form-check text-center">
                                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" checked="checked" />
                                                </div>
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
        )
    }
}
