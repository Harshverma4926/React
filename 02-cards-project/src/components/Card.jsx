import React from 'react'
import {Star} from 'lucide-react'

const Card = (props) => {
  return (
    <div>
      <div className='card'>
        <div className='top'>
            <div className='top-1'>
                <img src={props.image} alt=''></img>
                <h4 className='star'><Star size={15} />{props.rating}</h4>
            </div>
            <div className='top-2'>
                <h3>{props.name}</h3>
                <div className='spec'>
                <h4>{props.passion}</h4>
                <h4>{props.location}</h4>
                <h4>{props.experience}</h4>
                <h4>{props.consultations}</h4>
                </div>
            </div>
        </div>
        <div className='centre'>
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
            <h4>{props.tag3}</h4>
        </div>
        <div className='bottom'>
            <div>
                <h4>${props.pay}/hr</h4>
                <p>{props.mode}</p>
            </div>
            <button>Book Consultation</button>
        </div>
      </div>
    </div>
  )
}

export default Card
