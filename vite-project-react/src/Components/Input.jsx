import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import  './Input.css'
import { WishContext } from './WishContext'
import WishSelector from './WishSelector';

function Input({isPersonalWish}) {
  
    const [data,setData] = useState({Name:"",Wish:""})
    const [error,setError] = useState(false)
    const [email,setEmail] = useState("")
    const {wish,setWish} = useContext(WishContext)
    const handleChange = (event)=>{
       const {name,value} = event.target
        setData((prevData) => { return{...prevData,[name]:value} })
    }
    const handleEmailChange = (event)=>{
      const value = event.target.value
      setEmail(value)
    }
    const navigate = useNavigate()
  const handleSubmit =(e)=>{
    e.preventDefault();
    if(!data.Name || !data.Wish ){
    
    setError(true)
    return
    }
    
      setError(false)
      console.log(data)
      setWish(data)
      setData({Name:"",Wish:""})
      setEmail("")
    navigate('/wishes')
    
  }
  const Message = isPersonalWish?'Get Wish':'Send Wish'
  return (
    <div>
      {error && <div className='error'>Invalid credentials </div>}
      <form onSubmit={e=>handleSubmit(e)}>
        <label htmlFor="l1">Name:</label>
        <input id='l1' placeholder= {isPersonalWish?'Enter your name':'Enter Recipient Name'} onChange={handleChange} name='Name'  value={data.Name} type="text" />
        <br />
        { !isPersonalWish &&
          <>
        <label htmlFor="l2">Email</label>
        <input onChange={handleEmailChange} type="email"
         placeholder='recipient@gmail.com' name='Email' value={email} /> <br />
       </>
        }
        <label htmlFor="l3">Wish: </label>
        <input id='l3' onChange={handleChange} name='Wish' value={data.Wish} type="text" />
        {/* prewritten wishes the user can select from */}
        
        
        {error && <div className='error'>Name or wish cannot be empty! Ensure to feel them and try again</div>}
        <br />
        <h1>OR Select Wish Below</h1>
        <WishSelector />
        <button> {Message} </button>
        
      </form>
    </div>
  )
}

export default Input
