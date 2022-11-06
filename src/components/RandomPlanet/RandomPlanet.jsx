import { useState, useEffect } from "react";
import SwapiService from '../../services/SwapiService';
import Spinner from '../Spinner/Spinner';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';
import './RandomPlanet.css';

export default function RandomPlanet() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [planet, setPlanet] = useState({});
  const {id: id, name: name, population: population, rotationPeriod: rotationPeriod, diameter: diameter} = planet;

  const swapiService = new SwapiService();

  function onError(err) {
    setError(true);
    setLoading(false);
  } 

  function updatePlanet() {
    console.log('_UPDATE_RANDOM_PLANET_');
    const randomId = Math.floor(Math.random() * 18) + 2;

    swapiService.getPlanet(randomId)
    .then((planet) => {
      setPlanet(planet);
      setLoading(false);
    })
    .catch((err) => {
      onError();
    });
  }

  const hasData = !(loading || error);

  useEffect(() => {
    const interval = setInterval(() => {
      updatePlanet();
    }, 2000);
    //return () => clearInterval(interval);
  }, []);

  return (
    <div className="random-planet jumbotron rounded">
      {loading ? <Spinner /> : hasData ? <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="Planet Image" className="planet-image" /> : <ErrorIndicator />}
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population </span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period </span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter </span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}