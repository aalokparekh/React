
import React from "react";
import { useState } from "react";

function StudentForm() {
    const [data, setdata] = useState({
        name: "",
        email: "",
        password: "",
        select: "",
        radio: false,
    });

    const handleChange = (e) => {
        const { value, type } = e.target;
        const newValue = type === "radio" ? value :value ;
        setdata({ ...data, [e.target.name]: newValue });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
    };

    return (
        <div className="main">
            <form onSubmit={handleSubmit} className="form" style={{ marginTop: "20px", marginBottom: "20px" }}>

                <label htmlFor="name" >Name <br /> </label>
                <input type="text" name="name" value={data.name} placeholder="Enter Your Name" onChange={(e) => handleChange(e)} />
                <br />
                <br />

                <label htmlFor="email">Email <br /> </label>
                <input type="email" name="email" value={data.email} placeholder="Enter Your Email" onChange={(e) => handleChange(e)} />
                <br />
                <br />

                <label htmlFor="password">Password <br /> </label>
                <input type="password" name="password" value={data.password} placeholder="Enter Your Password" onChange={(e) => handleChange(e)} />
                <br />
                <br />
                <label htmlFor="select">City <br /> </label>
                <select name="select" className="select" value={data.select} onChange={(e) => handleChange(e)}>
                    <option value="">Select Your City</option>
                    <option value="Surat">Surat</option>
                    <option value="Vadodara">Vadodara</option>
                    <option value="Ahmedabad">Ahmedabad</option>
                    <option value=" Rajkot"> Rajkot</option>
                    <option value="Patan">Patan</option>
                </select>
                <br />
                <br />

                <label>Gender </label>
                <br />
                <label>Male</label>
                <input type="radio" name="radio" value="male" onChange={(e) => handleChange(e)} /> &nbsp;
                <label>Female</label>
                <input type="radio" name="radio" value="female" onChange={(e) => handleChange(e)} />
                <br />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
}

export default StudentForm;