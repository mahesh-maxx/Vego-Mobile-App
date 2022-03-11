import { Component } from "react";
import {View,Text,Image,ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import axios from 'axios';

export default class BoxtypesScreen extends Component {
  constructor(props) {
    super(props);
    this.state ={
        box : []
    }
}

  componentDidMount = ()=>{
    axios.get(`https://vegco.co/web/api/Productsapi/categories_boxes?id=1`).then((response) => {
        console.log(response.data);
        this.setState({
            box: response.data
        })
      });
}
  render() {
    return(
      <ScrollView style={styles.container}>
        <Text style={{textAlign:'center',fontSize:40}}>TYPE OF BOXES</Text>
        <View style={styles.container1}>
            {this.state.box.length>0 ? this.state.box.map((item, index) => (
            <TouchableOpacity
              key={index}
            onPress={() => this.props.navigation.navigate('Product',{
              productType:'Box',
              product:item
            })}>
              <Image style={{width:160,height:160}} source={require('../assets/b1.png')} />
              <Text style={{textAlign:'center',fontSize:20}}>{item.name}</Text>
           </TouchableOpacity>
           )):<Text>No Box Availables</Text>
          }
           
          
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