import React, { useEffect, useState } from 'react';
import axios from 'axios'
var divStyle={
    margin :'8% 8%'
}
export default function DisplayStudent() {
    const [students,setStudents]=useState([])
    const getStudentList=()=>{
        axios.get('http://localhost:3000/api/student')
        .then((response)=>{
            console.log(response);
            setStudents(response.data)
        })
        .catch((error)=>[
            console.log(error)
        ])
    }
    useEffect(()=>{
        getStudentList()
    },[]);
  return (
    <div>
        <div style={divStyle}>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
students && students.map((students,i)=>{
    return(
        <tr key={i}>
            <td>{i}</td>
            <td>student.name</td>
            <td>student.email</td>
            <td>student.password</td>
        </tr>
    )
})
                    }
                </tbody>
            </table>

        </div>
      
    </div>
  )
}
