// @flow
import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {Button, SliderButton} from '../../components/index';
import styles from './Style';

type Props = {
  navigation: any,
  user: {username: string},
  addUser: Function,
};

const Home = (props: Props) => {
  const {
    navigation: {navigate, goBack},
    user: {username},
  } = props;
  const handleBack = () => {
    goBack();
  };
  const toAddTask = () => {
    navigate('Add Task');
  };
  return (
    <ScrollView>
      <View style={styles.primaryView}>
        <View style={styles.innerView}>
          <Text style={styles.welcomeText}>Welcome {username}</Text>
        </View>
        <View style={styles.secondaryView}>
          <Text style={styles.variationText}>4 variations of a button</Text>
          <Button
            type={'tertiary'}
            onPress={() => handleBack()}
            text="Press Me"
          />
          <Button type={'secondary'} onPress={() => null} text="Press Me" />
          <Button
            type={'primary'}
            onPress={() => toAddTask()}
            text="Press Me"
          />
          <SliderButton
            onPress={() => toAddTask()}
            text="Slide me to continue"
          />
        </View>
      </View>
    </ScrollView>
  );
};

const mapStateToProps = (state) => ({user: state.user});
const mapDispatchToProps = () => ({});
const connectComponent = connect(mapStateToProps, mapDispatchToProps);

export default connectComponent(Home);
