import React from "react";
import AddStudent from "./AddStudent.js";
import DisplayStudent from "./DisplayStudent.js";
import EditStudent from "./EditStudent.js";
import { Route, Routes } from 'react-router-dom';


export const Main=()=>{
    return(
        <div>
          <Routes>
            <Route exact path='/' Component={DisplayStudent}/>
            <Route exact path='/list' Component={DisplayStudent}/>
            <Route exact path='/addStudent' Component={AddStudent}/>
            <Route exact path='/editStudent/email' Component={EditStudent}/>
          </Routes>
        </div>
    )
}