export default class SwapiService {
  apiBase = 'https://swapi.dev/api';
  
  async getResouce(url) {
    const res = await fetch(`${this.apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }

    const body = res.json();
    return body;
  }

  extractId(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }

  // planets

  transformPlanet(planet) {
    return {
      id: this.extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    }
  }

  async getAllPlanets() {
    const res = await this.getResouce(`/planets/`);
    return res.results.map(this.transformPlanet);
  }

  async getPlanet(id) {
    const planet = await this.getResouce(`/planets/${id}/`);
    return this.transformPlanet(planet);
  }

  // people

  transformPerson(person) {
    return {
      id: this.extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color
    }
  }

  async getAllPeople() {
    const res = await this.getResouce(`/people/`);
    return res.results.map(this.transformPerson);
  }

  async getPerson(id) {
    const person = await this.getResouce(`/people/${id}/`);
    return this.transformPerson(person);
  }

  // starships

  transformStarship(starship) {
    return {
      id: this.extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargo_capacity
    }
  }

  async getAllStarships() {
    const res = await this.getResouce(`/starships/`);
    return res.results.map(this.transformStarship);
  }

  async getStarship(id) {
    const starship = await this.getResouce(`/starships/${id}/`);
    return this.transformStarship(starship);
  } 
}