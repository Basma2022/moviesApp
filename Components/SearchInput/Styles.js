import {StyleSheet} from 'react-native';
import {appColors} from '../../Constants/Colors';

export const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: appColors.secondry,
    height: 40,
    borderRadius: 16,
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 8,
    alignItems: 'center',
    gap: 4,
  },
  input: {
    flex: 1,
  },
});
