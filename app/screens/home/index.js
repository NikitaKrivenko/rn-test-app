import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Text, View} from 'react-native';
import {Home as text} from './../../constants/text';
import style from '../../style/common';

const Home = (props) => {
  return (
    <View style={style.centeredContainer}>
      <Text style={style.heading}>
        {`${text.greeting}, ${props.userName}!`}
      </Text>
    </View>
  );
};

Home.propTypes = {
  userName: PropTypes.string
};

const mapStateToProps = state => {
  return {
    userName: state.user.userName
  };
};

export default connect(mapStateToProps)(Home);