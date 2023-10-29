import React from "react";
import { Routes, Route } from 'react-router-dom';

import Login from "./account/Login";
import Home from "./Home";
import Duty from "./Duty";
import Profile from "./account/Profile";

const Main = () => {
    return (
        <Routes>
            <Route exact path="/" element={ <Home /> }></Route>
            <Route exact path="/login" element={ <Login /> }></Route>
            <Route exact path="/home" element={ <Home /> }></Route>
            <Route exact path="/duty" element={ <Duty /> }></Route>
            <Route exact path="/profile" element={ <Profile /> }></Route>
        </Routes>
    )
}

export default Main;