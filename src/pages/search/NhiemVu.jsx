import '../../App.css';

import Header from '../../components/Header';
import { useParams } from 'react-router-dom';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
// import AddProgramC from '../../components/addProgram';
import SearchByNhiemvu from '../../components/searchByNhiemVu';

function SNhiemvu() {
    const { id } = useParams();
    return (
        <div class="wrapper">
        <Header />
        <Menu />
        <SearchByNhiemvu programId={id}/>
        <Footer />
        </div>
    );
}

export default SNhiemvu;