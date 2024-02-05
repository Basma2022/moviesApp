import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './Styles';

/**
 * Rate component for showing movie genre .
 * @returns {JSX.Element} SearchInput component.
 */

const Category = ({text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default Category;
