import * as React from 'react';
import { View, StyleSheet, Dimensions , Text,TouchableHighlight} from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import MovieList from '../components/MovieList'
 
const FirstRoute = () => (
  <MovieList />
);
 
const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#FFFFFF' }]} >
      <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => null}>
          <Text style={styles.loginText}>Add a Movie NOTIFICATION</Text>
        </TouchableHighlight>
  </View>
);
 
export default class TabViewExample extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Movies' },
      { key: 'second', title: 'Add a Movie' },
    ],
  };
 
  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
      />
    );
  }
}
 
const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  inputs:{
      height:45,
      borderBottomColor: '#FFFFFF',
      flex:1,
      alignContent:"center"
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:20,
    width:"contain",
    marginTop:20,
    borderRadius:30,
  },
});