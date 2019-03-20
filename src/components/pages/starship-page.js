import React , {Component} from 'react'
import Row from '../row'
import ErrorBoundry from '../error-boundry'
import {
  StarshipList,
  StarshipDetails,

} from '../sw-components'

export default class StarshipPage extends Component {

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
            left ={<StarshipList onItemSelected={this.onItemSelected}/>}
            right={<StarshipDetails itemId ={this.state.selectedItem}/>}
          />
        </ErrorBoundry>
      )
  }
}