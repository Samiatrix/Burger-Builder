import React, { Component } from 'react';
import './App.module.css';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
function App() {
  return (
    <div>
      <Layout>
        <BurgerBuilder></BurgerBuilder>
      </Layout>
    </div>
  );
}

export default App;
