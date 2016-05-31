//hellowWorld
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React  from 'react';
import {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  navigator,
  Image,
  View
} from 'react-native';


export  class ProfileView extends Component {
 
  render() {
   
       return React.createElement(React.Text, {style: styles.text}, "Hello affakajdfkkfe!");
    
  }

 
  
}

const styles = StyleSheet.create({
  
text: {
    color: 'black',
    backgroundColor: 'orange',
    fontSize: 30,
    margin: 80
  }
});
// AppRegistry.registerComponent('ProfileView', () => ProfileView);

