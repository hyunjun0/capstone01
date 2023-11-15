import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground, StatusBar, StyleSheet } from 'react-native';
import { Button } from 'react-native-web';

function BackWork({navigation }) {
  const [selectedWorkouts, setSelectedWorkouts] = useState([]);


  const workoutOptions = [
    "풀업",
    "렛풀다운",
    "덤벨로우",
    "바벨로우",
    "데드리프트",
  ];
  

  const toggleWorkout = (workout) => {
    if (selectedWorkouts.includes(workout)) {
      setSelectedWorkouts(selectedWorkouts.filter((selected) => selected !== workout));
    } else {
      setSelectedWorkouts([...selectedWorkouts, workout]);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle={'dark-content'} />
      <ImageBackground
        source={require('../../images/background1.jpg')}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        <Text style={styles.mainText}>오늘의 운동을 선택해주세요</Text>
        {workoutOptions.map((workout, index) => (
          <TouchableOpacity
            key={index}
            style={selectedWorkouts.includes(workout) ? styles.selectedWorkout : styles.workoutOption}
            onPress={() => toggleWorkout(workout)}
          >
            <Text style={selectedWorkouts.includes(workout) ? styles.selectedText : styles.text}>
              {workout}
            </Text>

          </TouchableOpacity>
        ))}
          <TouchableOpacity
          style={styles.nextButton} 
          onPress={() => {
            navigation.navigate('BackMission', {selectedWorkouts});
          }} 
        >
          <Text style={styles.nextButtonText}>다음 페이지로</Text>
        </TouchableOpacity>
       </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  workoutOption: {
    backgroundColor: 'transparent',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'white',
  },
  selectedWorkout: {
    backgroundColor: '#4CAF50', // 버튼 배경색 변경
    paddingVertical: 10, // 상하 여백 조정
    paddingHorizontal: 20, // 좌우 여백 조정
    margin: 10,
    borderRadius: 10, // 버튼 모서리 둥글게
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  selectedText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold' // 선택된 항목의 텍스트 색상
  },
  nextButton: {
    backgroundColor: 'white', // 버튼의 배경색
    padding: 10,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  nextButtonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold', // 버튼 텍스트 색상
  },
  mainText:{
    color:'white',
    fontSize:25,
    fontWeight: 'bold',
  },
});

export default BackWork;