import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import * as Screens from './src/screens';
import {Provider} from 'react-redux';
import store from './src/store/Store';

const {Screen, Navigator} = createStackNavigator();

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Navigator>
        <Screen
          name="Welcome"
          component={Screens.Welcome}
          options={{headerShown: false}}
        />
        <Screen
          name="Home"
          component={Screens.Home}
          options={{headerShown: false}}
        />
        <Screen
          name="Add Task"
          component={Screens.AddTask}
          options={{headerShown: false}}
        />
      </Navigator>
    </NavigationContainer>
  </Provider>
);

export default App;
