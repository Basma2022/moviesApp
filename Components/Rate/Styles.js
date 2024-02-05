import {StyleSheet} from 'react-native';
import {appColors} from '../../Constants/Colors';

export const styles = StyleSheet.create({
  container: {
    //  borderWidth: 1,
    flexDirection: 'row',
    gap: 4,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: appColors.rateIcon,
  },
});
