import React from 'react';
import Background from '../../components/Background';
import Icon from 'react-native-vector-icons/Feather'
import {StatusBar} from 'react-native';
import {
  Container,
  List,
  Loan,
  Label,
  LabelValue,
  LabelContainer,
  LabelValueContainer,
  LoanDetailsIcon,
  Title
} from './styles';



const MyRequests: React.FC = ({navigation}:any) => {

const loans= [
 {
   id:'1',
   date:'10/11/2019',
   loan:'500,00',
   totalLoan:'750,00',
   paymentTimes:'12',
   paymentValue:'62.50',
   client:'Maria Santos',
   cpf_cnpj:'123456789-12',
   credit_card_number: '1234 5555 6666 6789',
   expiry:'10/26',
   cvv:'123'
 },
 {
  id:'2',
  date:'06/05/2018',
  loan:'1000,00',
  totalLoan:'1250,00',
  paymentTimes:'12',
  paymentValue:'105,00',
  client:'Maria Santos',
  cpf_cnpj:'123456789-12',
  credit_card_number: '1234 5555 6666 6789',
  expiry:'10/26',
  cvv:'123'
 },
 {
  id:'3',
  date:'06/05/2016',
  loan:'600,00',
  totalLoan:'850,00',
  paymentTimes:'12',
  paymentValue:'71,00',
  client:'Maria Santos',
  cpf_cnpj:'123456789-12',
  credit_card_number: '1234 5555 6666 6789',
  expiry:'10/26',
  cvv:'123'
 },
]

  return(
    // <Background>
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <Container>
        <Title>Minhas Solicitações</Title>
      <List
        vertical
        data={loans}
        keyExtractor={loan => String(loan.id)}
        renderItem={({ item }) => (
          <Loan key={item.id}>
            <LabelContainer>
              <Label>Data</Label>
              <Label>Valor do empréstimo</Label>
            </LabelContainer>
              <LoanDetailsIcon onPress={()=>{navigation.navigate('DetailsLoan')}}>
                <Icon name="arrow-right" size={25} color="#F3903D"/>
              </LoanDetailsIcon>
            <LabelValueContainer>
              <LabelValue>{item.date}</LabelValue>
              <LabelValue>R$ {item.totalLoan}</LabelValue>
            </LabelValueContainer>
          </Loan>
        )}
      />
      </Container>
      </>
    // </Background>
  );
}

export default MyRequests;
