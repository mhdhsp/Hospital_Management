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
    <div >
      <form onSubmit={HandleLogin} className='flex flex-col justify-center items-center m-5 p-5'>
        <label>Name</label>
            <input className='m-2 p-2' type="text" id='email' name='UserName' value={LogForm.UserName} onChange={HandleLog} placeholder='Enter Your Name'/>
        <label>Password</label>
            <input className='m-2 p-2' type="password" id='password' name='PassWord' value={LogForm.PassWord} onChange={HandleLog} placeholder='Enter Your Password'/>
            <button className='m-2 p-2' type='submit '>Submit</button>
            <h1>{localStorage.getItem("UserName")}</h1>
      </form>
    </div>
  )
}

export default Login

