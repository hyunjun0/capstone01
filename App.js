import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { View, Text, Button, Image, ImageBackground, StatusBar, StyleSheet } from 'react-native';


import Navigation from './Navigation.js';
import HomeStack from './Navigation.js';
import LoginNav from './Navigation.js';


const Tab = createBottomTabNavigator();



function Profile({ navigation }) {
  return (
    <View style={{flex:1}}>
      <StatusBar barStyle={'dark-content'}/>
      <ImageBackground
      source={require('./images/background1.jpg')} // 배경
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <Text>프로필 화면입니다.</Text>
      <Button title="버튼 2" onPress={() => alert('버튼 2 클릭')} />
    </ImageBackground>
      </View>
  );
}

function Rank({ navigation }) {
  return (
  <View style={{flex:1}}>
  <StatusBar barStyle={'dark-content'}/>
  <ImageBackground
  source={require('./images/background1.jpg')} // 배경 
  style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
>
  <Text>랭킹 화면입니다.</Text>
  <Button title="버튼 3" onPress={() => alert('버튼 3 클릭')} />
</ImageBackground>
  </View>
  );
}

function Setting({ navigation }) {
  return (
    <View style={{flex:1}}>
    <StatusBar barStyle={'dark-content'}/>
    <ImageBackground
    source={require('./images/background1.jpg')} // 배경
    style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
  >
    <Text>설정</Text>
    
      <Button title="계정" onPress={() => alert('계정')} />
      <Button title="음악" onPress={() => alert('음악')} />
      <Button title="언어" onPress={() => alert('언어')} />
      <Button title="도움말 및 지원" onPress={() => alert('도움말 및 지원')} />
      <Button title="이용약관" onPress={() => alert('이용약관')}/>      
      <Button title="제작진" onPress={() => alert('제작진')} />
      
    
  </ImageBackground>
    </View>
  );
}




function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="모험" 
          component={Navigation.HomeStack}
          options={{
            headerShown: false, 
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-home" size={size} color={color} />
            ),
          }}
        />
         <Tab.Screen name="프로필" component={Profile} 
         options={{
          tabBarIcon:({color,size})=>(
            <Ionicons name = "ios-person" size={size} color={color}/>
          )
        }}/>
        <Tab.Screen name="랭크" component={Rank} 
         options={{
          tabBarIcon:({color,size})=>(
            <Ionicons name = "ios-podium" size={size} color={color}/>
          )
        }}/>
        <Tab.Screen name="설정" component={Setting} 
         options={{
          tabBarIcon:({color,size})=>(
            <Ionicons name = "ios-settings" size={size} color={color}/>
          )
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;