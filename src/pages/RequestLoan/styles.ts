import styled from 'styled-components/native';
import {Text, TextInput} from 'react-native';
import Button from '../../components/Button';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import * as Animatable from 'react-native-animatable';



export const ContainerPrincipal = styled.View`
  flex-direction:column;
  justify-content:center;
  align-items:center;
`;

export const Container = styled.View`
  margin-top:-50px;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  padding:50px;
`;

export const Title = styled(Text)`
  margin-top:10px;
  color: #FFFFFF;
  font-size:40px;
  font-family:'HelveticaNeue medium';
  padding:30px;
  margin-left:65px;

`;

export const TextMessage = styled(Text)`
  margin-top:10px;
  color: #FFFFFF;
  font-size:20px;
  font-family:'HelveticaNeue medium';
  margin-left:0px;
`;

export const InputQuantity = styled(TextInput).attrs({
  placeholderTextColor: "white"
})`
  margin-left:-20px;
  text-decoration-color:#FFFFFF;
  font-size:30px;
  font-family:'HelveticaNeue medium';
  text-decoration:underline;
`;


export const InputValue = styled(TextInput).attrs({
  placeholderTextColor: "white"
})`
  margin-left:-220px;
  text-decoration-color:#FFFFFF;
  font-size:30px;
  font-family:'HelveticaNeue medium';
  text-decoration:underline;
`;

export const SubmitButton = styled(Button)`
  width:70%;
  align-self: center;
  margin-top: 2px;
  background: #F2F2F2;
  border-radius:20px;
  elevation:5;
  padding:5px 0 ${5 + getBottomSpace()}px;
`;

export const SmallLine =styled(Text)`
  margin-top:-30px;
  color: #FFFFFF;
  font-size:20px;
  font-family:'HelveticaNeue medium';
  margin-left:0px;
`;


