/**
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import Welcome from '../src/screens/welcomeScreen';
import DeviceInfo from '../src/util/DeviceInfo';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('../src/util/deviceInfo', () => ({
  isEmulator: jest.fn(),
}));
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

const store = mockStore({user: {username: 'Guest'}});
const props = {navigation: {navigate: jest.fn()}, user: {username: 'Guest'}};
const component = (
  <Provider store={store}>
    <Welcome {...props} />
  </Provider>
);

describe('AddUser component test', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  test('adds a new user when the button is pressed', () => {
    const {getByTestId} = render(component);
    fireEvent.changeText(getByTestId('input_name'), 'Test');
    fireEvent.press(getByTestId('btn_press_me'));
    expect(props.navigation.navigate).toHaveBeenCalledWith('Home');
  });

  test('should not navigate to another screen', () => {
    const {getByTestId} = render(component);
    fireEvent.changeText(getByTestId('input_name'), '');
    fireEvent.press(getByTestId('btn_press_me'));
    expect(props.navigation.navigate).not.toHaveBeenCalled();
  });

  test("should call Native Module isEmulator Method when check device button is pressed and should show 'App is running on Device'", async () => {
    DeviceInfo.isEmulator.mockReturnValueOnce(false);
    const {getByTestId} = render(component);
    fireEvent.press(getByTestId('btn_check_device'));
    await waitFor(() => {
      expect(getByTestId('emulator_text').children[0]).toEqual(
        'App is running on Device',
      );
    });
  });

  test("should call Native Module isEmulator Method when check device button is pressed and should show 'App is running on Emulator'", async () => {
    DeviceInfo.isEmulator.mockReturnValueOnce(true);
    const {getByTestId} = render(component);
    fireEvent.press(getByTestId('btn_check_device'));
    await waitFor(() => {
      expect(getByTestId('emulator_text').children[0]).toEqual(
        'App is running on Emulator',
      );
    });
  });
});
