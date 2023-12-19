import '../../App.css';

import Header from '../../components/Header';
import Degree_con from '../../components/container/Degree_con';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

function Degree() {
    return (
        <div class="wrapper">
        <Header />
        <Menu />
        <Degree_con />
        <Footer />
        </div>
    );
}

export default Degree;