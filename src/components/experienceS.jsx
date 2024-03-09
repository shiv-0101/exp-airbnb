import Experience from '../components/experience'

import '../App.css'
import data from '../assets/data.js'

const cards = data.map(item => {
   return (
       <Experience 

            key = {item.id}  // to get rid of error of childern key...
            item = {item}
           /* img={item.coverImg}
           rating={item.stats.rating}
           status={item.status}
           reviewCount={item.stats.reviewCount}
           location={item.location}
           title={item.title}
           price={item.price} */
       />
   )
})

function Experiences(){
    return(
        <div className='experiences'>

         {cards}
        </div>
    )
}

export default Experiences