import React from 'react';
import PropTypes from 'prop-types';
import {TextInput, View, Text} from 'react-native';
import style from './style';

export default Input = (props) => {
  const {validationErrors, placeholder, onChangeText} = props;

  const errors = validationErrors && validationErrors.map((error) => <Text key={error}>{error}</Text>);

  return (
    <View>
      <TextInput
        style={style.container}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
      {errors}
    </View>
  );
};

Input.propTypes = {
  validationErrors: PropTypes.array,
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func.isRequired
};