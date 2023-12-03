import '../../App.css';

import Header from '../../components/Header';
import User_con from '../../components/configuration/User_con';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

function User() {
    return (
        <div class="wrapper">
        <Header />
        <Menu />
        <User_con />
        <Footer />
        </div>
    );
}

export default User;