import axios from 'axios';
import React, { useState } from 'react'

function Register() {
    const [RegForm , setForm ] = useState({


        Id:0,
        UserName:'',
        Email:'',
        PassWord:'',
        Role:"user"

    })

    const HandleForm = (e) => {
        setForm({...RegForm ,[e.target.name]: e.target.value})
    }
    console.log(RegForm);
    
    const HandleSubmit = async (e) => {
const RegData = await axios.post('https://localhost:7023/api/Register',RegForm)

        e.preventDefault()

        try{

            const RegData = await axios.post('https://localhost:7023/api/Register',RegForm)

        }catch(err){
            console.error("Something fishy" , err);
        }
    }
    
  return (
    <div>
      <form onSubmit={HandleSubmit}>
        <label>Name</label>


        <input type="text" value={RegForm.UserName} id='name' name='UserName' onChange={HandleForm}/>

        <label>Email</label>
        <input type="email" value={RegForm.Email} id='email' name='Email' onChange={HandleForm}/>
        <label>Password</label>

        <input type="password" value={RegForm.PassWord} id='password' name='PassWord' onChange={HandleForm}/>


        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Register
