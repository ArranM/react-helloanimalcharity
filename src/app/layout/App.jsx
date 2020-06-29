import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Hello Animal Charity!</h1>
        <Button icon="smile" content="React Button" />
      </div>
    );
  }
}

export default App;