import React from 'react';
import { View, Text } from 'react-native';
import {DrawerContainer, DrawerSection, BottomDrawerSection} from './styles';
import {DrawerContentScrollView, DrawerItem}from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Feather';
import {
  Title,
  Caption,
  Paragraph,
  Drawer,
  TouchableRipple,
  Switch
} from 'react-native-paper';
import { color } from 'react-native-reanimated';

export function DrawerContent(props){
  return(
    <DrawerContainer>
      <DrawerContentScrollView {...props}>
      <DrawerSection>
          <BottomDrawerSection>
            <DrawerItem
              icon={({color, size})=>(
                <Icon
                name="menu"
                  size={24}
                  color={'#E89353'}
                  />
                  )}
                  label=""
                  onPress={()=>{props.navigation.navigate('Home')}}

                  />
          </BottomDrawerSection>
        </DrawerSection>
        <DrawerSection>
          <BottomDrawerSection>
            <DrawerItem
              icon={({color, size})=>(
                <Icon
                name="user"
                  size={24}
                  color={'#E89353'}
                  />
                  )}
                  label="Perfil"
                  onPress={()=>{props.navigation.navigate('Perfil')}}
                  labelStyle={{
                    color:'#E89353'
                  }}
                  />
          </BottomDrawerSection>
        </DrawerSection>
        <DrawerSection>
          <BottomDrawerSection>
            <DrawerItem
              icon={({color, size})=>(
                <Icon
                name="dollar-sign"
                  size={24}
                  color={'#E89353'}
                  />
                  )}
                  label="Minhas solicitações"
                  onPress={()=>{props.navigation.navigate('Minhas solicitações')}}
                  labelStyle={{
                    color:'#E89353'
                  }}
                  />
          </BottomDrawerSection>
        </DrawerSection>
        <DrawerSection>
          <BottomDrawerSection>
            <DrawerItem
              icon={({color, size})=>(
                <Icon
                name="credit-card"
                  size={24}
                  color={'#E89353'}
                  />
                  )}
                  label="Solicitar empréstimo"
                  onPress={()=>{props.navigation.navigate('Solicitar empréstimo')}}
                  labelStyle={{
                    color:'#E89353'
                  }}
                  />
          </BottomDrawerSection>
        </DrawerSection>
        <DrawerSection>
          <BottomDrawerSection>
            <DrawerItem
              icon={({color, size})=>(
                <Icon
                name="log-out"
                  size={24}
                  color={'#E89353'}
                  />
                  )}
                  label="Sair"
                  onPress={()=>{}}
                  labelStyle={{
                    color:'#E89353'
                  }}
                  />
          </BottomDrawerSection>
        </DrawerSection>
      </DrawerContentScrollView>
    </DrawerContainer>
  )
};




