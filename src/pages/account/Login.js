import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
        <div className="hold-transition login-page">
        <div className="login-box">
            {/* /.login-logo */}
            <div className="card card-outline card-primary">
            <div className="card-header text-center">
                <a href="#" className="h2"><b>Đăng nhập hệ thống</b></a>
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
                    <div className="col-8">
                    <div className="icheck-primary">
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember">
                        Ghi nhớ
                        </label>
                    </div>
                    </div>
                    {/* /.col */}
                    <div className="col-4">
                    <button type="submit" className="btn btn-primary btn-block">
                        <a href="/home" className="nav-link" style={{color: 'white'}}>Đăng nhập</a>
                    </button>
                    </div>
                    {/* /.col */}
                </div>
                </form>
                <div className="social-auth-links text-center mt-2 mb-3">
                <a href="#" className="btn btn-block btn-primary">
                    <i className="fab fa-facebook mr-2" /> Đăng nhập với Facebook
                </a>
                <a href="#" className="btn btn-block btn-danger">
                    <i className="fab fa-google-plus mr-2" /> Đăng nhập với Google+
                </a>
                </div>
                {/* /.social-auth-links */}
                <p className="mb-1">
                <a href="#">Quên mật khẩu</a>
                </p>
                <p className="mb-0">
                <a href="#" className="text-center">Đăng ký</a>
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
