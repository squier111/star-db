import React , {Component} from 'react'
import Header from '../header'
import RandomPlanet from '../random-planet'
import ErrorBtn from '../error-button'
import {StarshipDetails} from '../sw-components';
import {PeoplePage , PlanetPage , StarshipPage} from '../pages'
import ErrorIndicator from '../error-indicator'
import SwapiService from '../../services/swapi-service'

import { SwapiServiceProvider} from '../swapi-service-context'

import './app.css'

import {BrowserRouter as Router, Route} from 'react-router-dom'


export default class App extends Component {

swapiService = new SwapiService();

constructor() {
    super();
    this.state = {
      selectedItem: 5,
      showRandomPlanet: true,
      hasError: false,
    }
  }



  onItemSelected = (id) => {
    this.setState({
        selectedItem: id
    })
}

  toggleRandomPlanet = () => {
    this.setState(({ showRandomPlanet})=>{
      return {
        showRandomPlanet: !showRandomPlanet
      }

    })
  }

  componentDidCatch() {
    console.log("componentDidCatch()");
    this.setState({
      hasError :true
    })
  }



  render() {

    if(this.state.hasError) {
      return < ErrorIndicator/>
    }

    const planet = this.state.showRandomPlanet ? <RandomPlanet /> :null
    return (
      <SwapiServiceProvider value ={this.swapiService}>
        <Router>
          <div className="wrapper">
            <Header/>
            {planet}


            
            <div className="row mb2 btn-holder">
                <button className="toggle-planet btn btn-warning btn-lg"
                  onClick={this.toggleRandomPlanet}>
                Toggle Random Planet
                </button>
                <ErrorBtn/>
            </div>


            <Route path ="/"
                  render ={() => <h2>Welcome to Star DB</h2>}
                  exact/>


            <Route path="/people"
              render={() => <h2>People</h2>}
              exact />

            <Route path="/people/:id?" component ={PeoplePage}/>

            <Route path="/planets" component={PlanetPage} />

            <Route path="/starships" exact component={StarshipPage} />

            <Route  path="/starships/:id" 
                    
                    render= {({match, location, history}) => {
                      const { id } = match.params;
                      console.log(match);
                      return <StarshipDetails itemId={id} />
                    }} />



          </div>
        </Router>
      </SwapiServiceProvider>


    )
  }

}