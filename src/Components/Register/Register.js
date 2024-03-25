import React from 'react'
import './register.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    const[registerData,setRegisterdata]=useState({
        "username":"",
        "email":"",
        "phoneNumber":"",
        "password":"",
        "confirmPassword":"",
    })
    function handledata(e){
        let name=e.target.name
        let value=e.target.value
        setRegisterdata({...registerData, [name]:value})
        }

        const submitData= async(e)=>{
            e.preventDefault()
            if(registerData.password!==registerData.confirmPassword)  return alert("Passwords do not match")
            let response=await fetch('http://localhost:9000/register',{
                method:'POST',
                headers:{
                    "Content-Type": "application/json"
                },
                body:JSON.stringify(registerData)
            })
            let data=await  response.json()
            setRegisterdata({
                "username":"",
                "email":"",
                "phoneNumber":"",
                "password":"",
                "confirmPassword":"",
            })

            if(data.status==="required"){
                alert(data.message)
            }
            else if(data.status==="already"){
                alert(data.message)
            }
            else if(data.status==="success"){
                alert(data.message)
            }
            else if(data.status==="false"){
                alert(data.message)
            }
        }

        
        
  return (
    <>
        <div className="register">
            <h1>Sign Up</h1>
            <div className="main_row">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" alt="" />
                
                <div className="inputs">
                        <div className="signup">
                            <span>Sign Up with <b></b> <i className="fa-brands fa-facebook" ></i>
                            <i className="fa-brands fa-google" ></i>
                            <i className="fa-brands fa-twitter" ></i></span>
                        </div>
                    <p className='or'>Or</p>
                    <input type="text" name='username' placeholder='Username' value={registerData.username} onChange={handledata}/>
                    <input type="text" name='email' placeholder='Email address' value={registerData.email} onChange={handledata}/>
                    <input type="number" name='phoneNumber' placeholder='Phone number' value={registerData.phoneNumber} onChange={handledata}/>
                    <input type="password" name='password' placeholder='Password' value={registerData.password} onChange={handledata}/>
                    <input type="password" name='confirmPassword' placeholder='Confirm password' value={registerData.confirmPassword} onChange={handledata}/>
                    <span><input type="checkbox" className='checkbox' /> I have read and agree to the terms </span>
                    <button className='signUp_btn' onClick={submitData}>Register</button>
                    <p>Forgot password <Link to='/changePassword'>Reset here</Link>.</p>
                    <p>Already have an account? <Link to='/login'>Login here</Link></p>
                </div>
            </div>
            
        </div>
    </>
  )
  }


export default Register