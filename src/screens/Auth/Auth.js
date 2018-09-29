import React, { Component } from 'react';
import { View, Button, StyleSheet, ImageBackground } from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';

import DefaultInput from '../../components/UI/DefaultInput';
import HeadingText from '../../components/UI/HeadingText';
import MainText from '../../components/UI/MainText';
import ButtonWithBackground from '../../components/UI/ButtonWithBackground';

import backgroundImage from '../../assets/background.jpg';

class AuthScreen extends Component {

  loginHandler = () => startMainTabs();

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
          <View>
            <MainText>
              <HeadingText>Please Log In</HeadingText>
            </MainText>
            <ButtonWithBackground
              color={'#29aaf4'}
              onPress={() => {}}
            >
              Switch to Login
            </ButtonWithBackground>
          </View>
          <View style={styles.inputContainer}>
            <DefaultInput placeholder={'Your E-Mail Address'} />
            <DefaultInput placeholder={'Password'} />
            <DefaultInput placeholder={'Confirm Password'} />
          </View>
          <ButtonWithBackground
            color={'#29aaf4'}
            onPress={this.loginHandler}
          >
            Submit
          </ButtonWithBackground>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  backgroundImage: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    width: '80%'
  },
});

export default AuthScreen;
