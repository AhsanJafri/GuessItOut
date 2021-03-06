import React from 'react';
import {
  View,
  ScrollView,
  Text,
  Button,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';

import BodyText from './../components/BodyText';
import TitleText from './../components/TitleText';

import MainButton from './../components/MainButton';
import Colors from './../constants/colors';

const GameOverScreen = (props) => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText>Game Over!</TitleText>
        <View style={styles.imageContainer}>
          <Image
            // source={require('./../assets/success.png')}
            source={{
              uri:
                'https://previews.123rf.com/images/curvabezier/curvabezier1707/curvabezier170700579/81941651-cartoon-illustration-of-computer-king-standing-with-crown.jpg',
            }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.textContainer}>
          <BodyText style={styles.resultText}>
            Your phone needed{' '}
            <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
            guess the number{' '}
            <Text style={styles.highlight}>{props.userNumber}</Text>.
          </BodyText>
        </View>
        <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width * 0.7,

    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: Dimensions.get('window').height / 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  resultText: {
    textAlign: 'center',
    fontSize: Dimensions.get('window').height < 400 ? 16 : 20,
  },
  highlight: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold',
  },
  textContainer: {
    marginBottom: 20,
    width: '80%',
  },
});

export default GameOverScreen;
