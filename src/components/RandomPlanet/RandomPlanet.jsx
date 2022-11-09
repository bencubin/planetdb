import {useState, useEffect} from 'react';

import SwapiService from '../../services/SwapiService';
import Spinner from '../Spinner/Spinner';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';

import './RandomPlanet.css';

export default function RandomPlanet() {
  const [planet, setPlanet] = useState({});
  const {id, name, population, rotationPeriod, diameter} = planet;

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  function onError(err) {
    setError(true);
    setLoading(false);
  } 

  function updatePlanet() {
    const swapiService = new SwapiService();
    const randomId = Math.floor(Math.random() * 18) + 2;

    swapiService.getPlanet(randomId)
    .then((planet) => {
      setPlanet(planet);
      setLoading(false);
    })
    .catch((err) => {
      onError(err);
    });
  }

  useEffect(() => {
    const interval = setInterval(() => {
      updatePlanet();
    }, 2000);

    return () => clearInterval(interval);
  },[]);

  const hasData = !(loading || error);

  return (
    <div className="random-planet jumbotron rounded">
      {loading ? <Spinner /> : hasData ? <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="Planet" className="planet-image" /> : <ErrorIndicator />}
      
      <div className="planet-info">
        <h4>{loading ? 'Loading...' : name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population: </span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation period: </span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter: </span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}