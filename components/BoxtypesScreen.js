import { Component } from "react";
import {View,Text,Image,ScrollView, StyleSheet, TouchableOpacity} from 'react-native';

export default class BoxtypesScreen extends Component {

  render() {
    return(
      <ScrollView style={styles.container}>
        <Text style={{textAlign:'center',fontSize:40}}>TYPE OF BOXES</Text>
        <View style={styles.container1}>
            
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Product')}>
              <Image style={{width:160,height:160}} source={require('../assets/b1.png')} />
              <Text style={{textAlign:'center',fontSize:20}}>Broccoli</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Product')}>
              <Image style={{width:160,height:160}} source={require('../assets/b1.png')} />
              <Text style={{textAlign:'center',fontSize:20}}>Broccoli</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Product')}>
              <Image style={{width:160,height:160}} source={require('../assets/b1.png')} />
              <Text style={{textAlign:'center',fontSize:20}}>Broccoli</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Product')}>
              <Image style={{width:160,height:160}} source={require('../assets/b1.png')} />
              <Text style={{textAlign:'center',fontSize:20}}>Broccoli</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Product')}>
              <Image style={{width:160,height:160}} source={require('../assets/b1.png')} />
              <Text style={{textAlign:'center',fontSize:20}}>Broccoli</Text>
            </TouchableOpacity>
           
          
        </View>
        </ScrollView>
      
    );
  }
}

const styles = StyleSheet.create({
  container:{
    marginLeft: 20,
    marginRight:20
  },
  container1:{
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  }
})