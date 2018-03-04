import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';

import ValidationComponent from 'react-native-form-validator';
import Input from './../../components/input';
import PrimaryButton from './../../components/primaryButton';

import style from '../../style/common';
import {Login as text} from './../../constants/text';
import {LoginValidationRules} from './../../constants/validation-rules';
import {screensNames} from './../../constants/screens';

import {authorizeUser, changeRoot} from "./../../actions";

class Login extends ValidationComponent {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      password: ''
    };

    this._setUserName = this.setUserName.bind(this);
    this._setPassword = this.setPassword.bind(this);
    this._formSubmitHandler = this.formSubmitHandler.bind(this)
  }

  formSubmitHandler() {
    const formIsValid = this.validate(LoginValidationRules);

    if (formIsValid) {
      this.props.login(this.state.userName);
    }

    this.setState({formIsValid});
  }

  setUserName(userName) {
    this.setState({userName});
  }

  setPassword(password) {
    this.setState({password});
  }

  render() {
    return (
      <View style={style.centeredContainer}>
        <Text style={style.heading}>
          {text.heading}
        </Text>
        <View style={style.formElement}>
          <Input
            placeholder={text.userName}
            onChangeText={this._setUserName}
            validationErrors={this.getErrorsInField('userName')}
          />
        </View>

        <View style={style.formElement}>
          <Input
            placeholder={text.password}
            onChangeText={this._setPassword}
            validationErrors={this.getErrorsInField('password')}
          />
        </View>

        <PrimaryButton
          onPress={this._formSubmitHandler}
          text={text.buttonLogin}
        />
      </View>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func
};

const mapDispatchToProps = dispatch => {
  return {
    login(userName) {
      dispatch(authorizeUser(userName));
      dispatch(changeRoot(screensNames.home));
    }
  };
};

export default connect(null, mapDispatchToProps)(Login);