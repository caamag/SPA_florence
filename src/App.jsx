import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

//components
import Nav from './components/nav/nav'

//pages
import Home from './pages/home/home'
import Admin from './pages/admin/admin'

function App() {

  return <div className='App'>

    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/admin' element={<Admin />}></Route>
      </Routes>
    </BrowserRouter>

  </div>
}

export default App
