import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {appColors} from '../../Constants/Colors';

/**
 * Rate component for showing movie rate .
 * @returns {JSX.Element} SearchInput component.
 */
const Rate = ({rate}) => {
  return (
    <View style={styles.container}>
      <Icon name="star" size={22} color={appColors.rateIcon} />
      <Text style={styles.text}>{rate}</Text>
    </View>
  );
};

export default Rate;
