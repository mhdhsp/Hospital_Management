import axios from 'axios'
import React, { useState } from 'react'

function Login() {

    const [LogForm , setLogform ] = useState({
        userName:'',
        passWord:'',
    })

    const HandleLog = (e) => {
        setLogform({...LogForm , [e.target.name]: e.target.value})
    }
    const HandleLogin = async (e) => {
        e.preventDefault()

        try{
            const res = await axios.post('https://localhost:7023/api/Auth', LogForm)
            console.log("Successfull" , res);
        }catch(err){
            console.error("Error" ,err)
        }
    }
  return (
    <div>
      <form onSubmit={HandleLogin}>
        <label>Name</label>
            <input type="text" id='email' name='userName' value={LogForm.userName} onChange={HandleLog} placeholder='Enter Your Name'/>
        <label>Password</label>
            <input type="password" id='password' name='passWord' value={LogForm.passWord} onChange={HandleLog} placeholder='Enter Your Password'/>
      </form>
    </div>
  )
}

export default Login

