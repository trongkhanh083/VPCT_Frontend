import '../../App.css';

import Header from '../../components/Header';
import DispatchType_con from '../../components/container/DispatchType_con';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

function DispatchType() {
    return (
        <div class="wrapper">
        <Header />
        <Menu />
        <DispatchType_con />
        <Footer />
        </div>
    );
}

export default DispatchType;