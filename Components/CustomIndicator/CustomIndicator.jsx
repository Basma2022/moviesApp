import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import {styles} from './Styles';
import {appColors} from '../../Constants/Colors';

const CustomIndicator = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={appColors.primary} size={'large'} />
    </View>
  );
};

export default CustomIndicator;
