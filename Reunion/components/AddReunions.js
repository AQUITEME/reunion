import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import ReactChipsInput from 'react-native-chips';
import firebase from '../firebase';

const { heigh, width } = Dimensions.get('window');


export function addReunionDb(sujet,lieu,participants,date){
    dateTime = date.toGMTString();
    firebase.database().ref('/reunion').push({sujet,lieu,participants,dateTime});
  }

const AddReunions = ({ navigation }) => {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [sujet, setSujet] = useState('');
    const [lieu, setLieu] = useState('');
    const [suitd, setsuit] = useState([ ]);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        //console.log(currentDate);
    };

    const showMode = currentMode => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Ajout d'une Reunion</Text>
        <View style={styles.tot}>
            <TextInput 
              style={styles.input} 
              placeholder="Subject" 
              onChangeText={(text)=>{
                setSujet(text);
              }}
              value={sujet}
            />
            <TextInput 
              style={styles.input} 
              placeholder="Location"
              onChangeText={(text)=>{
                setLieu(text);
              }}
              value={lieu}
            />
            <ReactChipsInput 
                label="participants:" 
                onChangesuit={(suit) => {
                  setsuit([...suitd, ...suit]);
                  suit=[...suitd];
                  console.log(suit);
                }}
                     
                //alertRequired={true} 
                suittyle={{  
                    backgroundColor: '#00acc1', 
                }} 
                inputStyle={[styles.input,styles.suit]}


            />
            <View style={styles.dateTimeButton}>
                <TouchableOpacity style={styles.pop} onPress={showDatepicker}><Text>agenda</Text></TouchableOpacity>
                <TouchableOpacity style={styles.pop} onPress={showTimepicker}><Text>Heure</Text></TouchableOpacity>
            </View>
                
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    timeZoneOffsetInMinutes={0}
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
            
            <TouchableOpacity style = {styles.button} onPress={()=>{
                  addReunionDb(sujet,lieu,suitd,date)
                  setDate(new Date());
                  setLieu('');
                  setSujet('');
                  setsuit([]);
                  navigation.navigate("Liste des Reunions")
                }}>
                <Text style = {styles.buttonText}>Save</Text>
            </TouchableOpacity>
        </View>
        </View>
    );

}

export default AddReunions

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#616161'
    //justifyContent: 'center',
  },
  tot:{
    flex: 1,
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontSize: 36,
    marginTop: 60,
    marginBottom: 30,
    fontWeight: '300'
  },
  input: {
    width: width - 25,
    marginTop: 20,
    padding: 10,
    borderBottomColor: '#00acc1',
    borderWidth: 1,
    fontSize: 24,
    color: 'white',
  },
  suit:{
    height:60,
  },
  date: {
    width: width - 25,
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
  },
  about:{
    marginBottom : 20,
    height: 100,
  },
  button:{
    marginTop: 50,
    backgroundColor:'#00acc1',
    width: 100,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pop:{
    backgroundColor:'#00acc1',
    //width: 90,
    height: 60,
    borderRadius: 90/2,
    alignItems: 'center',
    justifyContent: 'center',
    flex:1,
    margin:15,
  },
  dateTimeButton:{
    //margin: 20,
    width: width - 25,
    flexDirection: 'row',
    //justifyContent: 'center',
    //alignItems:'center',

  },
  buttonText:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  }
});