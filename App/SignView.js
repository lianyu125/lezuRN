//hellowWorld
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
    Component,
  Text,
  View
} from 'react-native';


export  class SignView extends Component {
 
  render() {
       return React.createElement(React.Text, {style: styles.text}, "HelloWorld!");
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


