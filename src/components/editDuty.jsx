import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import {editNhiemvusAPI, getNhiemvusbyIdAPI, getTypeNhiemVusAPI, getStatusNhiemVusAPI, getProgramsAPI, getChuyengiasAPI, getNhiemvuAPI} from "../../src/api/todos";

function EditDutyC({ nhiemvuId }) {

    const [showForm, setShowForm] = useState(true);

    const [nhiemvu, setProgram] = useState({});

    const [loaiNhiemVuOptions, setLoaiNhiemVuOptions] = useState([]);
    const [selectedLoaiNhiemVu, setSelectedLoaiNhiemVu] = useState('');

    const [nhiemVuOptions, setNhiemVuOptions] = useState([]);
    const [selectedStartDate, setSelectedStartDate] = useState('');
    const [selectedEndDate, setSelectedEndDate] = useState('');
    const [selectedNghiemThuDate, setSelectedNghiemThuDate] = useState('');
    const [selectedThucHien, setSelectedThucHien] = useState('');
    const [selectedNgoaiNS, setSelectedNgoaiNS] = useState('');
    const [selectedNSNN, setSelectedNSNN] = useState('');
    const [selectedVPCTLeader, setSelectedVPCTLeader] = useState('');
    const [selectedPlanning, setSelectedPlanning] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState('');

    const [statusNhiemVuOptions, setStatusNhiemVuOptions] = useState([]);
    const [selectedStatusNhiemVu, setSelectedStatusNhiemVu] = useState('');

    const [chuongTrinhOptions, setChuongTrinhOptions] = useState([]);
    const [selectedChuongTrinh, setSelectedChuongTrinh] = useState('');

    const [chuyenGiaOptions, setChuyenGiaOptions] = useState([]);
    const [selectedChuyenGia, setSelectedChuyenGia] = useState('');

    useEffect(() => {
        async function fetchData() {
            const nhiemvuData = await getNhiemvusbyIdAPI(nhiemvuId);
            setProgram(nhiemvuData);
        }
        fetchData();
    }, [nhiemvuId]);

    useEffect(() => {
        async function fetchLoaiNhiemVuOptions() {
            const options = await getTypeNhiemVusAPI();
            setLoaiNhiemVuOptions(options);
        }
        fetchLoaiNhiemVuOptions();
    }, []);

    useEffect(() => {
        async function fetchNhiemVuOptions() {
            const options = await getNhiemvuAPI();
            setNhiemVuOptions(options);
        }
        fetchNhiemVuOptions();
    }, []);

    useEffect(() => {
        async function fetchStatusNhiemVuOptions() {
            const options = await getStatusNhiemVusAPI();
            setStatusNhiemVuOptions(options);
        }
        fetchStatusNhiemVuOptions();
    }, []);

    useEffect(() => {
        async function fetchChuongTrinhOptions() {
            const options = await getProgramsAPI();
            setChuongTrinhOptions(options);
        }
        fetchChuongTrinhOptions();
    }, []);

    useEffect(() => {
        async function fetchChuyenGiaOptions() {
            const options = await getChuyengiasAPI();
            setChuyenGiaOptions(options);
        }
        fetchChuyenGiaOptions();
    }, []);

    const ShowForm = () => {
        setShowForm(!showForm);
    }

    const navigate = useNavigate();

    const saveChanges = async (event) => {
        event.preventDefault();
        const maNhiemVu = event.target[0].value;
        const category = event.target[1].value;
        const name = event.target[2].value;
        const chuongTrinhId = event.target[3].value;
        const presidentId = event.target[4].value;
        const status = event.target[5].value;
        const startDate_Year = event.target[6].value;
        const endDate_Year = event.target[7].value;
        const ngiemThu_Year = event.target[8].value;
        const fundingPlan_FirstYear = event.target[9].value;
        const fundingPlan_SecondYear = event.target[10].value;
        const fundingPlan_ThirdYear = event.target[11].value;
        const vpcT_Leader = event.target[12].value;
        const planning_Specialist = event.target[13].value;
        const departmentAdmin = event.target[14].value;

        await editNhiemvusAPI(nhiemvuId, {
            id: nhiemvuId,
            maNhiemVu: maNhiemVu,
            category: category,
            name: name,
            chuongTrinhId: chuongTrinhId,
            presidentId: presidentId,
            status: status,
            startDate_Year: startDate_Year,
            endDate_Year: endDate_Year,
            ngiemThu_Year: ngiemThu_Year,
            fundingPlan_FirstYear: fundingPlan_FirstYear,
            fundingPlan_SecondYear: fundingPlan_SecondYear,
            fundingPlan_ThirdYear: fundingPlan_ThirdYear,
            vpcT_Leader: vpcT_Leader,
            planning_Specialist: planning_Specialist,
            departmentAdmin: departmentAdmin
        });

        navigate('/duty');
    };

    const handleLoaiNhiemVuChange = (event) => {
        setSelectedLoaiNhiemVu(event.target.value);
    };

    const handleStartDateChange = (event) => {
        setSelectedStartDate(event.target.value);
    };

    const handleEndDateChange = (event) => {
        setSelectedEndDate(event.target.value);
    };

    const handleNghiemThuDateChange = (event) => {
        setSelectedNghiemThuDate(event.target.value);
    };

    const handleThucHienChange = (event) => {
        setSelectedThucHien(event.target.value);
    };

    const handleNgoaiNSChange = (event) => {
        setSelectedNgoaiNS(event.target.value);
    };

    const handleNSNNChange = (event) => {
        setSelectedNSNN(event.target.value);
    };

    const handleVPCTLearderChange = (event) => {
        setSelectedVPCTLeader(event.target.value);
    };

    const handlePlanningChange = (event) => {
        setSelectedPlanning(event.target.value);
    };

    const handleDepartmentChange = (event) => {
        setSelectedDepartment(event.target.value);
    };

    const handleStatusNhiemVuChange = (event) => {
        setSelectedStatusNhiemVu(event.target.value);
    };

    const handleChuongTrinhChange = (event) => {
        setSelectedChuongTrinh(event.target.value);
    };

    const handleChuyenGiaChange = (event) => {
        setSelectedChuyenGia(event.target.value);
    };

    return (
        <div>
                {/* Content Wrapper. Contains page content */}
                <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <div className="container-fluid">
                        
                        <div className="row mb-2">
                            <div className="col-sm-2">
                                <h5>Sửa nhiệm vụ</h5>
                            </div>
                            <div className="col-sm-8">
                                <td className="project-actions text-right">
                                    <a className="btn btn-warning btn-sm mr-2" href="#" onClick={ShowForm}>
                                    <i className="fas fa-plus" /> Sửa
                                    </a>
                                </td>

                                {showForm && (
                                    <div>
                                        <form onSubmit={saveChanges}>
                                            <div className="row bg-gradient-light rounded border border-light shadow">
                                                <div className="col-sm-3 mt-4">
                                                </div>
                                                <div className="col-sm-9 mt-4">
                                                    <div >
                                                        <ol className="breadcrumb float-sm-left">
                                                            <li className="breadcrumb-item"><a href={`/search/chuyengia/${nhiemvu.id}`}>Chuyên gia thuộc chương trình</a></li>
                                                            <li className="breadcrumb-item active"> <a href={`/search/nhiemvu/${nhiemvu.id}`}> Nhiệm vụ thuộc chương trình</a></li>
                                                            <li className="breadcrumb-item active"><a href={`/search/coquanquanly/${nhiemvu.id}`}> Đơn vị quản lí </a> </li>
                                                        </ol>
                                                    </div>
                                                    <br />
                                                </div>

                                                <div className="col-sm-3 mt-4">
                                                    <label className="font-weight-normal" for="reportType"><b>Mã số</b><p className="text-danger d-inline">(*)</p></label>
                                                </div>
                                                <div className="col-sm-4 mt-4">
                                                    <input value={nhiemvu.maNhiemVu} className="form-control rounded" type="text" name="maNhiemVu" id="maNhiemVu" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                                                    <br />
                                                </div>

                                                <div className="col-sm-0 mt-4">
                                                    <div className="input-group">
                                                        <label className="font-weight-normal mb-4" for="reportType"><b>Loại nhiệm vụ</b></label>
                                                    </div>
                                                </div>
                                                <div className="col-sm-2 mt-4">
                                                    <select value={selectedLoaiNhiemVu} onChange={handleLoaiNhiemVuChange} className="custom-select option-select">
                                                        {loaiNhiemVuOptions?.map((option) => (
                                                        <option key={option.value} value={option.value}>
                                                            {option.label}
                                                        </option>
                                                        ))}
                                                    </select>
                                                    <br />
                                                </div>

                                                <div className="col-sm-3 mt-2">
                                                    <label className="font-weight-normal" for="reportType"><b>Tên nhiệm vụ</b><p className="text-danger d-inline">(*)</p></label>
                                                </div>
                                                <div className="col-sm-9 mt-2">
                                                    <input value={nhiemvu.name} className="form-control rounded" type="text" name="name" id="name" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                                                    <br />
                                                </div>

                                                <div className="col-sm-3 mt-2">
                                                    <div className="input-group">
                                                        <label className="font-weight-normal mb-4" for="reportType"><b>Chương trình</b><p className="text-danger d-inline">(*)</p></label>
                                                    </div>
                                                </div>
                                                <div className="col-sm-9 mt-2">
                                                    <select value={selectedChuongTrinh} onChange={handleChuongTrinhChange} className="custom-select option-select">
                                                        {chuongTrinhOptions?.map((option) => (
                                                        <option key={option.id} value={option.id}>
                                                            {option.name}
                                                        </option>
                                                        ))}
                                                    </select>
                                                    <br />
                                                </div>

                                                <div className="col-sm-3 mt-4">
                                                    <div className="input-group">
                                                        <label className="font-weight-normal mb-4" for="reportType"><b>Chủ nhiệm đề tài, dự án</b><p className="text-danger d-inline">(*)</p></label>
                                                    </div>
                                                </div>
                                                <div className="col-sm-9 mt-4">
                                                    <select value={selectedChuyenGia} onChange={handleChuyenGiaChange} className="custom-select option-select">
                                                        {chuyenGiaOptions?.map((option) => (
                                                        <option key={option.id} value={option.id}>
                                                            {option.name}
                                                        </option>
                                                        ))}
                                                    </select>
                                                    <br />
                                                </div>

                                                <div className="col-sm-3 mt-2">
                                                    <div className="input-group">
                                                        <label className="font-weight-normal mb-4" for="reportType"><b>Trạng thái nhiệm vụ</b></label>
                                                    </div>
                                                </div>
                                                <div className="col-sm-9 mt-2">
                                                    <select value={selectedStatusNhiemVu} onChange={handleStatusNhiemVuChange} className="custom-select option-select">
                                                        {statusNhiemVuOptions?.map((option) => (
                                                        <option key={option.value} value={option.value}>
                                                            {option.label}
                                                        </option>
                                                        ))}
                                                    </select>
                                                    <br />
                                                </div>
                                                
                                                <div className="col-sm-2 mt-4">
                                                    <div className="input-group">
                                                        <label className="font-weight-normal mb-4" for="reportType"><b>Thời gian</b></label>
                                                    </div>
                                                </div>
                                                <div className="col-sm-0 mt-4">
                                                    <div className="input-group">
                                                        <label className="font-weight-normal mb-4" for="reportType"><i>Bắt đầu</i></label>
                                                    </div>
                                                </div>
                                                <div className="col-sm-2 mt-4">
                                                    <select value={selectedStartDate} onChange={handleStartDateChange} className="custom-select option-select">
                                                        {nhiemVuOptions?.map((option) => (
                                                        <option key={option.id} value={option.startDate_Year}>
                                                            {option.startDate_Year}
                                                        </option>
                                                        ))}
                                                    </select>
                                                    <br />
                                                </div>
                                                <div className="col-sm-0 mt-4">
                                                    <div className="input-group">
                                                        <label className="font-weight-normal mb-4" for="reportType"><i>Kết thúc</i></label>
                                                    </div>
                                                </div>
                                                <div className="col-sm-2 mt-4">
                                                    <select value={selectedEndDate} onChange={handleEndDateChange} className="custom-select option-select">
                                                        {nhiemVuOptions?.map((option) => (
                                                        <option key={option.id} value={option.endDate_Year}>
                                                            {option.endDate_Year}
                                                        </option>
                                                        ))}
                                                    </select>
                                                    <br />
                                                </div>
                                                <div className="col-sm-0 mt-4">
                                                    <div className="input-group">
                                                        <label className="font-weight-normal mb-4" for="reportType"><i>Nghiệm thu</i></label>
                                                    </div>
                                                </div>
                                                <div className="col-sm-2 mt-4">
                                                    <select value={selectedNghiemThuDate} onChange={handleNghiemThuDateChange} className="custom-select option-select">
                                                        {nhiemVuOptions?.map((option) => (
                                                        <option key={option.id} value={option.ngiemThu_Year}>
                                                            {option.ngiemThu_Year}
                                                        </option>
                                                        ))}
                                                    </select>
                                                    <br />
                                                </div>

                                                <div className="col-sm-2 mt-4">
                                                    <div className="input-group">
                                                        <label className="font-weight-normal mb-4" for="reportType"><b>Kinh phí</b></label>
                                                    </div>
                                                </div>
                                                <div className="col-sm-0 mt-4">
                                                    <div className="input-group">
                                                        <label className="font-weight-normal mb-4" for="reportType"><i>Thực hiện</i></label>
                                                    </div>
                                                </div>
                                                <div className="col-sm-2 mt-4">
                                                    <select value={selectedThucHien} onChange={handleThucHienChange} className="custom-select option-select">
                                                        {nhiemVuOptions?.map((option) => (
                                                        <option key={option.id} value={option.fundingPlan_FirstYear}>
                                                            {option.fundingPlan_FirstYear}
                                                        </option>
                                                        ))}
                                                    </select>
                                                    <br />
                                                </div>
                                                <div className="col-sm-0 mt-4">
                                                    <div className="input-group">
                                                        <label className="font-weight-normal mb-4" for="reportType"><i>Ngoài NS</i></label>
                                                    </div>
                                                </div>
                                                <div className="col-sm-2 mt-4">
                                                    <select value={selectedNgoaiNS} onChange={handleNgoaiNSChange} className="custom-select option-select">
                                                        {nhiemVuOptions?.map((option) => (
                                                        <option key={option.id} value={option.fundingPlan_SecondYear}>
                                                            {option.fundingPlan_SecondYear}
                                                        </option>
                                                        ))}
                                                    </select>
                                                    <br />
                                                </div>
                                                <div className="col-sm-0 mt-4">
                                                    <div className="input-group">
                                                        <label className="font-weight-normal mb-4" for="reportType"><i>NSNN</i></label>
                                                    </div>
                                                </div>
                                                <div className="col-sm-2 mt-4">
                                                    <select value={selectedNSNN} onChange={handleNSNNChange} className="custom-select option-select">
                                                        {nhiemVuOptions?.map((option) => (
                                                        <option key={option.id} value={option.fundingPlan_ThirdYear}>
                                                            {option.fundingPlan_ThirdYear}
                                                        </option>
                                                        ))}
                                                    </select>
                                                    <br />
                                                </div>

                                                <div className="col-sm-3 mt-4">
                                                    <div className="input-group">
                                                        <label className="font-weight-normal mb-4" for="reportType"><b>Lãnh đạo VPCT</b></label>
                                                    </div>
                                                </div>
                                                <div className="col-sm-9 mt-4">
                                                    <select value={selectedVPCTLeader} onChange={handleVPCTLearderChange} className="custom-select option-select">
                                                        {nhiemVuOptions?.map((option) => (
                                                        <option key={option.id} value={option.vpcT_Leader}>
                                                            {option.vpcT_Leader}
                                                        </option>
                                                        ))}
                                                    </select>
                                                    <br />
                                                </div>

                                                <div className="col-sm-3 mt-4">
                                                    <div className="input-group">
                                                        <label className="font-weight-normal mb-4" for="reportType"><b>Chuyên viên tổng hợp</b></label>
                                                    </div>
                                                </div>
                                                <div className="col-sm-9 mt-4">
                                                    <select value={selectedPlanning} onChange={handlePlanningChange} className="custom-select option-select">
                                                        {nhiemVuOptions?.map((option) => (
                                                        <option key={option.id} value={option.planning_Specialist}>
                                                            {option.planning_Specialist}
                                                        </option>
                                                        ))}
                                                    </select>
                                                    <br />
                                                </div>

                                                <div className="col-sm-3 mt-4">
                                                    <div className="input-group">
                                                        <label className="font-weight-normal mb-4" for="reportType"><b>Vụ chuyên ngành</b></label>
                                                    </div>
                                                </div>
                                                <div className="col-sm-9 mt-4">
                                                    <select value={selectedDepartment} onChange={handleDepartmentChange} className="custom-select option-select">
                                                        {nhiemVuOptions?.map((option) => (
                                                        <option key={option.id} value={option.departmentAdmin}>
                                                            {option.departmentAdmin}
                                                        </option>
                                                        ))}
                                                    </select>
                                                    <br />
                                                </div>

                                                <div className="col-sm-5 mt-5 mb-5">
                                                    <button type="submit" className='btn btn-info btn-sm mr-2'><i class="fas fa-save"></i> Lưu</button>
                                                    <button type="button" className='btn btn-danger btn-sm' onClick={ShowForm}><i class="fas fa-window-close"></i> Hủy</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    )}
                            </div>
                            <div className="col-sm-2">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="/duty">Nhiệm vụ</a></li>
                                <li className="breadcrumb-item active">Dữ liệu</li>
                            </ol>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main content */}
                
                {/* /.content */}
                </div>
                {/* /.content-wrapper */}
            </div>
    );
}

export default EditDutyC;