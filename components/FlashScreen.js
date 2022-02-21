import { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default class FlashScreen extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    setTimeout(()=>{
      this.props.navigation.navigate('Home')
    },1000)
  }
  render() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
        <Image source={require('../assets/logo.png')}
        style={{width:300, height: 300
        }} />
      </TouchableOpacity>
    </View>
  );
      }
}
