import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  width:48%;
  height:60px;
  padding: 0 16px;
  background:#F2F2F2;
  border-radius:10px;
  margin-top:10px;
  margin-bottom:5px;
  flex-direction: row;
  align-items:center;
`;

export const TextInput = styled.TextInput`
  flex:1;
  color:#707070C6;
  font-size:18px;
  font-family: 'HelveticaNeue Medium';
`;

export const Icon = styled(FeatherIcon)`
  margin-right:16px;
`;
