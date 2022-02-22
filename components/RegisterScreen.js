import { Component } from 'react';
import { Text, View,Button, TouchableOpacity, Image, TextInput, ScrollView, Alert } from 'react-native';
import CheckBox from 'expo-checkbox';

export default class RegisterScreen extends Component {
  constructor(props){
    super(props);
    this.state ={
      name:"",
      email:"",
      phone:"",
      password:"",
      showPass: false,
      baseUrl: global.baseUrl
    }
  }

  register=()=> {
    var that = this;
    var url = that.state.baseUrl + '/register';
    let data = new FormData()
    data.append('type','user');
    data.append('username',that.state.name,);
    data.append('password',that.state.password);
    data.append('cpassword',that.state.password);
    data.append('email',that.state.email);
    fetch(url, {
      method: 'POST',
      body: data
    }).then(function (response) {
      return response.json();
    }).then(function(result){
      if(result.id != 'user-error'){
        Alert.alert(
         'Registration Successful',
        'Please confirm your account by click received link in email.',
        [
          
           {text: 'OK', onPress: () => that.props.navigation.navigate('Home')
     
      },
          
        ],
        {cancelable: false})
      } else if(result.id == 'user-error'){
        Alert.alert(
          'Registration Error',
         'This is email already exists, Please check.',
         [
           
            {text: 'OK', onPress: () => console.log('Cancel Pressed'), 
      
       },
           
         ],
         {cancelable: false})
      }
      else {
        Alert.alert(
          'Registration Error',
         'Something went wrong. Please try again later.',
         [
           
            {text: 'OK', onPress: () => that.props.navigation.popToTop(), 
      
       },
           
         ],
         {cancelable: false})
      }
    })
}

  render(){
  return (
    <ScrollView>
    <View style={{ flex: 1, marginTop:100}}>
      <View style={{alignItems: 'center'}}>
      <Text style={{textAlign: 'center',width:170, fontSize:30}} numberOfLines={2}>Welcome to Vegco</Text>
      </View>
      <View style={{marginLeft:20, marginTop:70}}>
        <Text>Name</Text>
        <TextInput 
          placeholder="Enter Name" 
          backgroundColor="#6bb030" 
          style={{marginTop:15, marginRight:20,borderRadius:5,paddingLeft:5}}
          value={this.state.name}
          onChangeText={(name) => this.setState({ name })}
         />
      </View>
      <View style={{marginLeft:20, marginTop:30}}>
        <Text>Email</Text>
        <TextInput placeholder="Enter Email"
        placehol
         backgroundColor="#6bb030" 
         style={{marginTop:15, marginRight:20,borderRadius:5,paddingLeft:5}}
        value={this.state.email}
        onChangeText={(email) => this.setState({ email })} />
      </View>
      <View style={{marginLeft:20, marginTop:30}}>
        <Text>Phone Number</Text>
        <TextInput placeholder="+91 Phone Number" backgroundColor="#6bb030" style={{ marginTop:15, marginRight:20,borderRadius:5,paddingLeft:5}}
        value={this.state.phone}
        onChangeText={(phone) => this.setState({ phone })} />
      </View>
      <View style={{marginLeft:20, marginTop:30}}>
        <Text>Password</Text>
        <TextInput placeholder="Enter Password" secureTextEntry={!this.state.showPass} backgroundColor="#6bb030" style={{ marginTop:15, marginRight:20,borderRadius:5,paddingLeft:5}} 
         value={this.state.password}
         onChangeText={(password) => this.setState({ password })} />
      </View>
      <View style={{marginLeft:20, marginTop:15, display:'flex', flexDirection:'row'}}>
      <CheckBox
          value={this.state.showPass}
          onValueChange={() => this.setState({ showPass:!this.state.showPass })}
        />
        <Text style={{marginLeft:10}}>Show Password</Text>
      </View>
      <View style={{marginTop:40 ,marginLeft:20,marginRight:20, flex:1}}>
        <View style={{flexDirection: "row", justifyContent:"space-between"}}>
          <View style={{width: 100}}>
            <Button title="Sign Up" onPress={this.register} color="#6bb030"/>
          </View>
          <View style={{width: 80}}>
            <Button title={String.fromCharCode(8594)} color="#6bb030" style={{fontSize:40}}/>
          </View>
        </View>
      </View>
      <View style={{flex:1,alignItems:"center",marginTop:0}}>
        <Text>OR</Text>
      </View>
      <View style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
      <Image style = {{width: 40, height: 40 , marginBottom: 0,marginLeft:10, marginTop:15}} source={require('../assets/i1.png') }/>
      <Image style = {{width: 40, height: 40 , marginBottom: 0,marginLeft:10, marginTop:15}} source={require('../assets/i1.png') }/>
      <Image style = {{width: 40, height: 40 , marginBottom: 0,marginLeft:10, marginTop:15}} source={require('../assets/i1.png') }/>
      <Image style = {{width: 40, height: 40 , marginBottom: 0,marginLeft:10, marginTop:15}} source={require('../assets/i1.png') }/>
      </View>
    </View>
          
    </ScrollView>
  );
  }
}
