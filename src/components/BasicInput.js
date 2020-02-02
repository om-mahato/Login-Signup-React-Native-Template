import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import { Input } from 'react-native-ui-kitten';

class BasicInput extends Component {

  state = {
    inputValue: '',
  };

  onInputValueChange = (inputValue) => {
    this.setState({ inputValue });
  };

  render() {
    return (
        <Input
          size='small'
          // status='success'
          label='User Id'
          value={this.state.inputValue}
          onChangeText={this.onInputValueChange}
        />
    );
  }
}

const styles = StyleSheet.create({
  input: { borderRadius: 8 },
  inputText: { color: 'black' },
  inputLabel: { color: 'gray' },
  inputCaption: { color: 'gray' },
});

export default BasicInput