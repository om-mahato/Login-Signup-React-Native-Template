import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

import {
  Layout, Icon, Text, Input, Button
} from 'react-native-ui-kitten';


export default function LoginScreen(props) {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [buttonText, setButtonText] = useState('LOGIN');
  const [passwordStatus, setPasswordStatus] = useState('');
  const [userIdStatus, setUserIdStatus] = useState('');

  function handleButtonDisable(status) {
    setButtonDisabled(status);
  }

  useEffect(() => {
    if (userId !== '' && password !== '') {
      handleButtonDisable(false);
      setPasswordStatus('success');
      setUserIdStatus('success');
    } else {
      handleButtonDisable(true);
      setPasswordStatus('');
      setUserIdStatus('');
    }
  }, [userId, password]);

  const navigateTo = (route) => props.navigation.navigate(route);

  function renderIcon(style, name) {
    // const name = (name == 'eye') ? secureTextEntry ? 'eye-off' : 'eye' : name;
    return (
      <Icon {...style} name={name} />
    );
  }

  function login() {
    setButtonDisabled(true);
    setButtonText('PLEASE WAIT...');
  }

  return (
    <Layout style={styles.containerView}>

      <View style={styles.topBannerView}>
        <Text style={styles.bannerText} category="h1"> PayStripe </Text>
        <Text style={styles.bannerSubText} category="c2"> Signin to your account </Text>
      </View>

      <View style={styles.spacer} />

      <View style={styles.formInputView}>

        <Input
          size="small"
          value={userId}
          onChangeText={setUserId}
              // status='success'
          placeholder="User Id"
          status={userIdStatus}
          icon={() => renderIcon(styles.iconStyle, 'person')}
          style={{ marginBottom: 10 }}
        />

        <Input
          size="small"
          value={password}
          onChangeText={setPassword}
          status={passwordStatus}
          placeholder="Password"
          icon={() => renderIcon(styles.iconStyle, 'lock')}
        />

      </View>

      <View style={styles.formButtonView}>
        <Button
          appearance="filled"
          style={styles.button}
          disabled={buttonDisabled}
          onPress={login}
          size="giant"
        >
          {buttonText}
        </Button>

        <View style={styles.viewCenter}>
          <Text
            onPress={() => navigateTo('Signup')}
            style={styles.subText}
            appearance="hint"
            category="s1"
          >
Don&apos;t Have an account Create ?

          </Text>
        </View>
      </View>
    </Layout>
  );
}

LoginScreen.navigationOptions = {
  header: null
};

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
  bannerText: {
    color: 'white',
    fontWeight: 'bold',
  },
  bannerSubText: {
    color: 'white',
    marginTop: 10,
  },
  spacer: {
    height: '10%',
  },
  formInputView: {
    height: '40%',
    padding: 20,
  },
  icon: {
    color: 'black'
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
  iconStyle: {
    width: 24,
    height: 24,
    marginHorizontal: 8,
    tintColor: '#C5CEE0'
  }
});
