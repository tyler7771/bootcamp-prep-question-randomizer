import React from 'react';
import Header from './header';
import Footer from './footer';
import Page from './page';

class App extends React.Component {
  render () {
    return (
      <main>
        <Header />
        <Page />
        <Footer />
      </main>
    );
  }
}

export default App;
