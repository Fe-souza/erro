import React, { Component ,useEffect, useState } from 'react';
import { StyleSheet, View, Dimensions, FlatList, TouchableOpacity, Text} from 'react-native';
import Icons from 'react-native-vector-icons/dist/FontAwesome';
import { defaultStyles, defaultProps } from '../styles/defaultStyles';
import api from '../services/api.js'

const [schedules, setSchedules] = useState([])
const id = navigation.getParam('user')

useEffect(() => {
  async function loadSchedules() {
    const response = await api.get('/schedule', {
        headers: {
          professional_id: id
        }
    })

    setSchedules(response.data)
  }

  loadSchedules()
}, [id])


function Item({ servico,descricao,cliente,hora,data }) {
    return (
      <View>
        <TouchableOpacity  activeOpacity={1}>
            <View style={styles.boxSchedule}>
                <View style={styles.boxDate}>
                  <Text numberOfLines={1} ellipsizeMode="tail" style={styles.txtWeek}>Seg</Text> 
                          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.txtDay}>{data}</Text>
                </View>
                <View style={styles.boxDescription}>
                    <Text numberOfLines={1} ellipsizeMode="tail" style={styles.txtService}>{servico}</Text> 
                            <View>
                                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.txtDets}><Icons name="female" size={15} style={{ marginRight: 10, color:defaultProps.themeColor2  }} /> {cliente}</Text>
                                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.txtDets}><Icons name="clock-o" size={15} style={{ marginRight: 10, color:defaultProps.themeColor2 }} /> {hora}</Text>
                            </View>
                </View>
            </View>
        </TouchableOpacity>
      </View>
    );
  }

export default class Main extends Component {

    
  static navigationOptions = ({ navigation }) => ({
    title: 'Horários',
    headerStyle: defaultStyles.headerStyle,
    headerTitleStyle: defaultStyles.headerTitleStyle,
    headerTintColor: defaultProps.headerTintColor,
});
  render() {
    return (
      
      <View style={styles.container}>
       <FlatList  style={{width:'100%',padding:5}}
        data={schedules}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />  
      </View>
    );
  }
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
  boxSchedule:{
    alignItems: 'center', 
    backgroundColor: 'white',
    borderWidth:1,
    borderColor: '#ccc',
    borderLeftColor: '#febfca', 
    borderLeftWidth: 6,
    flexDirection: 'row',
    flex:1,
    marginBottom: 5,
    padding: 5,
    height:100,
    borderRadius:5

},

boxDate:{
  flex:0.3,
  padding: 5,
},
boxDescription:{
	flex:0.7
},
txtWeek:{
	//fontWeight:'bold',
  fontSize:25,
  marginBottom:2,
  color:'#febfca'
},
txtDay:{
	fontSize:20,
},
txtService:{
  fontSize:20,
  fontWeight:'bold',
  color:defaultProps.themeColor2 
},
txtDets:{
  fontSize:18
}


});
