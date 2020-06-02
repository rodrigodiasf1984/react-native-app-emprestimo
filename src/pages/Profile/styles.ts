import styled from 'styled-components/native';
import DefaultTitle from '../../components/Title';
import TextMessage from '../../components/TextMessage';

export const ContainerPrincipal = styled.View`
  flex:1;
  background:#ffffff;
`;

export const Title = styled(DefaultTitle)`
  margin-top:-40px;
  margin-left:-20px;
  color:#F3903D;
`;

export const Container = styled.TouchableOpacity`
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
  margin: 10px 10px;
  border-bottom-width:1px;
  border-bottom-color:#eeeeee;
`;

export const ContainerTitleIcon = styled.View`
  flex-direction:row;
`;
export const IconTitle= styled.View`
  margin-left:-25px;
  margin-top:15px;
`;

export const ContainerValueIcon = styled.View`
  flex-direction:row;
  align-items:center;
  justify-content:center;
`;

export const ContainerIcon  = styled.View`
  margin-top:10px;
`;

export const Label = styled(TextMessage)`
  color:#F3903D;
  font-size:22px;
`;
export const Value = styled(TextMessage)`
  color:#F59019;
  font-size:18px;
  margin-right:5px;
`;
