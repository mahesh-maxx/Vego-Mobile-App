import { Component } from 'react'
import { Text, View, Image, Dimensions, StyleSheet, ScrollView } from 'react-native'
import { Entypo } from '@expo/vector-icons';
const win = Math.round(Dimensions.get('window').width);

export default class SettingScreen extends Component {
  render() {
    return (
      <ScrollView style={styles.shadowContainerStyle}>
        <View style={styles.view1}>
          <Text style={styles.view2}>Language</Text>
          <Entypo name="chevron-thin-right" style={styles.view3} />
        </View>
        <View style={styles.view1}>
          <Text style={styles.view2}>Change Password</Text>
          <Entypo name="chevron-thin-right" style={styles.view3} />
        </View>
        <View style={styles.view1}>
          <Text style={styles.view2}>Edit Home Address</Text>
          <Entypo name="chevron-thin-right" style={styles.view3} />
        </View>
        <View style={styles.view1}>
          <Text style={styles.view2}>Location</Text>
          <Entypo name="chevron-thin-right" style={styles.view3} />
        </View>
        <View style={styles.view1}>
          <Text style={styles.view2}>Others</Text>
          <Entypo name="chevron-thin-right" style={styles.view3} />
        </View>
        <View style={styles.view1}>
          <Text style={styles.view2}>Deactivate Account</Text>
          <Entypo name="chevron-thin-right" style={styles.view3} />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  view3: {
    fontSize: 15,
    padding: 15
  },
  view2: {
    padding: 15
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