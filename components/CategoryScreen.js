import { Component } from "react";
import {View,Text,Image,ScrollView} from 'react-native';

export default class CategoryScreen extends Component {

  render() {
    return(
      <ScrollView>
        <Text style={{textAlign:'center',fontSize:40}}>SALAD</Text>
        <View style={{flexDirection:'column', alignItems:'center'}}>
          <Image style={{width:270,height:270}} source={require('../assets/b1.png')} />
          <Text style={{textAlign:'center',fontSize:30}}>Broccoli</Text>
        </View>
        <View style={{flexDirection:'column', alignItems:'center'}}>
          <Image style={{width:270,height:270}} source={require('../assets/b1.png')} />
          <Text style={{textAlign:'center',fontSize:30}}>Spinach</Text>
        </View>
        <View style={{flexDirection:'column', alignItems:'center'}}>
          <Image style={{width:270,height:270}} source={require('../assets/b1.png')} />
          <Text style={{textAlign:'center',fontSize:30}}>Spinach</Text>
        </View>
      </ScrollView>
    );
  }
}