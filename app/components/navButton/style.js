import {StyleSheet} from 'react-native';
import {BoldText, BasePadding} from '../../style/common';

export default StyleSheet.create({
  container: {
    padding: BasePadding
  },
  button: {
    ...BoldText,
    textAlign:'center'
  }
});