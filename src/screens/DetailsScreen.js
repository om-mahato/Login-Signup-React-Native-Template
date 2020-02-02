import React from 'react';
import {
  View,
  Button,
} from 'react-native';

import { Layout, Text } from 'react-native-ui-kitten';


export default class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Details',
  };

  render() {
    const { navigation } = this.props;
    return (
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View >
          <Text>Details Screen</Text>
          <Text>
            itemId: {JSON.stringify(navigation.getParam('itemId', 'NO-ID'))}
          </Text>
          <Text>
            otherParam:
            {JSON.stringify(navigation.getParam('otherParam', 'default value'))}
          </Text>

          <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
      </Layout>
    );
  }
}