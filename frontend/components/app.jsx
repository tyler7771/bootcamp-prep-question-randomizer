import React from 'react';
import Header from './header';
import Page from './page';

class App extends React.Component {
  render () {
    return (
      <main>
        <Header />
        <Page />
      </main>
    );
  }
}

export default App;
