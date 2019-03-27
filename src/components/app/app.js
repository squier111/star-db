import React , {Component} from 'react'
import Header from '../header'
import RandomPlanet from '../random-planet'
import ErrorBtn from '../error-button'
import {StarshipDetails} from '../sw-components';
import {PeoplePage , PlanetPage , StarshipPage, LoginPage , SecretPage} from '../pages'
import ErrorIndicator from '../error-indicator'
import SwapiService from '../../services/swapi-service'
import DummySwapiService from '../../services/dummy-swapi-service'

import { SwapiServiceProvider} from '../swapi-service-context'

import './app.css'

import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'


export default class App extends Component {

swapiService = new SwapiService();

constructor() {
    super();
    this.state = {
      selectedItem: 5,
      showRandomPlanet: true,
      hasError: false,
      inLoggedIn: false,
    }
  }


  onLogin = () => {
    this.setState({
      inLoggedIn: true,
  })
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

    const {inLoggedIn} = this.state;

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
            <Switch>
              <Route path ="/"
                    render ={() => <h2>Welcome to Star DB</h2>}
                    exact/>
              <Route path="/people/:id?" component ={PeoplePage}/>
              <Route path="/planets" component={PlanetPage} />
              <Route path="/starships" exact component={StarshipPage} />
              <Route  path="/starships/:id" 
                      render= {({match, location, history}) => {
                        const { id } = match.params;
                        console.log(match);
                        return <StarshipDetails itemId={id} />
                      }} />
              <Route path="/login"
                      render={()=>(
                      <LoginPage 
                        inLoggedIn={inLoggedIn}
                        onLogin ={this.onLogin}/>
                      )} />
              <Route path="/secret"
                      render={()=>(
                        <SecretPage inLoggedIn={inLoggedIn}  />
                      )} />

                      
              <Route  render={()=>(
                        <h2>Page not Found , bitch!</h2>
                      )}/>
            </Switch>



          </div>
        </Router>
      </SwapiServiceProvider>


    )
  }

}