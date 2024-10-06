import {
  Container,
  Form,
  Input,
  SubmitButton,
  List,
  Character,
  Avatar,
  Name,
  Status,
  Location,
  Episode,
  ProfileButton,
  ProfileButtonText,
} from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Keyboard, ActivityIndicator, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React, {Component} from 'react';
import api from '../services/api';
import axios from 'axios';

export default class Main extends Component {
  state = {
    newCharacter: '',
    characters: [],
    loading: false,
  };

  async componentDidMount() {
    const characters = await AsyncStorage.getItem('characters');
    if (characters) {
      this.setState({characters: JSON.parse(characters)});
    }
  }

  async componentDidUpdate(_, prevState) {
    const {characters} = this.state;
    if (prevState !== characters) {
      AsyncStorage.setItem('characters', JSON.stringify(characters));
    }
  }

  handleAddCharacters = async () => {
    try {
      const {characters, newCharacter} = this.state;
      this.setState({loading: true});

      const response = await api.get(`/character/?name=${newCharacter}`);

      if (
        characters.find(
          character => character.name === response.data.results[0].name,
        )
      ) {
        alert('Este personagem já está na lista!');
        this.setState({
          loading: false,
        });
        return;
      }

      const characterData = response.data.results[0];

      const episodeResponse = await axios.get(characterData.episode[0]);
      const episodeName = episodeResponse.data.name;

      const data = {
        avatar: characterData.image,
        name: characterData.name,
        status: characterData.status,
        species: characterData.species,
        location: characterData.location.name,
        episode: episodeName,
        gender: characterData.gender,
        allEpisodes: characterData.episode.length,
      };

      this.setState({
        characters: [...characters, data],
        newCharacter: '',
        loading: false,
      });

      Keyboard.dismiss();
    } catch (err) {
      alert('Personagem não encontrado! Tente novamente.');
      this.setState({
        loading: false,
      });
    }
  };

  render() {
    const {characters, newCharacter, loading} = this.state;

    return (
      <Container style={{backgroundColor: '#1f1f1f'}}>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Adicionar personagem"
            value={newCharacter}
            onChangeText={text => this.setState({newCharacter: text})}
            returnKeyType="send"
            onSubmitEditing={this.handleAddCharacters}
          />
          <SubmitButton
            style={{borderRadius: 30}}
            loading={loading}
            onPress={this.handleAddCharacters}>
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Icon name="add" size={22} color="#fff" />
            )}
          </SubmitButton>
        </Form>
        <List
          showsVerticalScrollIndicator={false}
          data={characters}
          keyExtractor={characters => characters.name}
          renderItem={({item}) => (
            <Character
              style={{
                backgroundColor: '#3c3e44',
                borderRadius: 20,
                padding: 3,
              }}>
              <View>
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 20}}>
                  <Avatar source={{uri: item.avatar}}/>
                  <View>
                    <Name>{item.name}</Name>
                    <Status style={{fontWeight: 'bold'}}>{item.status}</Status>
                  </View>
                </View>
                <Location style={{fontWeight: 'bold'}}>
                  Última localização conhecida: {item.location}
                </Location>
                <Episode style={{fontWeight: 'bold'}}>
                  Primeira aparição: {item.episode}
                </Episode>
                <View
                  style={[
                    {flexDirection: 'row'},
                    {width: '80%'},
                    {justifyContent: 'space-between'},
                    {padding: 10},
                  ]}>
                  <ProfileButton
                    onPress={() => {
                      this.props.navigation.navigate('details', {
                        character: item,
                      });
                    }}
                    style={{borderRadius: 20, backgroundColor: '#ffca28'}}>
                    <ProfileButtonText>DETALHES</ProfileButtonText>
                  </ProfileButton>
                  <ProfileButton
                    onPress={() => {
                      const updatedCharacters = characters.filter(
                        character => character.name !== item.name,
                      );
                      this.setState({characters: updatedCharacters});
                    }}
                    style={{backgroundColor: '#F00', borderRadius: 20}}>
                    <ProfileButtonText>APAGAR</ProfileButtonText>
                  </ProfileButton>
                </View>
              </View>
            </Character>
          )}
        />
      </Container>
    );
  }
}
