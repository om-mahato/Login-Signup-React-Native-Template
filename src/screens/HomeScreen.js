import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';

import { mapping, light as lightTheme } from '@eva-design/eva';
import { Layout, Icon, Text, Input, Button } from 'react-native-ui-kitten';
import SafeAreaView from 'react-native-safe-area-view';

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
    header: null,
  };


  render() {
    return (
        <Layout style={styles.containerView}>

            <View style={styles.topBannerView}>
              <Text style={styles.bannerText} category='h1'> PayStripe </Text>
              <Text style={styles.bannerSubText} category='c2'> Signin to your account </Text>
            </View>

            <View style={ styles.spacer }>
            </View>

            <View style={ styles.formInputView }>

              <Input
                size='small'
                // status='success'
                placeholder='User Id'
                style={{marginBottom: 10}}
              />

              <Input
                size='small'
                // status='success'
                placeholder='Password'
              />

            </View>

            <View style={ styles.formButtonView }>
              <Button
                  //disabled={true}
                  appearance='filled'
                  style={styles.button}
                  size='giant'>
                  LOGIN
              </Button>

              <View style={styles.viewCenter}>
                <Text style={styles.subText} appearance='hint'
                    category='s1' >Don't Have an account Create ?</Text>
              </View>
            </View>
        </Layout>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    height: 60,
  },
  subText: {
    alignItems: 'center',
    padding: 10,
  },
  viewCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerView: {
    flex: 1,
  },
  topBannerView: {
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1565c0'
  },
  bannerText:{
    color: 'white',
    fontWeight: 'bold',
  },
  bannerSubText:{
    color: 'white',
    marginTop: 10,
  },
  spacer:{
    height: '10%',
  },
  formInputView: {
    height: '40%',
    padding: 20,
  },
  formButtonView: {
    height: '20%',
    padding: 20,
  },
  loginButton: {
    backgroundColor: '#3897f1',
    borderRadius: 5,
    height: 45,
    marginTop: 10,
  },
})
