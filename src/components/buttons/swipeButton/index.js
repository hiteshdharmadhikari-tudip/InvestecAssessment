// @flow

import SwipeButton from 'rn-swipe-button';
import React from 'react';
import {View} from 'react-native';
import diamondIcon from '../../../assets/diamond.png';
import styles from './Style';

type Props = {
  text: string,
  onPress: Function,
};

const sButton = (props: Props) => {
  const {onPress, text} = props;

  return (
    <View style={styles.button}>
      <SwipeButton
        disabled={false}
        swipeSuccessThreshold={80}
        height={55}
        width={390}
        title={text}
        titleColor="#5a8dc4"
        titleFontSize={20}
        titleStyles="bold"
        thumbIconImageSource={diamondIcon}
        onSwipeSuccess={onPress}
        shouldResetAfterSuccess={true}
        railFillBackgroundColor="#1c1a27"
        railFillBorderColor="#1c1a27"
        thumbIconBackgroundColor="#6eb1f7"
        thumbIconBorderColor="#6eb1f7"
        railBackgroundColor="#1c1a27"
        railBorderColor="#1c1a27"
      />
    </View>
  );
};

export default sButton;
