import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
          <div>
            <footer className="main-footer text-center">
              <a href="/login" className="text-info"><strong>Hệ thống quản lý đề tài dự án thuộc các chương trình trọng điểm cấp nhà nước - Copyright © 2012-2023</strong></a><br />
                  Bản quyền thuộc Văn phòng các Chương trình Khoa học và Công nghệ trọng điểm cấp Nhà nước, Bộ Khoa học và Công nghệ.<br />
                  Địa chỉ: Tầng 12, Trụ sở Bộ Khoa học và Công nghệ. Số 113, đường Trần Duy Hưng, Quận Cầu Giấy, TP. Hà Nội.<br />
              <div className="float-none d-none d-sm-inline-block">
                  <b>Website: http://www.vpct.gov.vn. Số điện thoại: (84.4) 3.9366.770 - Fax: (84.4) 3.9366.771</b>
              </div>
            </footer>
          </div>
        );
    }
}
