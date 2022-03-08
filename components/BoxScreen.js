import { Component } from "react";
import {View,Text,Image,ScrollView,Dimensions} from 'react-native';

const win = Dimensions.get('window');

export default class CategoryScreen extends Component {

  render() {
    return(
      <ScrollView>
        <Text style={{textAlign:'center',fontSize:40,flexDirection:'row',marginTop:50}}>TYPE OF BOXES</Text>
        <View style={{flexDirection:'row'}}>
        <View style={{ marginTop: 5, flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
                    <View>
                        <Image source={require("../assets/vegetable_icons.png")} style={{ width: win.width / 2, height: win.width / 2 }} />
                        <Text style={{ backgroundColor: 'white', fontFamily: 'serif', fontSize: 20, textAlign: 'center' }}>Vegetable</Text>
                    </View>
                    <View>
                        <Image source={require("../assets/juice_icons.png")} style={{ width: win.width / 2, height: win.width / 2 }} />
                        <Text style={{ backgroundColor: 'white', fontFamily: 'serif', fontSize: 20, textAlign: 'center' }}>Juice</Text>
                    </View>
                    <View>
                        <Image source={require("../assets/salad_icons.png")} style={{ width: win.width / 2, height: win.width / 2 }} />
                        <Text onPress={()=>this.props.navigation.navigate('Checkout')} style={{ backgroundColor: 'white', fontFamily: 'serif', fontSize: 20, textAlign: 'center' }}>Salad</Text>
                    </View>
                    <View>
                        <Image source={require("../assets/ready.png")} style={{ width: win.width / 2, height: win.width / 2 }} />
                        <Text style={{ backgroundColor: 'white', fontFamily: 'serif', fontSize: 20, textAlign: 'center' }}>Ready to Cook</Text>
                    </View>
                </View>
        </View>
      </ScrollView>
    );
  }
}