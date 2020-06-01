import React,{useRef, useState} from 'react';
import Background from '../../components/Background';
import ContainerPrincipal  from '../../components/ContainerPrincipal';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';
import Icon from 'react-native-vector-icons/Feather';
import {TouchableOpacity, StatusBar} from 'react-native';
import {CreditCardInput, LiteCreditCardInput }  from 'react-native-credit-card-input';

import {
  InputContainer,
  CustomInput,
  SubmitButton,
  Title,
  TextError,
  CreditCardContainer,
} from './styles';

import {UIManager} from 'react-native';

{/* <StatusBar barStyle="light-content" backgroundColor="#F3903D" /> */}
UIManager.setLayoutAnimationEnabledExperimental(true);

interface FormData{
  cvc:number,
  expiry:number,
  name:string,
  number:number
}
export default  function RegisterCreditCard(dataForm:FormData) {
  const [CVC, setCVC]=useState('');
  const [expiry, setExpery]=useState('');
  const [name, setName]=useState('');
  const [number, setNumber]=useState('');
  const [CpfCnpj, setCpfCpnj]=useState('');
  const formRef = useRef<FormHandles>(null);

  console.log(dataForm);
  const _onFocus = field => console.log('focusing', field)

  const _onChange = dataForm => console.log(JSON.stringify(dataForm, null , ' '))
  return(
      <Background>
      <ContainerPrincipal>
        <Title>Cadastre seu cartão de crédito</Title>
        <CreditCardContainer>
          <CreditCardInput
             autoFocus
             requireName
             requireCVC
             requirePostalCode
             validColor="white"
             invalidColor="red"
             placeholderColor="white"
             labelStyle={{
               color:'white',
               fontSize:12
             }}
             inputStyle={{color:'white', fontSize:16}}
            onFocus={_onFocus}
            onChange={_onChange}
            />
          </CreditCardContainer>

            <Form ref={formRef} onSubmit={()=>{}}>
              <InputContainer >
                <CustomInput customSize="100"
                  name="NumeroCartao"
                  placeholder="Número do cartão"
                  keyboardType="numeric"
                  onChangeText={setNumber}
                  value={number}
                />
              </InputContainer>
              <InputContainer >
                <CustomInput customSize="60"
                  name="Validade"
                  keyboardType="numeric"
                  placeholder="Validade"
                  onChangeText={setExpery}
                  value={expiry}
                />
                <CustomInput customSize="30"
                  name="CVC"
                  placeholder="CVC"
                  keyboardType="numeric"
                  value={CVC}
                  onChangeText={setCVC}
                />
              </InputContainer>
              <InputContainer >
                <CustomInput customSize="100"
                  name="Nome"
                  keyboardType="text"
                  placeholder="Nome do titular"
                  value={name}
                  onChangeText={setName}
                />
              </InputContainer>
              <InputContainer >
                <CustomInput customSize="100"
                  name="CPFCNPJ"
                  placeholder="CPF/CNPJ"
                />
              </InputContainer>
                <TextError>CPF inválido</TextError>
                <SubmitButton onPress={()=>{navigation.navigate('RegisterCreditCard')}}>
                  AVANÇAR
                </SubmitButton>
            </Form>

      </ContainerPrincipal>
    </Background>
  );
}

RegisterCreditCard.navigationOptions = ({ navigation }:any) => ({
  headerShown:false,
  title:'',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('RequestLoan');
      }}
    >
      <Icon name="arrow-left" size={20} color="#000" />
    </TouchableOpacity>
  ),
});
