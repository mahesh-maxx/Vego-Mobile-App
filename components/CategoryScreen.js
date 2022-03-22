import { Component } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import axios from 'axios'

export default class CategoryScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: ''
    }
  }

  list = (index) => {
    //console.log(this.state.data[index].products);
    return (
      this.state.data[index].products.map((item, ind) => {
        return (
          <TouchableOpacity
            key={ind}
            style={{ flexDirection: 'column', alignItems: 'center', backgroundColor: 'white' }}
            onPress={() => {
              this.props.navigation.navigate('Categoryproduct', {
                data: this.state.data[index].products[ind]
              })
            }}
          >
            <Image style={{ width: 270, height: 270 }} source={require('../assets/i1.jpeg')} />
            <Text style={{ textAlign: 'center', fontSize: 30 }}>{item.name}</Text>
          </TouchableOpacity>
        );
      })
    )
  }

  componentDidMount = () => {
    axios.get(`https://vegco.co/web/api/Productsapi`).then((response) => {
      // console.log(response.data);
      this.setState({
        data: response.data
      })
    });
  }
  render() {
    let category = this.props.route.params.category;
    let len = this.state.data.length;
    let data = this.state.data;
    //console.log(data);
    let index = null;
    for (let i = 0; i < len; i++) {
      if (data[i].name === category) {
        index = i;
        break;
      }
    }

    //console.log(this.state.data[index]);
    return (
      <ScrollView>
        <Text style={{ textAlign: 'center', fontSize: 40, backgroundColor: 'white' }}>{category}</Text>
        {
          index != null ?

            <View>{this.list(index)}</View>
            : null
        }

      </ScrollView>
    );
  }
}

//<Image style={{ width: 270, height: 270 }} source={require(item.images[0])} />