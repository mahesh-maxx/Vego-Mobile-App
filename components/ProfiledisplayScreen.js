import { Component } from 'react'
import { Text, View, Image, Dimensions, StyleSheet, ScrollView } from 'react-native'
import { Entypo } from '@expo/vector-icons';
const win = Math.round(Dimensions.get('window').width);

export default class ProfiledisplayScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <ScrollView>
        <View style={{ height: 200, width: win, backgroundColor: '#42f569' }} />
        <View style={styles.shadowContainerStyle}>
          <View style={{ marginTop: 100, flexDirection: 'row', flexWrap: 'wrap' }}>
            <View style={styles.view1}>
              <Text style={styles.view3}>ayushri2019@gmail.com</Text>
              <Text style={styles.view3}>Email</Text>
            </View>
            <View style={styles.view1}>
              <Text style={styles.view3}>48394394394934</Text>
              <Text style={styles.view3}>Phone</Text>
            </View>
            <View style={styles.view1}>
              <Text style={styles.view3}>8339</Text>
              <Text style={styles.view3}>DOB</Text>
            </View>
            <View style={styles.view1}>
              <Text style={styles.view3}>Hypertension</Text>
              <Text style={styles.view3}>Any person disease</Text>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', position: 'absolute' }}>
          <View style={{ height: 100, width: 100, marginLeft: win / 2 - 40, elevation: 3 }}>
            <Image source={require('../assets/logo.jpeg')}
              style={{
                width: 100, height: 100, borderRadius: 50, marginTop: 50,
              }} />
            <Text style={{ textAlign: 'center' }} >Ayushi Shrivastava</Text>
            <Text style={{ textAlign: 'center' }}>Name</Text>
          </View>
        </View>

        <View style={styles.card2}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.view4}>{'\u2022'}</Text>
            <Text style={styles.view5} >My Account</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.view4}>{'\u2022'}</Text>
            <Text style={styles.view5} >My Subscription</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.view4}>{'\u2022'}</Text>
            <Text style={styles.view5} >My Favorite List</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.view4}>{'\u2022'}</Text>
            <Text style={styles.view5} >My Notification</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.view4}>{'\u2022'}</Text>
            <Text style={styles.view5} >Feedback</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.view4}>{'\u2022'}</Text>
            <Text style={styles.view5} >Refer & Earn</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.view4}>{'\u2022'}</Text>
            <Text style={styles.view5} >Setting</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.view4}>{'\u2022'}</Text>
            <Text style={styles.view5} >Terms & Conditions</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.view4}>{'\u2022'}</Text>
            <Text style={styles.view5} >Privacy Policy</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.view4}>{'\u2022'}</Text>
            <Text style={styles.view5} >FAQ's</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.view4}>{'\u2022'}</Text>
            <Text style={styles.view5} >Logout</Text>
          </View>
        </View>

        <View style={{ marginTop: 5 }}>
          <Text style={{ textAlign: 'center' }}>Version (0.01)</Text>
        </View>

        <View style={{ marginTop: 5, flexDirection: 'row', justifyContent: 'space-around' }}>
          <Entypo size={25} name="home" />
          <Entypo size={25} name="menu" />
          <Entypo size={25} name="shopping-cart" />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  view5: {
    marginLeft: 70, fontSize: 20, marginTop: 5
  },
  view4: {
    marginLeft: 40,
    fontSize: 30
  },
  view3: {
    textAlign: 'center'
  },
  view1: {
    width: (win - 20) / 2,
    height: 50
  },
  shadowContainerStyle: {
    backgroundColor: 'white', height: 200, width: win - 20, marginTop: 100, marginLeft: 10, marginRight: 10, position: 'absolute',
    //<--- Style with elevation
    //borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3
  },
  card2: {
    marginTop: 120,
    backgroundColor: 'white', width: win - 20, marginLeft: 10, marginRight: 10,
    borderRadius: 5,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3
  }
})