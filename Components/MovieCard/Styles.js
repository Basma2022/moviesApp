import {StyleSheet} from 'react-native';
import {appColors} from '../../Constants/Colors';

export const styles = StyleSheet.create({
  container: {
    height: 150,
    //  borderWidth: 1,
    flexDirection: 'row',
    gap: 8,
    width: '100%',
  },
  image: {
    width: '40%',
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: appColors.light,
  },
  dataContainer: {
    gap: 8,
    width: '55%',
    paddingVertical: 4,
  },
  date: {
    color: appColors.searchIcon,
    fontWeight: '500',
  },
  genreContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
  },
  genre: {padding: 4, backgroundColor: appColors.secondry, borderRadius: 8},
  genreText: {
    color: appColors.primary,
    fontSize: 12,
  },
});
