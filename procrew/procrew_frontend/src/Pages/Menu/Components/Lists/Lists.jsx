import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import "../Sass/Lists/Lists.css";

export const Lists = (props) => {
  let path = window.location.pathname;
  let id = path[path.length - 1];

  const [menuAPI, setMenuAPI] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/getmenus/${id}`)
    .then(response => response.json())
    .then(data => {console.log(data); setMenuAPI(data)});
  }, []);
  
  return (
    <div id="lists">
        <div id="lists-container">
          <div id="lists-items">
            {menuAPI.map(item => (
              <div className="lists-section" key={item.id}>
                <h1 className="lists-header">{item.restaurant}'s Menu</h1>
                <div className="lists-info">
                  <h3>{item.breakfast_meal}</h3>
                  <div className="lists-add">
                    <p>${item.breakfast_price}.00</p>
                    <button >Add Item</button>
                  </div>
                </div>
                <div className="lists-info">
                  <h3>{item.lunch_meal}</h3>
                  <div className="lists-add">
                    <p>${item.lunch_price}.00</p>
                    <button >Add Item</button>
                  </div>
                </div>
                <div className="lists-info">
                  <h3>{item.dinner_meal}</h3>
                  <div className="lists-add">
                    <p>${item.dinner_price}.00</p>
                    <button >Add Item</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}
