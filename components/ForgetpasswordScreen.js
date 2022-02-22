import { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button, TextInput } from 'react-native';

class ForgetpasswordScreen extends Component {
  render() {
    return (
      <View style={{ marginTop: 50 }}>
        <View style={{ marginTop: 100 }}>
          <Text style={{ marginLeft: 20, fontSize: 18 }}>Reset your Password</Text>
        </View>
        <View style={{ marginLeft: 20, marginTop: 20 }}>
          <Text>Please enter your email.We will send a code to your email to reset your password. </Text>
        </View>
        <View style={{ marginLeft: 20, marginTop: 30 }}>
          <Text style={{ fontSize: 15 }}>Email</Text>
          <TextInput placeholder="Enter Email/ Mobile" backgroundColor="#6bb030" style={{ marginTop: 15, marginRight: 15 }} />
        </View>
        <View style={{ marginTop: 20, marginLeft: 20, marginRight: 20 }}>
          <Button title="Send me code" color="#6bb030" style={{ textColor: "black" }} onPress={() => this.props.navigation.navigate("Entercode")} />
        </View>
      </View>

    );
  }
}

export default ForgetpasswordScreen;
