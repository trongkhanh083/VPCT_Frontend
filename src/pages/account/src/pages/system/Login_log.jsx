import '../../App.css';

import Header from '../../components/Header';
import Login_log_con from '../../components/configuration/Login_log_con';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

function Login_log() {
    return (
        <div class="wrapper">
        <Header />
        <Menu />
        <Login_log_con />
        <Footer />
        </div>
    );
}

export default Login_log;