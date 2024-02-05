import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React, {useCallback} from 'react';
import {styles} from './Styles';
import Icon from 'react-native-vector-icons/Feather';
import {appColors} from '../../Constants/Colors';
import Rate from '../../Components/Rate/Rate';
import {getGenre} from '../../Utilities/Methods';
import Category from '../../Components/Category/Category';
import {baseImageURL} from '../../Constants/URLs';
import CustomIndicator from '../../Components/CustomIndicator/CustomIndicator';

/**
 * Details screen for displaying movie details.
 * @param {object} navigation - Navigation prop for navigating between screens.
 * @param {object} route - Route prop containing route parameters.
 * @returns {JSX.Element} DetailsScreen component.
 */
const DetailsScreen = ({navigation, route}) => {
  const {movie} = route.params;

  /**
   * Handles the back button press to navigate back to the previous screen.
   */
  const handleBackButton = useCallback(() => {
    navigation.goBack();
  }, []);

  // Render custom loading indicator if movie data is not available yet
  if (!movie) return <CustomIndicator />;

  return (
    <View style={styles.root}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{gap: 8}}>
          {/* Movie poster */}
          <View style={styles.imageContainer}>
            <Image
              source={{uri: baseImageURL + movie.posterPath}}
              style={styles.image}
            />
          </View>
          {/* Back button */}
          <TouchableOpacity
            style={styles.backButton}
            onPress={handleBackButton}>
            <Icon name={'arrow-left'} color={appColors.light} size={22} />
          </TouchableOpacity>
          {/* Movie information */}
          <View style={{paddingHorizontal: 16, gap: 8}}>
            {/* Movie rating */}
            <View style={styles.infoContainer}>
              <View style={styles.rateContainer}>
                <Rate rate={movie.voteAverage} />
                <Text style={{fontSize: 12}}>({movie.voteCount} votes)</Text>
              </View>
              <Text>{movie.releaseDate}</Text>
            </View>
            {/* Movie title */}
            <Text style={styles.title}>{movie.title}</Text>
            {/* Movie genres */}
            <View style={{flexDirection: 'row', gap: 4}}>
              {movie.genreIds.map((item, index) => (
                <Category key={index} text={getGenre(item)} />
              ))}
            </View>
            {/* Movie overview */}
            <Text style={styles.story}>{movie.overview}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailsScreen;
