import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

//components
import Nav from './components/nav/nav'
import Footer from './components/footer/footer'

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
      <Footer />
    </BrowserRouter>

  </div>
}

export default App
