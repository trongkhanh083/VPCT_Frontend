import '../../App.css';

import Header from '../../components/Header';
import Expert_con from '../../components/container/Expert_con';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

function Expert() {
    return (
        <div class="wrapper">
        <Header />
        <Menu />
        <Expert_con />
        <Footer />
        </div>
    );
}

export default Expert;