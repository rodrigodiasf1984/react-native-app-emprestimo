import styled from 'styled-components/native';
import {Text, TextInput} from 'react-native';
import * as Animatable from 'react-native-animatable';


export const ContainerPrincipal = styled.View`
  flex-direction:column;
  justify-content:center;
  align-items:center;
`;

export const Container = styled.View`
  flex-direction:column;
  justify-content:center;
  align-items:center;
`;

export const ContainerIcons = styled.TouchableOpacity`
  flex-direction:row;
  justify-content:center;
  align-items:baseline;
`;

export const Title = styled(Text)`
  margin-top:10px;
  color: #FFFFFF;
  font-size:30px;
  font-family:'HelveticaNeue medium';
  margin-left:0px;

`;

export const TextMessage = styled(Text)`
  margin-top:10px;
  color: #FFFFFF;
  font-size:20px;
  font-family:'HelveticaNeue medium';
  margin-left:0px;
`;

export const TextIcons = styled(Text)`
  margin-top:40px;
  color: #FFFFFF;
  font-size:25px;
  font-family:'HelveticaNeue medium';
  margin-left:10px;

`;

export const BigInput = styled(TextInput).attrs({
  placeholderTextColor: "white"
})`
  align-self: center;;
  text-decoration-color:#FFFFFF;
  font-size:30px;
  font-family:'HelveticaNeue medium';
  text-decoration:underline;
`;

export const Logo = styled(Animatable.View)`
   margin-top: 50px;
`;

export const SmallLine =styled(Text)`
  margin-top:-30px;
  color: #FFFFFF;
  font-size:20px;
  font-family:'HelveticaNeue medium';
  margin-left:0px;
`;

export const BtnIcon = styled.TouchableOpacity``;
