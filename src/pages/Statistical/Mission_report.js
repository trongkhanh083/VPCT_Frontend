import '../../css/App.css';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import Test from '../../components/test';

    
  
function Mission_report() {
   

    return (
        <div class="wrapper">
        <Header />
        <Menu />
        <div className="a content-wrapper">
            {/* <input
                type="file"
                accept=".xlsx, .xls"
                onChange={this.handleFileUpload}
            /> */}

            
            {/* Content Header (Page header) */}
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Báo cáo tổng hợp nhiệm vụ</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="#">Thống kê</a></li>
                                <li className="breadcrumb-item active">Báo cáo nhiệm vụ</li>
                            </ol>
                        </div>
                    </div>
                </div>{/* /.container-fluid */}
            </section>
            <Test />
            </div>
        
        <Footer />
        </div>
    );
}

export default Mission_report;