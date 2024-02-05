import {StyleSheet} from 'react-native';
import {appColors} from '../../Constants/Colors';

export const styles = StyleSheet.create({
  root: {
    backgroundColor: appColors.background,
    flex: 1,

    paddingTop: 8,
  },
  imageContainer: {
    height: 500,
    width: '100%',
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'stretch',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  backButton: {
    width: 32,
    height: 32,
    backgroundColor: appColors.secondry,
    borderRadius: 16,
    position: 'absolute',
    top: 50,
    left: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rateContainer: {
    flexDirection: 'row',
    gap: 8,

    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: appColors.light,
  },
  story: {
    fontWeight: '500',
    color: appColors.searchIcon,
    marginBottom: 8,
  },
});
