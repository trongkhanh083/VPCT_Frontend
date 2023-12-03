import '../../App.css';

import Header from '../../components/Header';
import Facility_con from '../../components/container/Facility_con';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

function Facility() {
    return (
        <div class="wrapper">
        <Header />
        <Menu />
        <Facility_con />
        <Footer />
        </div>
    );
}

export default Facility;