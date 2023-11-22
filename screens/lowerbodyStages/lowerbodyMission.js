import React, { useState } from 'react';
import { View, Text, ImageBackground, StatusBar, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Modal from 'react-native-modal';
import { useNavigation, useRoute } from '@react-navigation/native';

function ArmMission() {
  const navigation = useNavigation();
  const route = useRoute();
  const [missionStatus, setMissionStatus] = useState('Not Started');
  const { selectedWorkouts } = route.params;
  const missionCount = selectedWorkouts.length;

  const [currentMission, setCurrentMission] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = (missionNumber) => {
    setCurrentMission(selectedWorkouts[missionNumber - 1]);
    setModalVisible(!isModalVisible);
  };

  const handleMissionClick = (missionNumber) => {
    setMissionStatus(`미션 ${missionNumber} 진행 중`);
    toggleModal(missionNumber);
  };

  const handleCompleteClick = () => {
    toggleModal();
  };

  const handleCompleteMission = () => {
    // 미션 완료 처리 로직 추가
    toggleModal();
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

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle={'dark-content'} />
      <ImageBackground
        source={require('../../images/background1.jpg')}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.topicText}>선택한 운동</Text>
          <Text style={styles.mainText}>{selectedWorkouts.join('\n')}</Text>
          <Text style={styles.missionText}>미션 상태: {missionStatus}</Text>

          <View style={styles.missionButtonsContainer}>{missionButtons}</View>

          <TouchableOpacity style={styles.goHome} onPress={handleGoHome}>
            <Text style={styles.goHomeText}>홈으로</Text>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>

      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContent}>
          <Text>미션 완료 확인</Text>
          <Text>미션 {missionStatus} - {currentMission}</Text>
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
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 30,
  },
  topicText: {
    color: 'white',
    fontSize: 35,
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
});

export default ArmMission;
