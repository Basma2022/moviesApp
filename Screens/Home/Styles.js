import {StatusBar, StyleSheet} from 'react-native';
import {appColors} from '../../Constants/Colors';

export const styles = StyleSheet.create({
  root: {
    backgroundColor: appColors.background,
    flex: 1,
    alignItems: 'center',
    padding: 4,
    //  paddingTop: 8,
    gap: 8,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 8 : 0,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: appColors.light,
    marginLeft: 8,
    //  alignSelf: 'flex-start',
  },
});
