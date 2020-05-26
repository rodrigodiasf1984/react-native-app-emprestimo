import React,{useRef} from 'react';
import {Image, StatusBar, KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Input from '../../components/Input';
import CustomInput from '../../components/CustomInput';
import logoImg from '../../assets/logo.png';
import fotoLogin from '../../assets/fotoLogin.png';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';

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
  IdCpfContainer
} from './style';

const SignUp: React.FC = () =>{
  const formRef = useRef<FormHandles>(null);
  const navigation= useNavigation();
  <StatusBar barStyle="light-content" backgroundColor="#F3903D" />
  return (
    <KeyboardAvoidingView
      style={{flex:1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
      >
        <Container>
          <ImageTop source={fotoLogin}/>
          <Logo>
            <Image source={logoImg} />
          </Logo>
          <ContainerBottom>
            <ContainerButtons>
              <ButtonLogin onPress={()=> navigation.navigate('SignIn')}>
                <ButtonText>
                  ENTRAR
                </ButtonText>
                </ButtonLogin>
              <ButtonSignIn onPress={() => navigation.navigate('SignUp')}>
                <ButtonText>
                  CADASTRE-SE
                </ButtonText>
              </ButtonSignIn>
            </ContainerButtons>
            <Form ref={formRef} onSubmit={(data) =>{
              console.log(data)
            }}>
              <Input name="nome" icon="user" placeholder="NOME"/>
              <Input name="email" icon="mail" placeholder="E-MAIL"/>
              <IdCpfContainer>
                <CustomInput name="cpf" icon="percent" placeholder="CPF"/>
                <CustomInput name="rg" icon="info" placeholder="RG"/>
              </IdCpfContainer>
              <Input name="password" icon="lock" placeholder="SENHA"/>
              <SubmitButton  onPress={()=> formRef.current?.submitForm()}>
                CADASTRAR
              </SubmitButton>
            </Form>
          </ContainerBottom>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
