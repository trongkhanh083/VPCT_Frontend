import '../../App.css';

import Header from '../../components/Header';
import ManageAgency_con from '../../components/container/ManageAgency_con';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

function ManageAgency() {
    return (
        <div class="wrapper">
        <Header />
        <Menu />
        <ManageAgency_con />
        <Footer />
        </div>
    );
}

export default ManageAgency;