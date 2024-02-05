import {StyleSheet} from 'react-native';
import {appColors} from '../../Constants/Colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.secondry,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 16,
  },
  text: {
    fontWeight: '500',
    color: appColors.light,
  },
});
