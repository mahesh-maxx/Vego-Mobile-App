import { Component } from "react";
import {View,Text,Image,ScrollView, StyleSheet, TouchableOpacity} from 'react-native';

export default class ProductScreen extends Component {

  render() {
    return(
      
      <TouchableOpacity onPress={this.props.navigation.navigate('Checkout')}>
        <Text>checkout</Text>
   
        </TouchableOpacity>
      
    );
  }
}
