import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import  './Input.css'
import { WishContext } from './WishContext'
function Input() {
  
    const [data,setData] = useState({Name:"",Wish:""})
    const [error,setError] = useState(false)

    const {wish,setWish} = useContext(WishContext)
    const handleChange = (event)=>{
       const {name,value} = event.target
        setData((prevData) => { return{...prevData,[name]:value} })
    }
    const navigate = useNavigate()
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!data.Name || !data.Wish ){
    
    setError(true)
    return
    }
    
      setError(false)
      console.log(data)
      setWish(data)
      
    navigate('/wishes')
    
  }
  return (
    <div>
      {error && <div className='error'>Invalid credentials </div>}
      <form onSubmit={e=>handleSubmit(e)}>
        <label htmlFor="l1">Name:</label>
        <input id='l1' onChange={handleChange} name='Name'  value={data.Name} type="text" />
        <br />
        <label htmlFor="l2">Wish: </label>
        <input id='l2' onChange={handleChange} name='Wish' value={data.Wish} type="text" />
        {error && <div className='error'>Name or wish cannot be empty! Ensure to feel them and try again</div>}
        <br />
        <button> Get Wish </button>
      </form>
    </div>
  )
}

export default Input
