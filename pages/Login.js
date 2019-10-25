import * as React from 'react';
import { Text, View, StyleSheet,TextInput,Button,Image,TouchableHighlight,Alert } from 'react-native';
import Constants from 'expo-constants';
import Dashboard from './Dashboard';

// You can import from local files


export default class Login extends React.Component {

  constructor(props){
    super(props);
  }

  state={username:null,password:null}

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <Text h1 style={styles.heading}>Login</Text>

          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                placeholder="Email"
                keyboardType="email-address"
                underlineColorAndroid='transparent'
                onChangeText={(email) => this.setState({email})}/>
           </View>


           <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                placeholder="Password"
                secureTextEntry={true}
                underlineColorAndroid='transparent'
                onChangeText={(password) => this.setState({password})}/>
           </View>

            <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.props.navigation.navigate('Dashboard')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>
        </View>

       

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
    background: 'linear-gradient(0deg, rgb(224, 84, 68) 0%, rgb(163, 3, 101) 100%)',
    height: '700px',
    width: 'auto',
  },
  box:{
    background: 'rgb(255, 255, 255)',
    borderRadius: '10px',
    boxShadow: '0px 1px 6px 0px rgba(0, 0, 0, 0.09)',
    height: '336px',
    width: 'auto'
  },
  heading:{
    color: 'black',
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: '25px',
    fontWeight: 'bold',
    marginBottom:30,
    height: 'auto',
    textAlign: 'center',
    width: '100'
  },
   inputContainer: {
      borderColor: 'black',
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      marginLeft:30,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      borderBottomColor: '#FFFFFF',
      flex:1,
      alignContent:"center"
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:100,
    width:100,
    marginTop:20,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
 
});
