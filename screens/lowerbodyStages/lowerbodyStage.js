import React from 'react';
import { View, Text, Image, ImageBackground, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';

function LowerBodyStage({ route, navigation }) {

  const { section } = route.params;
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle={'dark-content'} />
      <ImageBackground
        source={require('../../images/background1.jpg')}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        <Text style={styles.mainText}>{section} 스테이지</Text>
        
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <View style={styles.stageContainer}>
            <Image
              source={require('../../images/stage1.png')}
              style={styles.imageStyle}
            />
            <TouchableOpacity
              style={styles.touchableOpacityButton}
              onPress={() => {
                navigation.navigate('LowerBodyMini',{ stage: '1' });
              }}
            >
              <Text style={styles.buttonText}>1Stage</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.stageContainer}>
            <Image
              source={require('../../images/stage2.png')}
              style={styles.imageStyle}
            />
            <TouchableOpacity
              style={styles.touchableOpacityButton}
              onPress={() => {
                navigation.navigate('LowerBodyMini', { stage: '2' });
              }}
            >
              <Text style={styles.buttonText}>2Stage</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <View style={styles.stageContainer}>
            <Image
              source={require('../../images/stage3.png')}
              style={styles.imageStyle}
            />
            <TouchableOpacity
              style={styles.touchableOpacityButton}
              onPress={() => {
                navigation.navigate('LowerBodyMini', { stage: '3' });
              }}
            >
              <Text style={styles.buttonText}>3Stage</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.stageContainer}>
            <Image
              source={require('../../images/stage4.png')}
              style={styles.imageStyle}
            />
            <TouchableOpacity
              style={styles.touchableOpacityButton}
              onPress={() => {
                navigation.navigate('LowerBodyMini', { stage: '4' });
              }}
            >
              <Text style={styles.buttonText}>4Stage</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    width: 150,
    height: 150,
  },
  stageContainer: {
    margin: 10,
    alignItems: 'center',
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
  },
  
});

export default LowerBodyStage;
