import { Component } from "react";
import { TextInput } from "react-native";
import { View, Text, Image, StyleSheet, Dimensions, ScrollView, Picker,Button } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker'
import { AntDesign } from '@expo/vector-icons';
import CheckBox from 'react-native-check-box'

const win = Math.round(Dimensions.get('window').width);

export default class ProfileScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      phone: '',
      birthday: '',
      password: '',
      mydate: new Date().toISOString().split('T')[0],
      calendar: false,
      hypertension: false,
      weightloss: false,
      diabetes: false,
      immunity: false,
      others: false
    }
  }

  onDateChange = (date) => {
    this.setState({
      mydate: date.toISOString().split('T')[0] || this.state.mydate,
      calendar: false
    })
  }

  render() {
    return (
      <View style={styles.container1}>
        <ScrollView style={styles.container2}>
          <Text style={styles.text}>First Name</Text>
          <View style={styles.input}>
            <TextInput style={styles.input} value={this.state.firstname} onChangeText={(text) => this.setState({ firstname: text })} placeholder="Enter First Name" />
          </View>

          <Text style={styles.text}>Last Name</Text>
          <View style={styles.input}>
            <TextInput style={styles.input} value={this.state.lastname} onChangeText={(text) => this.setState({ lastname: text })} placeholder="Enter Last Name" />
          </View>

          <Text style={styles.text}>Phone Number</Text>
          <View style={styles.input}>
            <TextInput style={styles.input} value={this.state.phone} onChangeText={(text) => this.setState({ phone: text })} placeholder="Enter Phone Number" />
          </View>

          <Text style={styles.text}>Gender</Text>
          <View style={styles.input}>

            <Picker style={styles.picker}
              selectedValue={this.state.gender}
              onValueChange={(itemValue, itemPosition) => {
                this.setState({
                  gender: itemValue
                })
              }}
              placeholder="Enter Gender"
            >
              <Picker.Item label="male" value="male" />
              <Picker.Item label="female" value="female" />
              <Picker.Item label="others" value="others" />

            </Picker>

          </View>

          <Text style={styles.text}>Birthday</Text>
          <Text style={styles.input}>{this.state.mydate}</Text>
          <View style={styles.input}>

          </View>
          <View style={styles.calendar}>
            <AntDesign name="calendar" size={25} onPress={() => { this.setState({ calendar: true }) }} />
          </View>
          {
            this.state.calendar == true ?
              <CalendarPicker
                startFromMonday={true}
                allowRangeSelection={false}
                minDate={new Date(2018, 1, 1)}
                maxDate={new Date(2050, 6, 3)}
                weekdays={['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']}
                months={[
                  'January',
                  'Febraury',
                  'March',
                  'April',
                  'May',
                  'June',
                  'July',
                  'August',
                  'September',
                  'October',
                  'November',
                  'December',
                ]}
                previousTitle=""
                nextTitle=" "
                todayBackgroundColor="white"
                selectedDayColor="#66ff33"
                selectedDayTextColor="#000000"
                scaleFactor={500}
                textStyle={{
                  color: '#000000',
                }}
                onDateChange={this.onDateChange}
              /> :
              null
          }

          <Text style={styles.text}>Password</Text>
          <View style={styles.input}>
            <TextInput style={styles.input} secureTextEntry={true} value={this.state.password} onChangeText={(text) => this.setState({ password: text })} placeholder="Enter Password" />
          </View>

          <Text style={styles.text}>Any person disease</Text>
          <View style={styles.checkbox}>
            <View style={styles.checkboxflex}>
              <CheckBox
                style={{ flex: 1, padding: 10 }}
                onClick={() => {
                  this.setState({
                    hypertension: !this.state.hypertension
                  })
                }}
                isChecked={this.state.hypertension}
                rightText={"Hyper Tension"}
              />
            </View>
            <View style={styles.checkboxflex}>
              <CheckBox
                style={{ flex: 1, padding: 10 }}
                onClick={() => {
                  this.setState({
                    diabetes: !this.state.diabetes
                  })
                }}
                isChecked={this.state.diabetes}
                rightText={"Diabetes"}
              />
            </View>
            <View style={styles.checkboxflex}>
              <CheckBox
                style={{ flex: 1, padding: 10 }}
                onClick={() => {
                  this.setState({
                    others: !this.state.others
                  })
                }}
                isChecked={this.state.others}
                rightText={"others"}
              />
            </View>
            <View style={styles.checkboxflex}>

              <CheckBox
                style={{ flex: 1, padding: 10 }}
                onClick={() => {
                  this.setState({
                    immunity: !this.state.immunity
                  })
                }}
                isChecked={this.state.immunity}
                rightText={"Immunity"}
              />
            </View>

            <View style={styles.checkboxflex}>
              <CheckBox
                style={{ flex: 1, padding: 10 }}
                onClick={() => {
                  this.setState({
                    weightloss: !this.state.weightloss
                  })
                }}
                isChecked={this.state.weightloss}
                rightText={"Weight Loss"}
              />
            </View>
          </View>
          <View style={{margin:10}}>
                    <Button title="Save Profile" style={{borderRadius:50,backgroundColor:"#6bb030"}} />
                </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
    marginLeft: 25,
    marginRight: 25,
    marginTop: 25,
    flex: 1,
    marginBottom: 25,
    backgroundColor: "white",
    borderRadius: 20,
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
    width: win/3
  }
})