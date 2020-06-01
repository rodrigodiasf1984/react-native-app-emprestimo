import styled from 'styled-components/native';
import {Text} from 'react-native';
import Button from '../../components/Button';
import {getBottomSpace} from 'react-native-iphone-x-helper';


export const ContainerPrincipal = styled.View`
  background:#fff;
  width:100%;
  height:100%;
  border-top-left-radius:20px;
  border-top-right-radius:20px;
  padding:20px;
  font-family:'HelveticaNeue Medium';
`;

export const Title = styled(Text)`
  color:#3C3C3C;
  align-self: center;
  font-size:20px;
  margin:5px;

`;

export const TextBigger = styled(Text)`
  font-size:20px;
  color: #707070C6;
`;

export const TextMedium = styled(Text)`
  font-size:18px;
  color:#909090;
`;

export const Span = styled(Text)`
  font-size:20px;
  color:#F3903D;
  margin-left:5px;
`;

export const Image = styled.Image`
  margin-top:5px;
  align-self: center;
`;

export const Container = styled.View`
    border-bottom-color: #eee;
    border-bottom-width: 2px;
    padding:5px;

`;

export const Content = styled.View`
  flex-direction:row;
`;

export const BtnRequestLoan = styled(Button)`
  background:#F3903D;
  align-self: center;
  border-radius:30px;
  elevation:5;
  margin:5px;
  padding:5px 0 ${5 + getBottomSpace()}px;
  width:90%;
`;
export const ButtonText = styled(Text)`
  font-family:'HelveticaNeue Medium';
  color:#FFFFFF;
  font-size:24px;
`;
