import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './Styles';
import Rate from '../Rate/Rate';

import {getGenre} from '../../Utilities/Methods';
import {baseImageURL} from '../../Constants/URLs';

const Card = ({image, title, rate, genres}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: baseImageURL + image,
        }}
        style={styles.image}
      />
      <View style={styles.dataContainer}>
        <Text style={styles.title}>{title}</Text>

        <Rate rate={rate} />
        <View style={styles.genreContainer}>
          {genres.map((item, index) => (
            <View key={item} style={styles.genre}>
              <Text style={styles.genreText}>{getGenre(item)}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default Card;
