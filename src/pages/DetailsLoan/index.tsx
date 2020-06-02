import React from 'react';
import { Text, StatusBar } from 'react-native';
import Background from '../../components/Background';
import Title from '../../components/Title';
import Icon from 'react-native-vector-icons/Feather';
import {
  Footer,
  Header,
  Label,
  Value,
  DetailsClient,
  DetailsClientLoan,
  Data,
  CustomText,
  CustomValue,
  ContainerIcon,
  ContainerIcons
} from './styles';

const DetailsLoan: React.FC = () => {
  return(
    <>
     <StatusBar barStyle="light-content" backgroundColor="#F3903D" />
      <Background>
       <Header>
       <Title>Detalhes do empréstimo</Title>
       </Header>
       <Footer>
        <DetailsClientLoan>
          <Label>Data</Label>
          <Value>10/11/2019</Value>
          <Label>Valor do empréstimo</Label>
          <Value>R$500,00</Value>
          <Label>Total a ser pago</Label>
          <Value>R$750,00</Value>
          <Label>Total Parcelado</Label>
          <Value>12x de R$ 62,50</Value>
        </DetailsClientLoan>
        <DetailsClient>
            <Label>Titular</Label>
            <Value>Maria Santos</Value>
            <Label>CPF/CNPJ</Label>
            <Value>123456789-12</Value>
            <Label>Número do cartão</Label>
            <Value>1234 5555 6666 6789</Value>
            <Data>
              <CustomText >Validade</CustomText>
              <CustomText>CVV</CustomText>
            </Data>
            <Data>
              <CustomValue>10/26</CustomValue>
              <CustomValue>123</CustomValue>
            </Data>
              <ContainerIcons>
                <ContainerIcon>
                  <Icon name="download" size={35} color="#FFFFFF"/>
                </ContainerIcon>
                <ContainerIcon>
                  <Icon name="share-2" size={35} color="#FFFFFF"/>
                </ContainerIcon>
              </ContainerIcons>
          </DetailsClient>
       </Footer>
      </Background>
    </>
  );
}

export default DetailsLoan;
