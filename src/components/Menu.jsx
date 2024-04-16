import React from 'react';
import Banner from "./Banner";
import PatientList from './PatientList.jsx';

function Menu({patient}){

    return (
    <div className="PatientList">
        <Banner/>
        <p>Mes patients</p>
        <PatientList patient={patient}/>
    </div>
    )}

export default Menu