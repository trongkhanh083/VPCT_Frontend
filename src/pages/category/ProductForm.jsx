import '../../App.css';

import Header from '../../components/Header';
import ProductForm_con from '../../components/container/ProductForm_con';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

function ProductForm() {
    return (
        <div class="wrapper">
        <Header />
        <Menu />
        <ProductForm_con />
        <Footer />
        </div>
    );
}

export default ProductForm;