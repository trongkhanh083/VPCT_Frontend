import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addProgramsAPI, getTypeProgramsAPI, getProgramsAPI } from "../../src/api/todos";
import '../css/table.css';

function AddProgramC() {
    
        const [showForm, setShowForm] = useState(true);

        const [loaiChuongTrinhOptions, setLoaiChuongTrinhOptions] = useState([]);
        const [selectedLoaiChuongTrinh, setSelectedLoaiChuongTrinh] = useState('');

        const [chuongTrinhOptions, setChuongTrinhOptions] = useState([]);
        const [selectedChuNhiem, setSelectedChuNhiem] = useState('');
        const [selectedPhoChuNhiem, setSelectedPhoChuNhiem] = useState('');
        const [selectedThuKyKhoaHoc, setSelectedThuKyKhoaHoc] = useState('');
        const [selectedThuKyHanhChinh, setSelectedThuKyHanhChinh] = useState('');

        useEffect(() => {
            async function fetchLoaiChuongTrinhOptions() {
                const options = await getTypeProgramsAPI();
                setLoaiChuongTrinhOptions(options);
            }
            fetchLoaiChuongTrinhOptions();
        }, []);

        useEffect(() => {
            async function fetchChuongTrinhOptions() {
                const options = await getProgramsAPI();
                setChuongTrinhOptions(options);
            }
            fetchChuongTrinhOptions();
        }, []);

        const handleLoaiChuongTrinhChange = (event) => {
          setSelectedLoaiChuongTrinh(event.target.value);
        };

        const handleChuNhiemChange = (event) => {
          setSelectedChuNhiem(event.target.value);
        };
    
        const handlePhoChuNhiemChange = (event) => {
            setSelectedPhoChuNhiem(event.target.value);
        };
    
        const handleThuKyKhoaHocChange = (event) => {
            setSelectedThuKyKhoaHoc(event.target.value);
        };
    
        const handleThuKyHanhChinhChange = (event) => {
            setSelectedThuKyHanhChinh(event.target.value);
        };

        const navigate = useNavigate();

        const addorEditTodo = async (event) => {
            event.preventDefault();
            const loaiChuongTrinhId = event.target[0].value;
            const name = event.target[1].value;
            const maChuongTrinh = event.target[2].value;
            const president = event.target[3].value;
            const vicePresident = event.target[4].value;
            const admin_Secretary = event.target[5].value;
            const member_Secretary = event.target[6].value;

            await addProgramsAPI({
              loaiChuongTrinhId: loaiChuongTrinhId,
              name: name,
              maChuongTrinh: maChuongTrinh,
              president: president,
              vicePresident: vicePresident,
              admin_Secretary: admin_Secretary,
              member_Secretary: member_Secretary
            });
            //   fetchData();
            navigate('/home');
        }

        const ShowForm = () => {
          setShowForm(!showForm);
        }

        return (
            <div>
                {/* Content Wrapper. Contains page content */}
                <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <div className="container-fluid">
                        
                        <div className="row mb-2">
                            <div className="col-sm-2">
                                <h5>Thêm chương trình</h5>
                            </div>
                            <div className="col-sm-8">
                                <td className="project-actions text-right">
                                    <a className="btn btn-success btn-sm mr-2" href="#" onClick={ShowForm}>
                                    <i className="fas fa-plus" /> Thêm
                                    </a>
                                </td>

                                {showForm && (
                                    <div>
                                        <form onSubmit={addorEditTodo}>
                                            <div className="row">
                                                <div className="col-sm-3 mt-4">
                                                    <div className="input-group">
                                                            <label className="font-weight-normal" for="reportType"><b>Loại CT</b><p className="text-danger d-inline">(*)</p></label>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-9 mt-4">
                                                        <select value={selectedLoaiChuongTrinh} onChange={handleLoaiChuongTrinhChange} className="custom-select option-select">
                                                            {loaiChuongTrinhOptions?.map((option) => (
                                                            <option key={option.id} value={option.id}>
                                                                {option.name}
                                                            </option>
                                                            ))}
                                                        </select>
                                                    <br />
                                                </div>

                                                <div className="col-sm-3 mt-4">
                                                    <label className="font-weight-normal" for="reportType"><b>Tên CT</b><p className="text-danger d-inline">(*)</p></label>
                                                </div>
                                                <div className="col-sm-9 mt-4">
                                                    <input className="form-control rounded" type="text" name="name" id="name" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                                                    <br />
                                                </div>
                                            
                                                <div className="col-sm-3 mt-2">
                                                    <div className="input-group block">
                                                        <label className="font-weight-normal" for="reportType"><b>Mã số CT</b><p className="text-danger d-inline">(*)</p></label>
                                                    </div>
                                                </div>
                                                <div className="col-sm-9 mt-2">
                                                    <input className="form-control rounded" type="text" name="maChuongTrinh" id="maChuongTrinh" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                                                    <br />
                                                </div>

                                                <div className="col-sm-3 mt-4">
                                                    <div className="input-group">
                                                            <label className="font-weight-normal" for="reportType"><b>Chủ nhiệm</b></label>
                                                        </div>
                                                    </div>
                                                <div className="col-sm-9 mt-4">
                                                        <select value={selectedChuNhiem} onChange={handleChuNhiemChange} className="custom-select option-select">
                                                            {chuongTrinhOptions?.map((option) => (
                                                            <option key={option.id} value={option.president}>
                                                                {option.president}
                                                            </option>
                                                            ))}
                                                        </select>
                                                    <br />
                                                </div>

                                                <div className="col-sm-3 mt-4">
                                                    <div className="input-group">
                                                            <label className="font-weight-normal" for="reportType"><b>Phó chủ nhiệm</b></label>
                                                        </div>
                                                    </div>
                                                <div className="col-sm-9 mt-4">
                                                        <select value={selectedPhoChuNhiem} onChange={handlePhoChuNhiemChange} className="custom-select option-select">
                                                            {chuongTrinhOptions?.map((option) => (
                                                            <option key={option.id} value={option.vicePresident}>
                                                                {option.vicePresident}
                                                            </option>
                                                            ))}
                                                        </select>
                                                    <br />
                                                </div>

                                                <div className="col-sm-3 mt-4">
                                                    <div className="input-group">
                                                            <label className="font-weight-normal" for="reportType"><b>Ủy viên, thư ký khoa học</b></label>
                                                        </div>
                                                    </div>
                                                <div className="col-sm-9 mt-4">
                                                        <select value={selectedThuKyKhoaHoc} onChange={handleThuKyKhoaHocChange} className="custom-select option-select">
                                                            {chuongTrinhOptions?.map((option) => (
                                                            <option key={option.id} value={option.admin_Secretary}>
                                                                {option.admin_Secretary}
                                                            </option>
                                                            ))}
                                                        </select>
                                                    <br />
                                                </div>

                                                <div className="col-sm-3 mt-4">
                                                    <div className="input-group">
                                                            <label className="font-weight-normal" for="reportType"><b>Thư ký hành chính</b></label>
                                                        </div>
                                                    </div>
                                                <div className="col-sm-9 mt-4">
                                                        <select value={selectedThuKyHanhChinh} onChange={handleThuKyHanhChinhChange} className="custom-select option-select">
                                                            {chuongTrinhOptions?.map((option) => (
                                                            <option key={option.id} value={option.member_Secretary}>
                                                                {option.member_Secretary}
                                                            </option>
                                                            ))}
                                                        </select>
                                                    <br />
                                                </div>

                                                <div className="col-sm-5 mt-5">
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
                                <li className="breadcrumb-item"><a href="/home">Chương trình</a></li>
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

export default AddProgramC;