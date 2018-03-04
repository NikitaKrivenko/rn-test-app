import React from 'react';
import PropTypes from 'prop-types';
import {Text, View, FlatList} from 'react-native';

import style from '../../style/common';
import {General} from './../../constants/text';

export default List = (props) => {
  const {isLoading, items, isError, error, renderItem} = props;

  const itemsWithKeys = items.map(item => {
    item.key = item.question_id;

    return item;
  });

  if (isLoading) {
    return (
      <View style={style.centeredContainer}>
        <Text style={style.heading}>
          {General.loading}
        </Text>
      </View>
    )
  } else if (isError) {
    return (
      <View style={style.centeredContainer}>
        <Text style={style.heading}>
          {error}
        </Text>
      </View>
    );
  } else {

    return (
      <View>
        <FlatList
          data={itemsWithKeys}
          renderItem={renderItem}
        />
      </View>
    )
  }
}

List.propTypes = {
  items: PropTypes.array,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  error: PropTypes.string,
  renderItem: PropTypes.func
};