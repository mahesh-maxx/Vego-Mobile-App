import { Component } from "react";
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Dimensions } from "react-native";
import { max } from "moment";
const win = Dimensions.get('window');

export default class CategoryproductScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: this.props.route.params.data,
      defaultRating: 3.5,
      maxRating: [1, 2, 3, 4, 5]
    }
    console.log(this.state)
  }

  starImgFilled = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png';
  starImgCorner = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png';

  CustomRatingBar = () => {
    return (
      <View style={styles.customRatingBarStyle}>
        {
          this.state.maxRating.map((item, key) => {
            return (
              <TouchableOpacity
                activeOpacity={0.7}
                key={item}
                onPress={() => this.setState({
                  defaultRating: item
                })}
              >
                <Image
                  style={styles.starImgStyle}
                  source={
                    item <= this.state.defaultRating
                      ? { uri: this.starImgFilled }
                      : { uri: this.starImgCorner }
                  }
                />
              </TouchableOpacity>
            )
          })
        }
      </View>
    )
  }

  render() {

    return (

      <TouchableOpacity >
        <Image source={require("../assets/box_image.jpeg")} style={{ width: win.width / 1.03, marginLeft: 5, height: win.height / 2.8, borderRadius: 30, marginRight: 5, marginTop: 10 }} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 5 }}>{this.state.data.name} </Text>
          <TouchableOpacity style={{ backgroundColor: '#a3cd3d', border: 1, marginRight: 5, borderRadius: 5, width: 40 }}>
            <AntDesign name="hearto" size={25} style={{ textAlign: 'center', paddingTop: 2 }} />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
          <Text style={{ fontSize: 14, fontWeight: '500', marginLeft: 5 }}>Weight: {this.state.data?.weight} gram</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: '800', marginLeft: 5 }}>Rs: {this.state.data?.sell_price}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
          <Text style={{ fontSize: 14, fontWeight: '500', marginLeft: 5 }}>Kcal:- 100</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
          <Text style={{ fontSize: 14, fontWeight: '500', marginLeft: 5 }}>Nutri:- 100</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
          <Text style={{ fontSize: 10, fontWeight: '800', marginLeft: 5 }}>Description: {this.state.data?.descriptions}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 5, marginTop: 25 }}>Review </Text>
          <TouchableOpacity >
            <View style={{ marginRight: 10 }} >
              {this.CustomRatingBar()}
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 50 }}>
          <TouchableOpacity
            style={{ backgroundColor: '#a3cd3d', border: 1, marginRight: 5, borderRadius: 5, width: 140, height: 50 }}
          >
            <Text style={{ textAlign: 'center', textAlignVertical: 'center', paddingTop: 11 }}> Add to Cart </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ backgroundColor: '#a3cd3d', border: 1, marginRight: 5, borderRadius: 5, width: 140, height: 50 }}
          >
            <Text style={{ textAlign: 'center', textAlignVertical: 'center', paddingTop: 11 }}> Buy Now </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

    );
  }
}

const styles = StyleSheet.create({
  customRatingBarStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30
  },
  starImgStyle: {
    width: 20,
    height: 20,
    resizeMode: 'cover'
  }

})
// <Image source={require({this.state.data.images[0]})} style={{ width: win.width / 1.03, marginLeft: 5, height: win.height / 2.8, borderRadius: 30, marginRight: 5, marginTop: 10 }} />