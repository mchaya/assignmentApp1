import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

function Separator() {
  return <View style={styles.separator} />;
}

class AccountScreen extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.header}>Create Your Account</Text>

            <View style={styles.container2}>
                <Text style={styles.text}>Your First Name</Text>
                <TextInput style={styles.box}>
                </TextInput>
                <Text style={styles.text}>Your Last Name</Text>
                <TextInput style={styles.box}>
                </TextInput>
                <Text style={styles.text}>Choose a Username</Text>
                <TextInput style={styles.box}>
                </TextInput>
                <Text style={styles.text}>Choose a password</Text>
                <TextInput style={styles.box}>
                </TextInput>
                <Text style={styles.text}>Confirm password</Text>
                <TextInput style={styles.box}>
                </TextInput>
                <Text style={styles.text}>Email Address</Text>
                <TextInput style={styles.box}>
                </TextInput>
                <Text style={styles.text}>Confirm Email Address</Text>
                <TextInput style={styles.box}>
                </TextInput>
                <Separator />
                <View>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => navigate('HomeScreen')}
                  underlayColor='#fff'>
                  <Text style={styles.createText}>Create Account</Text>
              </TouchableOpacity>
                </View>
               
            </View>
        </View>
      );
    }
}

export default AccountScreen;


const styles = StyleSheet.create({
    container: {
    backgroundColor: 'darkred',
    flex: 1,
    // alignItems: 'center'
    // justifyContent: 'center',
  },
  container2: {
      flexDirection: "row",
      flexWrap: 'wrap'
    },
  header: {
    color: 'white',
    fontSize: 33,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
    textDecorationLine: 'underline',
    fontWeight: 'bold'
  },
box:{
    backgroundColor: 'white',
    margin: 10,
    height: 30,
    width: 390,
    alignItems: 'center',
    justifyContent: 'center'
},
text: {
    fontSize: 16,
    marginLeft: 10,
    color: 'white',
},
separator: {
  marginVertical: 8,
  borderBottomColor: '#737373',
  borderBottomWidth: StyleSheet.hairlineWidth,
},
button: {
  width: 390,
    marginRight:10,
    marginLeft:10,
    marginTop:30,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#1E6738',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
},
createText: {
      fontSize: 20,
      color:'#fff',
      textAlign:'center',
      paddingLeft : 10,
      paddingRight : 10
}
});