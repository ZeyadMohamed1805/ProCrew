import React from 'react';
import "../Sass/Lists/Lists.css";

export const Lists = () => {
  const items = [
    {id: 0, title: "Breakfast0", items: [{id: "zero", name: "Coca0", price: 250}, {name: "Coca0", price: 250}, {name: "Coca0", price: 250}, {name: "Coca0", price: 250}]},
    {id: 1, title: "Breakfast1", items: [{id: "one", name: "Coca1", price: 251}, {name: "Coca1", price: 251}, {name: "Coca1", price: 251}, {name: "Coca1", price: 251}]},
    {id: 2, title: "Breakfast2", items: [{id: "two", name: "Coca2", price: 252}, {name: "Coca2", price: 252}, {name: "Coca2", price: 252}, {name: "Coca2", price: 252}]},
    {id: 3, title: "Breakfast3", items: [{id: "three", name: "Coca3", price: 253}, {name: "Coca3", price: 253}, {name: "Coca3", price: 253}, {name: "Coca3", price: 253}]},
    {id: 4, title: "Breakfast4", items: [{id: "four", name: "Coca4", price: 254}, {name: "Coca4", price: 254}, {name: "Coca4", price: 254}, {name: "Coca4", price: 254}]}
  ];

  return (
    <div id="lists">
        <div id="lists-container">
          <div id="lists-items">
            {items.map(item => (
              <div className="lists-section" key={item.id}>
                <h1 className="lists-header">{item.title}</h1>
                {item.items.map(description => (
                  <div className="lists-description" key={description.id}>
                    <h3>{description.name}</h3>
                    <div className="lists-add">
                      <p>${description.price}.00</p>
                      <button>Add Item</button>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}
