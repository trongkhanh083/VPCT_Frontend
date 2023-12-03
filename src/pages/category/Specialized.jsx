import '../../App.css';

import Header from '../../components/Header';
import Specialized_con from '../../components/container/Specialized_con';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

function Specialized() {
    return (
        <div class="wrapper">
        <Header />
        <Menu />
        <Specialized_con />
        <Footer />
        </div>
    );
}

export default Specialized;