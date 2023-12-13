import '../../App.css';

import Header from '../../components/Header';

import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import AddProgramC from '../../components/addProgram';

function AddProgram() {
    return (
        <div class="wrapper">
        <Header />
        <Menu />
        <AddProgramC />
        <Footer />
        </div>
    );
}

export default AddProgram;