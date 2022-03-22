import { Component } from "react";
import { TextInput } from "react-native";
import { View, Text, Image, StyleSheet, Dimensions, ScrollView, Picker, Button } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker'
import { AntDesign } from '@expo/vector-icons';
import CheckBox from 'react-native-check-box'

const win = Math.round(Dimensions.get('window').width);

export default class NewaddressScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fullname: '',
      phone: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipcode: '',
      check: ''
    }
  }

  render() {
    return (
      <View style={styles.container1}>
        <ScrollView style={styles.container2}>
          <Text style={styles.text}>Full Name</Text>
          <View style={styles.input}>
            <TextInput style={styles.input} value={this.state.fullname} onChangeText={(text) => this.setState({ fullname: text })} placeholder="Enter Full Name" />
          </View>

          <Text style={styles.text}>Phone Number</Text>
          <View style={styles.input}>
            <TextInput style={styles.input} value={this.state.phone} onChangeText={(text) => this.setState({ phone: text })} placeholder="Enter Phone Number" />
          </View>

          <Text style={styles.text}>Address Line 1</Text>
          <View style={styles.input}>
            <TextInput style={styles.input} value={this.state.address1} onChangeText={(text) => this.setState({ address1: text })} placeholder="Enter Address" />
          </View>

          <Text style={styles.text}>Address Line 2</Text>
          <View style={styles.input}>
            <TextInput style={styles.input} value={this.state.address2} onChangeText={(text) => this.setState({ address2: text })} placeholder="Enter Address" />
          </View>

          <Text style={styles.text}>City</Text>
          <View style={styles.input}>
            <TextInput style={styles.input} value={this.state.city} onChangeText={(text) => this.setState({ city: text })} placeholder="Enter City" />
          </View>

          <View>
            <Text style={styles.text}>State</Text>
            <View style={styles.input}>
              <TextInput style={styles.input} value={this.state.state} onChangeText={(text) => this.setState({ state: text })} placeholder="Enter State" />
            </View>
          </View>

          <View>
            <Text style={styles.text}>Zip Code</Text>
            <View style={styles.input}>
              <TextInput style={styles.input} value={this.state.zipcode} onChangeText={(text) => this.setState({ zipcode: text })} placeholder="Enter Zip Code" />
            </View>
          </View>

          <View>
            <CheckBox
              style={{ flex: 1, padding: 10 }}
              onClick={() => {
                this.setState({
                  check: !this.state.check
                })
              }}
              isChecked={this.state.check}
              rightText={"Make Default Shipping Address"}
            />
          </View>

          <View style={{ margin: 10 }}>
            <Button title="Save Address" style={{ borderRadius: 70, backgroundColor: "#6bb030" }} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  container1: {
    marginLeft: 25,
    marginRight: 25,
    marginTop: 25,
    flex: 1,
    marginBottom: 25,
    backgroundColor: "#d5e0d8",
    borderRadius: 20
  },
  container2: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
    flex: 1,
    marginBottom: 15,
    backgroundColor: "white",
    borderRadius: 15,
  },
  text: {
    marginLeft: 15,
    marginTop: 15
  },
  input: {
    marginLeft: 15,
    marginTop: 15,
    marginRight: 15,
    backgroundColor: "#ebf0ec",
    marginVertical: 5
  },
  calendar: {
    marginLeft: 15
  },
  checkbox: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  checkboxflex: {
    width: win / 3
  }
})