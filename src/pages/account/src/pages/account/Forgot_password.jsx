import React, { Component } from 'react'

export default class Forgot_password extends Component {
  render() {
    return (
        <div className="hold-transition login-page">
            <div className="login-box">
                <div className="card card-outline card-info">
                    <div className="card-header text-center">
                    <h2><b>Quên mật khẩu</b></h2>
                    </div>
                    <div className="card-body">
                    <form action="recover-password.html" method="post">
                        <div className="input-group mb-3">
                        <input type="email" className="form-control" placeholder="Email" />
                        <div className="input-group-append">
                            <div className="input-group-text">
                            <span className="fas fa-envelope" />
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-12">
                            <button type="submit" className="btn btn-info btn-block">Yêu cầu mật khẩu mới</button>
                        </div>
                        </div>
                    </form>
                    <p className="mt-3 mb-1">
                        <a href="/login">Đăng nhập</a>
                    </p>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
