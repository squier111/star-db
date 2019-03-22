import React from 'react'
import { withData, withSwapiService } from '../hoc-helpers'
import ItemList from '../item-list'



const withChildFunction = (fn) => (Wrapped) => {
    return (props) => {
        return ( 
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
};


const  mapPersonMethodsToProps = (swapiService) => {
    return{
        getData: swapiService.getAllPeople
    }
}
const  mapPlanetMethodsToProps = (swapiService) => {
    return{
        getData: swapiService.getAllPlanets
    }
}
const  mapStarshipMethodsToProps = (swapiService) => {
    return{
        getData: swapiService.getAllStarships
    }
}

const renderName = ({ name }) => (`${name}`)
const renderModerAndName = ({ name, length }) => (`${name} and ${length }`)


const PersonList = withSwapiService(mapPersonMethodsToProps) (
                    withData(
                        withChildFunction(renderName)(
                            ItemList)));

const PlanetList = withSwapiService(mapPlanetMethodsToProps)(
                    withData(
                        withChildFunction(renderName)(
                            ItemList)));

const StarshipList = withSwapiService(mapStarshipMethodsToProps)(
                    withData(
                        withChildFunction(renderModerAndName)(ItemList)));
                        



export {
    PersonList,
    PlanetList,
    StarshipList
};