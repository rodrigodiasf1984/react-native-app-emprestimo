import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';
import TextMessage from '../../components/TextMessage';

export const Header = styled.View`
  margin-top:0px;
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
  font-size:18px;
`;
export const Value = styled(TextMessage)`
  margin-top:-5px;
  margin-left:10px;
  color:#F3903D;
  font-size:18px;
`;

export const DetailsClientLoan = styled.View`
  margin-top:-20px;
  border-bottom-width:1px;
  border-bottom-color:#eeeeee;
`;

export const DetailsClient = styled.View`
`;

export const CustomText = styled(TextMessage)`
  width:50%;
  color:#F3903D;
  font-size:18px;
`;

export const CustomValue = styled(TextMessage)`
  width:50%;
  margin-top:-5px;
  margin-left:10px;
  color:#F3903D;
  font-size:18px;
`;

export const Data = styled.View`
  flex-direction:row;
  align-items:center;
  justify-content:space-between;

`;

export const ContainerIcon = styled.TouchableOpacity`
  margin-right:20px;
  background-color:#F3903D;
  width:50px;
  height:50px;
  border-radius:25px;
  justify-content:center;
  align-items:center;
`;

export const ContainerIcons  = styled.View`
  margin-top:15px;
  flex:1;
  flex-direction:row;
  align-content:center;
  justify-content:center;
  width:100%;


`;
