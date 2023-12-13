import React, { useState, useEffect } from 'react';
import '../css/table.css';
import { addNhiemVusAPI, getTypeNhiemVusAPI, getStatusNhiemVusAPI, getProgramsAPI, getChuyengiasAPI } from "../../src/api/todos";

function AddDutyC() {
    
        const [showForm, setShowForm] = useState(false);
        const [loaiNhiemVuOptions, setLoaiNhiemVuOptions] = useState([]);
        const [selectedLoaiNhiemVu, setSelectedLoaiNhiemVu] = useState('');

        const [statusNhiemVuOptions, setStatusNhiemVuOptions] = useState([]);
        const [selectedStatusNhiemVu, setSelectedStatusNhiemVu] = useState('');

        const [chuongTrinhOptions, setChuongTrinhOptions] = useState([]);
        const [selectedChuongTrinh, setSelectedChuongTrinh] = useState('');

        const [chuyenGiaOptions, setChuyenGiaOptions] = useState([]);
        const [selectedChuyenGia, setSelectedChuyenGia] = useState('');

        useEffect(() => {
            async function fetchLoaiNhiemVuOptions() {
                const options = await getTypeNhiemVusAPI();
                setLoaiNhiemVuOptions(options);
            }
            fetchLoaiNhiemVuOptions();
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

        const addorEditTodo = async (event) => {
            event.preventDefault();
            const name = event.target[0].value;
            const maNhiemVu = event.target[1].value;
            const category = event.target[2].value;
            const status = event.target[3].value;
            const chuongTrinhId = event.target[4].value;
            const presidentId = event.target[5].value;

            await addNhiemVusAPI({
                name: name,
                maNhiemVu: maNhiemVu,
                category: category,
                status: status,
                chuongTrinhId: chuongTrinhId,
                presidentId: presidentId
            });
            //   fetchData();
        }

        const handleLoaiNhiemVuChange = (event) => {
            setSelectedLoaiNhiemVu(event.target.value);
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
                                <h5>Thêm nhiệm vụ</h5>
                            </div>
                            <div className="col-sm-4">
                                <td className="project-actions text-right">
                                    <a className="btn btn-success btn-sm mr-2" href="#" onClick={ShowForm}>
                                    <i className="fas fa-plus" /> Thêm
                                    </a>
                                </td>

                                {showForm && (
                                    <div>
                                        <form onSubmit={addorEditTodo}>
                                            <div className="row">
                                                <div className="col-sm-5 mt-4">
                                                    <label className="font-weight-normal" for="reportType"><b>Tên nhiệm vụ</b><p className="text-danger d-inline">(*)</p></label>
                                                </div>
                                                <div className="col-sm-7 mt-4">
                                                    <input className="form-control rounded" type="text" name="name" id="name" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                                                    <br />
                                                </div>

                                                <div className="col-sm-5 mt-4">
                                                    <label className="font-weight-normal" for="reportType"><b>Mã nhiệm vụ</b><p className="text-danger d-inline">(*)</p></label>
                                                </div>
                                                <div className="col-sm-7 mt-4">
                                                    <input className="form-control rounded" type="text" name="maNhiemVu" id="maNhiemVu" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                                                    <br />
                                                </div>
                                            
                                                <div className="col-sm-5 mt-2">
                                                    <div className="input-group">
                                                        <label className="font-weight-normal mb-4" for="reportType"><b>Loại nhiệm vụ</b><p className="text-danger d-inline">(*)</p></label>
                                                    </div>
                                                </div>
                                                <div className="col-sm-7 mt-2">
                                                    <select value={selectedLoaiNhiemVu} onChange={handleLoaiNhiemVuChange} className="custom-select option-select">
                                                        {loaiNhiemVuOptions?.map((option) => (
                                                        <option key={option.value} value={option.value}>
                                                            {option.label}
                                                        </option>
                                                        ))}
                                                    </select>
                                                    <br />
                                                </div>

                                                <div className="col-sm-5 mt-2">
                                                    <div className="input-group">
                                                        <label className="font-weight-normal mb-4" for="reportType"><b>Trạng thái nhiệm vụ</b><p className="text-danger d-inline">(*)</p></label>
                                                    </div>
                                                </div>
                                                <div className="col-sm-7 mt-2">
                                                    <select value={selectedStatusNhiemVu} onChange={handleStatusNhiemVuChange} className="custom-select option-select">
                                                        {statusNhiemVuOptions?.map((option) => (
                                                        <option key={option.value} value={option.value}>
                                                            {option.label}
                                                        </option>
                                                        ))}
                                                    </select>
                                                    <br />
                                                </div>

                                                <div className="col-sm-5 mt-2">
                                                    <div className="input-group">
                                                        <label className="font-weight-normal mb-4" for="reportType"><b>Chương trình</b><p className="text-danger d-inline">(*)</p></label>
                                                    </div>
                                                </div>
                                                <div className="col-sm-7 mt-2">
                                                    <select value={selectedChuongTrinh} onChange={handleChuongTrinhChange} className="custom-select option-select">
                                                        {chuongTrinhOptions?.map((option) => (
                                                        <option key={option.id} value={option.id}>
                                                            {option.name}
                                                        </option>
                                                        ))}
                                                    </select>
                                                    <br />
                                                </div>

                                                <div className="col-sm-5 mt-2">
                                                    <div className="input-group">
                                                        <label className="font-weight-normal mb-4" for="reportType"><b>Chuyên gia</b><p className="text-danger d-inline">(*)</p></label>
                                                    </div>
                                                </div>
                                                <div className="col-sm-7 mt-2">
                                                    <select value={selectedChuyenGia} onChange={handleChuyenGiaChange} className="custom-select option-select">
                                                        {chuyenGiaOptions?.map((option) => (
                                                        <option key={option.id} value={option.id}>
                                                            {option.name}
                                                        </option>
                                                        ))}
                                                    </select>
                                                    <br />
                                                </div>
                                                

                                                <div className="col-sm-5 mt-4">
                                                <button type="submit" className='btn btn-info btn-sm mr-2'><i class="fas fa-save"></i> Lưu</button>
                                                <button type="button" className='btn btn-danger btn-sm' onClick={ShowForm}><i class="fas fa-window-close"></i> Hủy</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    )}
                            </div>
                            <div className="col-sm-6">
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

export default AddDutyC;