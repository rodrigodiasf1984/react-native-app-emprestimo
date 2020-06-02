import styled from 'styled-components/native';
import DefaultInput from '../../components/Input';
import DefaultSubmitButton from '../../components/SubmitButton';
import DefaultTitle from '../../components/Title';

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

export const ContainerValue = styled.View`
  width:70%;
`;

export const Input = styled(DefaultInput)`

`;

export const SubmitButton =  styled(DefaultSubmitButton)`
  margin-top:75px;

`;

export const Title = styled(DefaultTitle)`
  margin-top:-40px;
`;
