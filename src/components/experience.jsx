
import Star from '../assets/Star.png'
import '../App.css'

function Experience(props){
    return(
        <div className='experience'>
            <div className="card">
                <div className="sec0">
                   <img className='card-main-img' src={`../assets/${props.item.coverImg}`} alt="" /> 
                   <p className='card-status'>{props.item.status}</p>
                </div>
                <div className="sec1">
                    <img className='card-star-img' src={Star} alt="" />
                    <p className='rating'>{props.item.stats.rating}</p>
                    <p className='reviews'>({props.item.stats.reviewCount})</p>
                    <p className='country'>{props.location}</p>
                </div>
                <div className="sec2">
                    <p className='card-heading'>{props.item.title}</p>
                    <p className='card-price'><strong>From ${props.item.price}</strong> / Person</p>
                </div>
            </div>
        </div>
    )
}

export default Experience