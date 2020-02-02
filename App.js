import React from 'react';
import { StatusBar } from 'react-native'
import { mapping, light as lightTheme } from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApplicationProvider, IconRegistry } from 'react-native-ui-kitten';

import GuestNav from './src/nav/GuestNav'

const App = () => {
    return (
        <ApplicationProvider mapping={mapping} theme={lightTheme}>
          <StatusBar hidden={false}/>
          <IconRegistry icons={EvaIconsPack} />
          <GuestNav />
        </ApplicationProvider>
  );
}

export default App;

