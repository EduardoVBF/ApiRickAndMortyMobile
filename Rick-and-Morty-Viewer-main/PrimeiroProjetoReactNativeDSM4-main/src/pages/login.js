import {
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  TextInput,
  Text,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';

const Login = () => {
    const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    if (email === '' && password === '') {
      navigation.navigate('main');
    } else {
      alert('E-mail ou senha inválido!');
    }
  };

  const handleRegister = () => {
    navigation.navigate('register');
  };

  return (
    <ImageBackground
      source={require('../images/bg-ReM.jpg')}
      style={{width: '100%', height: '100%', opacity: 0.9}}>
      <View style={styles.container}>
        <View style={styles.titleView}>
          <Text style={styles.title}>Rick and Morty API</Text>
        </View>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {marginTop: 10}]}
          onPress={handleRegister}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    width: '100%',
  },
  titleView: {
    alignItems: 'top',
    justifyContent: 'top',
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    padding: 10,
    color: '#fff',
  },
  input: {
    borderWidth: 2,
    borderColor: '#ffffff',
    borderRadius: 20,
    padding: 10,
    marginVertical: 10,
    width: '75%',
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#ffca28',
    borderRadius: 20,
    padding: 10,
    width: '50%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default Login;
