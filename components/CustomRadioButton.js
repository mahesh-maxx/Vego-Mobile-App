import React, { Component } from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';

export default class CustomRadioButton extends Component {
  state = {
    value: null,
  };

  render() {
    const { PROP } = this.props;
    const { value } = this.state;

    return (
      <View>

        {PROP.map(res => {
          console.log(res.text);
          let text = res.text;
          return (
            <View key={res.key} style={styles.rbWrapper}>
              <TouchableOpacity
                style={styles.rbStyle}
                onPress={() => {
                  this.setState({
                    value: res.key,
                  });
                }}>
                {value === res.key && <View style={styles.selected} />}
              </TouchableOpacity>
              <Text style={styles.textStyle}>{text}</Text>
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rbWrapper: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  textStyle: {
    marginRight: 36,
    fontSize: 15,
    color: 'black',
    marginLeft: 10
  },
  rbStyle: {
    height: 25,
    width: 25,
    borderRadius: 110,
    borderWidth: 2,
    borderColor: '#a3cd3d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selected: {
    width: 16,
    height: 16,
    borderRadius: 55,
    backgroundColor: '#a3cd3d',
  },
  result: {
    marginTop: 22,
    color: 'white',
    fontWeight: '600',
    backgroundColor: 'blue',
  },
});