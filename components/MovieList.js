/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import CustomListview from '../components/CustomListview';
import {Database} from '../Database/db'; 


import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class MovieList extends Component<{}> {

  constructor(props){
    super(props);
  }

  state = {movies:[]};


  populateDb(){
    var db = new Database();
    db.initDB();
    db.updateDB(this.state.movies);
    db.getMovies();
  }
   
  componentDidMount(){
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
          console.log(responseJson.movies);
          this.setState({
            movies:responseJson.movies
          },()=>{
            this.populateDb();
          });
      })
      .catch((error) =>{
        console.error(error);
      });
  }


  render() {
    return (
      <View style={styles.container}>
        <CustomListview
          itemList={this.state.movies}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
  }
});