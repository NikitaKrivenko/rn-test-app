import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Text, View} from 'react-native';
import List from './../../components/list';

import {loadQuestions} from "../../actions";
import style from '../../style/common';

class StackOverflow extends Component {
  componentWillMount() {
    this.props.loadQuestions();
  }

  _renderListItem({item}) {
    return (
      <View  key={item.question_id} style={style.listItem}>
        <Text>{item.title}</Text>
      </View>
    );
  }

  render() {
    const {isLoading, items, isError, error} = this.props;

    return (
      <List
        isLoading={isLoading}
        items={items}
        isError={isError}
        error={error}
        renderItem={this._renderListItem}
      />
    );
  }
}

StackOverflow.propTypes = {
  items: PropTypes.array,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  error: PropTypes.string,
  loadQuestions: PropTypes.func
};

const mapStateToProps = state => {
  return state.stackOverflow;
};
const mapDispatchToProps = dispatch => {
  return {
    loadQuestions() {
      dispatch(loadQuestions());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StackOverflow);