import styled from 'styled-components/native';
import Button from '../../components/Button';
import {getBottomSpace} from 'react-native-iphone-x-helper';

export default styled(Button)`
  width:70%;
  align-self: center;
  margin-top: 2px;
  background: #F2F2F2;
  border-radius:20px;
  elevation:5;
  padding:5px 0 ${5 + getBottomSpace()}px;
`;
