// @flow
import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './Styles';

type Props = {
  testID: string,
  onChangeText: Function,
  placeholder: string,
};

const Input = (props: Props) => {
  const {testID, onChangeText, placeholder} = props;
  return (
    <View style={styles.primaryView}>
      <TextInput
        testID={testID}
        onChangeText={onChangeText}
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#FFF"
        color="#FFF"
        fontSize={17}
      />
    </View>
  );
};

export default Input;
