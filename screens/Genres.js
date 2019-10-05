import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class GenresScreen extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.header}>Genres</Text>

            <View style={styles.container2}>

                <View style={styles.box1}>
                    <Text>House</Text>
                </View>
                <View style={styles.box2}>
                    <Text>Hip-Hop</Text>
                </View>
                <View style={styles.box3}>
                    <Text>Reggae</Text>
                </View>
                <View style={styles.box4}>
                    <Text>R&B</Text>
                </View>
                <View style={styles.box5}>
                    <Text>Techno</Text>
                </View>
                <View style={styles.box6}>
                    <Text>Dubstep</Text>
                </View>
                <View style={styles.box7}>
                    <Text>Indie Dance</Text>
                </View>
                <View style={styles.box8}>
                    <Text>Nu Disco</Text>
                </View>
                <View style={styles.box9}>
                    <Text>Trance</Text>
                </View>
                <View style={styles.box10}>
                    <Text>Deep House</Text>
                </View>
                <View style={styles.box11}>
                    <Text>Drum & Bass</Text>
                </View>
                <View style={styles.box12}>
                    <Text>Trap</Text>
                </View>


            </View>
        </View>
      );
    }
}

export default GenresScreen;

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
    box1:{
        backgroundColor: 'darkgreen',
        margin: 10,
        height: 85,
        width: 185,
        alignItems: 'center',
        justifyContent: 'center'
    },
    box2:{
        backgroundColor: 'darkblue',
        margin: 10,
        height: 85,
        width: 185,
        alignItems: 'center',
        justifyContent: 'center'
    },
    box3:{
        backgroundColor: 'gold',
        margin: 10,
        height: 85,
        width: 185,
        alignItems: 'center',
        justifyContent: 'center'
    },
    box4:{
        backgroundColor: 'indigo',
        margin: 10,
        height: 85,
        width: 185,
        alignItems: 'center',
        justifyContent: 'center'
    },
    box5:{
        backgroundColor: 'purple',
        margin: 10,
        height: 85,
        width: 185,
        alignItems: 'center',
        justifyContent: 'center'
    },
    box6:{
        backgroundColor: 'silver',
        margin: 10,
        height: 85,
        width: 185,
        alignItems: 'center',
        justifyContent: 'center'
    },
    box7:{
        backgroundColor: 'brown',
        margin: 10,
        height: 85,
        width: 185,
        alignItems: 'center',
        justifyContent: 'center'
    },
    box8:{
        backgroundColor: 'darkorange',
        margin: 10,
        height: 85,
        width: 185,
        alignItems: 'center',
        justifyContent: 'center'
    },
    box9:{
        backgroundColor: 'lightblue',
        margin: 10,
        height: 85,
        width: 185,
        alignItems: 'center',
        justifyContent: 'center'
    },
    box10:{
        backgroundColor: 'limegreen',
        margin: 10,
        height: 85,
        width: 185,
        alignItems: 'center',
        justifyContent: 'center'
    },
    box11:{
        backgroundColor: 'beige',
        margin: 10,
        height: 85,
        width: 185,
        alignItems: 'center',
        justifyContent: 'center'
    },
    box12:{
        backgroundColor: 'pink',
        margin: 10,
        height: 85,
        width: 185,
        alignItems: 'center',
        justifyContent: 'center'
    },
   
  
  });