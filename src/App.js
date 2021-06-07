import { Component } from 'react';
import Layout from '../src/components/layout/Layout'
import BurgerBuilder from '../src/containers/BurgerBuilder/BurgerBuilder'


class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <h1>Udins Burger Build</h1>
          <BurgerBuilder/>        
        </Layout>
      </div>
    );
  }
}

export default App;
