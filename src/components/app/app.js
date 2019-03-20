import React , {Component} from 'react'
import Header from '../header'
import RandomPlanet from '../random-planet'
import ErrorBtn from '../error-button'
import {PeoplePage , PlanetPage , StarshipPage} from '../pages'
import ErrorIndicator from '../error-indicator'
import SwapiService from '../../services/swapi-service'

import { SwapiServiceProvider} from '../swapi-service-context'

import './app.css'


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


          <PeoplePage/>

          <PlanetPage/>

          <StarshipPage/>


        </div>
      </SwapiServiceProvider>


    )
  }

}