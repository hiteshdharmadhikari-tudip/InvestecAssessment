// @flow
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './Style';

type Props = {
  testID: string,
  text: string,
  onPress: Function,
  disabled: boolean,
  type: 'primary' | 'secondary' | 'tertiary',
};

const Button = (props: Props) => {
  const {testID, text, onPress, disabled, type} = props;
  return (
    <TouchableOpacity
      {...props}
      testID={testID}
      style={[
        type === 'primary' && styles.primaryButton,
        type === 'secondary' && styles.secondaryButton,
        type === 'tertiary' && styles.tertiaryButton,
      ]}
      onPress={onPress}
      disabled={type === 'secondary' ? true : disabled}>
      <Text
        style={[
          type === 'primary' && styles.primaryTextStyle,
          type === 'secondary' && styles.secondaryTextStyle,
          type === 'tertiary' && styles.tertiaryTextStyle,
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
