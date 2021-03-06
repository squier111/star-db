//https://swapi.co/


export default class SwapiService {

  _apiBase = 'https://swapi.co/api';
  _imageBase = 'https://starwars-visualguide.com/assets/img';

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);
    
    if(!res.ok) {
      throw new Error(`could not fetch ${url}  receved ${res.status}`)
    }
    return await res.json();
  }


  // getResourceImg = async (url) => {
  //   const res1 = await fetch(`${this._imageBase}${url}`);
    
  //   if(!res1.ok) {
  //     throw new Error(`could not fetch ${url}  receved ${res1.status}`)
  //   }
  //   console.log(res1);
  //   return await res1.json();
  // }

  
  getAllPeople = async () => {
    const res = await this.getResource(`/people/`);
    return res.results.map(this._transformPerson);
  }
  getPerson = async (id) => {
    const person = await this.getResource(`/people/${id}/`)
    return this._transformPerson(person);
  }
  getAllPlanets = async () =>  {
    const res = await this.getResource(`/planets/`);
    return res.results.map(this._transformPlanet);
  }
  getPlanet = async (id) => {
    const planet = await this.getResource(`/planets/${id}/`);
    return this._transformPlanet(planet);
  }

  getAllStarships = async () =>  {
    const res = await this.getResource(`/starships/`);
    return res.results.map(this._transformStarship);
  }
  getStarship = async (id) => {
    const starship = await this.getResource(`/starships/${id}/`)
    return this._transformStarship(starship); 
  }

  getPersonImage = (id) => {
    return `${this._imageBase}/characters/${id}.jpg`
  }
  getStarshipImage = (id) => {
    return `${this._imageBase}/starships/${id}.jpg`
  }
  getPlanetImage = (id) => {
    return `${this._imageBase}/planets/${id}.jpg`
  }

  // getPlanetImage = (id) => {
  //   const planetImg = this.getResourceImg(`/planets/${id}.jpg`)
  //   return planetImg;
  // }


  _extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/
    return item.url.match(idRegExp)[1];
  }

  _transformPlanet = (planet) => {
    return {
        id: this._extractId(planet),
        name:planet.name,
        population:planet.population,
        rotationPeriod:planet.rotation_period,
        diameter:planet.diameter,
        climate:planet.climate,
    }
  };

  _transformStarship= (starship) => {
    return {
        id: this._extractId(starship),
        name:starship.name,
        model:starship.model,
        maufacturer:starship.maufacturer,
        costInCredits:starship.costInCredits,
        length:starship.length,
        crew:starship.crew,
        passengers:starship.passengers,
        cargoCapacity:starship.cargoCapacity,
    }
  }


  _transformPerson = (person) => {
    return {
        id: this._extractId(person),
        name:person.name,
        gender:person.gender,
        birthYear:person.birthYear,
        eyeColor:person.eyeColor,
    }
  }

}

const swapi = new SwapiService();

swapi.getAllStarships().then((planets)=>{
    planets.forEach( (p) => {
      // console.log(p.name);
    });
});


// getResource('https://swapi.co/api/people/1/')
// .then((body) => {
//   console.log(body);
// })
// .catch((err)=>{
//   console.error('could not fetch' , err);
// });


// fetch('https://swapi.co/api/planets/')
//   .then ((res)=>{
//     return res.json();
//   })
//   .then((body)=>{
//     console.log(body);
//   });