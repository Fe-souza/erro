import React, { useState, useEffect  } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  Text,
  TextInput,
  

} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { defaultStyles, defaultProps } from '../styles/defaultStyles';
import api from '../services/api.js'

export default function Schedule( { navigation }) {
  const [client, setClient] = useState('')
  const [data, setData] = useState('')
  const [hour, setHour] = useState('')
  const [description, setDescription] = useState('')

  async function handleSubmit() {
    const response = await api.post('/schedule', { client: client, data: data, hour: hour, description: description })

    console.log(client)
    console.log(data)
    console.log(hour)
    console.log(description)

   // navigation.navigate('Main')
  } 

  navigationOptions = ({ navigation }) => ({
    title: 'Marcar Horário',
    headerStyle: defaultStyles.headerStyle,
    headerTitleStyle: defaultStyles.headerTitleStyle,
    headerTintColor: defaultProps.headerTintColor,
});
    return (
      
      <View style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.input}>Cliente</Text>
          <TextInput 
            value={client}
            onChangeText={setClient}
            placeholder='Cliente'
            placeholderTextColor = '#ccc'
            underlineColorAndroid="#ccc"
            style={styles.inputText}
            returnKeyType='next'
          />  

          <Text style={styles.input}>Data</Text>
          <TextInput 
            value={data}
            onChangeText={setData}
            placeholder='10/10/2019'
            placeholderTextColor = '#ccc'
            underlineColorAndroid="#ccc"
            style={styles.inputText}
            returnKeyType='next'
          />  
          <Text style={styles.input}>Hora</Text>
          <TextInput 
            value={hour}
            onChangeText={setHour}
            placeholder='10:00'
            placeholderTextColor = '#ccc'
            underlineColorAndroid="#ccc"
            style={styles.inputText}
            returnKeyType='next'
          />  
          <Text style={styles.input}>Serviço</Text>
          <TextInput 
            value={description}
            onChangeText={setDescription}
            placeholder='Manutenção'
            placeholderTextColor = '#ccc'
            underlineColorAndroid="#ccc"
            style={styles.inputText}
            returnKeyType='next'
          />  

          <TouchableOpacity style={styles.botao} onPress={handleSubmit}>
             <Text  style={{color:'#fff', paddingLeft: 5}}><Icon name="calendar-plus-o" /> AGENDAR</Text>
          </TouchableOpacity>
          </View>
      </View>
    );
  }

const width = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop:20
  },
  inputText:{
    fontSize: 15,
    borderBottomWidth:1,
    borderBottomColor:defaultProps.themeColor,
    padding:5
  },
  input:{
    fontSize: 12,
    marginTop: 10,
  },
  botao:{
    backgroundColor: defaultProps.themeColor,
    padding:5,
    alignSelf: 'center' ,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5,
    flexDirection:'row',
    width:270,
    height: 40,
    marginTop:20
}, 
form:{
  marginTop:20
},

});
