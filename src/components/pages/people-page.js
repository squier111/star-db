import React , {Component} from 'react'
import Row from '../row'
import ErrorBoundry from '../error-boundry'
import {
  PersonList,
  PersonDetails,

} from '../sw-components'

export default class PeoplePage extends Component {

  constructor() {
      super();
      this.state = {
        selectedItem: null,
      }
  }

  componentDidCatch() {
    this.setState({
      hasError :true
    })
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
            left ={<PersonList onItemSelected={this.onItemSelected}/>}
            right={<PersonDetails itemId ={this.state.selectedItem}/>}
          />
        </ErrorBoundry>
      )
  }
}