import React, { useState, useEffect } from 'react';

import { fetchPictures } from './lib/api';

import DogCardInfo from './components/DogCardInfo';
import BreedList from './components/BreedList';

import './App.css';

function App() {
  const [pictures, setPictures] = useState([]);
  const [selectedBreedId, setSelectBreedId] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadPictures = async () => {
      if (selectedBreedId !== '') {
        setIsLoading(loading => !loading);
        const fetchedPictures = await fetchPictures(selectedBreedId, 20);
        setPictures(fetchPictures);
        setIsLoading(loading => !loading);
      }
    };
    loadPictures();
  }, [selectedBreedId]);
  return (
   <div className = 'container'>
    <header className = 'section has-text-centered'>
      <h1 className = 'title is-size-3 has-text-primary'>
        Search dog pictures
      </h1>
      <p>Filter by breed for more choices</p>
    </header>
    <hr />
   </div>
  );
}

export default App;
