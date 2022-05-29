import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Search from './Components/search';
import Home from './Components/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Switch } from 'react-native-web';
import Favoris from './Components/Favoris'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons'; 
import Interface from './Components/Interface'
import Streaming from './Components/Streaming'
import Cinema from './Components/Cinema'
import Yolo from './Components/Yolo';
import Test from './Components/Test'
import {navigationRef} from './Components/RootNavigation';

 
const Stack = createStackNavigator();

const  initialState = {
  favoris:[]
}

 const reducer=(state=initialState,action)=>
 {
   switch (action.type)
   {
     case "Add":
      return{favoris:[...state.favoris,action.val]}
      default:
        return state;
   }

 }

const store = createStore(reducer)
export default function App() { 
  return (
    
    <Provider store={store}>
    <NavigationContainer ref={navigationRef}>
    <Stack.Navigator initialRouteName='Yolo'>
    <Stack.Screen name="Detail" component={Home}/>
    <Stack.Screen name="Interface" component={Interface}/>
      <Stack.Screen name="Search" component={Search}/>
      <Stack.Screen name="favoris" component={Favoris}/>
      <Stack.Screen name="Streaming" component={Streaming}/>
      <Stack.Screen name="Cinema" component={Cinema}/>
      <Stack.Screen name="Yolo" component={Yolo}/>
  </Stack.Navigator>
  {/* <Test/> */}
</NavigationContainer>
</Provider>

    // <Provider store={store}>
    //   <NavigationContainer >
    //       <Tab.Navigator initialRouteName="Footer"  
    //         screenOptions={({route})=>({
              
    //             tabBarIcon:()=>{
    //               switch(route.name)
    //               {
    //                 case "Home":
    //                   return <AntDesign name="home" size={24} color="black" />
                     
    //                 case "Search":
    //                   return <AntDesign name="search1" size={24} color="black" />
    //                 case "favoris":
    //                   return <AntDesign name="heart" size={24} color="black" />
    //               }}

    //         })}
    //       >
    //           <Tab.Screen name="Search" component={Search} />
    //           <Tab.Screen name="favoris" component={Favoris} /> 
    //           <Tab.Screen name="Home" component={Home}  />
            
    //       </Tab.Navigator>
                
                
     
    //    </NavigationContainer>

    // </Provider>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
