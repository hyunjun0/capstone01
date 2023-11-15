import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/login.js'
import Home from './screens/home.js';
import Section from './screens/section.js';

import ArmStage from './screens/armStages/armStage.js'
import BackStage from './screens/backStages/backStage.js'
import ChestStage from './screens/chestStages/chestStage.js'
import LowerBodyStage from './screens/lowerbodyStages/lowerbodyStage.js'
import ShoulderStage from './screens/shoulderStages/shoulderStage.js'

import ArmMini from './screens/armStages/armMini.js'
import BackMini from './screens/backStages/backMini.js'
import ChestMini from './screens/chestStages/chestMini.js'
import LowerBodyMini from './screens/lowerbodyStages/lowerbodyMini.js'
import ShoulderMini from './screens/shoulderStages/shoulderMini.js'

import ArmWork from './screens/armStages/armWork.js'
import BackWork from './screens/backStages/backWork.js'
import ChestWork from './screens/chestStages/chestWork.js'
import LowerBodyWork from './screens/lowerbodyStages/lowerbodyWork.js'
import ShoulderWork from './screens/shoulderStages/shoulderWork.js'

import ArmMission from './screens/armStages/armMission.js'
import BackMission from './screens/backStages/backMission.js'
import ChestMission from './screens/chestStages/chestMission.js'
import LowerBodyMission from './screens/lowerbodyStages/lowerbodyMission.js'
import ShoulderMission from './screens/shoulderStages/shoulderMission.js'



const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    
    <Stack.Navigator>
      
      <Stack.Screen name="Login" component={Login} options={{
            title: '',
            headerBackTitleVisible: false,}}  />
      <Stack.Screen name="MainScreen" component={Home}  
      options={{
            title: '',
            headerBackTitleVisible: false,}}/>
      <Stack.Screen name="SectionScreen" component={Section} options={{
            title: '',
            headerBackTitleVisible: false,}}/>

      <Stack.Screen name="ArmStage" component={ArmStage} options={{
            title: '',
            headerBackTitleVisible: false,}}/>
      <Stack.Screen name="BackStage" component={BackStage} options={{
            title: '',
            headerBackTitleVisible: false,}}/>
      <Stack.Screen name="ChestStage" component={ChestStage} options={{
            title: '',
            headerBackTitleVisible: false,}}/>
      <Stack.Screen name="LowerBodyStage" component={LowerBodyStage} options={{
            title: '',
            headerBackTitleVisible: false,}}/>
      <Stack.Screen name="ShoulderStage" component={ShoulderStage} options={{
            title: '',
            headerBackTitleVisible: false,}}/>

      <Stack.Screen name="ArmMini" component={ArmMini} options={{
            title: '',
            headerBackTitleVisible: false,}}/>
      <Stack.Screen name="BackMini" component={BackMini} options={{
            title: '',
            headerBackTitleVisible: false,}}/>
      <Stack.Screen name="ChestMini" component={ChestMini} options={{
            title: '',
            headerBackTitleVisible: false,}}/>
      <Stack.Screen name="LowerBodyMini" component={LowerBodyMini} options={{
            title: '',
            headerBackTitleVisible: false,}}/>
      <Stack.Screen name="ShoulderMini" component={ShoulderMini} options={{
            title: '',
            headerBackTitleVisible: false,}}/>

      <Stack.Screen name="ArmWork" component={ArmWork} options={{
            title: '',
            headerBackTitleVisible: false,}}/>
      <Stack.Screen name="BackWork" component={BackWork} options={{
            title: '',
            headerBackTitleVisible: false,}}/>
      <Stack.Screen name="ChestWork" component={ChestWork} options={{
            title: '',
            headerBackTitleVisible: false,}}/>
      <Stack.Screen name="LowerBodyWork" component={LowerBodyWork} options={{
            title: '',
            headerBackTitleVisible: false,}}/>
      <Stack.Screen name="ShoulderWork" component={ShoulderWork} options={{
            title: '',
            headerBackTitleVisible: false,}}/>

      <Stack.Screen name="ArmMission" component={ArmMission} options={{
            title: '',
            headerBackTitleVisible: false,}}/>
      <Stack.Screen name="BackMission" component={BackMission} options={{
            title: '',
            headerBackTitleVisible: false,}}/>
      <Stack.Screen name="ChestMission" component={ChestMission} options={{
            title: '',
            headerBackTitleVisible: false,}}/>
      <Stack.Screen name="LowerBodyMission" component={LowerBodyMission} options={{
            title: '',
            headerBackTitleVisible: false,}}/>
      <Stack.Screen name="ShoulderMission" component={ShoulderMission} options={{
            title: '',
            headerBackTitleVisible: false,}}/>

      

      
    </Stack.Navigator>
  );
};


export default {

  HomeStack,
  
  // 다른 화면 구성을 추가할 수 있습니다.
};