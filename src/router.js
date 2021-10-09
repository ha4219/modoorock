import React, {Fragment, useRef} from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  Platform,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSelector, useDispatch} from 'react-redux';

import Home from './screens/Home';
import LoginScreen from './screens/LoginScreen';
import Test from './screens/Test';
import TabBar from './components/TabBar';
import SignupScreen from './screens/SignupScreen';
import {navigationRef} from './helpers/NavigationHelper';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
);

const TestStack = () => (
  <Stack.Navigator initialRouteName="Test">
    <Stack.Screen name="Test" component={Test} />
  </Stack.Navigator>
);

const LoginStack = () => (
  <Stack.Navigator initialRouteName="Login">
    <Stack.Screen name="Login" component={LoginScreen} />
  </Stack.Navigator>
);

const TabStack = () => {
  return (
    <Tab.Navigator tabBar={state => <TabBar {...state} />}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Test" component={TestStack} />
      <Tab.Screen name="Login" component={LoginStack} />
    </Tab.Navigator>
  );
};

const defaultProps = {
  isLoggedIn: false,
};

const Router = () => {
  const routeNameRef = useRef();
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  console.log('이게 맞아?',isLoggedIn);
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
            // screenOptions={{headerMode: false}}
            >
            {isLoggedIn ? (
              <Fragment>
                <Stack.Screen name="Tab" component={TabStack} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Test" component={Test} />
              </Fragment>
            ) : (
              <Fragment>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Signup" component={SignupScreen} />
              </Fragment>
            )}
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

Router.defaultProps = defaultProps;

export default Router;
