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

import {autoLogin} from './actions/auth';
import Home from './screens/Home';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import Test from './screens/Test';
import TabBar from './components/TabBar';

import {TourAreaScreen} from './screens/tour/TourAreaScreen';
import TourAreaMoreScreen from './screens/tour/TourAreaMoreScreen';
import TourThemeScreen from './screens/tour/TourThemeScreen';
import SignupScreen from './screens/SignupScreen';
import CameraScreen from './screens/CameraScreen';
import {navigationRef} from './helpers/NavigationHelper';
import QrScannerScreen from './screens/QrScannerScreen';
import CameraImogeScreen from './screens/CameraImogeScreen';
import QnaScreen from './screens/profile/QnaScreen';
import NoticeScreen from './screens/profile/NoticeScreen';
import FaqScreen from './screens/profile/FaqScreen';
import MissionScreen from './screens/mission/MissionScreen';
import MissionDoingScreen from './screens/mission/MissionDoingScreen';
import MissionOXScreen from './screens/mission/MissionOXScreen';
import MissionShortAnswerScreen from './screens/mission/MissionShortAnswerScreen';
import MissionMultipleChoiceScreen from './screens/mission/MissionMultipleChoiceScreen';

import ProfileScreen from './screens/profile/ProfileScreen';
import AboutUsScreen from './screens/profile/AboutUsScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
//<Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
const HomeStack = () => (
  <Stack.Navigator initialRouteName="Home" screenOptions={{headerMode: false}}>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{headerShown: false}}
    />
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

const TourStack = () => (
  <Stack.Navigator initialRouteName="Area" screenOptions={{headerMode: false}}>
    <Stack.Screen name="Area" component={TourAreaScreen} />
    <Stack.Screen name="AreaMore" component={TourAreaMoreScreen} />
    <Stack.Screen name="Theme" component={TourThemeScreen} />
  </Stack.Navigator>
);

const ProfileStack = () => (
  <Stack.Navigator initialRouteName="Profile">
    <Stack.Screen name="Profile" component={ProfileScreen} />
    <Stack.Screen name="Notice" component={NoticeScreen} />
    <Stack.Screen name="AboutUs" component={AboutUsScreen} />
    <Stack.Screen name="Faq" component={FaqScreen} />
    <Stack.Screen name="Qna" component={QnaScreen} />
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
    <Stack.Screen
      name="MultipleChoice"
      component={MissionMultipleChoiceScreen}
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
    AsyncStorage.getItem('cookie').then(data => {
      console.log('get?', data);
      if (data !== null) {
        dispatch(autoLogin({data}));
      }
    });
    console.log('hello');
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
                <TabBar {...state} screenOptions={{headerShown: false}} />
              )}
              screenOptions={{headerShown: false}}>
              <Tab.Screen
                name="HomeStack"
                component={HomeStack}
                screenOptions={{headerMode: false}}
              />
              <Tab.Screen
                name="TourStack"
                component={TourStack}
                screenOptions={{headerMode: false}}
              />
              <Tab.Screen
                name="MapStack"
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
