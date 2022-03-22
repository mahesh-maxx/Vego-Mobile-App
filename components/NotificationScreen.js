import { Component } from 'react'
import { Text, View, Image, Dimensions, StyleSheet, ScrollView } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import ToggleSwitch from 'toggle-switch-react-native'
const win = Math.round(Dimensions.get('window').width);

export default class SettingScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOn1: true,
      isOn2: true,
      isOn3: true
    }
  }

  render() {
    return (
      <ScrollView style={styles.shadowContainerStyle}>
        <View style={styles.view1}>
          <Text style={styles.view2}>App Notifications</Text>
          <ToggleSwitch
            isOn={this.state.isOn1}
            onColor="green"
            offColor="black"
            labelStyle={{ color: "black", fontWeight: "900" }}
            size="small"
            onToggle={isOn => this.setState({
              isOn1: isOn
            })}
            style={styles.view3}
          />
        </View>
        <View style={styles.view1}>
          <Text style={styles.view2}>Phone Number Notifications</Text>
          <ToggleSwitch
            isOn={this.state.isOn2}
            onColor="green"
            offColor="black"
            labelStyle={{ color: "black", fontWeight: "900" }}
            size="small"
            onToggle={isOn => this.setState({
              isOn2: isOn
            })}
            style={styles.view3}
          />

        </View>
        <View style={styles.view1}>
          <Text style={styles.view2}>Other Notifications</Text>
          <ToggleSwitch
            isOn={this.state.isOn3}
            onColor="green"
            offColor="black"
            size="small"
            onToggle={isOn => this.setState({
              isOn3: isOn
            })}
            style={styles.view3}
          />
        </View>

      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  view3: {
    fontSize: 20,
    padding: 15
  },
  view2: {
    padding: 20
  },
  view1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#ddd',
    borderBottomWidth: 1
  },
  shadowContainerStyle: {
    backgroundColor: 'white', width: win - 20, marginTop: 40, marginLeft: 10, marginRight: 10, marginBottom: 5,
    flex: 1,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3
  }
})