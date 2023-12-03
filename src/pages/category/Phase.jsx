import '../../App.css';

import Header from '../../components/Header';
import Phase_con from '../../components/container/Phase_con';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

function Phase() {
    return (
        <div class="wrapper">
        <Header />
        <Menu />
        <Phase_con />
        <Footer />
        </div>
    );
}

export default Phase;