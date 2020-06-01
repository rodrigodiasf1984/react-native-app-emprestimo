import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

export const Container = styled.View`

`;



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
