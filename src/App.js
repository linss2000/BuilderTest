import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import { Route, Switch} from 'react-router-dom';
import TestPage from './containers/Test/TestPage';
import Checkout from './containers/Checkout/Checkout';
import FillForm from './containers/FillForm/FillForm';
//import './App.css';

class App extends Component {
  render() {
    return (
      <div >
      <Layout>

        <Switch>
          <Route path="/checkout" component={Checkout}/>
          <Route path="/fillform" component={FillForm}/>
          <Route path="/" exact component={TestPage}/>
        </Switch>
      </Layout>
      </div>
    );
  }
}

export default App;
