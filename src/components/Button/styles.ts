import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width:80%;
  height:60px;
  background:#F2F2F2;
  justify-content:center;
  align-items:center;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  border: 2px solid #eee;
`;

export const ButtonText=styled.Text`
font-family:'HelveticaNeue Medium';
color:#707070C6;
font-size:18px;
`;
