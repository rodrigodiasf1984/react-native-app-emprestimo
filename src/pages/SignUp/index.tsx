import React,{
  useRef,
  useCallback
} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
  Alert
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Input from '../../components/Input';
import CustomInput from '../../components/CustomInput';
import logoImg from '../../assets/logo.png';
import fotoLogin from '../../assets/fotoLogin.png';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';
import * as Yup from 'yup';
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

import getValidationErrors from '../../utils/getValidationErrors';
interface SignUpFormData {
  name: string,
  email: string,
  cpf: string,
  rg: string,
  password: string,
}

const SignUp: React.FC = () =>{
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();
  const emailInputRef = useRef<TextInput>(null);
  const cpfInputRef = useRef<TextInput>(null);
  const RgInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const handleSignUp = useCallback(
    async(data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          nome: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          cpf: Yup.string().required('CPF obrigatório'),
          rg: Yup.string().required('RG obrigatório'),
          password: Yup.string().required().min(6, 'No minimo 6 dígitos',)
        });

        await schema.validate(data, {
          abortEarly: false,
        });
        // fazer integração com graphql
        navigation.navigate('ValidatePhoneNumber')
      } catch (err) {
        if(err instanceof Yup.ValidationError){
          const errors = getValidationErrors(err);
          console.log(errors);
          formRef.current?.setErrors(errors);
          return;
        }

        Alert.alert(
          'Erro no cadastro',
          'Ocorreu um erro ao efetuar cadastro, tente novamente.',
          );
      }
    },[],);

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
            <Form ref={formRef} onSubmit={handleSignUp}>
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
