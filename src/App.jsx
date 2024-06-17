import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

//pages
import Home from './pages/home/home'
import Admin from './pages/admin/admin'

function App() {

  return <div className='App'>

  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/admin' element={<Admin />}></Route>
    </Routes>
  </BrowserRouter>

  </div>
}

export default App
