import styled from 'styled-components/native';

export const Container = styled.View`

`;

export const InputContainer = styled.View`
  padding-top:15px;
`;

export const CustomInput = styled.TextInput.attrs({
  placeholderTextColor:"white"
})`
  border-color:#cccccc;
  border-bottom-width:1px;
  height:50px;
  width:300px;
  font-size:25;
  padding-left:20px;
  padding-right:20px;
  color:#FFFFFF;

`;

export const ContainerPrincipal = styled.View`
  flex-direction:column;
  justify-content:center;
  align-items:center;
`;
