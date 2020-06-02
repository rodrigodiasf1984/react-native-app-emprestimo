import React from 'react';
import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {
  ContainerPrincipal,
  Title,
  Container,
  ContainerIcon,
  ContainerTitleIcon,
  Label,
  Value,
  ContainerValueIcon,
  IconTitle
 } from './styles';

const Profile: React.FC = () => {
  return (
    <>
    <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF"/>
    <ContainerPrincipal>
      <ContainerTitleIcon>
        <Title>Maria Santos</Title>
        <IconTitle onPress={()=>{}}>
          <Icon name="edit-2" size={15} color="#F3903D"/>
        </IconTitle>
      </ContainerTitleIcon>
      <Container>
        <Label>E-Mail</Label>
        <ContainerValueIcon>
          <Value>mariasantos@hotmail.com</Value>
          <ContainerIcon>
            <Icon name="arrow-right" size={25} color="#F3903D"/>
          </ContainerIcon>
        </ContainerValueIcon>
      </Container>
      <Container>
        <Label>Alterar senha de</Label>
        <ContainerValueIcon>
          <Value></Value>
          <ContainerIcon>
            <Icon name="arrow-right" size={25} color="#F3903D"/>
          </ContainerIcon>
        </ContainerValueIcon>
      </Container>
      <Container>
        <Label>Cartão</Label>
        <ContainerValueIcon>
          <Value>**** 1234</Value>
          <ContainerIcon>
            <Icon name="arrow-right" size={25} color="#F3903D"/>
          </ContainerIcon>
        </ContainerValueIcon>
      </Container>
      <Container>
        <Label>Telefone</Label>
        <ContainerValueIcon>
          <Value>71 91234-5678</Value>
          <ContainerIcon>
            <Icon name="arrow-right" size={25} color="#F3903D"/>
          </ContainerIcon>
        </ContainerValueIcon>
      </Container>
      <Container>
        <Label>RG</Label>
        <ContainerValueIcon>
          <Value>1212345678</Value>
          <ContainerIcon>
            <Icon name="arrow-right" size={25} color="#F3903D"/>
          </ContainerIcon>
        </ContainerValueIcon>
      </Container>
      <Container>
        <Label>CPF</Label>
        <ContainerValueIcon>
          <Value>12345678-12</Value>
          <ContainerIcon>
            <Icon name="arrow-right" size={25} color="#F3903D"/>
          </ContainerIcon>
        </ContainerValueIcon>
      </Container>
    </ContainerPrincipal>
    </>
  );
}

export default Profile;
