import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  input: {
    borderColor: 'white',
    borderWidth: 1,
    padding: 10,
    width: width / 1.1,
    borderRadius: 7,
    textAlign: 'center',
  },
  primaryView: {
    marginVertical: 20,
    alignItems: 'center',
  },
});

export default styles;
