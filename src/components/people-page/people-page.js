import React, { Component } from 'react'
import ItemList from '../item-list'
import ItemDetails, { Record } from '../item-details'
import './people-page.css'
import ErrorIndicator from '../error-indicator'
import SwapiService from '../../services/swapi-service'
import Row from '../row'
import ErrorBoundry from '../error-boundry'

import {
    PersonList,
    PlanetList,
    StarshipList,
    PersonDetails,
    PlanetDetails,
    StarshipDetails
} from '../sw-components'



export default class PeoplePage extends Component {
    swapiService = new SwapiService();

    constructor() {
        super();
        this.state = {
            selectedItem: 5,
            hasError: false,
        }
    }


    onItemSelected = (id) => {
        this.setState({
            selectedItem: id
        })
    }

    render() {
        if (this.state.hasError) {
            return < ErrorIndicator />
        }

        const itemList = (
            <ErrorBoundry>
                <PersonList onItemSelected={this.onItemSelected}>
                </PersonList>
            </ErrorBoundry>
        );


        const itemDetails = (
            <PersonDetails itemId={this.state.selectedItem} />

        );



        return (
            <div>

                    <Row 
                    
                    left ={itemList} 
                    
                    right ={itemDetails} />
               
                {/* <Row left ={<p>Hello</p>} right ={<p>World</p>} /> */}
            </div>
        )
    }
}