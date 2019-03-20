import React , {Component} from 'react'
import Row from '../row'
import ErrorBoundry from '../error-boundry'
import {
  PlanetList,
  PlanetDetails,

} from '../sw-components'

export default class PlanetPage extends Component {

  constructor() {
      super();
      this.state = {
          selectedItem: null,
      }
  }
  


  onItemSelected = (id) => {
      this.setState({
          selectedItem: id
      })
  }

  render() {
      return (
        <ErrorBoundry>
          <Row
            left ={<PlanetList onItemSelected={this.onItemSelected}/>}
            right={<PlanetDetails itemId ={this.state.selectedItem}/>}
          />
        </ErrorBoundry>

      )
  }
}