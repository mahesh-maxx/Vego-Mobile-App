import { Component } from "react";
import {View,Text,Image,ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Dimensions } from "react-native";
const win = Dimensions.get('window');
export default class ProductScreen extends Component {
  constructor(props){
    super(props)
    this.state = {
      productType:this.props.route.params.productType,
      product:this.props.route.params.product
    }
    console.log(this.state)
  }
  render() {
    return(
      
      <TouchableOpacity >
          <Image source={require("../assets/box_image.jpeg")} style={{ width: win.width / 1.03, marginLeft: 5 ,height:win.height / 2.8,borderRadius:30,marginRight:5,marginTop:10}} />
          <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
            <Text style={{fontSize:20,fontWeight:'bold',marginLeft:5}}>{this.state.product.name} </Text>
            <TouchableOpacity style={{backgroundColor:'#a3cd3d',border:1,marginRight:5,borderRadius:5,width:40}}>
            <AntDesign name="hearto" size={25} style={{textAlign:'center',paddingTop:2}} />
            </TouchableOpacity>
          </View>
          <View  style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
            <Text style={{fontSize:14,fontWeight:'500',marginLeft:5}}>Weight: {this.state.product?.product_detail[0].weight_volume_value} {this.state.product.product_detail[0].weight_volume_type}</Text>
          </View>
          <View  style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
            <Text style={{fontSize:16,fontWeight:'800',marginLeft:5}}>Rs: {this.state.product?.sell_price}</Text>
          </View>
          <View  style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
            <Text style={{fontSize:10,fontWeight:'800',marginLeft:5}}>Description: {this.state.product?.descriptions}</Text>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:50}}>
          <TouchableOpacity
         style={{backgroundColor:'#a3cd3d',border:1,marginRight:5,borderRadius:5,width:140,height:50}}
       >
         <Text style={{textAlign:'center',textAlignVertical:'center',paddingTop:11}}> Add to Cart </Text>
 </TouchableOpacity>
 <TouchableOpacity
         style={{backgroundColor:'#a3cd3d',border:1,marginRight:5,borderRadius:5,width:140,height:50}}
       >
         <Text style={{textAlign:'center',textAlignVertical:'center',paddingTop:11}}> Buy Now </Text>
 </TouchableOpacity>
 </View>
        </TouchableOpacity>
      
    );
  }
}
