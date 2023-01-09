import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../Sass/Restaurants/Restaurants.css";

export const Restaurants = () => {
  const [menusAPI, setMenusAPI] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchCategory, setSearchCategory] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/getmenus")
    .then(response => response.json())
    .then(data => {console.log(data); setMenusAPI(data)});
  }, []);

  return (
    <div id="restaurants">
        <div id="restaurants-container">
            <div id="searches">
              <input type="search" placeholder="Search by Name..." onChange={(e) => setSearchName(e.target.value)} />
              <input type="search" placeholder="Search by Category..." onChange={(e) => setSearchCategory(e.target.value)} />
            </div>
            <div id="restaurants-grid">
              {menusAPI
              .filter(item => {return searchName.toLowerCase() === "" && searchCategory.toLowerCase() === "" ? item : item.restaurant.toLowerCase().includes(searchName.toLowerCase()) && item.cuisine.toLowerCase().includes(searchCategory.toLowerCase())})
              .map(menu => (
                  <Link key={menu.id} to={`/menu/${menu.id}`}>
                    <div id={menu.id} className="restaurant">
                      <h2>{menu.restaurant}</h2>
                      <p>{menu.cuisine}</p>
                    </div>
                  </Link>
              ))}
            </div>
        </div>
    </div>
  )
}
