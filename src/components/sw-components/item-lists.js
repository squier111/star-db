import React from 'react'
import { withData, withSwapiService } from '../hoc-helpers'
import ItemList from '../item-list'



const withChildFunction =(Wrapped , fn) => {
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


const PersonList = withSwapiService(
                    withData(
                        withChildFunction(ItemList, renderName)),
                        mapPersonMethodsToProps);

const PlanetList = withSwapiService(
                    withData(
                        withChildFunction(ItemList, renderName)),
                        mapPlanetMethodsToProps);

const StarshipList = withSwapiService(
                    withData(
                        withChildFunction(ItemList, renderModerAndName)),
                        mapStarshipMethodsToProps);
                        



export {
    PersonList,
    PlanetList,
    StarshipList
};