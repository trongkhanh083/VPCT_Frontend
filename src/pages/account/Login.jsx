import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
        <div className="hold-transition login-page">
            
            <div className="login-box">
                {/* /.login-logo */}
                <div className="card card-outline card-info border-secondary">
                <div className="card-header text-center">
                    <h3><b>Đăng nhập hệ thống</b></h3>
                </div>
                <div className="card-body">
                    <form action="#" method="post">
                    <div className="input-group mb-3">
                        <input type="email" className="form-control" placeholder="Tên đăng nhập" />
                        <div className="input-group-append">
                        <div className="input-group-text">
                            <span className="fas fa-envelope" />
                        </div>
                        </div>
                    </div>
                    <div className="input-group mb-3">
                        <input type="password" className="form-control" placeholder="Mật khẩu" />
                        <div className="input-group-append">
                        <div className="input-group-text">
                            <span className="fas fa-lock" />
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                        <div className="icheck-info">
                            <input type="checkbox" id="remember" />
                            <label htmlFor="remember">
                            Ghi nhớ
                            </label>
                        </div>
                        </div>
                        {/* /.col */}
                        <div className="col-6">
                        <button type="submit" className="btn btn-info btn-block">
                            <a href="/home" className="nav-link text-light">Đăng nhập</a>
                        </button>
                        </div>
                        {/* /.col */}
                    </div>
                    </form>
                    {/* /.social-auth-links */}
                    <p className="mb-1 mt-3">
                    <a href="/forgot_password">Quên mật khẩu</a>
                    </p>
                </div>
                {/* /.card-body */}
                </div>
                {/* /.card */}
            </div>
            {/* /.login-box */}
        </div>
    )
  }
}
