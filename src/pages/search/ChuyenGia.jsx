import '../../App.css';

import Header from '../../components/Header';
import { useParams } from 'react-router-dom';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
// import AddProgramC from '../../components/addProgram';
import SearchByChuyengia from '../../components/searchByChuyenGia';

function SChuyengia() {
    const { id } = useParams();
    return (
        <div class="wrapper">
        <Header />
        <Menu />
        <SearchByChuyengia programId={id}/>
        <Footer />
        </div>
    );
}

export default SChuyengia;