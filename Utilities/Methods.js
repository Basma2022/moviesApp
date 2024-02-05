import {genreData} from '../Constants/Data';
import NetInfo from '@react-native-community/netinfo';

export const getGenre = id => {
  var title = '';
  genreData.forEach(item => {
    if (item.id === id) {
      title = item.title;
      return;
    }
  });
  return title;
};

export const checkNetworkConnectivity = async () => {
  try {
    const netInfo = await NetInfo.fetch();
    return netInfo.isConnected;
  } catch (error) {
    console.error('Error checking network connectivity:', error);
    return false;
  }
};
