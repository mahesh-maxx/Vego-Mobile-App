import { Component } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from "react-native-elements/dist/buttons/Button";

export default class CheckoutScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      address: '',
      promo_code: ''
    }
  }
  render() {
    return (
      <View style={styles.container1}>
        <View style={styles.hr}>
          <Text>DELIVER TO</Text>
          <View style={styles.container2}>
            <TextInput placeholder="Maggi Wilson" onChangeText={(text) => this.setState({ name: text })} />
            <TouchableOpacity onPress={() => this.setState({ name: '' })}  >
              <Text style={styles.button}>Change</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.hr,styles.top]}>
          <Text>PHONE</Text>
          <View style={styles.container2}>
            <TextInput placeholder="Maggi Wilson" onChangeText={(text) => this.setState({ phone: text })} />
            <TouchableOpacity onPress={() => this.setState({ name: '' })}  >
              <Text style={styles.button}>Change</Text>
            </TouchableOpacity>
          </View></View>

        <View style={[styles.hr,styles.top]}>
          <Text>ADDRESS</Text>
          <View style={styles.container2}>
            <TextInput placeholder="Maggi Wilson" onChangeText={(text) => this.setState({ address: text })} />
            <TouchableOpacity onPress={() => this.setState({ address: '' })}  >
              <Text style={styles.button}>Change</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.hr,styles.top]}>
          <Text>PROMO CODE</Text>
          <View style={styles.container2}>
            <TextInput placeholder="Enter the promo code" onChangeText={(text) => this.setState({ promo_code: text })} />
          </View>
        </View>

        <View style={styles.bottomview}>
          <Text style={{textAlign: 'center'}} >Total: $41</Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Delivery')}  >
              <Text style={styles.button2}>Proceed to pay</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container1: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15
  },
  button: {
    color: "#338254"
  },
  hr: {
    borderBottomWidth: 1,
    borderBottomColor: '#6e6c68'
  },
  top:{
    marginTop:20
  },
  bottomview:{
    marginTop: 200
  },
  button2:{
    color: "white",
    textAlign: 'center',
    backgroundColor: "green",
    height: 25
  }
})