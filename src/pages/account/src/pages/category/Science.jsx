import '../../App.css';

import Header from '../../components/Header';
import Science_con from '../../components/container/Science_con';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

function Science() {
    return (
        <div class="wrapper">
        <Header />
        <Menu />
        <Science_con />
        <Footer />
        </div>
    );
}

export default Science;