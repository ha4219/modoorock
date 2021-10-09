import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {ApplicationProvider} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import SplashScreen from 'react-native-splash-screen';

import {store, persistor} from './store';
import Router from './router';
import {theme} from './theme';

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <React.Fragment>
      <ApplicationProvider {...eva} theme={theme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Router />
          </PersistGate>
        </Provider>
      </ApplicationProvider>
    </React.Fragment>
  );
};

export default App;
