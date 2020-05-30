import React from 'react';
import { Image } from 'react-native';
import LogoImg from '../../assets/logo.png';
import Background from '../../components/Background';
import {useNavigation} from '@react-navigation/native';
import {
  Container,
  Title,
  SubmitButton,
  SmallInput,
  BigInput,
  ContainerPrincipal,
  Logo,
 } from './styles';

const ValidatePhoneNumber: React.FC = () => {
  const navigation= useNavigation();
  return(
    <Background>
      <ContainerPrincipal>
        <Title>Valide seu número</Title>
          <Container>
            <SmallInput
              placeholder="+55"

            />
            <BigInput
              placeholder="Seu número"
              defaultValue=""
            />
          </Container>
          <Logo
            animation="bounceIn"
          >
            <Image
              source={LogoImg}
            />
          </Logo>
        <SubmitButton onPress={()=>{navigation.navigate('ValidationCode')}}>
          AVANÇAR
        </SubmitButton>
      </ContainerPrincipal>
    </Background>
  );
}

export default ValidatePhoneNumber;
