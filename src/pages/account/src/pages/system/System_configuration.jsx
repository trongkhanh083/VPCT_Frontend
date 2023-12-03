import '../../App.css';

import Header from '../../components/Header';
import System_configuration_con from '../../components/configuration/System_configuration_con';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

function System_configuration() {
    return (
        <div class="wrapper">
        <Header />
        <Menu />
        <System_configuration_con />
        <Footer />
        </div>
    );
}

export default System_configuration;