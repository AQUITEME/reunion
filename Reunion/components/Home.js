import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AddReunions from './AddReunions';

export default  function Home ({ navigation }) {
  return (
      <View style={styles.container}>
          <Text style={styles.text}>bienvenue</Text>
          <View style={styles.row}>
            <TouchableOpacity style={styles.button }
                onPress = {()=> navigation.navigate("Liste des Reunions")}>
                    <Text style={styles.txt}>Les Reunions</Text>
            </TouchableOpacity>
          
            <TouchableOpacity style={styles.button }
                onPress = {()=> navigation.navigate("Ajouter une Reunion")}>
                    <Text style={styles.txt}>En ajouter</Text>
            </TouchableOpacity>
            </View>
          
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#616161',
    flex:1
  },
  ligne:{
    marginTop: 50,
    width : 150,
    height : 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,

  },
  txt:{
    color: 'black',
    fontSize: 20,
  },
  text:{
    color: 'black',
    fontSize : 20,
    textAlign: 'justify',
  },



  row:{
    flexDirection:'row',
    margin: 20,
    },
    
    button:{
      margin: 30,
      backgroundColor:'#00acc1',
      width: 100,
      height: 50,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
});

