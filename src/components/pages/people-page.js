import React  from 'react';
import Row from '../row';
import {withRouter} from 'react-router-dom';
import ErrorBoundry from '../error-boundry';
import {
  PersonList,
  PersonDetails,

} from '../sw-components'

const PeoplePage = ({ match , history}) => {


      const { id } = match.params;

  
      return (
        <ErrorBoundry>
          <Row
            left={<PersonList onItemSelected={(id) => history.push(`/people/${id}`)}/>}
            right={<PersonDetails itemId={id}/>}
          />
        </ErrorBoundry>
      )

}

export default withRouter(PeoplePage);