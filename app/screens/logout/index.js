import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Text, View} from 'react-native';
import PrimaryButton from './../../components/primaryButton';

import {Logout as text} from './../../constants/text';
import style from '../../style/common';

import {logOut} from "../../actions";

const Logout = ({logout}) => {
  return (
    <View style={style.centeredContainer}>
      <Text style={style.heading}>
        {text.goodBye}
      </Text>
      
      <PrimaryButton 
        text={text.buttonLogout}
        onPress={logout}
      />
    </View>
  );
};

Logout.propTypes = {
  logout: PropTypes.func
};

const mapDispatchToProps = dispatch => {
  return {
    logout() {
      dispatch(logOut());
    }
  };
};

export default connect(null, mapDispatchToProps)(Logout);