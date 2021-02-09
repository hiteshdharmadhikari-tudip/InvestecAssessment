import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  primaryView: {
    backgroundColor: '#1c1a27',
    flex: 1,
  },
  innerView: {
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    padding: 10,
  },
  secondaryView: {
    marginTop: 350,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  variationText: {
    fontSize: 20,
    fontWeight: '900',
    color: '#b0bc17',
  },
});

export default styles;
