import styled from 'styled-components/native';
import Button from '../../components/Button';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import * as Animatable from 'react-native-animatable';
import {Text, TextInput} from 'react-native';

export const ContainerPrincipal = styled.View`
  flex-direction:column;
  justify-content:center;
  align-items:center;
`;

export const Container = styled.View`
  flex-direction:row;
  justify-content:center;
  align-items:center;
`;
export const SubmitButton = styled(Button)`
  width:50%;
  align-self: center;
  margin-top: 170px;
  background: #F2F2F2;
  border-radius:20px;
  elevation:5;
  padding:5px 0 ${5 + getBottomSpace()}px;
`;

export const Title = styled(Text)`
  color: #FFFFFF;
  font-size:30px;
  font-family:'HelveticaNeue medium';
  margin-left:30px;

`;

export const SmallInput = styled(TextInput).attrs({
  placeholderTextColor:"white"
})`
  margin-right:130px;
  color:#FFFFFF;
  font-size:30px;
  font-family:'HelveticaNeue medium';


`;
export const BigInput = styled(TextInput).attrs({
  placeholderTextColor: "white"
})`
  margin-left:-100px;
  text-decoration-color:#FFFFFF;
  font-size:30px;
  font-family:'HelveticaNeue medium';
  text-decoration:underline;
`;

export const Logo = styled(Animatable.View)`
   margin-top: 150px;
`;

export const SmallLine = styled.View`
  border-bottom-color: #FFFFFF;
  border-bottom-width: 5px;
`;
