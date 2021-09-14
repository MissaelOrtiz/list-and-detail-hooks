import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchVillager } from '../services/animalCrossingApi';

const AnimalCrossingDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [villager, setVillager] = useState({});

  useEffect(() => {
    fetchVillager(id)
      .then((villager) => setVillager(villager))
      .finally(() => setLoading(false));
  }, [id]);

  if(loading) return <h1>Now Loading...</h1>;
  return (
    <div>
      <img src={villager.image} alt={villager.name} height={'400px'}/>
      <p>{villager.name}</p>
      <p>{villager.gender}</p>
      <p>{villager.quote}</p>
      <p>{villager.species}</p>
      <p>{villager.birthday}</p>
      <p>{villager.phrase}</p>
      <p>{villager.style}</p>
    </div>
  );
};

export default AnimalCrossingDetail;
