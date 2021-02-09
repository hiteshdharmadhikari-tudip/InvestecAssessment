import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  button: {
    //backgroundColor: "rgba(81,135,200,1)",
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#1c1a27',
    borderWidth: 2,
    width: width / 1.1,
    height: 60,
    justifyContent: 'center',
    borderRadius: 7,
    marginTop: 20,
    borderColor: '#778899',
  },
});

export default styles;
