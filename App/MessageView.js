//hellowWorld
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
import React from 'react';
import {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  navigator,
  Image,
  View
} from 'react-native';
export  class MessageView extends Component {
 
  render() {
   
       return React.createElement(React.Text, {style: styles.text}, "Hello    World!");
    
  }

 
  
}

const styles = StyleSheet.create({
  
text: {
    color: 'black',
    backgroundColor: 'blue',
    fontSize: 30,
    margin: 80
  }
});

