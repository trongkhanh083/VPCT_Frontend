import '../../App.css';

import Header from '../../components/Header';
import Academic_con from '../../components/container/Academic_con';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

function Academic() {
    return (
        <div class="wrapper">
        <Header />
        <Menu />
        <Academic_con />
        <Footer />
        </div>
    );
}

export default Academic;