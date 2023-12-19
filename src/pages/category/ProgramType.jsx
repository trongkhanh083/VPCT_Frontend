import '../../App.css';

import Header from '../../components/Header';
import ProgramType_con from '../../components/container/ProgramType_con';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

function ProgramType() {
    return (
        <div class="wrapper">
        <Header />
        <Menu />
        <ProgramType_con />
        <Footer />
        </div>
    );
}

export default ProgramType;