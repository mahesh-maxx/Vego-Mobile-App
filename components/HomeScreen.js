import { StyleSheet, Text, View, TouchableOpacity, Image,Button } from 'react-native';
import React, { Component } from "react";
export default class HomeScreen extends Component {
  constructor(props){
    super(props);
    global.baseUrl = "https://vegco.co/web/process"
  }
render(){

  return (
    <View style={{flex:1, alignItems:'center',marginTop: 50, backgroundColor:'white'}}>
      <View>
        <TouchableOpacity>
          <Image source={require('../assets/i1.jpeg')}
          style={{width:300, height: 300}} />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{textAlign: 'center',width:170, fontSize:30}} numberOfLines={2}>Welcome to Vegco</Text>
      </View>
      <View style={{marginTop:50}}>
        <Button title="Sign up" color="#a3cd3d" onPress={() => this.props.navigation.navigate("Register")}/>
      </View>
      <View style={{marginTop:20}}>
        <Button title="Already Have Account? Log in" color="#a3cd3d" style={{marginTop:50}} onPress={() => this.props.navigation.navigate('Welcome')} />
      </View>
      <View style={{marginTop:90}} >
        <Text onPress={() => this.props.navigation.navigate('Main')} style={{fontWeight:'bold'}} >I just want to explore</Text>
      </View>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {

  }
});
