import '../../App.css';

import Header from '../../components/Header';
import FileType_con from '../../components/container/FileType_con';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

function FileType() {
    return (
        <div class="wrapper">
        <Header />
        <Menu />
        <FileType_con />
        <Footer />
        </div>
    );
}

export default FileType;