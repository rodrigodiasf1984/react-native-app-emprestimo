import { Text } from "react-native";
import styled from 'styled-components/native';
import Button from '../../components/Button';
import * as Animatable from 'react-native-animatable';
import {getBottomSpace} from 'react-native-iphone-x-helper';

export const Header = styled.View`
  flex:2;
  justify-content:center;
  align-items:center;
`;

export const Footer = styled(Animatable.View)`
  flex:1;
  background-color: #fff;
  border-top-left-radius:60px;
  border-top-right-radius: 60px;
  padding:50px;
`;

export const Logo = styled(Animatable.View)`
  justify-content:center;
  align-self: center;
`;

export const Title = styled(Text)`
  color: #F3903D;
  font-size:30px;
  font-family:'HelveticaNeue medium';
  margin-left:30px;

`;

export const TextBtn = styled(Text)`
  color: #FFFF;
  margin-top:5px;
  margin-left:50px;
`;

export const Btn = styled(Button)`
  background-color:#F3903D;
  border-radius:30px;
  elevation:5;
  align-self: center;
  margin-top:25px;
  padding:5px 0 ${5 + getBottomSpace()}px;
  width:90%;
  align-items:center;
`;

export const TextSignIn = styled(Text)`
  color: #F3903D;
  font-family:'HelveticaNeue medium';
  margin-left:30px;
  font-size:20px;

`;


