import {gql} from '@apollo/client';

export const GET_TOKEN = gql`
 mutation obterToken($username: String!, $password: String!) {
   obterToken(username: $username, password: $password) {
     token
   }
 }
`;
