import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
const Auth = createStackNavigator();

import {ApolloProvider} from '@apollo/client';
import client from '../services/apollo';


const AuthRoutes : React.FC = () =>(
  <ApolloProvider client={client}>
    <Auth.Navigator
      screenOptions={{
        headerShown:false,
        cardStyle:{backgroundColor:'#F3903D'}
      }}
      >
      <Auth.Screen name="SignIn" component={SignIn}/>
      <Auth.Screen name="SignUp" component={SignUp}/>
    </Auth.Navigator>
  </ApolloProvider>
);

export default AuthRoutes;
