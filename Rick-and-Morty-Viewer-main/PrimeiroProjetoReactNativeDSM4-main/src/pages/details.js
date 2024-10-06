import {
  Container,
  EpisodeDetails,
  Avatar,
  NameDetails,
  LocationDetails,
  StatusDetails,
  SpeciesDetails,
  GenderDetails,
} from './styles';
import React, {Component} from 'react';
import {View} from 'react-native';
import api from '../services/api';

export default class Details extends Component {
  state = {
    details: [],
    allEpisodes: 0,
  };

  async componentDidMount() {
    const {route} = this.props;
    const {character} = route.params;
    const response = await api.get(`/character/?name=${character.name}`);

    const characterDetails = response.data.results[0];

    this.setState({
      details: response.data,
      allEpisodes: characterDetails.episode.length,
    });
  }

  render() {
    const {route} = this.props;
    const {character} = route.params;

    return (
      <Container
        style={{
          flexDirection: 'column',
          backgroundColor: '#1f1f1f',
          alignItems: 'center',
        }}>
        <Avatar
          source={{uri: character.avatar}}
          style={{width: '90%', height: 300}}
        />
        <View
          style={[
            {marginTop: 20},
            {padding: 20},
            {backgroundColor: '#3c3e44'},
            {width: '90%'},
            {borderRadius: 20},
          ]}>
          <NameDetails>{character.name}</NameDetails>
          <StatusDetails>Status: {character.status}</StatusDetails>
          <SpeciesDetails>Espécie: {character.species}</SpeciesDetails>
          <GenderDetails>Gênero: {character.gender}</GenderDetails>
          <LocationDetails>Última localização: {character.location}</LocationDetails>
          <EpisodeDetails>
            Participou de {this.state.allEpisodes} episódios
          </EpisodeDetails>
        </View>
      </Container>
    );
  }
}
