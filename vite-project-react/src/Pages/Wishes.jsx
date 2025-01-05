import React, { useContext } from 'react'
import { WishContext } from '../Components/WishContext'
function Wishes() {
  const {wish,setWish} = useContext(WishContext)
  const year = new Date().getFullYear()
  return (
    <div>
      {/* Incoporate and AI that will suggest what the user can do to ensure the wish they made comes true
      so in this effect i'll learn how to use an AI in my website and train it to be specific. */}
      <h1>Happy new year {year} {wish.Name}  
       <br /> for your wish  ' {wish.Wish} '  to be granted You must...</h1>
      <h2></h2>
    </div>
  )
}

export default Wishes
