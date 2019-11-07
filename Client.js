import React, { useEffect, useState  } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Text,
  Image

} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { defaultStyles, defaultProps } from '../styles/defaultStyles';
import api from '../services/api.js'

function Item({ item }) {
    return (
      <>
      <View style={{backgroundColor:"#ccc"}}>
        
      </View>
        <View style={styles.group}>
          <View style={styles.imageRow}>
            <Image
              source={require("../assets/cliente.png")}
              resizeMode="cover"
              style={styles.image}
            />
            <View style={styles.textStackStack}>
              <View style={styles.textStack}>
                <Text style={styles.text}>{item.name}</Text>
                <Text style={styles.text2}>{item.telefone}</Text>
                {/* <MaterialCommunityIconsIcon
                  name="alert-circle-outline"
                  style={styles.icon}
                /> */}
              </View>
               {/* <Text style={styles.text3}>Hora de fazer manutenção</Text>*/}
            </View>
            <TouchableOpacity onPress={() => this.addSchedule(item._id,item.name)}>

           
            <MaterialCommunityIconsIcon
              name="alarm-plus"
              style={styles.icon2}
            />
             </TouchableOpacity>
          </View>
        </View>
        </>
      
    );
  }

export default function Client ( { navigation }) {
    
  const [Clients, setClients] = useState([])

  useEffect( () => {
      async function loadClients() {
          const response = await api.get('/client')
          //setUsers(shuffleArray(response.data))
          setClients(response.data)
      }

      loadClients()
  }, )

 Client.navigationOptions = ({ navigation }) => ({
    title: 'Clientes',
    headerStyle: defaultStyles.headerStyle,
    headerTitleStyle: defaultStyles.headerTitleStyle,
    headerTintColor: defaultProps.headerTintColor,
});

async function addSchedule(client_id,client) {
  console.log(client_id)
  /*const user = await AsyncStorage.getItem('user')

  await AsyncStorage.setItem('client_id', client_id)
  await AsyncStorage.setItem('client', client)

  navigation.navigate('Schedule', { user: user,client_id: client_id,client:client })*/
}

    return (
      
      <View style={styles.container}>
       <FlatList  style={{width:'100%',padding:5}}
        data={Clients}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={item => item._id}
      />  

      {/*<TouchableOpacity  style={styles.boxPlus} onPress={addClient}>
        <MaterialCommunityIconsIcon 
          name="plus"
          style={styles.iconPlus} />
    </TouchableOpacity>*/}
      </View>
    );
  }
const width = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop:20
  },
  group: {
    width: 342,
    height: 67,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 20
  },
  image: {
    width: 67,
    height: 67,
    borderRadius: 60
  },
  text: {
    top: 0,
    left: 1,
    width: 211,
    height: 23,
    color: "#121212",
    position: "absolute",
    fontSize: 17,
    //fontFamily: "roboto-700"
  },
  text2: {
    top: 23,
    left: 0,
    width: 211,
    height: 23,
    color: "#121212",
    position: "absolute",
    fontSize: 17,
    //fontFamily: "roboto-regular"
  },
  icon: {
    top: 46,
    left: 1,
    position: "absolute",
    color: "rgba(231,0,0,1)",
    fontSize: 15
  },
  textStack: {
    top: 0,
    left: 0,
    width: 212,
    height: 61,
    position: "absolute"
  },
  text3: {
    top: 47,
    left: 18,
    color: "rgba(157,157,157,1)",
    position: "absolute",
    fontSize: 13,
    //fontFamily: "roboto-regular"
  },
  textStackStack: {
    width: 212,
    height: 61,
    marginLeft: 19,
    marginTop: 3
  },
  icon2: {
    color: "rgba(141,141,141,1)",
    fontSize: 25,
    marginLeft: 24,
    marginTop: 3
  },
  imageRow: {
    height: 67,
    flexDirection: "row",
    flex: 1
  },
  icon4: {
    color: "rgba(1,108,8,1)",
    fontSize: 20,
    marginLeft: 24,
    marginTop: 3
  },
  icon2: {
    color: "rgba(141,141,141,1)",
    fontSize: 20,
    marginLeft: 24,
    marginTop: 3
  },
  boxPlus:{
    backgroundColor: defaultProps.themeColor,
    width:50,
    height:50,
    borderRadius:25,
    alignItems:'center',
    justifyContent:'center',
    marginBottom:10,
  }
  ,
  iconPlus:{
    fontSize:30,
    color:'#fff'

  }

});
