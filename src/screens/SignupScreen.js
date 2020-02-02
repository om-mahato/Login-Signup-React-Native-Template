import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

import {
  Layout, Text, Input, Icon, Button
} from 'react-native-ui-kitten';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function SignupScreen(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [stripeAccount, setStripeAccount] = useState('');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [buttonText, setButtonText] = useState('SIGNUP');

  const [setSecureTextEntry] = useState(true);

  function handleButtonDisable(status) {
    setButtonDisabled(status);
  }

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    (name !== '' && email !== ''
      && stripeAccount !== '' && userId !== ''
      && password !== '' && buttonText == 'SIGNUP')
      ? handleButtonDisable(false) : handleButtonDisable(true);
  }, [name, email, stripeAccount, userId, password]);

  const navigateTo = (route) => props.navigation.navigate(route);

  function signup() {
    setButtonDisabled(true);
    setButtonText('PLEASE WAIT...');
  }

  function renderIcon(style, name) {
    // const name = (name == 'eye') ? secureTextEntry ? 'eye-off' : 'eye' : name;
    return (
      <Icon {...style} name={name} />
    );
  }

  return (
    <Layout style={styles.containerView}>

      <View style={styles.topBannerView}>
        <Text style={styles.bannerText} category="h1"> PayStripe </Text>
        <Text style={styles.bannerSubText} category="c2"> create your account </Text>
      </View>

      <KeyboardAwareScrollView>
        <View style={styles.formInputView}>

          <Input
            size="small"
            value={name}
            onChangeText={setName}
            placeholder="Full Name"
            icon={() => renderIcon(styles.iconStyle, 'person')}
            style={{ marginBottom: 10 }}
          />

          <Input
            size="small"
            value={email}
            // caption='Invalid'
            // captionTextStyle={ styles.invalidInputCaption }
            onChangeText={setEmail}
            placeholder="Email"
            icon={() => renderIcon(styles.iconStyle, 'email')}
            style={{ marginBottom: 10 }}
          />

          <Input
            size="small"
            value={stripeAccount}
            onChangeText={setStripeAccount}
            icon={() => renderIcon(styles.iconStyle, 'person-add')}
            placeholder="Stripe Account"
            style={{ marginBottom: 10 }}
          />

          <Input
            size="small"
            value={userId}
            onChangeText={setUserId}
            icon={() => renderIcon(styles.iconStyle, 'person')}
            placeholder="User Id"
            style={{ marginBottom: 10 }}
          />

          <Input
            size="small"
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            icon={() => renderIcon(styles.iconStyle, 'eye')}
            onIconPress={setSecureTextEntry}
          />

        </View>
      </KeyboardAwareScrollView>

      <View style={styles.formButtonView}>
        <Button
          disabled={buttonDisabled}
          onPress={signup}
          appearance="filled"
          style={styles.button}
          size="giant"
        >
          {buttonText}
        </Button>

        <View style={styles.viewCenter}>
          <Text
            onPress={() => navigateTo('Login')}
            style={styles.subText}
            appearance="hint"
            category="s1"
          >
            Already Have an account Login ?
          </Text>
        </View>
      </View>
    </Layout>
  );
}

SignupScreen.navigationOptions = {
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
  formInputView: {
    height: '50%',
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
  invalidInputCaption:
  {
    color: '#3366FF'
  },
  iconStyle: {
    width: 24,
    height: 24,
    marginHorizontal: 8,
    tintColor: '#C5CEE0'
  }
});
