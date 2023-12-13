import '../../App.css';

import Header from '../../components/Header';

import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import AddDutyC from '../../components/addDuty';

function AddDuty() {
    return (
        <div class="wrapper">
        <Header />
        <Menu />
        <AddDutyC />
        <Footer />
        </div>
    );
}

export default AddDuty;