import React from "react";
import { Routes, Route } from 'react-router-dom';

import Login from "./account/Login";
import Home from "./Home";
import Duty from "./Duty";
import Profile from "./account/Profile";
import Program from "./Statistical/Program_report";
import Template_report from "./Statistical/Template_report"
import Mission_report from "./Statistical/Mission_report"
import Mission_information from "./Statistical/Mission_information"
import Search_for_tasks from "./Statistical/Search_for_tasks"

const Main = () => {
    return (
        <Routes>
            <Route exact path="/" element={ <Home /> }></Route>
            <Route exact path="/login" element={ <Login /> }></Route>
            <Route exact path="/home" element={ <Home /> }></Route>
            <Route exact path="/duty" element={ <Duty /> }></Route>
            <Route exact path="/profile" element={ <Profile /> }></Route>
            <Route exact path="/Statistical/programReport" element={ <Program /> }></Route>
            <Route exact path="/Statistical/Template_report" element={ <Template_report /> }></Route>
            <Route exact path="/Statistical/Mission_report" element={ <Mission_report /> }></Route>
            <Route exact path="/Statistical/Mission_information" element={ <Mission_information /> }></Route>
            <Route exact path="/Statistical/Search_for_tasks" element={ <Search_for_tasks /> }></Route>
        </Routes>
    )
}

export default Main;