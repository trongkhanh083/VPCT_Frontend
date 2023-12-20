import '../../App.css';

import Header from '../../components/Header';
import { useParams } from 'react-router-dom';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import EditDutyC from '../../components/editDuty';

function EditDuty() {
    const { id } = useParams();
    return (
        <div class="wrapper">
        <Header />
        <Menu />
        <EditDutyC nhiemvuId={id}/>
        <Footer />
        </div>
    );
}

export default EditDuty;