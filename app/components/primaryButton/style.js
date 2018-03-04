import {StyleSheet} from 'react-native';
import {Colors, BaseBorderRadius, BaseBorderWidth, BasePadding, BoldText} from '../../style/common';

export default StyleSheet.create({
  container: {
    borderColor: Colors.baseGreen,
    borderWidth: BaseBorderWidth,
    borderRadius: BaseBorderRadius,
    paddingHorizontal: BasePadding,
    paddingBottom: 2
  },
  button: {
    ...BoldText,
    color: Colors.baseGreen,
  }
});