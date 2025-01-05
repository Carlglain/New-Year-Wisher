import React, { useState } from 'react'
import Input from '../Components/Input'
import { useNavigate } from 'react-router-dom';

function Welcome() {
  const [isPersonal, setIsPersonal] = useState(true);
  const handlePersonalWish = ()=>{
    console.log("Personal wish")
    if(isPersonal){
      return ;
    }
    setIsPersonal(true);
  }
  const handleAnotherWish = ()=>{
    console.log("Another person wish")
    if(!isPersonal){
      return ;
    }
    setIsPersonal(false);
  }
  return (
    <div>
      <h1>Welcome To The New Year Wisher</h1>
      <p>Fill the information below</p>
      <button onClick={handlePersonalWish}>Make a personal Wish</button><button onClick={handleAnotherWish}>Wish another person</button>
      <Input isPersonalWish = {isPersonal}/>   
    </div>
  )
}

export default Welcome
