import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused:boolean;
  isErrored:boolean;
}

export const Container = styled.View<ContainerProps>`
  width:100%;
  height:60px;
  padding: 0 16px;
  background:#F2F2F2;
  border-radius:10px;
  border-width: 2px;
  border-color:#F2F2F2;
  margin-top:10px;
  margin-bottom:5px;
  flex-direction: row;
  align-items:center;

  ${props => props.isErrored && css`
      border-color: #C53030;
  ` }

  ${props => props.isFocused && css`
      border-color: #F3903D;
  ` }
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
