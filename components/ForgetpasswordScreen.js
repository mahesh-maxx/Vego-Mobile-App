import { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button, TextInput,Alert } from 'react-native';

class ForgetpasswordScreen extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      email:"",
      baseUrl: global.baseUrl
    }
  }

  forgetPassword =()=> {
    var that = this;
    var url = that.state.baseUrl + '/forgetPassword';
    let data = new FormData()
    data.append('email',that.state.email);
    fetch(url, {
      method: 'POST',
      body: data
    }).then(function (response) {
      return response.json();
    }).then(function(result){
      if(result.id != 'error'){
        Alert.alert(
         'Reset Password',
        'Please check you email and follow instuctions to reset password.',
        [
          
           {text: 'OK', onPress: () => that.props.navigation.navigate('Home')
     
      }, ],
      {cancelable: false})
    } else if(result.id == 'error'){
      Alert.alert(
        'Reset Password',
       'You are not registered with us. Please try to signup',
       [
         
          {text: 'OK', onPress: () => that.props.navigation.popToTop(), 
    
     },
         
       ],
       {cancelable: false})

    } else {
      Alert.alert(
        'Reset Password',
       'Something went wrong. Please try again later.',
       [
         
          {text: 'OK', onPress: () => that.props.navigation.popToTop(), 
    
     },
         
       ],
       {cancelable: false})
    }
    })
  }

  render() {
    return (
      <View style={{ backgroundColor:'white',flex:1 }}>
        <View style={{ marginTop: 150 }}>
          <Text style={{ marginLeft: 20, fontSize: 18 }}>Reset your Password</Text>
        </View>
        <View style={{ marginLeft: 20, marginTop: 20 }}>
          <Text>Please enter your email.We will send instuctions at your email to reset your password. </Text>
        </View>
        <View style={{ marginLeft: 20, marginTop: 30 }}>
          <Text style={{ fontSize: 15 }}>Email</Text>
          <TextInput placeholder="Enter Email" backgroundColor="#a3cd3d" style={{paddingLeft:7, marginTop: 15, marginRight: 15, height:35, borderRadius:10}}
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}  />
        </View>
        <TouchableOpacity onPress={this.forgetPassword} style={{ marginTop: 20,flexDirection:'row',justifyContent:'center', height:35 }}>
          <Text style={{padding:7,fontSize:15, color: "#737875",backgroundColor:"#a3cd3d", height:35, borderRadius:10}} >Reset Password</Text> 
        </TouchableOpacity>
      </View>

    );
  }
}

export default ForgetpasswordScreen;
