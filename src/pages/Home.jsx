import '../App.css';
import '../css/menu.css';

import Header from '../components/Header';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import Dashboard from '../components/Dashboard';



function Home() {
    return (
        <div class="wrapper">
        <Header />
        <Menu />
        <Dashboard />
        <Footer />
        </div>
    );
}

export default Home;