// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */


// import React,{useState, useRef} from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import Toast from 'react-native-toast-message';
// const App = () => {
  
//   return (
//     <View>
//     <Toast ref={(ref)=>{Toast.setRef(ref)}} />
//     <TouchableOpacity onPress={()=>{
//       Toast.show({
//       type:'success',
//       position:'top',
//       text1:'Congrats, Your login is Successful',
//       text2:'Detail Info is shown in the log',
//       visibilityTime: 1500,
//       autoHide: true,
//       onShow:()=>{},
//       onHide:()=>{}
//     })
//     }}><Text>Display Toast</Text></TouchableOpacity>
//     </View>
//   );
// };



// export default App;

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,FlatList} from 'react-native';
export default class App extends Component<Props> {

  state ={
    data:[]
  }

  fetchData= async()=>{
    const response = await fetch('https://raw.githubusercontent.com/Hardeepcoder/fake_json/master/Users');
    const users = await response.json();
    this.setState({data: users});

  }
componentDidMount(){
  this.fetchData();
}
  render() {
    return (
      <View >
       <Text>Welcome</Text>

       <FlatList
       data={this.state.data}
       keyExtractor={(item,index) => index.toString()}
       renderItem={({item}) =>

       <View style={{backgroundColor:'#abc123',padding:10,margin:10}}>
          <Text style={{color:'#fff', fontWeight:'bold'}}>{item.name}</Text>
          <Text style={{color:'#fff'}}>{item.email}</Text>
          <Text>City: {item.address.city}</Text>
         </View>

       }

       />
      </View>
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
});