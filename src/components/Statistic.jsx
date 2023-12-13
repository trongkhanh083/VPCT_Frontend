import React, { Component } from 'react'
import "../css/program_report.css";
import ProductTable from './container/ProductITableDTO';
import ProductTableII from './container/ProductIITableDTO';
import ProductTableIII from './container/ProductIIIDTO';
import { getProductIDTO, getProductIIDTO, getProductIIIDTO,getProductOtherDTO,getProductPostDTO } from '../api/todos';

export default class Statistic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLoaiCT: "",
      selectedReportType: "",
      productData: [],
      showTable: false,
    };
  }

  handleLoaiCTChange = (event) => {
    this.setState({ selectedLoaiCT: event.target.value });
  };

  handleReportTypeChange = (event) => {
    this.setState({ selectedReportType: event.target.value });
  };

  handleViewReport = async () => {
    if (this.state.selectedLoaiCT && this.state.selectedReportType === "1") {
      const productData = await getProductIDTO(this.state.selectedLoaiCT);
      this.setState({ productData, showTable: true });
    }
    else if (this.state.selectedLoaiCT && this.state.selectedReportType === "2") {
      const productData = await getProductIIDTO(this.state.selectedLoaiCT);
      this.setState({ productData, showTable: true });
    }
    else if (this.state.selectedLoaiCT && this.state.selectedReportType === "3") {
      const productData2 = await getProductIIIDTO(this.state.selectedLoaiCT);
      const productData3 = await getProductPostDTO(this.state.selectedLoaiCT);
      const productData4 = await getProductOtherDTO(this.state.selectedLoaiCT);

      // Combine the data from all API calls
      const combinedData = [...productData2, ...productData3, ...productData4];

      this.setState({ productData: combinedData, showTable: true });
    }
    else if (this.state.selectedLoaiCT && this.state.selectedReportType === "4") {
      const productData = await getProductIIDTO(this.state.selectedLoaiCT);
      this.setState({ productData, showTable: true });
    }
  };
  render() {
    const { showTable, productData, selectedReportType } = this.state;

    return (
      <div className="cccontent-wrapper">
            {/* Main content */}
            <section className="content">
                <div className="card">
                    {/* /.card-header */}
                    <div className="card-body">
                        {/* <div id="jsGrid1" /> */}
                        <div className='div-option'>
                                <label for="reportType">
                                  Báo cáo đầu ra:
                                  <span id='compulsory-sign'>
                                    (*)
                                  </span>
                                </label>
                          <select class="custom-select option-select" onChange={this.handleReportTypeChange}>
                            <option value="" disabled selected hidden>Chọn báo cáo</option>
                            <option className='opchildren' value="1">Kết quả thực hiện chương trình(bản 1)</option>
                            <option className='opchildren' value="2">Kết quả thực hiện chương trình(bản 2)</option>
                            <option className='opchildren' value="3">Kết quả thực hiện chương trình(bản 3)</option>
                            <option value="4">Tổng hợp tình hình thực hiện của các nhiệm vụ theo chương trình</option>
                            <option value="5">Tổng hợp kế hoạch thực hiện(theo hợp đồng) của các nhiệm vụ theo chương trình</option>
                            <option value="6">Tổng hợp các nhiệm vụ dừng thực hiện</option>
                            <option value="7">Thống kê chương trình</option>
                            <option value="8">Tổng hợp các nhiệm vụ KH&CN</option>  
                          </select>
                         </div>


                         <div className='div-option'>
                                <label for="reportType" id='typeP'>Loại CT:</label>
                          <select className="custom-select option-select" onChange={this.handleLoaiCTChange}>
                            <option value="" disabled selected hidden>Chọn chương trình</option>
                            <option value="1">Chương trình trọng điểm cấp nhà nước</option>
                            <option value="2">Chương trinh độc lập quỹ gen</option>
                            
                          </select>
                         </div>


                         <div className='div-option'>
                                <label for="reportType" id='typeM'>Giai đoạn:</label>
                          <select className="custom-select option-select">
                            <option value="" disabled selected hidden>Chọn giai đoạn</option>
                            <option value="1">2006-2010</option>
                            <option value="2">2011-2015</option>
                            <option value="3">2016-2020</option>
                            <option value="4">2015-2025</option>
                            
                          </select>
                         </div>

                    <div className='div-button-report'>
                      <button className='btn btn-info button-report' onClick={this.handleViewReport}>Xem báo cáo</button>
                      <button className='btn btn-warning button-report'>In báo cáo</button>
                    </div>
                    {showTable && selectedReportType === "1" && <ProductTable productData={productData} />}
                    {showTable && selectedReportType === "2" && <ProductTableII productData={productData} />}
                    {showTable && selectedReportType === "3" && <ProductTableIII productData={productData} />}
                    </div>
                    {/* /.card-body */}
                </div>
                {/* /.card */}
            </section>
            {/* /.content */}
        </div>
    )
  }
}