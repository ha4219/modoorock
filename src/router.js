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
import AsyncStorage from '@react-native-async-storage/async-storage';

import Home from './screens/Home';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import Test from './screens/Test';
import TabBar from './components/TabBar';
import SignupScreen from './screens/SignupScreen';
import CameraScreen from './screens/CameraScreen';
import {navigationRef} from './helpers/NavigationHelper';
import QrScannerScreen from './screens/QrScannerScreen';
import CameraImogeScreen from './screens/CameraImogeScreen';
import QnaScreen from './screens/QnaScreen';
import NoticeScreen from './screens/profile/NoticeScreen';
import MissionScreen from './screens/mission/MissionScreen';
import MissionDoingScreen from './screens/mission/MissionDoingScreen';
import MissionOXScreen from './screens/mission/MissionOXScreen';
import MissionShortAnswerScreen from './screens/mission/MissionShortAnswerScreen';
import ProfileScreen from './screens/profile/ProfileScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator initialRouteName="Home" screenOptions={{headerMode: false}}>
    <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
    <Stack.Screen
      name="Camera"
      component={CameraScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Qr"
      component={QrScannerScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Imoge"
      component={CameraImogeScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Qna"
      component={QnaScreen}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

const TestStack = () => (
  <Stack.Navigator initialRouteName="Test" screenOptions={{headerMode: false}}>
    <Stack.Screen
      name="Test"
      component={Test}
      screenOptions={{headerMode: false}}
    />
  </Stack.Navigator>
);

const ProfileStack = () => (
  <Stack.Navigator
    initialRouteName="Profile"
    screenOptions={{headerMode: false}}>
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      screenOptions={{headerMode: false}}
    />
    <Stack.Screen
      name="Notice"
      component={NoticeScreen}
      screenOptions={{headerMode: false}}
    />
  </Stack.Navigator>
);

const MissionStack = () => (
  <Stack.Navigator
    initialRouteName="Mission"
    screenOptions={{headerMode: false}}>
    <Stack.Screen
      name="Mission"
      component={MissionScreen}
      screenOptions={{headerMode: false}}
    />
    <Stack.Screen
      name="Doing"
      component={MissionDoingScreen}
      screenOptions={{headerMode: false}}
    />
    <Stack.Screen
      name="ShortAnswer"
      component={MissionShortAnswerScreen}
      screenOptions={{headerMode: false}}
    />
    <Stack.Screen
      name="OX"
      component={MissionOXScreen}
      screenOptions={{headerMode: false}}
    />
  </Stack.Navigator>
);

const defaultProps = {
  isLoggedIn: false,
};

const Router = () => {
  const routeNameRef = useRef();
  const dispatch = useDispatch();

  React.useEffect(() => {
    () => async () => await AsyncStorage.getItem('cookie').then(data => {
        if (data) {
          dispatch(LOGINSUCCESS);
        } else {
          dispatch(LOGINERROR);
        }
      });
  }, []);

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
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
          {isLoggedIn ? (
            <Tab.Navigator
              tabBar={state => (
                <TabBar {...state} screenOptions={{headerMode: false}} />
              )}>
              <Tab.Screen
                name="HomeStack"
                component={HomeStack}
                screenOptions={{headerMode: false}}
              />
              <Tab.Screen
                name="TestStack"
                component={TestStack}
                screenOptions={{headerMode: false}}
              />
              <Tab.Screen
                name="MissionStack"
                component={MissionStack}
                screenOptions={{headerMode: false}}
              />
              <Tab.Screen
                name="ProfileStack"
                component={ProfileStack}
                screenOptions={{headerMode: false}}
              />
            </Tab.Navigator>
          ) : (
            <Stack.Navigator
              initialRouteName={'Home'}
              // screenOptions={{headerMode: false}}
            >
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Signup" component={SignupScreen} />
            </Stack.Navigator>
          )}
        </NavigationContainer>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboard: {
    flex: 1,
  },
});

Router.defaultProps = defaultProps;

export default Router;
