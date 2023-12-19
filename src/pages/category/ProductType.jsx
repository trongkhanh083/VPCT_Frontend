import '../../App.css';

import Header from '../../components/Header';
import ProductType_con from '../../components/container/ProductType_con';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

function ProductType() {
    return (
        <div class="wrapper">
        <Header />
        <Menu />
        <ProductType_con />
        <Footer />
        </div>
    );
}

export default ProductType;