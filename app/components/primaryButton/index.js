import React from 'react';
import PropTypes from 'prop-types';
import BaseButton from './../baseButton';
import style from './style';
import {Colors} from '../../style/common';

export default PrimaryButton = (props) => {
  const {onPress, text} = props;

  return (
    <BaseButton
      onPress={onPress}
      style={style}
      underlayColor={Colors.transparent}
      text={text}
    />
  );
};

PrimaryButton.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func.isRequired,
};