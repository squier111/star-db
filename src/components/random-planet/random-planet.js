import React , {Component} from 'react'
import SwapiService from '../../services/swapi-service'
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'
import './random-planet.css'



export default class RandomPlanet extends Component {
  constructor(){
    super();
    console.log("constructor()");
    this.state = {
      planet: {},
      loading:true,
      error:false,
    };
  }
  
  
  componentDidMount() {
    
    const {updateInterval} = this.props;
    // console.log("componentDidMount()");
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet,updateInterval);
  }
  
  
  componentWillUnmount() {
    // console.log("componentWillUnmount()");
    clearInterval(this.interval);
  }


  swapiservice = new SwapiService();


  onError = (err) => {
    this.setState({
      error:true,
      loading:false,
    });
  };


  onPlanetLoaded = (planet) => {
    this.setState({
      planet:planet,
      loading:false,
    });
  }


  updatePlanet =() => {
    const id = Math.floor(Math.random()*25)+ 3;
    //const id = 12000
    this.swapiservice
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  }

  render() {
    // console.log("render()");
    const {planet, loading, error} = this.state;

    const hasData = !(loading || error);

    const errorMes = error ? <ErrorIndicator/> : null
    const spinner = loading  ? <Spinner/> : null;
    const content = hasData  ? <PlanetView  planet={planet}/> : null;

      return (
      <div className="row  card">
          {errorMes}
          {spinner}
          {content}
      </div>
    );
  }

}



const PlanetView = ({planet}) => {
  const {id, name, population, rotationPeriod, diameter, climate} = planet;
  return (
    <>
       <div className="planet-datails col-md-4 col-sm-4">
            <img className="planet-image" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt=""/>
          </div>
          <div className="card-body">
            <h4>{name}</h4>
            <ul className="list-group list-group-flush col-md-8 col-sm-8">
              <li className="list-group-item">
                  <span className="population">Population:</span>
                  <span> {population}</span>
              </li>
              <li className="list-group-item">
                  <span className="period">Ritation Period:</span>
                  <span> {rotationPeriod}</span>
              </li>
              <li className="list-group-item">
                  <span className="diameter">Diameter:</span>
                  <span> {diameter}</span>
              </li>
              <li className="list-group-item">
                  <span className="diameter">Climate:</span>
                  <span> {climate}</span>
              </li>
            </ul>
          </div>
      </>
  )
}



RandomPlanet.defaultProps = {
  updateInterval : 10000,
}

RandomPlanet.propTypes = {
  updateInterval: (props, propName, componentName) => {
    const value = props[propName];

    if(typeof value === 'number' && !isNaN(value)) {
      return null;
    }
    return new TypeError ( `${componentName} : ${propName} must be number bitch `)
  }
}