import axiosClient from './axiosClient';

const END_POINT = {
    CHUONGTRINHS: "ChuongTrinhs",
    LOAICHUONGTRINH: "LoaiChuongTrinhs",
    LOAINHIEMVU: "Enums/LoaiNhiemVuOptions",
    TRANGTHAINHIEMVU: "Enums/TrangThaiNhiemVuOptions",
    NHIEMVUS: "NhiemVus",
    CHUYENGIAS: "ChuyenGias",
    GIAIDOANS: "GiaiDoans",
    LINHVUCKHOAHOC: "LinhVucs",
    CHUYENNGANH: "ChuyenNganhs",
    DONVICHUQUAN: "DonViChuQuans",
    COQUANCHUTRI: "CoQuanChuTris",
    USERROLES: "UserRoles/GetUsersWithRoles",
    PRODUCTIDTO: "ChuongTrinhs/GetProduct_ICountByCategory",
    PRODUCTIIDTO: "ChuongTrinhs/GetProduct_IICountByCategory",
    PRODUCTIIIDTO: "ChuongTrinhs/GetProduct_IIICountByCategory",
    PRODUCTPOSTDTO: "ChuongTrinhs/GetProduct_PostgraduateTrainingsCountByCategory",
    PRODUCTOTHERDTO: "ChuongTrinhs/GetOtherProductsCountByCategory",
}
export const getProgramsAPI = ()  => {
    return axiosClient.get(`${END_POINT.CHUONGTRINHS}`);
}

export const getNhiemvuAPI = ()  => {
    return axiosClient.get(`${END_POINT.NHIEMVUS}`);
}

export const getChuyengiasAPI = ()  => {
    return axiosClient.get(`${END_POINT.CHUYENGIAS}`);
}

export const getGiaidoansAPI = ()  => {
    return axiosClient.get(`${END_POINT.GIAIDOANS}`);
}

export const getLinhvuckhoahocAPI = ()  => {
    return axiosClient.get(`${END_POINT.LINHVUCKHOAHOC}`);
}


export const getChuyennganhAPI = ()  => {
    return axiosClient.get(`${END_POINT.CHUYENNGANH}`);
}


export const getDonvichuquanAPI = ()  => {
    return axiosClient.get(`${END_POINT.DONVICHUQUAN}`);
}

export const getCoquanchutriAPI = ()  => {
    return axiosClient.get(`${END_POINT.COQUANCHUTRI}`);
}

export const getUsersAPI = ()  => {
    return axiosClient.get(`${END_POINT.USERROLES}`);
}

export const delProgramsAPI = (id)  => {
    return axiosClient.delete(`${END_POINT.CHUONGTRINHS}/${id}`);
}

export const addProgramsAPI = (chuongTrinh)  => {
    return axiosClient.post(`${END_POINT.CHUONGTRINHS}`, chuongTrinh);
}

export const getTypeProgramsAPI = () => {
    return axiosClient.get(`${END_POINT.LOAICHUONGTRINH}`);
}

export const delNhiemVusAPI = (id)  => {
    return axiosClient.delete(`${END_POINT.NHIEMVUS}/${id}`);
}

export const addNhiemVusAPI = (nhiemvu)  => {
    return axiosClient.post(`${END_POINT.NHIEMVUS}`, nhiemvu);
}

export const getTypeNhiemVusAPI = () => {
    return axiosClient.get(`${END_POINT.LOAINHIEMVU}`);
}

export const getStatusNhiemVusAPI = () => {
    return axiosClient.get(`${END_POINT.TRANGTHAINHIEMVU}`);
}

export const getProductIDTO = (id)  => {
    return axiosClient.get(`${END_POINT.PRODUCTIDTO}/${id}`);
}

export const getProductIIDTO = (id)  => {
    return axiosClient.get(`${END_POINT.PRODUCTIIDTO}/${id}`);
}

export const getProductPostDTO = (id)  => {
    return axiosClient.get(`${END_POINT.PRODUCTPOSTDTO}/${id}`);
}

export const getProductIIIDTO = (id)  => {
    return axiosClient.get(`${END_POINT.PRODUCTIIIDTO}/${id}`);
}

export const getProductOtherDTO = (id)  => {
    return axiosClient.get(`${END_POINT.PRODUCTOTHERDTO}/${id}`);
}

// export const delTodosAPI = (id)  => {
//     return axiosClient.delete(`${END_POINT.TODOS}/${id}`);
// }

// export const addTodosAPI = (todo)  => {
//     return axiosClient.post(`${END_POINT.TODOS}`, todo);
// }

// export const  editTodosAPI = (todo)  => {
//     return axiosClient.put(`${END_POINT.TODOS}`, todo);
// }