/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
// import React, { Component } from 'react';
import React,{
  Component,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
//
export default class Button extends Component {
  constructor(props){
    super(props);
    //初始状态
    this.state = {
       disabled:false,
    };
  }
  
  buttonClick =()=>{
    console.log(1);
    //自定义的方法,大家请使用属性来定义
    const {dianjishijian} = this.props;
    dianjishijian(this.enable);
  }
  enable =()=>{
    console.log(4);
    this.setState({
      disabled:false,
    });
  }


  disable =()=>{
    console.log(2);
    this.setState({
      disabled:true,
    });
  }
  render() {
    // const {text ,beijingyanse} = this.props;
    return (
      <TouchableOpacity style = {[styles.button,this.state.disabled&&styles.disabled,{backgroundColor:beijingyanse}]}
         onPress = {this.buttonClick}
         >
            <Text style={styles.textStyle}>'这是什么'</Text>
        </TouchableOpacity>
     
    );
  }
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  button:{

        height:30,
        width:60,
        //borderRadius:0,
        justifyContent:'center',
       overflow:'hidden',
        backgroundColor:'green'
    },
    textStyle:{
       textAlign:'center',
        color:'white',
    }


});
