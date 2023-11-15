import React from 'react';
import { View, Text, Image, ImageBackground, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';

function Home({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={require('../images/background1.jpg')}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
       
        <View style={styles.mainTextContainer}>
          <Text style={styles.titleText}>HealthMotive</Text>
          <Text style={styles.mainText}>환영합니다!</Text>
        </View>
        <View style={styles.homeContainer}>
          <Text style={styles.mainText}>1 Stage</Text>
          <Image
            source={require('../images/stage1.png')}
            style={styles.logoStyle}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.touchableOpacityButton}
              onPress={() => {
                navigation.navigate('SectionScreen');
              }}
            >
              <Text style={styles.buttonText}>운동 시작</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touchableOpacityButton}
              onPress={() => alert('최근 운동')}
            >
              <Text style={styles.buttonText}>최근 운동 기록</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  logoStyle: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchableOpacityButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 20,
    margin: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  titleText: {
    color: 'white',
    fontSize: 50,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  mainTextContainer: {
    position: 'absolute',
    top: 30,
    left: 30,
  },
  mainText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  
  homeContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    alignContent: 'center',
  },
});

export default Home;