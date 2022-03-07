import { Component } from 'react';
import { StyleSheet, Text, View,Button, TouchableOpacity, Image, TextInput,Alert } from 'react-native';
import CheckBox from 'expo-checkbox';

export default class LoginScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      email:"",
      password:"",
      showPass:false,
      baseUrl:global.baseUrl
    }
  }

  login=()=>{
    var that = this;
    var url = that.state.baseUrl + '/login';
    let data = new FormData()
    data.append('email',that.state.email);
    data.append('password',that.state.password);
    console.log("data ",data,url)
    fetch(url, {
      method: 'POST',
      body: data
    }).then(function (response) {
      return response.json();
    }).then(function(result){
      console.log("rs ",result)
      if(result.id !== 'error' || result == null){
        console.log("in the if")
        that.props.navigation.navigate("Main")
      } else if(result.id === 'error'){
        Alert.alert(
          'Login Error',
         'The email address or password you entered is not valid',
         [
           
            {text: 'OK', onPress: () => console.log('Cancel Pressed'), 
      
       },
           
         ],
         {cancelable: false})
      }
      else {
        Alert.alert(
          'Login Error',
         'Something went wrong. Please try again later.',
         [
           
            {text: 'OK', onPress: () => that.props.navigation.popToTop(), 
      
       },
           
         ],
         {cancelable: false})
      }
    }).catch((err)=>{
      console.log("err ",err)
    })
  }

  render(){
  return (
    <View style={{ flex: 1, marginTop:100}}>
      <View style={{alignItems: 'center'}}>
      <Text style={{textAlign: 'center',width:170, fontSize:30}} numberOfLines={2}>Welcome to Vegco</Text>
      </View>
    
      <View style={{marginLeft:20, marginTop:100}}>
        <Text>Email</Text>
        <TextInput placeholder="Enter Email" backgroundColor="#6bb030" style={{marginTop:15, marginRight:15,paddingLeft:5}}
        value={this.state.email}
        onChangeText={(email) => this.setState({ email })} />
      </View>
      <View style={{marginLeft:20, marginTop:30}}>
        <Text>Password</Text>
        <TextInput placeholder="Enter Password" backgroundColor="#6bb030" style={{ marginTop:15, marginRight:20,paddingLeft:5}} 
        secureTextEntry={!this.state.showPass}
        value={this.state.password}
        onChangeText={(password) => this.setState({ password })}/>
      </View>
      <View style={{marginLeft:20, marginTop:15, display:'flex', flexDirection:'row'}}>
      <CheckBox
          value={this.state.showPass}
          onValueChange={() => this.setState({ showPass:!this.state.showPass })}
        />
        <Text style={{marginLeft:10}}>Show Password</Text>
      </View>
      <View style={{alignItems: 'flex-end', marginTop:30,  marginRight:20 }}>
        <Text onPress={() => this.props.navigation.navigate('Forgetpassword')}>Forget Password ?</Text> 
      </View>
      <View style={{width: 100, marginTop:40, alignItems:'center',marginLeft:150}}>
        <Button title="Login" color="#6bb030" onPress={this.login}/>
      </View>
    </View>
  );
  }
}
