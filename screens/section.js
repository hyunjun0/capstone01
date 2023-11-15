import React from 'react';
import { View, Text, Image, ImageBackground, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';

function Section({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle={'dark-content'} />
      <ImageBackground
        source={require('../images/background1.jpg')}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        <Text style={styles.mainText}>운동부위 선택</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.touchableOpacityButton}
            onPress={() => {
              navigation.navigate('ShoulderStage', { section: '어께' });

            }}
          >
            <Text style={styles.buttonText}>어께Stage</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchableOpacityButton}
            onPress={() => {
              navigation.navigate('ArmStage', { section: '팔' });
            }}
          >
            <Text style={styles.buttonText}>팔Stage</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchableOpacityButton}
            onPress={() => {
              navigation.navigate('ChestStage', { section: '가슴' });
            }}
          >
            <Text style={styles.buttonText}>가슴Stage</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchableOpacityButton}
            onPress={() => {
              navigation.navigate('BackStage', { section: '등' });
            }}
          >
            <Text style={styles.buttonText}>등Stage</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchableOpacityButton}
            onPress={() => {
              navigation.navigate('LowerBodyStage', { section: '하체' });
            }}
          >
            <Text style={styles.buttonText}>하체Stage</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'column', // 버튼을 세로로 배치
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchableOpacityButton: {
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
    marginBottom: 20,
  },
});


export default Section;