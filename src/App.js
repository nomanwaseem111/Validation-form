import React, {useState} from 'react'
import Input from './Components/formFields/Input'

const App = () => {
 
     const [input, setInput] = useState({
         username:"",
         email:"",
         password:"",
         confirmPassword:""
     })


    const formField = [
      {
        id:1,
        name:"username",
        type:"text",
        placeholder:"username",
        label:"User Name",
        required:true,
        pattern:"^[A-Za-z0-9]{3,16}$",
        errorMessage:"username should be 3-16 characters and shouldn't include any special character!",
        autocomplete:"off"

      },
      {
        id:2,
        name:"email",
        type:"email",
        placeholder:"email",
        label:"Email",
        required:true,
        autocomplete:"off",
        errorMessage:"It should be valid email Address!",

      },
      {
        id:3,
        name:"password",
        type:"password",
        placeholder:"password",
        label:"Password",
        required:true,
        autocomplete:"off",
        errorMessage:"password should be 8-20 characters and include at least 1 letters, 1 number and 1 special character!",
        pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,


      },
      {
        id:4,
        name:"confirmPassword",
        type:"password",
        placeholder:"confirmPassword",
        label:"Confirm Password",
        required:true,
        autocomplete:"off",
        errorMessage: "Password don't match!",
        pattern: input.password,

      },
    ]

    const onChange = (e) => {
          setInput({...input, [e.target.name]:e.target.value})
    }
 
 
    const handleSubmit = (e) => {
         e.preventDefault()
    }
 
 
  return (
    <form onSubmit={handleSubmit}>
       {
        formField.map((e) => {
           return(
            <div>
             <Input key={e.id} {...e} onChange={onChange} value={input[e.name]}/>
            </div>
           )
        })
       }
      <button className='button'>Submit</button>     
     </form>
  )
}

export default App