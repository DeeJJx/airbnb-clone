import React from 'react';
import './Card.css';
import cardImage from '../../katie-zaferes.png';
import star from '../../star-1.png';

function Card(props) {
  let badgeText;
  if(props.el.openSpots && props.el.location){
    if(props.el.openSpots === 0){
      badgeText = "SOLD OUT"
    } else if (props.el.location === "Online"){
      badgeText = "Online"
    }
  } else {
    badgeText = "";
  }

  return (
    <section className="">
        <div className='individual-card'>
          {props.el.openSpots === 0 && <div className='card-badge'>SOLD OUT</div>}
            <img src={props.el.coverImg} className="card-image" alt="Card Experience"/>
            <div className='card-text'>
                <p className='card--stats'><img src={star} alt="star" className='card--star'/> <span>{props.el.stats.rating}</span> <span>({props.el.stats.reviewCount})</span> <span>{props.el.location}</span></p>
                <p className='card--title'>{props.el.title}</p>
                <p className='card--price'><strong>From ${props.el.price} /</strong> person</p>
            </div>
        </div>
    </section>
  );
}

export default Card;
