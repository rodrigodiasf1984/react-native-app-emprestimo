
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
// import {setContext} from '@apollo/link-context';

// const httpsLink =  new HttpLink({
//   uri: 'https://casanova-backend-staging.herokuapp.com/graphql',
// })

// const authLink = setContext((_, {headers}) =>{
//   const token = localStorage.getItem('token');
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     }
//   }
// });


import link from '../graphql/link';

const client = new ApolloClient({
 link: link,
 cache: new InMemoryCache()
});

export default client;
