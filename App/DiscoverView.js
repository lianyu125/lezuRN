//hellowWorld
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
import React from 'react';
import {
  //AppRegistry,
  //StyleSheet,
  //Text,
    Component,
  View
} from 'react-native';
// import Button from './button'


export  class DiscoverView extends Component {
 
  render() {
   
        return(
          <View  style = {styles.screenViewStyle}>
              <View  style = {styles.ViewStyle}>

                 
              </View>
              <View  style = {styles.ViewStyle2}>

                 
              </View>
          </View>
          );
  }

 
  
}

const styles = StyleSheet.create({
  screenViewStyle:{
    height: 667,
    width:375,
    backgroundColor:'#F2F2F2',
  },
  ViewStyle:{
    marginTop :250,
    marginLeft:0,
    alignItems:'flex-start',
    width : 187,
    height:60,
    backgroundColor:'orange',
  },
  ViewStyle2:{
    marginTop:-60,
    marginLeft:188,
    
    width : 187,
    height:60,
    backgroundColor:'orange',
  },
text: {
    color: 'black',
    backgroundColor: 'blue',
    fontSize: 30,
    margin: 80
  }
});

