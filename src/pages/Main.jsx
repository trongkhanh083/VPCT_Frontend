import React from "react";
import { Routes, Route } from 'react-router-dom';

import Login from "./account/Login";
import Home from "./Home";
import Duty from "./Duty";
import Profile from "./account/Profile";
import Program_report from "./statistical/Program_report";
import Template_report from "./statistical/Template_report";
import Mission_report from "./statistical/Mission_report";
import Mission_information from "./statistical/Mission_information";
import Search_for_tasks from "./statistical/Search_for_tasks";
import Expert from "./category/Expert";
import Phase from "./category/Phase";
import Science from "./category/Science";
import Specialized from "./category/Specialized";
import Manager from "./category/Manager";
import Facility from "./category/Facility";
import Academic from "./category/Academic";
import Degree from "./category/Degree";
import Title from "./category/Title";
import Position from "./category/Position";
import ProductForm from "./category/ProductForm";
import ProductType from "./category/ProductType";
import ProgramType from "./category/ProgramType";
import ManageAgency from "./category/ManageAgency";
import DispatchType from "./category/DispatchType";
import FileType from "./category/FileType";
import User from "./system/User";
import System_configuration from "./system/System_configuration";
import Usage_process from "./help/Usage_process";
import Infor_software from "./help/Infor_software";
import Forgot_password from "./account/Forgot_password";
import AddProgram from "./action/AddProgram";
import AddDuty from "./action/AddDuty";
import EditProgram from "./action/EditProgram";
import EditDuty from "./action/EditDuty";
import SChuyengia from "./search/ChuyenGia";
import SNhiemvu from "./search/NhiemVu";
import SCoquanquanly from "./search/CoQuanQuanLy";

const Main = () => {
    return (
        <Routes>
            <Route exact path="/" element={ <Login /> }></Route>
            <Route exact path="/home" element={ <Home /> }></Route>
            <Route exact path="/login" element={ <Login /> }></Route>
            <Route exact path="/forgot_password" element={ <Forgot_password /> }></Route>
            <Route exact path="/duty" element={ <Duty /> }></Route>
            <Route exact path="/profile" element={ <Profile /> }></Route>
            <Route exact path="/statistical/program_report" element={ <Program_report /> }></Route>
            <Route exact path="/statistical/template_report" element={ <Template_report /> }></Route>
            <Route exact path="/statistical/mission_report" element={ <Mission_report /> }></Route>
            <Route exact path="/statistical/mission_information" element={  <Mission_information /> }></Route>
            <Route exact path="/statistical/search_for_tasks" element={ <Search_for_tasks /> }></Route>
            <Route exact path="/category/expert" element={ <Expert /> }></Route>
            <Route exact path="/category/phase" element={ <Phase /> }></Route>
            <Route exact path="/category/science" element={ <Science /> }></Route>
            <Route exact path="/category/specialized" element={ <Specialized /> }></Route>
            <Route exact path="/category/manager" element={ <Manager /> }></Route>
            <Route exact path="/category/facility" element={ <Facility /> }></Route>
            <Route exact path="/category/academic" element={ <Academic /> }></Route>
            <Route exact path="/category/degree" element={ <Degree /> }></Route>
            <Route exact path="/category/title" element={ <Title /> }></Route>
            <Route exact path="/category/position" element={ <Position /> }></Route>
            <Route exact path="/category/product-form" element={ <ProductForm /> }></Route>
            <Route exact path="/category/product-type" element={ <ProductType /> }></Route>
            <Route exact path="/category/program-type" element={ <ProgramType /> }></Route>
            <Route exact path="/category/manage-agency" element={ <ManageAgency /> }></Route>
            <Route exact path="/category/dispatch-type" element={ <DispatchType /> }></Route>
            <Route exact path="/category/file-type" element={ <FileType /> }></Route>
            <Route exact path="/system/user" element={ <User /> }></Route>
            <Route exact path="/system/configuration" element={ <System_configuration /> }></Route>
            <Route exact path="/information/usage_process" element={ <Usage_process /> }></Route>
            <Route exact path="/information/infor_software" element={ <Infor_software /> }></Route>
            <Route exact path="/action/addProgram" element={ <AddProgram /> }></Route>
            <Route exact path="/action/addDuty" element={ <AddDuty /> }></Route>
            <Route path="/action/editProgram/:id" element={ <EditProgram /> }></Route>
            <Route path="/action/editDuty/:id" element={ <EditDuty /> }></Route>
            <Route path="/search/chuyengia/:id" element={ <SChuyengia /> }></Route>
            <Route path="/search/nhiemvu/:id" element={ <SNhiemvu /> }></Route>
            <Route path="/search/coquanquanly/:id" element={ <SCoquanquanly /> }></Route>
        </Routes>
    )
}

export default Main;