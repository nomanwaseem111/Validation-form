import React, {useState} from 'react'

import './style.css'

const Input = ({label,onChange,errorMessage,...e}) => {
  
    const [focused, setfocused] = useState(false)

    return (
    <div className='inputField'>
      <label>{label}</label>
      <input {...e} onChange={onChange} onBlur={() => setfocused(true)} 
        focused={focused.toString()}
        onFocus={() => e.name === "confirmPassword" && setfocused(true)}

      />
      <span>{errorMessage}</span>
    </div>
    )
}

export default Input