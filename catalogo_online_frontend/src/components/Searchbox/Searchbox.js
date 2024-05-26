import React, { useState } from 'react';
import './Searchbox.css';

function Searchbox() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();
    fetch(`http://localhost:5000/api/search?q=${searchTerm}`)
      .then(response => response.json())
      .then(data => setResults(data))
      .catch(error => console.error('Error fetching search results:', error));
  };

  return (
    <div className="searchbox-container">
      <form onSubmit={handleSearch} className="searchbox-form">
        <input
          type="text"
          placeholder="Digite o que você procura..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>
      <div className="search-results">
        {results.map((commerce) => (
          <div key={commerce.id} className="search-result-item">
            <h2>{commerce.nome}</h2>
            <p>{commerce.categoria}</p>
            <p>{commerce.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Searchbox;
