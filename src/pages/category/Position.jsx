import '../../App.css';

import Header from '../../components/Header';
import Position_con from '../../components/container/Position_con';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

function Position() {
    return (
        <div class="wrapper">
        <Header />
        <Menu />
        <Position_con />
        <Footer />
        </div>
    );
}

export default Position;