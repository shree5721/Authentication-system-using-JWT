import React from 'react'
import { useState } from 'react'
import './changepassword.css'
import { Link } from 'react-router-dom'

const ChangePassword = () => {
    const[Data,setData]=useState({
        "email":"",
        "oldPassword":"",
        "newPassword": "",
        "confirmNewPassword":""
    })
    function handledata(e){
        let name=e.target.name
        let value=e.target.value
        setData({...Data, [name]:value})
        }

        const submitData=(event)=>{
            event.preventDefault()
            if (Data.newPassword!== Data.confirmNewPassword) {
                alert("passwords do not match")
            }
            else{

            }

        }
  return (
    <>
    <div className="change">
            <h1>Change Password</h1>
            <div className="main_row">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" alt="" />
                
                <div className="inputs">
                <div className="signup">
                    <span>Sign Up with <b></b> <i className="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-google"></i>
                    <i class="fa-brands fa-twitter"></i></span>
                </div>
                <p className='or'>Or</p>
                    <input type="text" name='email' placeholder='Email address' value={Data.email} onChange={handledata}  />
                    <input type="text" name='oldPassword' placeholder='Old password' value={Data.oldPassword} onChange={handledata}  />
                    <input type="text" name='newPassword' placeholder='New password' value={Data.newPassword} onChange={handledata}  />
                    <input type="text" name='confirmNewpassword' placeholder='Confirm password' value={Data.confirmNewPassword} onChange={handledata}  />
                    
                    <button className='signUp_btn' onClick={submitData}>Login</button>
                    <p>Dont have an account? <Link to='/register'>Register here</Link></p>
                </div>
            </div>
        </div>
    </>
  )
}

export default ChangePassword