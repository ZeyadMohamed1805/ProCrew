import React, { useState } from 'react';
import { Carousel_Item } from '../Carousel_Item/Carousel_Item';
import "../Sass/Body/Body.css";

export const Body = () => {
  let [carouselItemIndex, setCarouselItemIndex] = useState(0);

  // Storing the Carousel Properties in an Array of Objects
  const carouselItemProperties = [
    {id: 0, header: "Hungry?", paragraph: "Order food online from the nearest restaurants!", button: "Order Now!"},
    {id: 1, header: "Restaurant Owner?", paragraph: "Start delivering to millions of customers!", button: "Start Now!"},
    {id: 2, header: "New?", paragraph: "Register to our website & utilize our services!", button: "Register Now!"}
  ];

  // Creating an Array that will store all the items with their properties
  const carouselItems = [];

  //  Items are stored in the array after mapping over their properties
  {carouselItemProperties.map(object => (
    carouselItems.push(<Carousel_Item key={object.id} header={object.header} paragraph={object.paragraph} button={object.button} />)                  
  ))}

  // Switching the Carousel items
  const carouselItemsSwitch = (direction) => {
    if (direction === "next") {
      if (carouselItemIndex >= 0 && carouselItemIndex < 2) {
        setCarouselItemIndex(++carouselItemIndex);
      }
    } else if (direction === "back") {
      if (carouselItemIndex <= 2 && carouselItemIndex > 0) {
        setCarouselItemIndex(--carouselItemIndex);
      } 
    }
  }

  return (
    <section id="body">
        <div id="body-container">
            <div id="body-carousel">
                {carouselItems[carouselItemIndex]}
                <i id="left-arrow" className="fa-solid fa-chevron-left" onClick={() => carouselItemsSwitch("back")}></i>
                <i id="right-arrow" className="fa-solid fa-chevron-right" onClick={() => carouselItemsSwitch("next")}></i>
            </div>
        </div>
    </section>
  )
}