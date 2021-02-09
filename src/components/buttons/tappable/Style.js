import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  primaryButton: {
    backgroundColor: '#6aaefd',
    padding: 10,
    borderWidth: 0,
    width: width / 1.1,
    height: 55,
    alignItems: 'center',
    borderRadius: 7,
    marginTop: 20,
  },
  primaryTextStyle: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
  },
  secondaryButton: {
    marginTop: 10,
    backgroundColor: '#34424d',
    padding: 10,
    borderWidth: 0,
    width: width / 1.1,
    alignItems: 'center',
    borderRadius: 7,
    height: 55,
  },
  secondaryTextStyle: {
    fontSize: 18,
    color: '#5781ae',
    fontWeight: 'bold',
    marginTop: 4,
  },
  tertiaryButton: {
    backgroundColor: 'transparent',
    marginTop: 40,
  },
  tertiaryTextStyle: {
    fontSize: 18,
    color: '#6680a5',
    fontWeight: 'bold',
    marginBottom: 25,
  },
});

export default styles;
