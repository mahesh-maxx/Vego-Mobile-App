import { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native';

class Verify extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', marginTop: 50 }}>
        <View>
          <Image source={require('../assets/page1.png')} style={{ width: 10, height: 10 }} />
        </View>
        <View>
          <Text>Verified!</Text>
        </View>
        <View>
          Priyanka!You have successfully verified the account
      </View>
        <View>
          <Button title="Browse Home" />
        </View>
      </View>
    )
  }
}

export default Verify;
