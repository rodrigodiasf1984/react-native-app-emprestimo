import React,{useRef} from 'react';
import {
  Image,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
  Alert
} from 'react-native';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';
import Input from '../../components/Input';
import logoImg from '../../assets/logo.png';
import fotoLogin from '../../assets/fotoLogin.png';
import {useNavigation} from '@react-navigation/native';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';
import {useMutation} from '@apollo/client';
import {GET_TOKEN } from '../../graphql/queries';

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

interface SignInFormData{
  email:string;
  password: string;
}

export default function SignIn({history}:any){
  const passwordRef = useRef<TextInput>(null);
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  <StatusBar barStyle="light-content" backgroundColor="#F3903D" />

  async function handleSubmit(dataForm : SignInFormData){
      // try {
      //   formRef.current?.setErrors({});
      //   const schema =Yup.object().shape({
      //     email:Yup.string()
      //       .required('E-mail obrigatório')
      //       .email('Digite um e-mail válido'),
      //     password: Yup.string().required('Senha obrigatória'),
      //   });

      //   await schema.validate(dataForm, {
      //     abortEarly:false,
      //   });

        const [obterToken, {error, data}] = useMutation(GET_TOKEN);
        if(error){
          console.log(error);
        }
        obterToken({
          variables:{
            email: dataForm.email, password: dataForm.password
        }});

      // } catch (err) {
      //   console.log(err);
      //   if(err instanceof Yup.ValidationError){
      //     const errors = getValidationErrors(err);
      //     console.log(errors);
      //     formRef.current?.setErrors(errors);
      //     return;
      //   }

      //   Alert.alert(
      //     'Erro na autenticação',
      //     'Ocorreu um erro ao efetuar login, verifique as credenciais.',
      //     );
      //}
    }

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
            <Form ref={formRef} onSubmit={handleSubmit}>
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


