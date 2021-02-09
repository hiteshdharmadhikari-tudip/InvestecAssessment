// @flow
import * as React from 'react';
import {View, Text} from 'react-native';
import {Input, Button} from '../../components/index';
import {connect} from 'react-redux';
import * as ActionTypes from '../../store/ActionTypes';
import styles from './Style';
import DeviceInfo from '../../util/DeviceInfo';

type Props = {
  navigation: any,
  user: {username: string},
  addUser: Function,
};

const Welcome = (props: Props) => {
  const {
    addUser,
    navigation: {navigate},
    user: {username},
  } = props;
  const [name, setName] = React.useState('');
  const [device, setDevice] = React.useState('');
  const checkDevice = async () => {
    const isEmulator = await DeviceInfo.isEmulator();
    setDevice(
      isEmulator ? 'App is running on Emulator' : 'App is running on Device',
    );
  };
  const handleHomeInput = () => {
    addUser(name);
    navigate('Home');
  };
  return (
    <View style={styles.primaryContainer}>
      <Text style={styles.welcomeText}>Welcome {username}</Text>
      <Text testID="emulator_text" style={styles.welcomeText}>
        {device}
      </Text>
      <View style={styles.secondaryContainer}>
        <Input
          testID="input_name"
          onChangeText={(text) => setName(text)}
          placeholder="Your Good Name Please...!"
        />
        <Button
          type={name ? 'primary' : 'secondary'}
          testID="btn_press_me"
          onPress={() => handleHomeInput()}
          text="Press me"
          disabled={!name}
        />
        <Button
          type="primary"
          testID="btn_check_device"
          onPress={() => checkDevice()}
          text="Check Device"
        />
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({user: state.user});
const mapDispatchToProps = (dispatch) => ({
  addUser: (username) => {
    dispatch({
      type: ActionTypes.ADD_USER,
      payload: {
        username,
      },
    });
  },
});

const connectComponent = connect(mapStateToProps, mapDispatchToProps);

export default connectComponent(Welcome);
