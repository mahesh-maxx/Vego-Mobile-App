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
      <View style={{ marginTop: 50 }}>
        <View style={{ marginTop: 100 }}>
          <Text style={{ marginLeft: 20, fontSize: 18 }}>Reset your Password</Text>
        </View>
        <View style={{ marginLeft: 20, marginTop: 20 }}>
          <Text>Please enter your email.We will send instuctions at your email to reset your password. </Text>
        </View>
        <View style={{ marginLeft: 20, marginTop: 30 }}>
          <Text style={{ fontSize: 15 }}>Email</Text>
          <TextInput placeholder="Enter Email" backgroundColor="#6bb030" style={{ marginTop: 15, marginRight: 15 }}
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}  />
        </View>
        <View style={{ marginTop: 20, marginLeft: 20, marginRight: 20 }}>
          <Button title="Reset Password" color="#6bb030" style={{ textColor: "black" }} onPress={this.forgetPassword} />
        </View>
      </View>

    );
  }
}

export default ForgetpasswordScreen;
