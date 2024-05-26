import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CommerceDetails.css';

function CommerceDetails() {
  const { id } = useParams();
  const [commerce, setCommerce] = useState(null);

  useEffect(() => {
    // Fetch data from your backend
    fetch(`/api/commerces/${id}`)
      .then(response => response.json())
      .then(data => setCommerce(data))
      .catch(error => console.error('Error fetching commerce data:', error));
  }, [id]);

  if (!commerce) {
    return <div>Loading...</div>;
  }

  return (
    <div className="commerce-details">
      <img src={commerce.logoUrl} alt={`${commerce.name} logo`} className="commerce-logo" />
      <h1>{commerce.name}</h1>
      <p className="description">{commerce.description}</p>
      <div className="info">
        <h2>Informações:</h2>
        <p>Telefone: {commerce.phone}</p>
        <p>Website: <a href={commerce.website} target="_blank" rel="noopener noreferrer">{commerce.website}</a></p>
        <p>Horário de Atendimento: {commerce.hours}</p>
        <p>Endereço: {commerce.address}</p>
      </div>
      <div className="detailed-info">
        <h2>Informações Detalhadas</h2>
        <p>{commerce.detailedInfo}</p>
      </div>
    </div>
  );
}

export default CommerceDetails;
