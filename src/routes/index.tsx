import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Profile from '../pages/Profile';
import SplashScreen from '../pages/SplashScreen';
import ValidatePhoneNumber from '../pages/ValidatePhoneNumber'
import ValidationCode from '../pages/ValidationCode';
import MyRequests from '../pages/MyRequests';
import RequestLoan from '../pages/RequestLoan';
import RegisterCreditCard from '../pages/RegisterCreditCard';
import Home from '../pages/Home';
import Details from '../pages/Details';
import DetailsLoan from '../pages/DetailsLoan';
import {ApolloProvider} from '@apollo/client';
import client from '../services/apollo';
import Icon from 'react-native-vector-icons/Feather';
import {DrawerContent} from '../components/DrawContent';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = ({navigation}:any) =>(
    <Stack.Navigator
    screenOptions={{
      cardStyle:{backgroundColor:'#F3903D'}
    }}
    initialRouteName='Perfil'
    >
    <Stack.Screen
      name="SplashScreen"
      component={SplashScreen}
      options={{headerShown:false}}
    />
    <Stack.Screen
      name="SignIn"
      component={SignIn}
      options={{headerShown:false}}
    />
    <Stack.Screen
      name="SignUp"
      component={SignUp}
      options={{
        headerShown:false}}
    />
    <Stack.Screen
      name="ValidatePhoneNumber"
      component={ValidatePhoneNumber}
      options={{headerShown:false}}
    />
    <Stack.Screen
      name="ValidationCode"
      component={ValidationCode}
      options={{headerShown:false}}
    />
     <Stack.Screen
      name="RequestLoan"
      component={RequestLoan}
      options={{
        headerTitle:'',
        headerTintColor:'#fff',
        headerLeft:()=> (
          <Icon.Button
            name="arrow-left" size={25}
            backgroundColor="#F3903D"
            onPress={() => navigation.navigate('Home')}></Icon.Button>
        ),
        headerStyle:{
          backgroundColor:'#F3903D',
          elevation:0,
          shadowOpacity:0,
        }
      }}
    />
    <Stack.Screen
      name="MyRequests"
      component={MyRequests}
      options={{
        headerTitle:'',
        headerLeft:()=> (
          <Icon.Button
            name="arrow-left" size={25} color="#F3903D"
            backgroundColor="#FFFFFF"
            onPress={() => navigation.navigate('Home')}></Icon.Button>
        ),
        headerStyle:{
          backgroundColor:'#FFFFFF',
          elevation:0,
          shadowOpacity:0,
        }
      }}
    />
     <Stack.Screen
      name="RegisterCreditCard"
      component={RegisterCreditCard}
      options={{
        headerTitle:'',
        headerTintColor:'#fff',
        headerLeft:()=> (
          <Icon.Button
            name="arrow-left" size={25}
            backgroundColor="#F3903D"
            onPress={() => navigation.navigate('RequestLoan')}></Icon.Button>
        ),
        headerStyle:{
          backgroundColor:'#F3903D',
          elevation:0,
          shadowOpacity:0,
        }
      }}
    />
    <Stack.Screen
      name="Details"
      component={Details}
      options={{
        headerTitle:'',
        headerTintColor:'#fff',
        headerLeft:()=> (
          <Icon.Button
            name="arrow-left" size={25}
            backgroundColor="#F3903D"
            onPress={() => navigation.navigate('RegisterCreditCard')}></Icon.Button>
        ),
        headerStyle:{
          backgroundColor:'#F3903D',
          elevation:0,
          shadowOpacity:0,
        }
      }}
    />
    <Stack.Screen
      name="DetailsLoan"
      component={DetailsLoan}
      options={{
        headerTitle:'',
        headerTintColor:'#fff',
        headerLeft:()=> (
          <Icon.Button
            name="arrow-left" size={25}
            backgroundColor="#F3903D"
            onPress={() => navigation.navigate('MyRequests')}></Icon.Button>
        ),
        headerStyle:{
          backgroundColor:'#F3903D',
          elevation:0,
          shadowOpacity:0,
        }
      }}
    />
    <Stack.Screen
      name="Perfil"
      component={Profile}
      options={{

        headerTitle:'',
        headerTitleAlign:'center',
        headerTintColor:'#fff',
        headerRight:()=> (
          <Icon.Button
            name="menu" size={25}
            backgroundColor="#FFFFFF"
            color="#F3903D"
            onPress={() => navigation.toggleDrawer()}></Icon.Button>
        ),
        headerLeft:()=> (
          <Icon.Button
            name="arrow-left" size={25} color="#F3903D"
            backgroundColor="#FFFFFF"
            onPress={() => navigation.navigate('Home')}></Icon.Button>
        ),
        headerStyle:{
          backgroundColor:'#FFFFFF',
          elevation:0,
          shadowOpacity:0,
        }
      }}
    />
    <Stack.Screen
      name="Home"
      component={Home}
      options={{

        headerTitle:'Olá, Maria!',
        headerTitleAlign:'center',
        headerTintColor:'#fff',
        headerRight:()=> (
          <Icon.Button
            name="menu" size={25}
            backgroundColor="#F3903D"
            onPress={() => navigation.toggleDrawer()}></Icon.Button>
        ),
        headerStyle:{
          backgroundColor:'#F3903D',
          elevation:0,
          shadowOpacity:0,
        }
      }}
    />
  </Stack.Navigator>
);

const Routes : React.FC = () =>(
  <ApolloProvider client={client}>
    <Drawer.Navigator
      drawerPosition="right"
      initialRouteName="Home"
      drawerContent={props => <DrawerContent{...props}/>}
      >
      <Drawer.Screen
        name="Home"
        component={HomeStackScreen}
      />
      <Drawer.Screen name="Perfil" component={Profile}/>
      <Drawer.Screen name="Minhas solicitações" component={MyRequests}/>
      <Drawer.Screen name="Solicitar empréstimo" component={RequestLoan}/>
    </Drawer.Navigator>
  </ApolloProvider>
);

export default Routes;
