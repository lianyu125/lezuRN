/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React from 'react';
// import React from 'react';
import {
  AppRegistry,
  StyleSheet,
    Text,

    Component,
  TabBarIOS,
  NavigatorIOS,
  navigator,
  View
} from 'react-native';

 import DiscoverView  from './App/DiscoverView';
 import MessageView from './App/MessageView';
 import ProfileView from './App/ProfileView';
 import SignView from './App/SignView';

class lezuProject extends Component {
 constructor(props){
    super(props);
    
    this.state = {
      tab:'discover',
      tabItems:[
        {
          name:'发现',
          title:'发现',
          type:'discover',
          component:DiscoverView,
        },
        {
          name:'消息',
          title:'消息',
          type:'message',
          component:MessageView,
        },
        {
          name:'签约',
          title:'签约',
          type:'sign',
          component:SignView,
        },
        {
          name:'我的',
          title:'我的',
          type:'profile',
          component:ProfileView,
        }

      ]
    }
  }

  changeSelected(value){
    this.setState({
      tab:value
    })
  }


  createNavigatorItem(index){
    return (
      <NavigatorIOS
        barTintColor='#f8f8f8'
        tintColor='#666'
        titleTextColor="#333"
        style={{flex:1}}
        initialRoute={{
          component:this.state.tabItems[index].component,
          title:this.state.tabItems[index].title,
          wrapperStyle:styles.tabwrapper,
          navigationBarHidden:false,
          passProps:{
            active:this.state.tab=='profile'
          }
      }} />
    )
  }


  render() {
    return (
      //<View style={styles.viewStyle}>
        <TabBarIOS  style={styles.tabBarStyle}>
         <TabBarIOS.Item
          title={this.state.tabItems[0].name}
          icon={require('./images/tabbar_discover_normal.png')}
          iconName={this,this.state.tabItems[0].type}
          selected={this.state.tab === 'discover'}
          onPress={this.changeSelected.bind(this,this.state.tabItems[0].type)}
          >
          {this.createNavigatorItem(0)}
        </TabBarIOS.Item>


        <TabBarIOS.Item
          title={this.state.tabItems[1].name}
          iconName={this,this.state.tabItems[1].type}
          icon={require('./images/tabbar_message_normal.png')}
          selected={this.state.tab === 'message'}
          onPress={this.changeSelected.bind(this,this.state.tabItems[1].type)}
          >
          {this.createNavigatorItem(1)}
        </TabBarIOS.Item>
        
        <TabBarIOS.Item
          title={this.state.tabItems[2].name}
          iconName={this,this.state.tabItems[2].type}
          icon={require('./images/tabbar_sign_normal.png')}
          selected={this.state.tab === 'sign'}
          onPress={this.changeSelected.bind(this,this.state.tabItems[2].type)}
          >
          {this.createNavigatorItem(2)}
        </TabBarIOS.Item>
       

        <TabBarIOS.Item
          title={this.state.tabItems[3].name}
          iconName={this,this.state.tabItems[3].type}
          icon={require('./images/tabbar_profile_normal.png')}
          selected={this.state.tab === 'profile'}
          onPress={this.changeSelected.bind(this,this.state.tabItems[3].type)}
          >
          {this.createNavigatorItem(3)}
        </TabBarIOS.Item>
      </TabBarIOS>
      //</View>
    );
  }
}






const styles = StyleSheet.create({
    tabwrapper:{
        marginTop:65
    },

  viewStyle:{
     flex:1,
  },
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
  tabBarStyle:{
  flex:1,
  alignItems:'flex-end',
  },
});

AppRegistry.registerComponent('lezuProject', () => lezuProject);
