import React from 'react'
import Input from '../Components/Input'
import { useNavigate } from 'react-router-dom';
function Welcome() {
  
  return (
    <div>
      <h1>Welcome To The New Year Wisher</h1>
      <p>Fill the information below</p>
      <Input />   
    </div>
  )
}

export default Welcome
