import { Component } from "react";
import { View, ScrollView, StyleSheet, Text, Image, Button, TouchableOpacity } from "react-native";
import { Octicons, Ionicons, Entypo } from '@expo/vector-icons';
import { Dimensions } from "react-native";
const win = Dimensions.get('window');
import axios from 'axios';

export default class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.state ={
            box : ''
        }
    }

    componentDidMount = ()=>{
        axios.get(`https://vegco.co/web/api/Productsapi/categories_boxes?id=1`).then((response) => {
            //console.log(response.data);
            this.setState({
                box: response.data
            })
          });
    }

    render() {
        return (
            <ScrollView contentContainerStyle={StyleSheet.contentContainer}>
                <View style={{ backgroundColor: "#6bb030", height: 50, flex: 1, flexDirection: 'row' }}>
                    <View style={{ paddingTop: 25 }}><Entypo name="menu" size={25} /></View>
                    {/*<View style={{ paddingTop: 25, flex: 1, alignItems: 'baseline', flexDirection: 'row', marginLeft: 110 }}>
                        <Octicons name="location" size={25} />
                        <Text>Current Location</Text>
        </View>*/}
                    <View style={{ paddingTop: 25 }}><Ionicons name="search-sharp" size={25} /></View>
                </View>
                <View style={{ marginTop: 5, flex: 1 }}>
                    <Image style={{ width: win.width, height: win.width / 2, }} source={require('../assets/b1.png')} />
                </View>
                <Text style={{ backgroundColor: 'white', fontSize: 20, marginTop: 5, textAlign: 'center', fontFamily: 'serif' }}>Our Product Category</Text>
                <Text style={{ backgroundColor: 'white', fontSize: 15, textAlign: 'center', fontFamily: 'serif', color: '#6bb030' }}>Fresh Organic Vegetables Delivery Made Easy</Text>
                <Image source={require("../assets/arrow-1.png")} style={{ width: win.width, marginTop: 5 }} />
                <View style={{ marginTop: 5, flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
                    <TouchableOpacity  onPress={()=>this.props.navigation.navigate('Category', {
                        category: "Vegetables"
                    })}>
                        <Image source={require("../assets/vegetable_icons.png")} style={{ width: win.width / 2, height: win.width / 2 }} />
                        <Text style={{ backgroundColor: 'white', fontFamily: 'serif', fontSize: 20, textAlign: 'center' }}>Vegetable</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={()=>this.props.navigation.navigate('Category', {
                        category: "Juices"
                    })}>
                        <Image source={require("../assets/juice_icons.png")} style={{ width: win.width / 2, height: win.width / 2 }} />
                        <Text style={{ backgroundColor: 'white', fontFamily: 'serif', fontSize: 20, textAlign: 'center' }}>Juice</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={()=>this.props.navigation.navigate('Category', {
                        category: "Salad"
                    })}>
                        <Image source={require("../assets/salad_icons.png")} style={{ width: win.width / 2, height: win.width / 2 }} />
                        <Text onPress={()=>this.props.navigation.navigate('Category')} style={{ backgroundColor: 'white', fontFamily: 'serif', fontSize: 20, textAlign: 'center' }}>Salad</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={()=>this.props.navigation.navigate('Category', {
                        category: "Ready to Cook"
                    })}>
                        <Image source={require("../assets/ready.png")} style={{ width: win.width / 2, height: win.width / 2 }} />
                        <Text style={{ backgroundColor: 'white', fontFamily: 'serif', fontSize: 20, textAlign: 'center' }}>Ready to Cook</Text>
                    </TouchableOpacity>
                </View>

                <Text style={{ backgroundColor: 'white', fontSize: 20, marginTop: 5, textAlign: 'center', fontFamily: 'serif' }}>Few Steps To A Hassle-Free Delivery</Text>
                <Text style={{ backgroundColor: 'white', fontSize: 15, textAlign: 'center', fontFamily: 'serif', color: '#6bb030' }}>We Are Just A Subscription Away With Your Favourite Box Of Flavourful, Safe And Healthy Vegetables</Text>
                <View style={{flex:1,flexDirection:'column', alignItems: 'center' }}>
                    <Image source={require("../assets/arrow-1.png")} />
                </View>
                <View style={{marginTop: 10, backgroundColor: 'white',flex:1,flexDirection:'column', alignItems: 'center'}}>
                    <View style={{ marginTop:10,alignItems:'center' }}>
                        <Image source={require("../assets/im1.png")} style={{width:100,height:100}} />
                        <Text style={{fontWeight:'bold', marginTop:10}} >Visit Our Online Store</Text>
                        <Text>Subscribe with us for fast and hassle-free delivery, direct to your home, delivered at your doorstep.</Text>
                    </View>
                    
                    <View style={{ marginTop:10,alignItems:'center'}} >
                        <Image source={require("../assets/im2.png")} style={{width:100,height:100}} />
                        <Text style={{fontWeight:'bold', marginTop:10}}>Pick Your Box</Text>
                        <Text style={{textAlign:'center'}}>Specially assorted mix of hygienically packed vegetable boxes, flavoured with seasonal surprises.</Text>
                    </View>
                   
                    <View style={{ marginTop:10,alignItems:'center' }}>
                        <Image source={require("../assets/im3.png")} style={{width:100,height:100}} />
                        <Text style={{fontWeight:'bold', marginTop:10}}>Refresh Your Box</Text>
                        <Text style={{textAlign:'center'}}>Customise what's most delicious in season near you and create your personalised family mixes.</Text>
                    </View>
                   
                    <View style={{ marginTop:10,alignItems:'center' }}>
                        <Image source={require("../assets/im4.png")} style={{width:100,height:100}}/>
                        <Text style={{fontWeight:'bold', marginTop:10}}>Get Delivered</Text>
                        <Text style={{textAlign:'center'}}>Monday to Sunday, get your box delivered at your favourite time. Choose your frequency as per your need.</Text>
                    </View>
                </View>

                <Text style={{textAlign:'center',marginTop:10}}>BEST SELLING SUBSCRIPTION BOXES</Text>
                <View >
                <Text onPress={()=>this.props.navigation.navigate('Boxtypes')} style={{fontSize:10,textAlign:'right',marginRight:10 }}>View all</Text>
                <View style={{flex:1,alignItems:'center',marginTop:10}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Box')}>
                        <Image style={{width:200,height:200}} source={require('../assets/b1.png')} />
                    </TouchableOpacity>
                    <Text style={{textAlign:'center',fontSize:25}}>Spinach</Text>
                    <Button title="SUBSCRIBE" style={{width:100,height:30,backgroundColor:"#6bb030"}}  />
                </View>
                </View>
                <View>
                <View style={{marginLeft:10,marginRight:10,marginTop:10}}>
                    <Button title="Refer and earn" style={{borderRadius:50,backgroundColor:"#6bb030"}} onPress={() => this.props.navigation.navigate('Checkout')} />
                </View>
                </View>
                <Text style={{marginTop:10,textAlign:'center'}}>Recipes</Text>
            </ScrollView >
        )
    }
}

const styles = StyleSheet.create({
    contentContainer: {
        backgroundColor: 'white',
        flex:1
    }
});
