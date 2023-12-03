import '../../App.css';

import Header from '../../components/Header';
import User_group_con from '../../components/configuration/User_group_con';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

function User_group() {
    return (
        <div class="wrapper">
        <Header />
        <Menu />
        <User_group_con />
        <Footer />
        </div>
    );
}

export default User_group;