import { useState, useEffect } from "react";
import SwapiService from '../../services/SwapiService';
import './RandomPlanet.css';

export default function RandomPlanet() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [population, setPopulation] = useState('');
  const [rotationPeriod, setRotationPeriod] = useState('');
  const [diameter, setDiameter] = useState('');

  const swapiService = new SwapiService();

  function updatePlanet() {
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    const randomId = getRandomInt(25) + 1;

    swapiService.getPlanet(randomId).then((planet) => {
      setId(randomId);
      setName(planet.name);
      setPopulation(planet.population);
      setRotationPeriod(planet.rotation_period);
      setDiameter(planet.diameter);
    });
  }

  useEffect(() => {
    return updatePlanet();
  }, []);

  return (
    <div className="random-planet jumbotron rounded">
      <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="Planet Image" className="planet-image" />

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