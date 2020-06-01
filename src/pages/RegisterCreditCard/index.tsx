import React,{useRef} from 'react';
import Background from '../../components/Background';
import { ContainerPrincipal } from './styles';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import Title from '../../components/Title';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';

const RegisterCreditCard: React.FC = () => {
  const formRef=useRef();
  const navigation = useNavigation();
  return(
      <Background>
      <ContainerPrincipal>
        <Title>Solicite seu empréstimo</Title>
          <Form ref={formRef} onSubmit={()=>{}}>

              <Button onPress={()=>{navigation.navigate('RegisterCreditCard')}}>
                AVANÇAR
              </Button>
          </Form>
      </ContainerPrincipal>
    </Background>
  );
}
export default RegisterCreditCard;
