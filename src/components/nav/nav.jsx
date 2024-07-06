
import './nav.css'

//images
import logo from '../../../public/logo_branco_florence.png'

const Nav = () => {

    return <nav className='nav'>
        <ul className='nav-items'>
            <a href='#'><img src={logo} alt="" className='logo-nav' /></a>
        </ul>

    </nav>

}

export default Nav;