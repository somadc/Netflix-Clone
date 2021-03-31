import React from  'react';
import Avtar from './Avtar'


function Card(props){
    return(
    <div className="cards">
      <div className="card ">
      <h1 classname="">{props.key}</h1>
      <Avtar imgSrc={props.imgSrc} />
        <div className="card_info">
          <span className="card_category">{props.title}</span>
          <h3 className="card_title">{props.name}</h3>
          <a href={props.link} target="">
            <button> Watch Now </button>
          </a>
        </div>
       </div>
    </div>
    )
  }

  export default Card;