import '../../App.css';

import Header from '../../components/Header';
import { useParams } from 'react-router-dom';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import EditProgramC from '../../components/editProgram';

function EditProgram() {
    const { id } = useParams();
    return (
        <div class="wrapper">
        <Header />
        <Menu />
        <EditProgramC programId={id}/>
        <Footer />
        </div>
    );
}

export default EditProgram;