
import {RectButton} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #555;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  height: 40px;
  background: #eee;
  border: 1px solid #888;
  border-radius: 20px;
  padding: 0 15px;
`;

export const SubmitButton = styled(RectButton)`
  height: 40px;
  justify-content: center;
  align-items: center;
  background: #ffca28;
  margin-left: 10px;
  padding: 0 12px;
  border-radius: 20px;
  opacity: ${props => (props.loading ? 0.7 : 1)};
`;

export const List = styled.FlatList`
  margin-top: 20px;
`;

export const Character = styled.View`
  align-items: center;
  margin: 0 10px 15px;
  display: flex;
  flex-direction: column;
`;

export const View = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;

export const Avatar = styled.Image`
  margin-top: 10px;
  margin-horizontal: 10px;
  width: 120px;
  height: 120px;
  border-radius: 60px;
  background: #eee;
`;

export const Name = styled.Text`
  font-size: 20px;
  color: #FFF;
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`;

export const Status = styled.Text`
  font-size: 13px;
  line-height: 18px;
  color: #FFF;
  margin-top: 5px;
  text-align: center;
`;

export const ProfileButton = styled(RectButton)`
  margin-top: 10px;
  margin-bottom: 5px;
  background-color: #999;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 100px;
  border-radius: 5px;
`;

export const ProfileButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;

export const Location = styled.Text`
  font-size: 13px;
  line-height: 18px;
  color: #FFF;
  margin-top: 5px;
  text-align: center;
`;

export const Episode = styled.Text`
  font-size: 13px;
  line-height: 18px;
  color: #FFF;
  margin-top: 5px;
  text-align: center;
`;

export const NameDetails = styled.Text`
  font-size: 20px;
  color: #FFF;
  font-weight: bold;

  text-align: center;
`;

export const EpisodeDetails = styled.Text`
  font-size: 18px;
  color: #fff;
  text-align: center;
  margin-bottom: 10px;
`;

export const LocationDetails = styled.Text`
  font-size: 18px;
  color: #fff;
  text-align: center;
`;

export const StatusDetails = styled.Text`
  font-size: 18px;
  color: #fff;
  text-align: center;
`;

export const SpeciesDetails = styled.Text`
  font-size: 18px;
  color: #fff;
  text-align: center;
`;

export const GenderDetails = styled.Text`
  font-size: 18px;
  color: #fff;
  text-align: center;
  
`;