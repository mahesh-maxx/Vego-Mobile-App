import { StyleSheet, Text, View, TouchableOpacity, Image,Button } from 'react-native';
import React, { Component } from "react";
export default class HomeScreen extends Component {
  constructor(props){
    super(props);
    global.baseUrl = "https://vegco.co/web/process"
  }
render(){

  return (
    <View style={{flex:1, alignItems:'center',marginTop: 50}}>
      <View>
        <TouchableOpacity>
          <Image source={require('../assets/i1.png')}
          style={{width:300, height: 300}} />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{textAlign: 'center',width:170, fontSize:30}} numberOfLines={2}>Welcome to Vegco</Text>
      </View>
      <View style={{marginTop:50}}>
        <Button title="Sign up" color="#6bb030" onPress={() => this.props.navigation.navigate("Register")}/>
      </View>
      <View style={{marginTop:20}}>
        <Button title="Already Have Account? Log in" color="#6bb030" style={{marginTop:50}} onPress={() => this.props.navigation.navigate('Welcome')} />
      </View>
      <View style={{marginTop:120}}>
        <Text >I just want to explore</Text>
      </View>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {

  }
});
