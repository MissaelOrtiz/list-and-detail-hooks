import React, { useState, useEffect } from 'react';
import VillagerList from '../components/villager/VillagerList';
import { fetchApi } from '../services/animalCrossingApi';

const AnimalCrossingList = () => {
  const [loading, setLoading] = useState(true);
  const [villagers, setVillagers] = useState([]);

  useEffect(() => {
    fetchApi()
      .then((villagers) => setVillagers(villagers))
      .finally(() => setLoading(false));
  }, []);

  if(loading) return <h1>Now Loading...</h1>;
  return <VillagerList villagers={villagers} />;
};

export default AnimalCrossingList;
