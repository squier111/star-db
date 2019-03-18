import React , {Component} from 'react'
import Header from '../header'
import Row from '../row'
import RandomPlanet from '../random-planet'
import ItemDetails , {Record} from '../item-details'
import ErrorBtn from '../error-button'
import PeoplePage from '../people-page'
import ErrorIndicator from '../error-indicator'
import SwapiService from '../../services/swapi-service'

import { SwapiServiceProvider} from '../swapi-service-context'


import {
  PersonList,
  PlanetList,
  StarshipList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails
} from '../sw-components'

import './app.css'


export default class App extends Component {

swapiService = new SwapiService();

constructor() {
    super();
    this.state = {
        showRandomPlanet: true,
        hasError: false,
    }
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

    const personDetails = (
      <PersonDetails itemId={11} />
    )

    const starshipDetails = (
      <StarshipDetails itemId={11} />
    )

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


          <PersonDetails itemId ={11}/>

          <Row
            left={personDetails}
            right={starshipDetails}/>


          <PersonList/>

          <PlanetList />

          <StarshipList/>

        </div>
      </SwapiServiceProvider>


    )
  }

}