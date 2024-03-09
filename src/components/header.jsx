import MainImg from '../assets/Group.png'
import '../App.css'

function Header(){
    return(
        <div className='header'>
            <img className='mainImg' src={MainImg} alt="" />
            <h1 className='headingExp'>Online Experiences</h1>
            <p className='paraExp'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</p>
        </div>
    )
}


export default Header