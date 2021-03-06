import { Size } from 'src/styles';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  gradientButton: {
    position: 'absolute',
    bottom: Size(7),
    alignSelf: 'center'
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    marginRight: -Size(),
    marginLeft: -Size(),
    marginBottom: -Size()
  },
  navigationContainer: {
    backgroundColor: "#ecf0f1"
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center"
  }
});

export default styles;
