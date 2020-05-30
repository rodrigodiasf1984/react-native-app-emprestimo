import React,{useRef} from 'react';
import { View } from 'react-native';
import Background from '../../components/Background';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';
import Input from '../../components/Input';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  ContainerPrincipal,
  Title,
  TextMessage,
  SubmitButton,
} from './styles';

const RequestLoan: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();
  return (
    <Background>
      <ContainerPrincipal>
        <Title>Solicite seu empréstimo</Title>
          <Form ref={formRef} onSubmit={()=>{}}>
            <Container>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                name="Valor"
                placeholder="Valor(R$)"
                returnKeyType="next"
                onSubmitEditing={() => {}}
                />
              <Input
                name="QteParcelas"
                placeholder="Quantidade de parcelas"
                returnKeyType="next"
                onSubmitEditing={()=>{}}
                />
              <TextMessage>Total a ser pago(R$)</TextMessage>
              <Input
                name="ValorAserPago"
                placeholder=""
                returnKeyType="next"
                onSubmitEditing={()=>{}}
                />
               <TextMessage>Valor Parcelado(R$)</TextMessage>
               <Input
                name="ValorParcelado"
                placeholder=""
                returnKeyType="next"
                onSubmitEditing={()=>{}}
                />
              </Container>
              <SubmitButton
                onPress={()=>{
                  formRef.current?.submitForm();
                }}
              >
               AVANÇAR
            </SubmitButton>
          </Form>
      </ContainerPrincipal>
    </Background>

  );
}

export default RequestLoan;
