// @flow
import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {Button} from '../../components/index';
import styles from './Style';

type Props = {
  navigation: any,
  user: {username: string},
};
const AddTask = (props: Props) => {
  const {
    navigation: {navigate},
    user: {username},
  } = props;
  const toHome = () => {
    navigate('Welcome');
  };
  return (
    <View style={styles.primaryView}>
      <View style={styles.secondaryView}>
        <Text style={styles.textStyle}>Bye {username}</Text>
      </View>
      <View style={styles.endButton}>
        <Text style={styles.thankYou}>Thank You</Text>
        <Button type="primary" onPress={() => toHome()} text="Log out" />
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({user: state.user});
const mapDispatchToProps = () => ({});
const connectComponent = connect(mapStateToProps, mapDispatchToProps);

export default connectComponent(AddTask);
