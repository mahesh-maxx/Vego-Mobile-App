import { Component } from "react";
import {View,Text,Image,ScrollView} from 'react-native';

export default class CategoryScreen extends Component {

  render() {
    let category = this.props.route.params.category;
    return(
      <ScrollView>
        <Text style={{textAlign:'center',fontSize:40}}>{category}</Text>
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
          <Text style={{textAlign:'center',fontSize:30}}>Tomato</Text>
        </View>
      </ScrollView>
    );
  }
}