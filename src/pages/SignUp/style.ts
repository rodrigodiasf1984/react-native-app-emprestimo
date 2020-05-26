import styled from 'styled-components/native';
import {Image} from 'react-native';
import Button from '../../components/Button';
import {getBottomSpace} from 'react-native-iphone-x-helper';
export const Container = styled.SafeAreaView`
  margin-top:-60px;
  flex:1;
  color:#F3903D;
  align-items:center;
  justify-content:center;
  padding: 0px;
`;

export const Logo = styled.View`
  margin-top:-250px;
`;

export const ImageTop = styled(Image)`
  margin-top:150px;
  opacity:0.5;
`;

export const ContainerBottom = styled.View`
  margin-top:35px;
  background:#fff;
  width:100%;
  height:70%;
  border-top-left-radius: 60px;
  border-top-right-radius: 60px;
  padding:0px 30px ;
  elevation:5;

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

export const ContainerButtons = styled.View`
  margin-top:-25px;
  margin-bottom:0px;
  flex-direction:row;
  width:100%;

`;

export const ButtonLogin = styled.TouchableOpacity`
  width:50%;
  height:60px;
  background:#FFFFFF;
  justify-content:center;
  align-items:center;
  margin-left:0px;
  margin-bottom:40px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  overflow: hidden;
  elevation:5;
`;
export const ButtonSignIn = styled.TouchableOpacity`
  width:50%;
  height:60px;
  background:#F2F2F2;
  justify-content:center;
  align-items:center;
  margin-left:0px;
  margin-bottom:40px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  overflow: hidden;
  elevation:5;
`;

export const ButtonText = styled.Text`
  font-family:'HelveticaNeue Medium';
  color:#707070C6;
  font-size:18px;
`;

export const IdCpfContainer = styled.View`
  flex-direction:row;
  justify-content:space-between;
`;





