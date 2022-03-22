import React, { Component } from "react";
import { TextInput, TouchableOpacity } from "react-native";
import { View, Text, Image, StyleSheet, Dimensions, ScrollView, Picker, Button, Label } from 'react-native';
import CustomRadioButton from './CustomRadioButton';

const val = [
  {
    key: 1,
    text: 'Cash on delivery',
  },
  {
    key: 2,
    text: 'Card',
  }
];

export default class PaymentScreen extends Component {


  render() {
    return (
      <View style={styles.view1}>

        <Text style={styles.text}>PAYMEMT METHOD</Text>

        <View style={styles.rbWrapper}>
          <CustomRadioButton PROP={val} />
        </View>

        <Text style={[styles.rbWrapper, styles.color]}> + Add new card </Text>

        <View style={{ marginTop: 400 }}>
          <Text style={{ textAlign: 'center' }}>Total: $41</Text>

          <Button
            title="Place Order"
            style={{ borderRadius: 70, backgroundColor: "#6bb030" }}
            onPress={() => this.props.navigation.navigate('Confirmation', {
              total: this.props.price
            })}
          />
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