import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  NativeModules,
  Alert,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {styles} from './Styles';
import SearchInput from '../../Components/SearchInput/SearchInput';
import Category from '../../Components/Category/Category';
import {genreData} from '../../Constants/Data';
import Card from '../../Components/MovieCard/Card';
import {useDispatch, useSelector} from 'react-redux';
import {filterMovies, setMovies} from '../../Redux/movieSlice';
import {apiKey} from '../../Constants/URLs';
import {checkNetworkConnectivity} from '../../Utilities/Methods';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomIndicator from '../../Components/CustomIndicator/CustomIndicator';

const {NetworkCall} = NativeModules;

const HomeScreen = ({navigation}) => {
  // State variables
  const movies = useSelector(state => state.movies.filteredMovies);
  const [noData, setNoData] = useState(false);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  // Function to fetch movies using NetworkCall native module
  const GetMovies = () => {
    // Check network connectivity
    checkNetworkConnectivity().then(isConnected => {
      setLoading(true);
      // Fetch movies and cache them if connected
      if (isConnected) {
        NetworkCall.fetchMovies(apiKey)
          .then(response => {
            const mov = JSON.parse(response);
            if (!mov) {
              setNoData(true);
            } else {
              // Cache movies
              AsyncStorage.getItem('movies').then(existingMovies => {
                if (!existingMovies) {
                  // Cache movies if key does not exist
                  AsyncStorage.setItem('movies', JSON.stringify(mov));
                }
              });
              dispatch(setMovies(mov));
              setNoData(false);
            }
            setLoading(false);
          })
          .catch(error => {
            console.error('Error fetching movie data:', error);
            Alert.alert('Sorry, something went wrong', error);
            // Get cached data in case of failure
            GetCachedData();
          });
      } else {
        // Notify user if offline
        Alert.alert(
          'Sorry, something went wrong',
          'You are offline, Please turn the wifi on and try again',
          [
            {
              text: 'Try Again',
              onPress: GetMovies,
            },
            {
              text: 'Cancel',
              onPress: GetCachedData,
            },
          ],
        );
      }
    });
  };

  // Function to get cached movies from storage
  const GetCachedData = async () => {
    setLoading(true);
    const mov = await AsyncStorage.getItem('movies');
    if (!mov) {
      setNoData(true);
    } else {
      dispatch(setMovies(JSON.parse(mov)));
      setNoData(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    GetMovies(); // Fetch movies when component mounts
  }, []);

  // Event handlers
  const handleSelectMovie = useCallback(item => {
    navigation.navigate('details', {movie: item});
  }, []);

  const handleSelectCategory = useCallback(id => {
    dispatch(filterMovies(id));
  }, []);

  // Render functions
  const renderGenreItems = useCallback(
    ({item}) => (
      <TouchableOpacity
        style={{marginHorizontal: 4}}
        onPress={handleSelectCategory.bind(this, item.id)}>
        <Category text={item.title} />
      </TouchableOpacity>
    ),
    [],
  );

  const renderMovieItems = useCallback(
    ({item}) => (
      <TouchableOpacity
        style={{marginBottom: 8}}
        onPress={handleSelectMovie.bind(this, item)}>
        <Card
          title={item.title}
          image={item.backdropPath}
          rate={item.voteAverage}
          genres={item.genreIds}
        />
      </TouchableOpacity>
    ),
    [],
  );

  return (
    <View style={styles.root}>
      <View style={{width: '90%', marginBottom: 8}}>
        <SearchInput />
      </View>
      <View style={{gap: 8, width: '100%'}}>
        <Text style={styles.title}>Categories</Text>
        <FlatList
          data={genreData}
          keyExtractor={(item, index) => item.id}
          renderItem={renderGenreItems}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      {loading ? (
        <CustomIndicator /> // Show loading indicator while fetching movies
      ) : noData ? (
        <Text>No data available</Text>
      ) : (
        <View style={{flex: 1}}>
          <FlatList
            data={movies}
            keyExtractor={(item, index) => item.id}
            renderItem={renderMovieItems}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
    </View>
  );
};

export default HomeScreen;
