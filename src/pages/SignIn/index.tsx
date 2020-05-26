import React,{useCallback, useRef} from 'react';
import {
  Image,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput
} from 'react-native';

import Input from '../../components/Input';

import logoImg from '../../assets/logo.png';
import fotoLogin from '../../assets/fotoLogin.png';
import {useNavigation} from '@react-navigation/native';
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
  ForgotPassword,
  ForgotPasswordText,
} from './styles';

const SignIn: React.FC = () =>{
  const passwordRef = useRef<TextInput>(null);
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();
  <StatusBar barStyle="light-content" backgroundColor="#F3903D" />

  const handleSignIn = useCallback((data: object) =>{
    console.log(data);
  },[]);

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
              </ButtonSignIn >
            </ContainerButtons>
            <Form ref={formRef} onSubmit={handleSignIn}>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                name="email"
                icon="mail"
                placeholder="E-mail"
                returnKeyType="next"
                onSubmitEditing={() => {
                    passwordRef.current?.focus();
                  }}
                />
              <Input
                ref={passwordRef}
                secureTextEntry
                name="password"
                icon="lock"
                placeholder="Senha"
                returnKeyType="send"
                onSubmitEditing={()=>{
                    formRef.current?.submitForm();
                  }}
                />
              <ForgotPassword onPress={()=> {}}>
                <ForgotPasswordText>Esqueci a minha senha</ForgotPasswordText>
              </ForgotPassword>
              <SubmitButton
                onPress={()=>{
                  formRef.current?.submitForm();
                }}
              >
                ENTRAR
              </SubmitButton>
            </Form>
          </ContainerBottom>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
