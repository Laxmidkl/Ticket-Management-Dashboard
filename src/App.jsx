import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout'
import Overview from './Pages/Overview'

const App = () => {
  return (
<>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Layout/>}>
  <Route index element={<Overview/>}/>

  </Route>
</Routes>
</BrowserRouter>
</>
  )
}

export default App