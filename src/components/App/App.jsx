import {useState} from 'react';

import Header from '../Header/Header';
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import ErrorButton from '../ErrorButton/ErrorButton';
import PeoplePage from '../PeoplePage/PeoplePage';

import './App.css'

export default function App() {
  const [showRandomPlanet, setShowRandomPlanet] = useState(true);

  function toggleRandomPlanet() {
    setShowRandomPlanet(!showRandomPlanet);
  }

  return (
    <div className="stardb-app">
      <Header />
      {showRandomPlanet ? <RandomPlanet /> : <div></div>}

      <div className="buttons">
        <button className="toggle-planet btn btn-warning btn-lng" onClick={toggleRandomPlanet}>
          Toggle Random Planet
        </button>

        <ErrorButton />
      </div>

      <PeoplePage />
    </div>
  );
}