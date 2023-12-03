import '../../App.css';

import Header from '../../components/Header';
import Manager_con from '../../components/container/Manager_con';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

function Manager() {
    return (
        <div class="wrapper">
        <Header />
        <Menu />
        <Manager_con />
        <Footer />
        </div>
    );
}

export default Manager;