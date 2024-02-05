import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {styles} from './Styles';
import {TextInput} from 'react-native-gesture-handler';
import {appColors} from '../../Constants/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {searchMovies} from '../../Redux/movieSlice';

/**
 * SearchInput component for searching movies.
 * @returns {JSX.Element} SearchInput component.
 */
const SearchInput = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  /**
   * Clears the search input value.
   */
  const handleClearValue = () => {
    setValue('');
  };

  /**
   * Handles search button press.
   * Dispatches searchMovies action with the search value.
   */
  const handleSearchPress = () => {
    dispatch(searchMovies(value));
  };

  return (
    <View style={styles.inputContainer}>
      {/* Search icon */}
      <Icon name="search" size={22} color={appColors.searchIcon} />

      {/* Search input */}
      <TextInput
        placeholder="Search movie..."
        placeholderTextColor={appColors.searchIcon}
        style={styles.input}
        value={value}
        onChangeText={setValue}
        returnKeyType="search"
        onSubmitEditing={handleSearchPress}
      />

      {/* Clear input button */}
      {value && (
        <TouchableOpacity onPress={handleClearValue}>
          <Icon name="close" size={24} color={appColors.searchIcon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchInput;
