import React from 'react';
import {
  View,
  Button,
  Image,
  StyleSheet,
} from 'react-native';

import { mapping, light as lightTheme } from '@eva-design/eva';
import { Layout, Text, Icon, Input } from 'react-native-ui-kitten';

import BasicInput from '../components/BasicInput'

class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('../../assets/images/favico512.png')}
        style={{ width: 30, height: 30 }}
      />
    );
  }
}

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    headerTitle: <LogoTitle />,
  };


  render() {
    return (
      
        <Layout style={styles.containerView}>

          <View style={styles.loginScreenContainer}>

            <View style={{ marginTop: 180 }} >
              <Text style={styles.logoText}>PayStripe</Text>
            </View>

            <BasicInput />


            <View style={{ marginTop: 20 }} >
              <Button
                title="Go to Details with props"
                onPress={() => {
                  this.props.navigation.navigate('Details', {
                    itemId: 86,
                    otherParam: 'anything you want here',
                  });
                }}
              />
            </View >

            <View style={{ marginTop: 20 }} >
              <Button
                title="Go to Login Screen"
                onPress={() => {
                  this.props.navigation.navigate('Login', {
                    itemId: 86,
                    otherParam: 'anything you want here',
                  });
                }}
              />
            </View>
          </View>
        </Layout>
    );
  }
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginScreenContainer: {
    flex: 1,
  },
  logoText: {
    fontSize: 40,
    fontWeight: "800",
    marginTop: 20,
    marginBottom: 30,
  },
  loginFormView: {
    flex: 1
  },
  loginFormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eaeaea',
    backgroundColor: '#fafafa',
    paddingLeft: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,

  },
  loginButton: {
    backgroundColor: '#3897f1',
    borderRadius: 5,
    height: 45,
    marginTop: 10,
  },
  fbLoginButton: {
    height: 45,
    marginTop: 10,
    backgroundColor: 'transparent',
  },
})
