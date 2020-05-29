import React from 'react'
import{ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  Container,
  TextBigger,
  Image,
  Title,
  Span,
  Content,
  ContainerPrincipal,
  TextMedium,
  BtnRequestLoan,
  ButtonText
} from './styles';

//Imagens importadas de acordo com o nome das mesmas
import image2 from '../../assets/Imagem2.png';
import image1 from '../../assets/Imagem1.png';
import image3 from '../../assets/Imagem3.png';

//Componentes

const Home: React.FC = () => {
const navigation = useNavigation();
  return(
    <ContainerPrincipal>
       <ScrollView
        keyboardShouldPersistTaps="handled"
      >
        <Container>
          <TextBigger>
            Empréstimo descomplicado, com serviços para cartão de crédito, cheque e consignado.
          </TextBigger>
          <Content>
            <TextBigger>
              Divida em até
            </TextBigger>
            <Span>
              12 vezes!
            </Span>
          </Content>
        </Container>
        <Container>
          <Image source={image2}/>
          <Title>Empréstimo Pessoal</Title>
          <TextMedium>
            Sem consulta. Aprovação em até 30min. Pague com cartão de crédito. Temos as melhores taxas do mercado.
          </TextMedium>
        </Container>
        <Container>
          <Image source={image1}/>
          <Title>Pague em até 12x</Title>
          <TextMedium>
            Parcele o seu empréstimo em até 12x no cartão de crédito e garanta mais agilidade para você.
          </TextMedium>
        </Container>
        <Container>
          <Image source={image3}/>
          <Title>Dinheiro em até 30 min</Title>
          <TextMedium>
            Após a aprovação do empréstimo, a quantia solicitada será depositada na sua conta bancária em até 30 min.
          </TextMedium>
        </Container>
      </ScrollView>
        <BtnRequestLoan>
          <ButtonText>
            Solicitar empréstimo
          </ButtonText>
        </BtnRequestLoan>
    </ContainerPrincipal>
  );
}

export default Home;
