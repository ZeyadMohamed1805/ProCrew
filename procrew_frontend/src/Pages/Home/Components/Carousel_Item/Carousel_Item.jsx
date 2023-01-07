import React from 'react';
import "../Sass/Carousel_Item/Carousel_Item.css";

export const Carousel_Item = (props) => {
  return (
    <div className="carousel-item">
      <h1>{props.header}</h1>
      <p>{props.paragraph}</p>
      <button>{props.button}</button>
    </div>
  )
}
