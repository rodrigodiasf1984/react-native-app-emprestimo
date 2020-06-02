import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import TextMessage from '../../components/TextMessage';
import DefaultTitle from '../../components/Title';
export const Container = styled.View`
  flex:1;
  background:#ffffff;
`;

export const List = styled(FlatList)`
  max-height: 400px;
  margin-top:-40px;
  margin-left:-10px;
  margin-right:5px;
`;

export const Loan = styled.View`
  background:#ffffff;
  padding:10px;
  margin:15px;
  width: 100%;
  border-color:#cccccc;
  border-bottom-width:1px;
  height:70px;
`;

export const LabelContainer = styled.View`
  flex-direction:row;
  margin-top:-10px;

`;

export const LabelValueContainer = styled.View`
  flex-direction:row;
`;
export const Label = styled(TextMessage)`
  font-size:18px;
  color:#F3903D;
  margin-right:100px;

`;

export const LabelValue = styled(TextMessage)`
  margin-top:-5px;
  font-size:18px;
  color:#F3903D;
  margin-right:100px;
  margin-left:10px;
`;

export const LoanDetailsIcon = styled.TouchableOpacity`
  align-self: flex-end;
  margin-right:10px;
  margin-top:-20px;
`;

export const Title = styled(DefaultTitle)`
  margin-top:-40px;
  color:#F3903D;
`;
