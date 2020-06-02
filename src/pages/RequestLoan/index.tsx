import React,{useRef} from 'react';
import Background from '../../components/Background';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';
import {useNavigation} from '@react-navigation/native';
import TextMessage from '../../components/TextMessage';
import ContainerPrincipal from '../../components/ContainerPrincipal'

import {
  InputContainer,
  CustomInput,
  ContainerValue,
  Input,
  SubmitButton,
  Title
} from './styles';

const RequestLoan: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();
  return (
    <Background>
      <ContainerPrincipal>
        <Title>Solicite seu empréstimo</Title>
          <Form ref={formRef} onSubmit={()=>{}}>
            <InputContainer>
              <CustomInput
                customSize="100"
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="numeric"
                name="Valor"
                placeholder="Valor(R$)"
                returnKeyType="next"
                onSubmitEditing={() => {}}
                />
              </InputContainer>
              <InputContainer>
              <CustomInput
                customSize="100"
                name="QteParcelas"
                placeholder="Quantidade de parcelas"
                returnKeyType="next"
                onSubmitEditing={()=>{}}
                />
                </InputContainer>
              <TextMessage>Total a ser pago(R$)</TextMessage>
              <ContainerValue>
                <Input
                  name="ValorAserPago"
                  placeholder=""
                  returnKeyType="next"
                  onSubmitEditing={()=>{}}
                  />
               </ContainerValue>
               <TextMessage>Valor Parcelado(R$)</TextMessage>
               <ContainerValue>
                <Input
                  name="ValorParcelado"
                  placeholder=""
                  returnKeyType="next"
                  onSubmitEditing={()=>{}}
                  />
                </ContainerValue>

              <SubmitButton onPress={()=>{navigation.navigate('RegisterCreditCard')}}>
                AVANÇAR
              </SubmitButton>
          </Form>
      </ContainerPrincipal>
    </Background>
  );
}
export default RequestLoan;
