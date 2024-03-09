import Logo from '../assets/airbnb-logo.png'
import '../App.css'

function Navbar() {
    return (
        <div className='nav'>
            <img className='logo' src={Logo} alt="" />
        </div>
    )
}

export default Navbar