import React from 'react';
import PropTypes from 'prop-types';
import BaseButton from './../baseButton';
import style from './style';
import {Colors} from '../../style/common';

export default NavButton = (props) => {
  const {onPress, targetRoot, text} = props;

  return (
    <BaseButton
      onPress={() => onPress(targetRoot)}
      style={style}
      underlayColor={Colors.transparent}
      text={text}
    />
  );
};

NavButton.propTypes = {
  text: PropTypes.string,
  targetRoot: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};