import { createContext, useState } from "react";

export const WishContext = createContext()
export const WishContextProvider=({children})=>{
const [wish, setWish] = useState([])
return(
<WishContext.Provider value={{wish,setWish}} >
    {children}
</WishContext.Provider>
)
}