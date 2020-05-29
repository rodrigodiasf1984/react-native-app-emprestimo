import styled from 'styled-components/native';
import {Image} from 'react-native';
import Button from '../../components/Button';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import * as Animatable from 'react-native-animatable';

export const Header = styled.View`
  margin-top:-50px;
  flex:1;
  justify-content:center;
  align-items:center;

`;

export const Footer = styled(Animatable.View)`
  flex:1;
  background-color: #fff;
  border-top-left-radius:60px;
  border-top-right-radius: 60px;
  padding:15px;
  margin-top:30px;
`;

export const Container = styled.View`
  flex:1;
`;

export const Logo = styled(Animatable.View)`
  margin-top:-240px;
`;

export const ImageTop = styled(Image)`
  margin-top:30px;
  opacity:0.5;

`;

export const ContainerBottom = styled.View`
  margin-top:-10px;

`;

export const SubmitButton = styled(Button)`
  width:70%;
  align-self: center;
  margin-top: 42px;
  background: #F2F2F2;
  border-radius:20px;
  elevation:5;
  padding:5px 0 ${5 + getBottomSpace()}px;
`;

export const ContainerButtons= styled.View`
  margin-top:-45px;
  margin-bottom:0px;
  flex-direction:row;
  width:100%;
  padding:10px;

`;

export const ButtonLogin= styled.TouchableOpacity`
  width:50%;
  height:60px;
  background:#F2F2F2;
  justify-content:center;
  align-items:center;
  margin-left:0px;
  margin-bottom:40px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  overflow: hidden;
  elevation:5;
`;
export const ButtonSignIn= styled.TouchableOpacity`
  width:50%;
  height:60px;
  background:#FFFFFF;
  justify-content:center;
  align-items:center;
  margin-left:0px;
  margin-bottom:40px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  overflow: hidden;
  elevation:5;
`;

export const ButtonText=styled.Text`
  font-family:'HelveticaNeue Medium';
  color:#707070C6;
  font-size:18px;
`;

export const ForgotPassword = styled.TouchableOpacity``;
export const ForgotPasswordText = styled.Text`
  text-align:right;
  color: #707070C6;
`;

export const Action = styled.View`
  flex-direction:'row';
  margin-top: 10px;
  border-bottom-width:1px;
  padding:5px;

`;
