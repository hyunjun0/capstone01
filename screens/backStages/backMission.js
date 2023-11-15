import React, { useState } from 'react';
import { View, Text, ImageBackground, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal'; // 모달 라이브러리 추가
import { useNavigation, useRoute } from '@react-navigation/native';

function BackMission() {
  const navigation = useNavigation();
  const route = useRoute();
  const [missionStatus, setMissionStatus] = useState('Not Started');
  const { selectedWorkouts } = route.params;

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleMissionClick = (missionNumber) => {
    setMissionStatus(`미션 ${missionNumber} 진행 중`);
    toggleModal();
  };

  const handleCompleteClick = () => {
    // 완료 버튼 클릭 시 완료 여부 확인 모달을 표시
    toggleModal();
  };

  const handleCompleteMission = () => {
    // 이 곳에 각 미션의 완료 여부를 확인하고 처리하는 로직을 추가
    // 완료 상태에 따라 미션 상태를 변경하거나 다른 작업 수행
    // ...
    if (missionStatus === '미션 1 진행 중') {
      // 1Mission을 완료로 변경
      setMissionStatus('1Mission Complete');
    }
    if (missionStatus === '미션 2 진행 중') {
      // 2Mission을 완료로 변경
      setMissionStatus('2Mission Complete');
    }
    if (missionStatus === '미션 3 진행 중') {
      // 3Mission을 완료로 변경
      setMissionStatus('3Mission Complete');
    }
    if (missionStatus === '미션 4 진행 중') {
      // 4Mission을 완료로 변경
      setMissionStatus('4Mission Complete');
    }
    // 모달 닫기
    toggleModal();
  };

  const handleGoHome = () => {
    navigation.popToTop();
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle={'dark-content'} />
      <ImageBackground
        source={require('../../images/background1.jpg')}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        <Text style={styles.mainText}>선택한 운동: {selectedWorkouts.join(', ')}</Text>
        <Text style={styles.missionText}>미션 상태: {missionStatus}</Text>
        <TouchableOpacity style={styles.missionButton} onPress={() => handleMissionClick(1)}>
          <Text style={styles.missionButtonText}>1Mission</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.missionButton} onPress={() => handleMissionClick(2)}>
          <Text style={styles.missionButtonText}>2Mission</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.missionButton} onPress={() => handleMissionClick(3)}>
          <Text style={styles.missionButtonText}>3Mission</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.missionButton} onPress={() => handleMissionClick(4)}>
          <Text style={styles.missionButtonText}>4Mission</Text>
        </TouchableOpacity>
       
       
        <TouchableOpacity style={styles.goHome} onPress={handleGoHome}>
          <Text style={styles.goHomeText}>홈으로</Text>
        </TouchableOpacity>
      </ImageBackground>

      {/* 모달 팝업 창 */}
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContent}>
          <Text>미션 완료 확인</Text>
          <Text>미션 {missionStatus}을 완료하시겠습니까?</Text>
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
  // ...
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
    fontWeight: 'bold'
  },
  missionButton: {
    backgroundColor: '#4CAF50', // 버튼 배경색 변경
    paddingVertical: 12, // 상하 여백 조정
    paddingHorizontal: 20, // 좌우 여백 조정
    margin: 10,
    borderRadius: 10, // 버튼 모서리 둥글게
  },
  missionButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
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
  mainText:{
    color:'white',
    fontSize:25,
  },
});

export default BackMission;
