import React from 'react';
import AppNavigator from './components/AppNavigator';
import {Database} from './Database/db'; 
require('./push-notification');

export default class App extends React.Component {

  initializeDb(){
    var db = new Database();
    db.initDB();
  }

  render() {
    this.initializeDb();
    return (
       <AppNavigator/>
    );
  }
}


