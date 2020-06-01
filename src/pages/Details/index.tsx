import React from 'react';
import { View } from 'react-native';
import BackGround from '../../components/Background';
import Icon from 'react-native-vector-icons/Feather';

import {
  Footer,
  Header,
  Container,
  Label,
  Value,
  DetailsClient,
  DetailsLoan,
  CustomText,
  CustomValue,
  Data,
  Title,
  ContainerIcon,
  TextIcon,
  BtnConfirmLoan,
  ButtonText
} from './styles';

const Details: React.FC = () => {
  return(
    <BackGround>
      <Container>
        <Header>
          <Title>Detalhes da solicitação do empréstimo</Title>
        </Header>
        <Footer
          // animation="fadeInUpBig"
        >
          <DetailsLoan>
            <Label>Valor do empréstimo</Label>
            <Value>R$500,00</Value>
            <Label>Total a ser pago</Label>
            <Value>R$750,00</Value>
            <Label>Total Parcelado</Label>
            <Value>12x de R$ 62,50</Value>
          </DetailsLoan>
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
            <Data>
              <TextIcon>Alterar cartão de crédito</TextIcon>
              <ContainerIcon>
                <Icon name="repeat" size={35} color="#FFFFFF"/>
              </ContainerIcon>
            </Data>
            <BtnConfirmLoan>
              <ButtonText>
                Confirmar solicitação
              </ButtonText>
            </BtnConfirmLoan>
          </DetailsClient>
        </Footer>
      </Container>
    </BackGround>

  );
}

export default Details;
