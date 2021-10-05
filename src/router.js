import React, {Fragment, useRef} from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  Platform
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './screens/Home';
import LoginScreen from './screens/LoginScreen';
import Test from './screens/Test';
import TabBar from './components/TabBar';
import {navigationRef} from './helpers/NavigationHelper';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator initialRouteName="Home" screenOptions={{headerMode: false}}>
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
);

const TestStack = () => (
  <Stack.Navigator initialRouteName="Test" screenOptions={{headerMode: false}}>
    <Stack.Screen name="Test" component={Test} />
  </Stack.Navigator>
);

const LoginStack = () => (
  <Stack.Navigator initialRouteName="Login" screenOptions={{headerMode: false}}>
    <Stack.Screen name="Login" component={LoginScreen} />
  </Stack.Navigator>
);

const TabStack = () => {
  console.log('???');
  return (
    <Tab.Navigator tabBar={state => <TabBar {...state} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Test" component={Test} />
      <Tab.Screen name="Login" component={LoginScreen} />
    </Tab.Navigator>
  );
};

const Router = () => {
  const routeNameRef = useRef();
  return (
    <KeyboardAvoidingView
      style={styles.keyboard}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <SafeAreaView style={styles.container}>
        <NavigationContainer
          ref={navigationRef}
          onReady={() =>
            (routeNameRef.current =
              navigationRef.current.getCurrentRoute().name)
          }
          // onStateChange={async() => {
          //   const previousRouteName = navigationRef.current;
          //   const currentRouteName =
          //     navigationRef.current.getCurrentRoute().name;
          //   if (previousRouteName !== currentRouteName) {
          //     captureScreen({screenName: currentRouteName});
          //   }
          //   routeNameRef.current = currentRouteName;
          // }}
        >
          <Stack.Navigator
            initialRouteName={'Home'}
            screenOptions={{headerMode: false}}>
            <Fragment>
              <Stack.Screen name="Tab" component={TabStack} />
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Test" component={Test} />
              <Stack.Screen name="Login" component={LoginScreen} />
            </Fragment>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
  keyboard: {
    flex: 1,
  },
});

export default Router;
