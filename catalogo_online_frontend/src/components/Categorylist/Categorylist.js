import React from 'react';
import './Categorylist.css';

const categories = [
  { name: 'Saúde', icon: 'fas fa-heart' },
  { name: 'Restaurante', icon: 'fas fa-utensils' },
  { name: 'Moda', icon: 'fas fa-tshirt' },
  { name: 'Beleza', icon: 'fas fa-spa' },
  { name: 'Mercado', icon: 'fas fa-shopping-cart' },
  { name: 'Lojas', icon: 'fas fa-store' },
  { name: 'Serviços', icon: 'fas fa-wrench' },
];

function Categorylist() {
  return (
    <div className="category-list">
      {categories.map((category, index) => (
        <div key={index} className="category-item">
          <i className={category.icon}></i>
          <p>{category.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Categorylist;
