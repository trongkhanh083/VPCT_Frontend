import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
  state = {
    userName: '',
    password: '',
    error: ''
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { userName, password } = this.state;
    try {
      const response = await axios.post('https://localhost:7220/api/Auth/login', { userName, password });
      const { token } = response.data;
      localStorage.setItem('token', token);
      // Redirect to home or dashboard
      window.location.href = "/home"; // Redirect to home after successful login
    } catch (error) {
      this.setState({ error: 'Invalid username or password' });
    }
  };

  render() {
    const { userName, password, error } = this.state;
    return (
      <div className="hold-transition login-page">
        <div className="login-box">
          <div className="card card-outline card-info border-secondary">
            <div className="card-header text-center">
              <h3><b>Đăng nhập hệ thống</b></h3>
            </div>
            <div className="card-body">
              <form onSubmit={this.handleSubmit}>
                <div className="input-group mb-3">
                  <input type="text" className="form-control" name="userName" value={userName} onChange={this.handleChange} placeholder="Tên đăng nhập" />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} placeholder="Mật khẩu" />
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
                      <label htmlFor="remember">Ghi nhớ</label>
                    </div>
                  </div>
                  <div className="col-6">
                    <button type="submit" className="btn btn-info btn-block">Đăng nhập</button>
                  </div>
                </div>
              </form>
              {error && <div className="alert alert-danger mt-3">{error}</div>}
              <p className="mb-1 mt-3">
                <a href="/forgot_password">Quên mật khẩu</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}