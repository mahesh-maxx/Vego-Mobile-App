import { StyleSheet, Text, View, TouchableOpacity, Image, Button, Alert, Modal, Pressable } from 'react-native';
import React, { Component, useState } from "react";

class EntercodeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    }
  }
  setModalVisible = (instance) => {
    this.setState({
      modalVisible: instance
    })
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>

        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              this.setModalVisible(!this.state.modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Image source={require('../assets/page1.png')} style={{ width: 60, height: 60 }} />
                <Text style={styles.modalText}>Verified!!</Text>
                <Text style={styles.modalText}>Priyanka!You have successfully verified the account</Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                    this.props.navigation.navigate("Flash");
                  }}
                >
                  <Text style={styles.textStyle}>Browse Home</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>

        <View >
          <Text>Enter your 4 digit code</Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <Image source={require('../assets/page1.png')} style={{ width: 100, height: 40 }} />
        </View>
        <View style={{ marginTop: 40, flex: 1, flexDirection: "row" }}>
          <Image source={require('../assets/page1.png')} style={{ width: 40, height: 140 }} />
          <Image source={require('../assets/page1.png')} style={{ width: 40, height: 140, marginLeft: 30 }} />
          <Image source={require('../assets/page1.png')} style={{ width: 40, height: 140, marginLeft: 30 }} />
          <Image source={require('../assets/page1.png')} style={{ width: 40, height: 140, marginLeft: 30 }} />
        </View>

        <Text>Didn't you get code? Resend</Text>

        <View style={{ marginTop: 40, marginBottom: 280, width: 300 }}>
          <Button title="Verify" color="#6bb030" style={styles.container} onPress={() => this.setModalVisible(true)} />
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 15,
    padding: 10,
    elevation: 2,
    width: 250
  },
  buttonOpen: {
    backgroundColor: "#6bb030",
  },
  buttonClose: {
    backgroundColor: "#6bb030",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default EntercodeScreen;
