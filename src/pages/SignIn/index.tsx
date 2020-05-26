import React from 'react';
import {Image, StatusBar, Text} from 'react-native';

import Input from '../../components/Input';

import logoImg from '../../assets/logo.png';
import fotoLogin from '../../assets/fotoLogin.png';

import {
  Container,
  ImageTop,
  Logo,
  ContainerBottom,
  SubmitButton,
  ContainerButtons,
  ButtonLogin,
  ButtonSignIn,
  ButtonText,
  ForgotPassword,
  ForgotPasswordText,
} from './styles';

const SignIn: React.FC = () =>{
  <StatusBar barStyle="light-content" backgroundColor="#F3903D" />
  return (
    <Container>
      <ImageTop source={fotoLogin}/>
      <Logo>
        <Image source={logoImg} />
      </Logo>
      <ContainerBottom>
        <ContainerButtons>
          <ButtonLogin>
            <ButtonText>
              ENTRAR
            </ButtonText>
            </ButtonLogin>
          <ButtonSignIn>
            <ButtonText>
              CADASTRE-SE
            </ButtonText>
           </ButtonSignIn>
        </ContainerButtons>
        <Input name="email" icon="mail" placeholder="E-mail"/>
        <Input name="password" icon="lock" placeholder="Senha"/>
        <ForgotPassword onPress={()=> {}}>
          <ForgotPasswordText>Esqueci a minha senha</ForgotPasswordText>
        </ForgotPassword>
        <SubmitButton  onPress={()=>{}}>ENTRAR</SubmitButton>
      </ContainerBottom>
    </Container>

  );
};

export default SignIn;
