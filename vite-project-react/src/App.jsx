import React from 'react'
import Welcome from './Pages/Welcome'
import { Route, Routes } from 'react-router-dom'
import Wishes from './Pages/Wishes'

function App() {
  return (
<Routes>
  <Route path='/' element={<Welcome />} />
  <Route path='/wishes' element={<Wishes />}/>
</Routes>
    
  )
}

export default App
