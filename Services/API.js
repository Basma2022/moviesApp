import axios from 'axios';
import {getMoviesURL} from '../Constants/URLs';

export const GetMovieAPI = () => {
  return axios
    .get(getMoviesURL)
    .then(response => response.data.results)
    .catch(error => {
      console.log('Error With Get Movies API ' + error);
      return null;
    });
};
