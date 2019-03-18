import React from 'react'
import { withData } from '../hoc-helpers'
import ItemList from '../item-list'
import SwapiService from '../../services/swapi-service';


const swapiService = new SwapiService;

const {
    getAllPeople,
    getAllStarships,
    getAllPlanets
} = swapiService;


const withChildFunction =(Wrapped , fn) => {
    return (props) => {
        return ( 
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
};

const renderName = ({ name }) => (`${name}`)
const renderModerAndName = ({ name, length }) => (`${name} and ${length }`)


const PersonList = withData(
                        withChildFunction(ItemList, renderName),
                        getAllPeople);

const PlanetList = withData(
                        withChildFunction(ItemList, renderName),
                        getAllPlanets);

const StarshipList = withData(
                        withChildFunction(ItemList, renderModerAndName),
                        getAllStarships);



export {
    PersonList,
    PlanetList,
    StarshipList
};