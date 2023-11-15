import React from 'react';
import { View, Text, Button, Image, ImageBackground, StatusBar, StyleSheet, TouchableOpacity, } from 'react-native';


function BackMini({  route, navigation }) {

  const { stage } = route.params;
  
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle={'dark-content'} />
      <ImageBackground
        source={require('../../images/background1.jpg')}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        <Text style={styles.mainText}>{stage} 스테이지</Text>
        <TouchableOpacity 
        onPress={() => {
            navigation.navigate('BackWork')}}
        style={styles.miniStageButton} >
            <Text style={styles.buttonText}>{stage}-1 Stage</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={() => {
            navigation.navigate('BackWork')}}
        style={styles.miniStageButton} >
            <Text style={styles.buttonText}>{stage}-2 Stage</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={() => {
            navigation.navigate('BackWork')}}
        style={styles.miniStageButton} >
            <Text style={styles.buttonText}>{stage}-3 Stage</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={() => {
            navigation.navigate('BackWork')}}
        style={styles.miniStageButton} >
            <Text style={styles.buttonText}>{stage}-4 Stage</Text>
        </TouchableOpacity>


        </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
    miniStageButton: {
      backgroundColor: '#4CAF50', // 버튼 배경색 변경
      paddingVertical: 12, // 상하 여백 조정
      paddingHorizontal: 20, // 좌우 여백 조정
      margin: 10,
      borderRadius: 10, // 버튼 모서리 둥글게
    },
    buttonText: {
      color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
    },
    mainText:{
      color:'white',
      fontSize:25,
      fontWeight: 'bold',
    },
    
  });
  

export default BackMini;