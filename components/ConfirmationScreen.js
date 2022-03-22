import React, { Component } from "react";
import { TextInput, TouchableOpacity } from "react-native";
import { View, Text, Image, StyleSheet, Dimensions, ScrollView, Picker, Button, Label } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class PaymentScreen extends Component {


  render() {
    return (
      <View>
        <View style={{ marginTop: 150, alignItems: 'center' }}>
          <Ionicons name="checkmark-circle-outline" color="#a3cd3d" size={50} />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={{ textAlign: 'center' }}>Your order has been successfully</Text>
          <Text style={{ textAlign: 'center' }}>submitted!!</Text>
        </View>
        <View style={{ marginTop: 30 }}>
          <Text style={{ textAlign: 'center', fontSize: 13 }}>Order Summary</Text>
        </View>

        <View style={{ marginTop: 20, backgroundColor: '#c8ccc9', marginRight: 15, marginLeft: 15 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 5, marginRight: 5, marginTop: 5 }}>
            <Text>Total</Text>
            <Text>{this.props.price}</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 5, marginRight: 5 }}>
            <Text>Delivery Fee</Text>
            <Text>$3</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 5, marginRight: 5 }}>
            <Text>Discount</Text>
            <Text>-$5</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 5, marginRight: 5, marginBottom: 5 }}>
            <Text>Ordered On</Text>
            <Text>{new Date().toISOString().split('T')[0]}</Text>
          </View>
        </View>

        <View style={{ marginTop: 180 }}>
          <Button title="Continue Shopping" onPress={() => this.props.navigation.navigate('Main')} style={{ borderRadius: 70, backgroundColor: "#6bb030" }} />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  view1: {
    flex: 1,
    marginTop: 20
  },
  color: {
    color: '#a3cd3d'
  },
  text: {
    marginLeft: 20,
    fontWeight: 'bold'
  },
  rbWrapper: {
    marginTop: 20,
    marginLeft: 20
  }
});