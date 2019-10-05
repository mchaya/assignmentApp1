import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

class HomeScreen extends React.Component {
    render() {
      return (
        <ScrollView style={styles.container}>
          <Text style={styles.header}>DJ CHARTS</Text>
          
          <View style={styles.containerCharts}>
          <Text style={styles.h1}>Sam's Essentials</Text>
            <Text style={styles.h1}>Sam Divine</Text>
            <Image style={styles.images}
            source={require('../assets/samdivine.jpg')}
            />
          </View>

          <View style={styles.containerCharts}>
          <Text style={styles.h1}>A-sides Weapons</Text>
            <Text style={styles.h1}>Ilija Djokovic</Text>
            <Image style={styles.images}
            source={require('../assets/ilya.jpg')}
            />
          </View>

          <View style={styles.containerCharts}>
          <Text style={styles.h1}>Early Autumn 2019 Chart</Text>
            <Text style={styles.h1}>Oliver Koletzki</Text>
            <Image style={styles.images}
            source={require('../assets/matt.jpg')}
            />
          </View>

          <View style={styles.containerCharts}>
          <Text style={styles.h1}>Jay Lumen Razor Chart (september 2019)</Text>
            <Text style={styles.h1}>Jay Lumen</Text>
            <Image style={styles.images}
            source={require('../assets/Jay.jpg')}
            />
          </View>

          <View style={styles.containerCharts}>
          <Text style={styles.h1}>Michael Klein Yuzu Chart</Text>
            <Text style={styles.h1}>Michael Klein</Text>
            <Image style={styles.images}
            source={require('../assets/optimo.jpg')}
            />
          </View>

          <View style={styles.containerCharts}>
          <Text style={styles.h1}>GET IT CHART</Text>
            <Text style={styles.h1}>Mark Reeve</Text>
            <Image style={styles.images}
            source={require('../assets/mark.jpg')}
            />
          </View>

          <View style={styles.containerCharts}>
          <Text style={styles.h1}>Late Summer's Dance</Text>
            <Text style={styles.h1}>Prok & Fitch</Text>
            <Image style={styles.images}
            source={require('../assets/pork.jpg')}
            />
          </View>






        </ScrollView>
      );
    }
}

export default HomeScreen;


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'darkred',
    flex: 1,
    // alignItems: 'center'
    // justifyContent: 'center',
  },
  header: {
    color: 'white',
    fontSize: 33,
    textAlign: 'center',
    marginTop: 10,
    textDecorationLine: 'underline',
    fontWeight: 'bold'
  },
  h1: {
    color: 'white',
    fontSize: 22,


  },
  images: {
    alignSelf: "center",
    width: 450, 
    height: 175,
    resizeMode: "cover"
    // margin: 40
  },
  containerCharts: {
    width: '100%',
    // height: '30%',
    marginTop: 20,
    marginBottom: 10,
    // backgroundColor: 'black',
  }

});