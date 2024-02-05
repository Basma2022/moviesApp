import {NativeModules} from 'react-native';
import {apiKey} from '../Constants/URLs';
const {NetworkCall} = NativeModules;

describe('fetchMovies function', () => {
  it('should return an array of movies', () => {
    NetworkCall.fetchMovies(apiKey).then(response => {
      const result = JSON.parse(response);
      expect(Array.isArray(result)).toBe(true);
      result.forEach(movie => {
        expect(typeof movie).toBe('object');
      });
    });
  });
});
