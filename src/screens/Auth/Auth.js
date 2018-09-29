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
    Dimensions.addEventListener('change', dims => {
      this.setState({
        respStyles: {
          pwContainerDirection: Dimensions.get('window').height > 500 ? 'column' : 'row',
          pwContainerJustifyContent: Dimensions.get('window').height > 500 ? 'flex-start' : 'space-between',
          pwWrapperWidth: Dimensions.get('window').height > 500 ? '100%' : '45%'
        }
      });
    });
  }

  state = {
    respStyles: {
      pwContainerDirection: 'column',
      pwContainerJustifyContent: 'flex-start',
      pwWrapperWidth: '100%'
    }
  };

  loginHandler = () => startMainTabs();

  render() {
    let headingText = null;
    if (Dimensions.get('window').height > 774) {
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
              style={{
                flexDirection: this.state.respStyles.pwContainerDirection,
                justifyContent: this.state.respStyles.pwContainerJustifyContent
              }}
            >
              <View style={{ width: this.state.respStyles.pwWrapperWidth }} >
                <DefaultInput placeholder={'Password'} />
              </View>
              <View style={{ width: this.state.respStyles.pwWrapperWidth }} >
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
  passwordContainer: {
    flexDirection: Dimensions.get('window').height > 774 ? 'column' : 'row',
    justifyContent: 'space-between'
  },
  passwordWrapper: {
    width: Dimensions.get('window').height > 774 ? '100%' : '47%',
  }
});

export default AuthScreen;
