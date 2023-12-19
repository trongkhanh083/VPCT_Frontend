import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { editProgramsAPI, getTypeProgramsAPI, getProgramAPI, getProgramsAPI } from "../../src/api/todos";
import '../css/table.css';

function EditProgramC({ programId }) {  

      const [showForm, setShowForm] = useState(true);

      const [loaiChuongTrinhOptions, setLoaiChuongTrinhOptions] = useState([]);
      const [selectedLoaiChuongTrinh, setSelectedLoaiChuongTrinh] = useState("");

      const [program, setProgram] = useState({});

      const [chuongTrinhOptions, setChuongTrinhOptions] = useState([]);
      const [selectedChuNhiem, setSelectedChuNhiem] = useState('');
      const [selectedPhoChuNhiem, setSelectedPhoChuNhiem] = useState('');
      const [selectedThuKyKhoaHoc, setSelectedThuKyKhoaHoc] = useState('');
      const [selectedThuKyHanhChinh, setSelectedThuKyHanhChinh] = useState('');

      useEffect(() => {
        async function fetchData() {
          const options = await getTypeProgramsAPI();
          setLoaiChuongTrinhOptions(options);

          const programData = await getProgramAPI(programId);
          setProgram(programData);
          setSelectedLoaiChuongTrinh(programData.loaiChuongTrinhId);
        }
        fetchData();
      }, [programId]);

      const handleLoaiChuongTrinhChange = (event) => {
        setSelectedLoaiChuongTrinh(event.target.value);
      };

      useEffect(() => {
        async function fetchChuongTrinhOptions() {
            const options = await getProgramsAPI();
            setChuongTrinhOptions(options);
        }
        fetchChuongTrinhOptions();
      }, []);


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

      const saveChanges = async (event) => {
        event.preventDefault();
        const loaiChuongTrinhId = event.target[0].value;
        const name = event.target[1].value;
        const maChuongTrinh = event.target[2].value;
        const president = event.target[3].value;
        const vicePresident = event.target[4].value;
        const admin_Secretary = event.target[5].value;
        const member_Secretary = event.target[6].value;

        await editProgramsAPI(programId, {
          id: programId,
          loaiChuongTrinhId: loaiChuongTrinhId,
          name: name,
          maChuongTrinh: maChuongTrinh,
          president: president,
          vicePresident: vicePresident,
          admin_Secretary: admin_Secretary,
          member_Secretary: member_Secretary
        });

        navigate('/home');
      };

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
                            <h5>Sửa chương trình</h5>
                        </div>
                        <div className="col-sm-8">
                            <td className="project-actions text-right">
                                <a className="btn btn-warning btn-sm mr-2" href="#" onClick={ShowForm}>
                                <i className="fas fa-pencil-alt" /> Sửa
                                </a>
                            </td>

                            {showForm && (
                                <div>
                                    <form onSubmit={saveChanges}>
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
                                                <input value={program.name} className="form-control rounded" type="text" name="name" id="name" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                                                <br />
                                            </div>
                                        
                                            <div className="col-sm-3 mt-2">
                                                <div className="input-group block">
                                                    <label className="font-weight-normal" for="reportType"><b>Mã số CT</b><p className="text-danger d-inline">(*)</p></label>
                                                </div>
                                            </div>
                                            <div className="col-sm-9 mt-2">
                                                <input value={program.maChuongTrinh} className="form-control rounded" type="text" name="maChuongTrinh" id="maChuongTrinh" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
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

export default EditProgramC;
