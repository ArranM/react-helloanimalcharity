import React, { Component, Fragment } from 'react';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import HomePage from '../../home/HomePage';
import EventDetailedPage from '../../features/event/EventDetailed/EventDetailedPage';
import PeopleDashboard from '../../user/PeopleDashboad/PeopleDashboard';
import SettingsDashboard from '../../user/Settings/SettingsDashboard';
import UserDetailedPage from '../../user/UserDetailed/UserDetailedPage';
import EventForm from '../../features/event/EventForm/EventForm';

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Container className="main" >
          <Route exact path='/' component={HomePage} />
          <Route exact path='/events' component={EventDashboard} />
          <Route exact path='/events/:id' component={EventDetailedPage} />
          <Route exact path='/people' component={PeopleDashboard} />
          <Route exact path='/profile/:id' component={UserDetailedPage} />
          <Route exact path='/settings' component={SettingsDashboard} />
          <Route exact path='/createEvent' component={EventForm} />
        </Container>
      </Fragment>
    );
  }
}

export default App;