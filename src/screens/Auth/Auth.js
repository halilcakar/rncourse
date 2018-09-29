import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, Dimensions } from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';

import DefaultInput from '../../components/UI/DefaultInput';
import HeadingText from '../../components/UI/HeadingText';
import MainText from '../../components/UI/MainText';
import ButtonWithBackground from '../../components/UI/ButtonWithBackground';

import backgroundImage from '../../assets/background.jpg';

class AuthScreen extends Component {

  constructor(props) {
    super(props);
    Dimensions.addEventListener('change', this.updateStyles);
  }
  state = {
    viewMode: Dimensions.get('window').height > 500 ? 'landscape' : 'portrait'
  };
  componentWillUnmount() {
    Dimensions.removeEventListener('change', this.updateStyles);
  }

  updateStyles = dims => {
    this.setState({
      viewMode: dims.window.height > 500 ? 'landscape' : 'portrait'
    });
  };

  loginHandler = () => startMainTabs();

  render() {
    let headingText = null;
    if (this.state.viewMode === 'landscape') {
      headingText = (<MainText>
        <HeadingText>Please Log In</HeadingText>
      </MainText>);
    }
    return (
      <View style={styles.container}>
        <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
          <View>
            {headingText}
            <ButtonWithBackground
              color={'#29aaf4'}
              onPress={() => {}}
            >
              Switch to Login
            </ButtonWithBackground>
          </View>
          <View style={styles.inputContainer}>
            <DefaultInput placeholder={'Your E-Mail Address'} />
            <View
              style={
                this.state.viewMode === 'landscape' ?
                styles.portraitPasswordContainer :
                styles.landscapePasswordContainer
              }
            >
              <View
                style={
                  this.state.viewMode === 'landscape' ?
                  styles.portraitPasswordWrapper :
                  styles.landscapePasswordWrapper
                }
              >
                <DefaultInput placeholder={'Password'} />
              </View>
              <View
                style={
                  this.state.viewMode === 'landscape' ?
                  styles.portraitPasswordWrapper :
                  styles.landscapePasswordWrapper
                }
              >
                <DefaultInput placeholder={'Confirm Password'} />
              </View>
            </View>
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
  landscapePasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  portraitPasswordContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  landscapePasswordWrapper: {
    width: '47%',
  },
  portraitPasswordWrapper: {
    width: '100%',
  }
});

export default AuthScreen;
