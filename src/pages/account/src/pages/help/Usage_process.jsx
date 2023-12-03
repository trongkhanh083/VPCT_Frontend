import '../../App.css';

import Header from '../../components/Header';
import Usage_process_con from '../../components/information/Usage_process_con';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

function Usage_process() {
    return (
        <div class="wrapper">
        <Header />
        <Menu />
        <Usage_process_con />
        <Footer />
        </div>
    );
}

export default Usage_process;