import React,{useRef} from 'react';
import {
  Image,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput
} from 'react-native';
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
  const navigation = useNavigation();
  const emailInputRef = useRef<TextInput>(null);
  const cpfInputRef = useRef<TextInput>(null);
  const RgInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);
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
              <Input
                autoCapitalize="words"
                name="nome"
                icon="user"
                placeholder="NOME"
                returnKeyType="next"
                onSubmitEditing={() => {
                  emailInputRef.current?.focus();
                }}
              />
              <Input
                ref={emailInputRef}
                autoCapitalize="none"
                autoCorrect={false}
                name="email"
                icon="mail"
                placeholder="E-MAIL"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() => {
                  cpfInputRef.current?.focus();
                }}
              />
              <IdCpfContainer>
                <CustomInput
                  ref={cpfInputRef}
                  name="cpf"
                  icon="percent"
                  placeholder="CPF"
                  keyboardType="numeric"
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    RgInputRef.current?.focus();
                  }}
                />
                <CustomInput
                  ref={RgInputRef}
                  name="rg"
                  icon="info"
                  placeholder="RG"
                  autoCapitalize="characters"
                  autoCorrect={false}
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    passwordInputRef.current?.focus();
                  }}
                />
              </IdCpfContainer>
              <Input
                ref={passwordInputRef}
                name="password"
                icon="lock"
                placeholder="SENHA"
                secureTextEntry
                textContentType="oneTimeCode"
                returnKeyType="send"
                onSubmitEditing={()=> formRef.current?.submitForm()}
                />
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
