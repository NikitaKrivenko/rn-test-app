import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, ScrollView} from 'react-native';
import {connect} from 'react-redux';

import NavButton from '../../components/navButton/index';

import style from './style';
import NavigationConfig from './../../constants/navigation';
import {changeRootRequest} from "./../../actions";


class Drawer extends Component {
  constructor(props) {
    super(props);

    this._navigationHandler = this.navigationHandler.bind(this);
  }

  navigationHandler(targetRoot) {
    const {navigator, changeRootRequest, root} = this.props;
    const shouldDispatchRootChange = targetRoot !== root;

    if (shouldDispatchRootChange) {
      changeRootRequest(navigator, targetRoot);
    }
  }

  render() {

    const navigationItems = NavigationConfig.map(({root, title}) => {
      return (
        <View key={root} style={style.listItem}>
          <NavButton
            text={title}
            onPress={this._navigationHandler}
            targetRoot={root}
          />
        </View>
      );
    });

    return (
      <ScrollView style={style.container}>
        {navigationItems}
      </ScrollView>
    );
  }
}

Drawer.propTypes = {
  root: PropTypes.string,
  changeRootRequest: PropTypes.func
};

const mapStateToProps = state => {
  return {
    root: state.navigation.root
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeRootRequest(navigator, screen) {
      dispatch(changeRootRequest(navigator, screen));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Drawer);