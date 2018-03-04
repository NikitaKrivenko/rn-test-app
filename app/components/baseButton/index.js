import React from 'react';
import PropTypes from 'prop-types';
import {TouchableHighlight, Text} from 'react-native';

export default BaseButton = (props) => {
  const {onPress, style, underlayColor, text} = props;
  return (
    <TouchableHighlight
      onPress={onPress}
      style={style.container}
      underlayColor={underlayColor}
    >
      <Text style={style.button}>{text}</Text>
    </TouchableHighlight>
  );
};

BaseButton.propTypes = {
  text: PropTypes.string,
  underlayColor: PropTypes.string,
  style: PropTypes.object,
  onPress: PropTypes.func
};