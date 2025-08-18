import axios from 'axios';
import React, { useState } from 'react'

function Register() {
    const [RegForm , setForm ] = useState({
        name:'',
        email:'',
        password:'',
    })

    const HandleForm = (e) => {
        setForm({...RegForm ,[e.target.name]: e.target.value})
    }
    console.log(RegForm);
    
    const HandleSubmit = async (e) => {
        e.prevetDefault()

        try{
            const RegData = await axios.post('https://localhost:7023/api/Register',RegForm)
        }catch(err){
            console.error("Something fishy" , err)
        }
    }
    
  return (
    <div>
      <form onSubmit={HandleSubmit}>
        <label>Name</label>
        <input type="text" value={RegForm.name} id='name' name='name' onChange={HandleForm}/>
        <label>Email</label>
        <input type="email" value={RegForm.email} id='email' name='email' onChange={HandleForm}/>
        <label>Password</label>
        <input type="password" value={RegForm.password} id='password' name='password' onChange={HandleForm}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Register
