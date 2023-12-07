import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, ImageBackground, StatusBar } from 'react-native';
import { Accelerometer } from 'expo-sensors';
import { LineChart } from 'react-native-chart-kit';
import Modal from 'react-native-modal';
import { useNavigation, useRoute } from '@react-navigation/native';

const CompletedMissionsList = ({ completedMissions }) => {
  return (
    <View>
      <Text style={styles.missionText2}>완료된 미션 목록:</Text>
      {completedMissions.map((mission, index) => (
        <Text style={styles.missionText2} key={index}>{mission}</Text>
      ))}
    </View>
  );
};

function LowerBodyMission() {
  const navigation = useNavigation();
  const route = useRoute();
  const [missionStatus, setMissionStatus] = useState('Not Started');
  const { selectedWorkouts } = route.params;
  const missionCount = selectedWorkouts.length;

  const [currentMission, setCurrentMission] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [completedMissions, setCompletedMissions] = useState([]);

  const toggleModal = (missionNumber) => {
    setCurrentMission(selectedWorkouts[missionNumber - 1]);
    setModalVisible(!isModalVisible);
  };

  const handleMissionClick = (missionNumber) => {
    setMissionStatus(`미션 ${missionNumber} 진행 중`);
    toggleModal(missionNumber);
  };

  const handleCompleteMission = () => {
    if (currentMission) {
      const missionNumber = selectedWorkouts.indexOf(currentMission) + 1;
      setMissionStatus(`미션 ${missionNumber} 완료`);

      setCompletedMissions((prevCompletedMissions) => [...prevCompletedMissions, currentMission]);

      toggleModal();
    }
  };

  const handleGoHome = () => {
    navigation.popToTop();
  };

  const missionButtons = Array.from({ length: missionCount }, (_, index) => (
    <TouchableOpacity
      key={index}
      style={styles.missionButton}
      onPress={() => handleMissionClick(index + 1)}
    >
      <Text style={styles.missionButtonText}>{`${index + 1}Mission`}</Text>
    </TouchableOpacity>
  ));

  const [acceleration, setAcceleration] = useState({ x: 0, y: 0, z: 0 });
  const [previousAcceleration, setPreviousAcceleration] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    const subscription = Accelerometer.addListener(accelerometerData => {
      setPreviousAcceleration({ ...acceleration });
      setAcceleration(accelerometerData);
    });

    return () => {
      subscription.remove();
    };
  }, [acceleration]);

  const calculateAccelerationChange = (current, previous) => {
    return {
      x: current.x - previous.x,
      y: current.y - previous.y,
      z: current.z - previous.z,
    };
  };

  const accelerationChange = calculateAccelerationChange(acceleration, previousAcceleration);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle={'dark-content'} />
      <ImageBackground
        source={require('../../images/background1.jpg')}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.header}>
            <Text style={styles.topicText}>선택한 운동</Text>
            <Text style={styles.mainText}>{selectedWorkouts.join('\n')}</Text>
          </View>
          <View style={styles.missionStatusContainer}>
            <Text style={styles.missionText}>미션 상태: {missionStatus}</Text>
            
            
          </View>
          <CompletedMissionsList completedMissions={completedMissions}/>
          <View style={styles.missionButtonsContainer}>{missionButtons}</View>
          <TouchableOpacity style={styles.goHome} onPress={handleGoHome}>
            <Text style={styles.goHomeText}>홈으로</Text>
          </TouchableOpacity>
          
        </ScrollView>
      </ImageBackground>

      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContent}>
          <Text>미션 내용</Text>
          <Text>{currentMission}</Text>
          <Text>10회</Text>
          <Text>X: {acceleration.x.toFixed(2)}</Text>
          <Text>Y: {acceleration.y.toFixed(2)}</Text>
          <Text>Z: {acceleration.z.toFixed(2)}</Text>
          <Text>X Change: {accelerationChange.x.toFixed(2)}</Text>
          <Text>Y Change: {accelerationChange.y.toFixed(2)}</Text>
          <Text>Z Change: {accelerationChange.z.toFixed(2)}</Text>
          <LineChart
        data={{
          labels: ['X', 'Y', 'Z'],
          datasets: [
            {
              data: [acceleration.x, acceleration.y, acceleration.z],
            },
          ],
        }}
        width={300}
        height={200}
        yAxisLabel=""
        yAxisSuffix=""
        yAxisInterval={1}
        chartConfig={{
          backgroundColor: '#fff',
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
         
         
         <TouchableOpacity style={styles.modalButton} onPress={handleCompleteMission}>
            <Text style={styles.modalButtonText}>완료</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalButton} onPress={toggleModal}>
            <Text style={styles.modalButtonText}>나가기</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
  },
  modalButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
  },
  modalButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  missionButtonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
  },
  missionButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 20,
    margin: 10,
    borderRadius: 10,
  },
  missionButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  goHome: {
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    borderWidth: 1,
  },
  goHomeText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  mainText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 30,
  },
  topicText: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  missionText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  missionText2: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  missionStatusContainer: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LowerBodyMission;
