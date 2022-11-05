export default class SwapiService {
  _apiBase = 'https://swapi.dev/api';
  
  async getResouce(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }

    const body = res.json();
    return body;
  }

  async getAllPeople() {
    const res = await this.getResouce(`/people/`);
    return res.results;
  }

  getPerson(id) {
    return this.getResouce(`/people/${id}/`);
  }

  async getAllPlanets() {
    const res = await this.getResouce(`/planets/`);
    return res.results;
  }

  getPlanet(id) {
    return this.getResouce(`/planets/${id}/`);
  }

  async getAllStarships() {
    const res = await this.getResouce(`/starships/`);
    return res.results;
  }

  getStarship(id) {
    return this.getResouce(`/starships/${id}/`);
  }
}