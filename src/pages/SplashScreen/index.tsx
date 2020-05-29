import React from 'react';
import {Image } from 'react-native';
import Background from  '../../components/Background';
import LogoImg from '../../assets/logo-casanova.png';
import Icon from 'react-native-vector-icons/Feather';

import {useNavigation} from '@react-navigation/native';

import {
  Header,
  Footer,
  Logo,
  Title,
  TextSignIn,
  Btn,
  TextBtn,
} from './styles';

const SplashScreen: React.FC = () => {
  const navigation = useNavigation();
  return(
    <Background>
      <Header>
        <Logo
          animation="fadeInUpBig"
        >
          <Image
            source={LogoImg}
          />
        </Logo>
      </Header>
      <Footer
          animation="fadeInUpBig"
        >
            <Title>Emprestimo com liberação imediata</Title>
            <TextSignIn>Sem consulta, parcele no cartão de crédito!</TextSignIn>
            <Btn onPress={() => navigation.navigate('SignIn')}>
              <TextBtn>
                Clique aqui para começar!
              </TextBtn>
            </Btn>

      </Footer>
    </Background>
    );
}

export default SplashScreen;
