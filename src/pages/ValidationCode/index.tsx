
import React from 'react';
import { Image } from 'react-native';
import LogoImg from '../../assets/logo.png';
import Background from '../../components/Background';
import {useNavigation} from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {
  Container,
  Title,
  BigInput,
  ContainerPrincipal,
  Logo,
  TextMessage,
  SmallLine,
  ContainerIcons,
  TextIcons,

 } from './styles';

const ValidationCode: React.FC = () => {
  const navigation= useNavigation();
  return(
    <Background>
      <ContainerPrincipal>
        <Title>Validar +55 71 91234-5678</Title>
          <TextMessage>Enviamos um código</TextMessage>
          <TextMessage>para o seu número</TextMessage>
          <Container>
            <BigInput
              placeholder="---  ---"
              defaultValue=""
            />
            <SmallLine>___________________________</SmallLine>
          </Container>
          <Container>
            <ContainerIcons>
              <FeatherIcon name="message-square" size={35} color="#FFFFFF"/>
              <TextIcons>Reenviar SMS</TextIcons>
            </ContainerIcons>
            <ContainerIcons>
              <FeatherIcon name="phone" size={35} color="#FFFFFF"/>
              <TextIcons>Me ligue</TextIcons>
            </ContainerIcons>
          </Container>
          <Logo
            animation="bounceIn"
          >
            <Image
              source={LogoImg}
            />
          </Logo>
      </ContainerPrincipal>
    </Background>
  );
}

export default ValidationCode;
