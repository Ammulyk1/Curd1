import React, { useState } from 'react'
const customStyle = {
    width: '300px',
    margin: '0 auto'
}
export const AddStudent = () => {
    const [student, setStudent] = useState({
        name: '',
        email: '',
        password: ''
    })
    const handleChange = (e) => {
        const obj = { ...student, [e.target.name]: e.target.value }
        setStudent(obj)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(student)
    }
    return (
        <div className='container'>
            <form style={customStyle} onSubmit={handleSubmit}>
                <label>Name</label>
                <input name="name" type="text" value={student.name} onChange={handleChange} className="form-control" />
                <br/>
                <label>Email</label>
                <input name="email" type="email" value={student.email} onChange={handleChange} className="form-control" />
                 <br/>
                 <label>Password</label>
                <input name="password" type="password" value={student.batch} onChange={handleChange} className="form-control" />
            </form>

        </div>
    )
}
export default AddStudent


