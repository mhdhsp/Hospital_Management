import axios from 'axios'
import React, { useState } from 'react'

function Login() {

    const [LogForm , setLogform ] = useState({
        UserName:'',
        PassWord:'',
    })

    const HandleLog = (e) => {
        setLogform({...LogForm , [e.target.name]: e.target.value})
    }
    const HandleLogin = async (e) => {
        e.preventDefault()

        try{
            const res = await axios.post('https://localhost:7023/api/Auth/login', LogForm)
            console.log("Successfull" , res.data);
            localStorage.setItem("token",res.data.token);
        }catch(err){
            console.error("Error" ,err)
        }
    }
  return (
    <div>
      <form onSubmit={HandleLogin}>
        <label>Name</label>
            <input type="text" id='email' name='UserName' value={LogForm.UserName} onChange={HandleLog} placeholder='Enter Your Name'/>
        <label>Password</label>
            <input type="password" id='password' name='PassWord' value={LogForm.PassWord} onChange={HandleLog} placeholder='Enter Your Password'/>
            <button type='submit '>Submit</button>
            <h1>{localStorage.getItem("UserName")}</h1>
      </form>
    </div>
  )
}

export default Login

