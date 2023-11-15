import React, { useState } from 'react';
import { View, Text, TextInput, Button, ImageBackground, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';

function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // 여기에서 로그인 로직을 처리하거나 API 호출을 수행합니다.
    // 사용자 이름(username)과 비밀번호(password)를 사용하여 로그인을 시도합니다.

    // 로그인 성공 시 다음 화면으로 이동
    navigation.navigate('Home');

    // 로그인 실패 시 에러 처리 또는 메시지 표시
  };

  const handleRegister = () => {
    // 회원가입 화면으로 이동
    //navigation.navigate('Register');
    alert("sign up");
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={require('../images/background1.jpg')}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        <View style={styles.loginContainer}>
          <Text style={styles.titleText}>로그인</Text>
          <TextInput
            style={styles.input}
            placeholder="아이디"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="비밀번호"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <Button title="로그인" onPress={() => {
              navigation.navigate('MainScreen');
            }} />
          <TouchableOpacity
            style={styles.registerButton}
            onPress={handleRegister}
          >
            <Text style={styles.registerText}>회원가입</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  titleText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'white',
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  registerButton: {
    marginTop: 10,
  },
  registerText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Login;