import React, { Component } from 'react';
import { Button, Image, TextInput, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Audio, Video } from 'expo-av';

export default class LoginScreen extends Component {

  state = { user: '', pass: undefined } // initialize our default state values...try some different default values: '', 3, undefined, null

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.images}
            source={require('../assets/dj.jpg')}
            />

        <Text>
        {/* {
          converts a object into a easily readable json string
          JSON.stringify(this.state, null, 2)
        } */}
        </Text>

        <TextInput 
        onChangeText={
          // update the user states value
          text => this.setState({user: text})
        }
        style={styles.input}
        placeholder="username"></TextInput>

        <TextInput 
        onChangeText={
          text => this.setState({pass: text})
        } 
        style={styles.input} 
        placeholder="password" 
        secureTextEntry={true} // hide text
        ></TextInput>

        <View style={styles.container2}>
          <Button 
            onPress={
              // Navigate to the App Navigation Stack Next
              () => this.props.navigation.navigate('App')
            }
            style={styles.h1} 
            title="Login"
          />
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    marginTop: -100,
    alignItems: 'center',
    backgroundColor: 'purple',
    flex: 1
  },
  container2: {
    marginTop: 50
  },
  h1: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: 'white',
    marginBottom: 20,
    padding: 10,
    width: '100%'
  },
  images: {
    alignSelf: "center",
    width: 450, 
    height: 175,
    resizeMode: "cover"
    // margin: 40
  },
});