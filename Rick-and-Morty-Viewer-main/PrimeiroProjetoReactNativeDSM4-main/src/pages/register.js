import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Alert} from 'react-native';

const Register = () => {
  const [telephone, setTelephone] = useState('');
  const [password, setPassword] = useState('');
  const [curses, setCourses] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const navigation = useNavigation();

  const handleRegister = () => {
    console.log('Dados do usuário:', {
      name,
      email,
      password,
      telephone,
      cpf,
      curses,
    });
    
    Alert.alert('Usuário cadastrado com sucesso!');

    navigation.navigate('login');

    // RESET DO FORMULÁRIO
    setName('');
    setEmail('');
    setPassword('');
    setTelephone('');
    setCpf('');
    setCourses('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Usuário</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        autoCapitalize="words"
        contextMenuHidden={true}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        keyboardType="phone-pad"
        contextMenuHidden={true}
        value={telephone}
        onChangeText={setTelephone}
      />
      <TextInput
        style={styles.input}
        placeholder="CPF"
        keyboardType="numeric"
        contextMenuHidden={true}
        value={cpf}
        onChangeText={setCpf}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        keyboardType="email-address"
        contextMenuHidden={true}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        contextMenuHidden={true}
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Cursos"
        contextMenuHidden={true}
        value={curses}
        onChangeText={setCourses}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1f1f1f',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  input: {
    borderWidth: 2,
    borderColor: '#ffffff',
    borderRadius: 20,
    padding: 10,
    marginVertical: 5,
    width: '75%',
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#ffca28',
    borderRadius: 20,
    padding: 10,
    width: '50%',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default Register;
