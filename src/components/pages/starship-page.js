import React  from 'react';
import ErrorBoundry from '../error-boundry';
import {
  StarshipList,
} from '../sw-components';

import {withRouter} from 'react-router-dom'


const StarshipPage = ({history}) => {


    return (
      <ErrorBoundry>
        <StarshipList 
        onItemSelected={(itemId) => {
            history.push(`/starships/${itemId}`)
        }} />
      </ErrorBoundry>
    )

}


export default  withRouter(StarshipPage);