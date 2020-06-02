import styled from 'styled-components/native';
import SubButton from '../../components/SubmitButton';
import defaultTitle from '../../components/Title';

export const InputContainer = styled.View`

  flex-direction:row;
  padding:5px 30px ;

`;

export const CustomInput = styled.TextInput.attrs({
  placeholderTextColor:"white"
})`
  border-color:#cccccc;
  border-bottom-width:1px;
  height:50px;
  font-size:25px;
  color:#FFFFFF;
  margin-left:30px;
  width:${props=>props.customSize && props.customSize}%;

`;

export const SubmitButton = styled(SubButton)`
  margin-top:-157px;

`;

export const Title = styled(defaultTitle)`
  margin-top:-40px;
  margin-left:20px;
  margin-bottom:-20px;
  font-size:30px;
`;

export const TextError = styled.Text`
   margin-top:145px;
   color: #FF0000;
   font-size: 24px;
   text-decoration:underline;
`;

export const CreditCardContainer = styled.View`
  flex:1;
  margin-top:5px;
  background-color:#FFFFFF;
  margin-bottom:200px;
`;

