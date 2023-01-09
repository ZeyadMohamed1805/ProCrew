import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../Sass/Restaurants/Restaurants.css";

export const Restaurants = () => {
  const [menusAPI, setMenusAPI] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/getmenus")
    .then(response => response.json())
    .then(data => {console.log(data); setMenusAPI(data)});
  }, []);

  return (
    <div id="restaurants">
        <div id="restaurants-container">
            <input type="search" placeholder="Search by Name & Category..." />
            <div id="restaurants-grid">
              {menusAPI.map(menu => (
                  <Link key={menu.id} to={"/menu"}>
                    <div id={menu.id} className="restaurant">
                      <i>{menu.restaurant}</i>
                      <p>{menu.cuisine}</p>
                    </div>
                  </Link>
              ))}
            </div>
            <button>Load More!</button>
        </div>
    </div>
  )
}
