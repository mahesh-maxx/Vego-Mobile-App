import { Component } from "react";
import { View, ScrollView, StyleSheet, Text, Image, Button, TouchableOpacity, ImageBackground } from "react-native";
import { Octicons, Ionicons, Entypo } from '@expo/vector-icons';
import { Dimensions } from "react-native";
const win = Dimensions.get('window');
import axios from 'axios';

export default class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            box: []
        }
    }

    componentDidMount = () => {
        axios.get(`https://vegco.co/web/api/Productsapi/categories_boxes?id=1`).then((response) => {
            // console.log(response.data);
            this.setState({
                box: response.data
            })
        });
    }

    render() {
        return (
            <ScrollView contentContainerStyle={StyleSheet.contentContainer}>
                <View style={{ backgroundColor: "#a3cd3d", height: 70, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ paddingTop: 30, paddingLeft: 10 }}><Entypo name="menu" size={25} /></View>
                    {/*<View style={{ paddingTop: 25, flex: 1, alignItems: 'baseline', flexDirection: 'row', marginLeft: 110 }}>
                        <Octicons name="location" size={25} />
                        <Text>Current Location</Text>
        </View>*/}
                    <View style={{ paddingTop: 30, paddingRight: 10 }}><Ionicons name="search-sharp" size={25} /></View>
                </View>
                <View style={{ marginTop: 7, flex: 1 }}>
                    <Image style={{ width: win.width, height: win.width / 2, }} source={require('../assets/b1.png')} />
                </View>
                <Text style={{ backgroundColor: 'white', fontSize: 20, marginTop: 5, textAlign: 'center', fontFamily: 'serif' }}>Our Product Category</Text>
                <Text style={{ backgroundColor: 'white', fontSize: 15, textAlign: 'center', fontFamily: 'serif', color: '#6bb030' }}>Fresh Organic Vegetables Delivery Made Easy</Text>
                <Image source={require("../assets/arrow-1.png")} style={{ width: win.width, marginTop: 5 }} />
                <View style={{ marginTop: 5, marginLeft: 5, flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Category', {
                        category: "Vegetables"
                    })} style={{ marginLeft: 5, marginRight: 5, marginBottom: 5, borderRadius: 50 }}>
                        <Image source={require("../assets/vegetable_icons.png")} style={{ width: win.width / 2.2, height: win.width / 2.2 }} />
                        <Text style={{ fontFamily: 'serif', fontSize: 20, textAlign: 'center' }}>Vegetables</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Category', {
                        category: "Juice"
                    })} style={{ marginLeft: 5, marginBottom: 5, borderRadius: 50 }}>
                        <Image source={require("../assets/juice_icons.png")} style={{ width: win.width / 2.2, height: win.width / 2.2 }} />
                        <Text style={{ fontFamily: 'serif', fontSize: 20, textAlign: 'center' }}>Juice</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Category', {
                        category: "Salad"
                    })} style={{ marginLeft: 5, marginRight: 5, borderRadius: 50 }}>
                        <Image source={require("../assets/salad_icons.png")} style={{ width: win.width / 2.2, height: win.width / 2.2 }} />
                        <Text onPress={() => this.props.navigation.navigate('Category')} style={{ fontFamily: 'serif', fontSize: 20, textAlign: 'center' }}>Salad</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Category', {
                        category: "READY TO COOK"
                    })} style={{ marginLeft: 5, borderRadius: 50 }}>
                        <Image source={require("../assets/ready.png")} style={{ width: win.width / 2.2, height: win.width / 2.2 }} />
                        <Text style={{ fontFamily: 'serif', fontSize: 20, textAlign: 'center' }}>Ready to Cook</Text>
                    </TouchableOpacity>
                </View>

                <Text style={{ fontSize: 20, marginTop: 5, textAlign: 'center', fontFamily: 'serif' }}>Few Steps To A Hassle-Free Delivery</Text>
                <Text style={{ fontSize: 15, textAlign: 'center', fontFamily: 'serif', color: '#6bb030' }}>We Are Just A Subscription Away With Your Favourite Box Of Flavourful, Safe And Healthy Vegetables</Text>
                <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                    <Image source={require("../assets/arrow-1.png")} />
                </View>
                <View style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center', width: win.width }}>
                    <ImageBackground source={require("../assets/bg.jpeg")} style={{ flexDirection: 'row', justifyContent: "center", width: win.width }}>
                        <Text style={{ fontWeight: 'bold', marginTop: 10, fontSize: 12, position: 'absolute', marginTop: -15, fontStyle: 'italic' }} >-Order Delivery Process-</Text>
                        <View style={{ marginTop: 10, alignItems: 'center', flexWrap: 'wrap', width: win.width / 6 }}>
                            <Image source={require("../assets/im1.png")} style={{ width: win.width / 8, height: win.width / 8 }} />
                            <Text style={{ fontWeight: 'bold', marginTop: 10, fontSize: 10 }} >Visit Our Online Store</Text>
                            <Text style={{ textAlign: 'center', fontSize: 8 }}>Subscribe with us for fast and hassle-free delivery, direct to your home, delivered at your doorstep.</Text>
                        </View>
                        <View style={{ marginTop: 35, alignItems: 'center', flexWrap: 'wrap' }}>
                            <Image source={require("../assets/ar3.jpeg")} style={{ width: 35, height: 10 }} />
                        </View>
                        <View style={{ marginTop: 10, alignItems: 'center', width: win.width / 6 }} >
                            <Image source={require("../assets/im2.png")} style={{ width: win.width / 8, height: win.width / 8 }} />
                            <Text style={{ fontWeight: 'bold', marginTop: 10, fontSize: 10 }}>Pick Your Box</Text>
                            <Text style={{ textAlign: 'center', fontSize: 8 }}>Specially assorted mix of hygienically packed vegetable boxes, flavoured with seasonal surprises.</Text>
                        </View>
                        <View style={{ marginTop: 35, alignItems: 'center', flexWrap: 'wrap' }}>
                            <Image source={require("../assets/ar2.jpeg")} style={{ width: 35, height: 10 }} />
                        </View>

                        <View style={{ marginTop: 10, alignItems: 'center', width: win.width / 6 }}>
                            <Image source={require("../assets/im3.png")} style={{ width: win.width / 8, height: win.width / 8 }} />
                            <Text style={{ fontWeight: 'bold', marginTop: 10, fontSize: 10 }}>Refresh Your Box</Text>
                            <Text style={{ textAlign: 'center', fontSize: 8 }}>Customise what's most delicious in season near you and create your personalised family mixes.</Text>
                        </View>
                        <View style={{ marginTop: 35, alignItems: 'center', flexWrap: 'wrap' }}>
                            <Image source={require("../assets/ar1.jpeg")} style={{ width: 35, height: 10 }} />
                        </View>

                        <View style={{ marginTop: 10, alignItems: 'center', width: win.width / 6 }}>
                            <Image source={require("../assets/im4.png")} style={{ width: win.width / 8, height: win.width / 8 }} />
                            <Text style={{ fontWeight: 'bold', marginTop: 10, fontSize: 10 }}>Get Delivered</Text>
                            <Text style={{ textAlign: 'center', fontSize: 8 }}>Monday to Sunday, get your box delivered at your favourite time. Choose your frequency as per your need.</Text>
                        </View>
                    </ImageBackground>
                </View>

                <Text style={{ textAlign: 'center', marginTop: 10 }}>BEST SELLING SUBSCRIPTION BOXES</Text>
                <View >
                    <Text onPress={() => this.props.navigation.navigate('Boxtypes')} style={{ fontSize: 14, textAlign: 'right', marginRight: 8, fontWeight: '800', marginTop: 5 }}>View all</Text>
                    <View style={{ flex: 1, alignItems: 'center', marginTop: 10 }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Product', {
                            productType: 'Box',
                            product: this.state.box[0]
                        })}>
                            <Image style={{ width: win.width / 1.2, height: win.width / 1.6 }} source={require('../assets/box_image.jpeg')} />
                        </TouchableOpacity>
                        <Text style={{ textAlign: 'center', fontSize: 25 }}>Spinach</Text>

                    </View>
                </View>
                <View style={{ flex: 1, alignItems: 'center', marginTop: 10 }}>
                    <TouchableOpacity
                        style={styles.button}
                    >
                        <Text> SUBSCRIBE </Text>
                    </TouchableOpacity>
                    <View style={{ margin: 10 }}>
                        <TouchableOpacity
                            style={styles.referbutton}
                            onPress={() => this.props.navigation.navigate('Payment')}
                        >
                            <Text> Refer and Earn </Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView >
        )
    }
}

const styles = StyleSheet.create({
    contentContainer: {
        backgroundColor: 'white',
        flex: 1
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#a3cd3d',
        width: win.width / 3,
        paddingTop: 8,
        height: 40,
        borderRadius: 5
    },
    referbutton: {
        alignItems: 'center',
        backgroundColor: '#a3cd3d',
        width: win.width / 1.5,
        paddingTop: 12,
        height: 50,
        borderRadius: 5
    }
});
