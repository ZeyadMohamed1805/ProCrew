import React from 'react';
import { Link } from 'react-router-dom';
import "../Sass/Carousel_Item/Carousel_Item.css";

export const Carousel_Item = (props) => {
  return (
    <div className="carousel-item">
      <h1>{props.header}</h1>
      <p>{props.paragraph}</p>
      <Link to={"/form"}><button>{props.button}</button></Link>
    </div>
  )
}
