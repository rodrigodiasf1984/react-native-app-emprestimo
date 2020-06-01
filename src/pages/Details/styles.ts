import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';
import TextMessage from '../../components/TextMessage';
import Button from '../../components/Button';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import DefaultTitle from '../../components/Title';
import {Text} from 'react-native';


export const Container = styled(Animatable.View)`
  flex:1;
`;

export const Header = styled.View`
  margin-top:10px;
  flex:1;
  justify-content:center;
  align-items:center;
  margin-bottom:15px;
`;

export const Footer = styled(Animatable.View)`
  flex:7;
  background-color: #fff;
  border-top-left-radius:40px;
  border-top-right-radius: 40px;
  padding:20px;
  margin-top:10px;
`;

export const Label = styled(TextMessage)`
  color:#F3903D;
  font-size:15px;
`;
export const Value = styled(TextMessage)`
  margin-top:-5px;
  margin-left:10px;
  color:#F3903D;
  font-size:20px;
`;

export const DetailsLoan = styled.View`
  border-bottom-width:1px;
  border-bottom-color:#eeeeee;
`;

export const DetailsClient = styled.View`
`;

export const CustomText = styled(TextMessage)`
  width:50%;
  color:#F3903D;
  font-size:20px;
`;

export const CustomValue = styled(TextMessage)`
  width:50%;
  margin-top:-5px;
  margin-left:10px;
  color:#F3903D;
  font-size:25px;
`;

export const Data = styled.View`
  flex-direction:row;
  align-items:center;
  justify-content:space-between;

`;

export const BtnConfirmLoan = styled(Button)`
  background:#F3903D;
  align-self: center;
  border-radius:30px;
  elevation:5;
  margin-top:50px;
  padding:5px 0 ${5 + getBottomSpace()}px;
  width:90%;

`;

export const ButtonText = styled(Text)`
  font-family:'HelveticaNeue Medium';
  color:#FFFFFF;
  font-size:24px;
`;

export const Title = styled(DefaultTitle)`
  font-size:30px;
`;

export const ContainerIcon = styled.TouchableOpacity`
  background-color:#F3903D;
  width:50px;
  border-radius:25px;
  justify-content:center;
  align-items:center;
`;

export const TextIcon = styled(TextMessage)`
  width:60%;
  color:#F3903D;
  font-size:20px;
`;
