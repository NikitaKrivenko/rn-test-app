import {StyleSheet} from 'react-native';

export const Colors = {
  baseGreen: '#5dbd8f',
  transparent: 'transparent'
};
export const BaseBorderRadius = 18;
export const BaseBorderWidth = 1;
export const BasePadding = 10;
export const BoldText = {
  fontWeight: '600',
  fontSize: 18
};

export default StyleSheet.create({
  heading: {
    fontWeight: '600',
    fontSize: 26,
    marginBottom: 10
  },
  centeredContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: BasePadding
  },
  formElement: {
    marginBottom: 20,
    alignSelf: 'stretch'
  },
  listItem: {
    height: 80,
    padding: BasePadding,
    borderBottomWidth: BaseBorderWidth,
    flex: 1,
    justifyContent: 'center'
  }
});