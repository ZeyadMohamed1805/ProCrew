import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../Sass/Restaurants/Restaurants.css";

export const Restaurants = () => {
  const [loadCounter, setLoadCounter] = useState(8);

  const restaurants = [
    {id: 0, icon: "icon0", title: "title0"},
    {id: 1, icon: "icon1", title: "title1"},
    {id: 2, icon: "icon2", title: "title2"},
    {id: 3, icon: "icon3", title: "title3"},
    {id: 4, icon: "icon4", title: "title4"},
    {id: 5, icon: "icon5", title: "title5"},
    {id: 6, icon: "icon6", title: "title6"},
    {id: 7, icon: "icon7", title: "title7"},
    {id: 8, icon: "icon8", title: "title8"},
    {id: 9, icon: "icon9", title: "title9"},
    {id: 10, icon: "icon10", title: "title10"},
    {id: 11, icon: "icon11", title: "title11"},
    {id: 12, icon: "icon12", title: "title12"},
    {id: 13, icon: "icon13", title: "title13"},
    {id: 14, icon: "icon14", title: "title14"},
    {id: 15, icon: "icon15", title: "title15"},
    {id: 16, icon: "icon16", title: "title16"},
    {id: 17, icon: "icon17", title: "title17"},
    {id: 18, icon: "icon18", title: "title18"}
  ];

  let displayedRestaurants = restaurants.slice(0, loadCounter);

  return (
    <div id="restaurants">
        <div id="restaurants-container">
            <input type="search" placeholder="Search by Name & Category..." />
            <div id="restaurants-grid">
              {displayedRestaurants.map(restaurant => (
                  <Link to={"/menu"}>
                    <div key={restaurant.id} className="restaurant">
                      <i>{restaurant.icon}</i>
                      <p>{restaurant.title}</p>
                    </div>
                  </Link>
              ))}
            </div>
            <button onClick={() => setLoadCounter(previous => previous + 8)}>Load More!</button>
        </div>
    </div>
  )
}
