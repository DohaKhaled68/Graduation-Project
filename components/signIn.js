import '../SignIn.css';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import useSignUpForm from '../customHook';

function SignIn() {
 const {inputs, handleInputChange, handleSubmit}=useSignUpForm();
  return (
      <div className="big">
        <div className="container">
          <div className="div11 row">
            <div className="child col-5">
              <p className="ttitle">
                Welcome Back! <br/>
                To keep connected with  us, Please login
              </p> 
              <Link to="/login">
               <button className="signIn">Login</button>
              </Link>
            </div>
            <div className="child2 col-7">
            <br/>
              <h3>Create your account</h3>
              <br/>
              <form className="container" style={{marginLeft:"30px"}} onSubmit={handleSubmit}>
                <label
                style={{fontFamily:"Quattrocento Sans", color: "#BC007C",marginLeft:"5px", fontSize: "20px"}}>
                First name&nbsp;&nbsp;&nbsp; 
                </label>
                <input
                style={{width: "300px", height: "20px", background: "rgba(0, 0, 0, 0.1)", borderRadius: "3px", marginLeft:"5px"}}
                type="text"
                name="Firstname"
                value={inputs.Firstname}
                onChange={handleInputChange}
                required/>
                <br/>
                <label style={{fontFamily:"Quattrocento Sans", right: "1025px",marginLeft:"5px", color: "#BC007C", fontSize: "20px"}}>Last name&nbsp;&nbsp;&nbsp;</label>
                <input style={{width: "300px", height: "20px", background: "rgba(0, 0, 0, 0.1)", borderRadius: "3px", marginLeft:"9px"}} type="text" name="Lastname"
                value={inputs.Lastname}
                onChange={handleInputChange} required/> <br/>
                <label style={{fontFamily:"Quattrocento Sans", right: "1025px",marginLeft:"5px", color: "#BC007C", fontSize: "20px"}}>Birth date&nbsp;&nbsp;</label>
                <input style={{width: "300px", height: "20px", background: "rgba(0, 0, 0, 0.1)", borderRadius: "3px", marginLeft:"15px"}} type="date" name="Age"
                value={inputs.Age}
                onChange={handleInputChange} required/>
                <br/>
                <label style={{fontFamily:"Quattrocento Sans", right: "1025px",marginLeft:"7px", color: "#BC007C", fontSize: "20px"}}>City&nbsp;&nbsp;&nbsp;&nbsp; </label>
                <select style={{width: "300px", height: "20px", background: "rgba(0, 0, 0, 0.1)", borderRadius: "3px", marginLeft:"50px"}} name="City"
                value={inputs.City}
                onChange={handleInputChange} required >
                  <option> </option>
                  <option>Cairo</option>
                  <option>Madrid</option>
                </select>
                <br/>
                <label style={{fontFamily:"Quattrocento Sans", right: "1025px",marginLeft:"7px", color: "#BC007C", fontSize: "20px"}}>Phone&nbsp;&nbsp; </label>
                <input style={{width: "300px", height: "20px", background: "rgba(0, 0, 0, 0.1)", borderRadius: "3px", marginLeft:"44px"}} type="number" min="1" name="Phone"
                value={inputs.Phone}
                onChange={handleInputChange} required/>
                <br/>
                <label style={{fontFamily:"Quattrocento Sans", right: "1025px",marginLeft:"5px", color: "#BC007C", fontSize: "20px"}}>Gender&nbsp; </label>
                <input style={{width: "60px", height: "15px", background: "rgba(0, 0, 0, 0.1)", borderRadius: "3px"}} type="radio" name="Gender" onChange={handleInputChange}/> Male&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input style={{width: "60px", height: "15px", background: "rgba(0, 0, 0, 0.1)", borderRadius: "3px"}} type="radio" name="Gender" onChange={handleInputChange}/> Female
                <br/>
                <label style={{fontFamily:"Quattrocento Sans", right: "1025px", color: "#BC007C",marginLeft:"7px", fontSize: "20px"}}>I'm a&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>
                <input style={{width: "60px", height: "15px", background: "rgba(0, 0, 0, 0.1)", borderRadius: "3px"}} type="radio" name="job" onChange={handleInputChange}/> Doctor&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input style={{width: "60px", height: "15px", background: "rgba(0, 0, 0, 0.1)", borderRadius: "3px"}} type="radio" name="job" onChange={handleInputChange}/> Patient
                <br/>
                <label style={{fontFamily:"Quattrocento Sans", right: "1025px",marginLeft:"5px", color: "#BC007C", fontSize: "20px"}}>Email&nbsp;&nbsp; </label>
                <input style={{width: "300px", height: "20px", background: "rgba(0, 0, 0, 0.1)", borderRadius: "3px", marginLeft:"45px"}} type="email" name="Email"
                value={inputs.Email}
                onChange={handleInputChange} required/>
                <br/>
                <label style={{fontFamily:"Quattrocento Sans", right: "1025px",marginLeft:"5px", color: "#BC007C", fontSize: "20px"}}>Password&nbsp; </label>
                <input style={{width: "300px", height: "20px", background: "rgba(0, 0, 0, 0.1)", borderRadius: "3px", marginLeft:"22px"}} type="password" name="Password1"
                value={inputs.Password1}
                onChange={handleInputChange} required/>
                <br/>
                <label style={{fontFamily:"Quattrocento Sans", right: "1025px", marginLeft:"5px",color: "#BC007C", fontSize: "20px"}}>Confirm password&nbsp; </label>
                <input style={{width: "242px", height: "20px", background: "rgba(0, 0, 0, 0.1)", borderRadius: "3px", marginLeft:"7px"}} type="password" name="Password2"
                value={inputs.Password2}
                onChange={handleInputChange} required/>
                <br/> <br/>
                <Link to="/login">
                <button className="signUp">SignUp</button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
}

export default SignIn;