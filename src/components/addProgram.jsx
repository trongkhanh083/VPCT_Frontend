import React, { useState, useEffect } from 'react';
import '../css/table.css';
import { addProgramsAPI, getTypeProgramsAPI } from "../../src/api/todos";

function AddProgramC() {
    
        const [showForm, setShowForm] = useState(false);
        const [loaiChuongTrinhOptions, setLoaiChuongTrinhOptions] = useState([]);
        const [selectedLoaiChuongTrinh, setSelectedLoaiChuongTrinh] = useState('');

        useEffect(() => {
            async function fetchLoaiChuongTrinhOptions() {
                const options = await getTypeProgramsAPI();
                setLoaiChuongTrinhOptions(options);
            }
            fetchLoaiChuongTrinhOptions();
        }, []);

        const ShowForm = () => {
            setShowForm(!showForm);
        }

        const addorEditTodo = async (event) => {
            event.preventDefault();
            const name = event.target[0].value;
            const machuongtrinh = event.target[1].value;
            const loaiChuongTrinhId = event.target[2].value;

            await addProgramsAPI({
                name: name,
                machuongtrinh:machuongtrinh,
                loaiChuongTrinhId: loaiChuongTrinhId
            });
            //   fetchData();
        }

        const handleLoaiChuongTrinhChange = (event) => {
            setSelectedLoaiChuongTrinh(event.target.value);
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
                                <h5>Thêm chương trình</h5>
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
                                                <div className="col-sm-4 mt-4">
                                                    <label className="font-weight-normal" for="reportType"><b>Tên CT</b><p className="text-danger d-inline">(*)</p></label>
                                                </div>
                                                <div className="col-sm-8 mt-4">
                                                    <input className="form-control rounded" type="text" name="name" id="name" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                                                    <br />
                                                </div>
                                            
                                                <div className="col-sm-4 mt-2">
                                                    <div className="input-group">
                                                        <label className="font-weight-normal mb-4" for="reportType"><b>Mã số CT</b><p className="text-danger d-inline">(*)</p></label>
                                                    </div>
                                                </div>
                                                <div className="col-sm-8 mt-2">
                                                    <input className="form-control rounded" type="text" name="maChuongTrinh" id="maChuongTrinh" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                                                    <br />
                                                </div>
                                                

                                                <div className="col-sm-4 mt-1">
                                                    <div className="input-group">
                                                        <label className="font-weight-normal mb-4" for="reportType"><b>Loại CT</b><p className="text-danger d-inline">(*)</p></label>
                                                    </div>
                                                </div>
                                                <div className="col-sm-8 mt-1">
                                                    {/* <input className="form-control rounded" type="text" name="loaiChuongTrinhId" id="loaiChuongTrinhId" aria-label="Small" aria-describedby="inputGroup-sizing-sm" /> */}
                                                    <select value={selectedLoaiChuongTrinh} onChange={handleLoaiChuongTrinhChange} className="custom-select option-select">
                                                        {loaiChuongTrinhOptions?.map((option) => (
                                                        <option key={option.id} value={option.id}>
                                                            {option.name}
                                                        </option>
                                                        ))}
                                                    </select>
                                                    <br />
                                                </div>

                                                <div className="col-sm-5">
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