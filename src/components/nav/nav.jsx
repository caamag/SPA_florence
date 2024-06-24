
import './nav.css'
import { NavLink } from 'react-router-dom'

//images
import logo from '../../../public/logo_branco_florence.png'

const Nav = () => {

    return <nav className='nav'>
        <ul className='nav-items'>
            <NavLink to={'/'}><img src={logo} alt="" className='logo-nav' /></NavLink>
        </ul>

    </nav>

}

export default Nav;