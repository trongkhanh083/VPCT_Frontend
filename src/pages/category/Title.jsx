import '../../App.css';

import Header from '../../components/Header';
import Title_con from '../../components/container/Title_con';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

function Title() {
    return (
        <div class="wrapper">
        <Header />
        <Menu />
        <Title_con />
        <Footer />
        </div>
    );
}

export default Title;