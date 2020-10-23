import React from 'react'
import {View,Text,Button,ImageBackground,TouchableOpacity,Image} from 'react-native'
import {ScrollView,TextInput} from 'react-native-gesture-handler'

export default class Welcome extends React.Component{
    render(){
        return(
          <ImageBackground
           source={require('../images/l2.jpg')}
           style={{width:"100%",height:"100%"}}
          >


          <View>
            <TouchableOpacity
                 onPress={()=>this.props.navigation.navigate('')}
                 style={{
                     flexDirection:"row",
                     backgroundColor:"#f58084",
                     alignItems:"center",
                     marginTop:20,
                     width:150,
                     paddingVertical:10,
                     borderRadius:14,
                     paddingHorizontal:10
                 }}
            >
                     <Text style={{
                         color:"#FFF",
                         fontFamily:"Bold",
                         fontSize:12
                     }}>Login</Text>
                     <Image
                         source={require('../images/a3.png')}
                         style={{marginLeft:20,width:8,height:8}}
                     />
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
                 onPress={()=>this.props.navigation.navigate('')}
                 style={{
                     flexDirection:"row",
                     backgroundColor:"#f58084",
                     alignItems:"center",
                     marginTop:20,
                     width:150,
                     paddingVertical:10,
                     borderRadius:14,
                     paddingHorizontal:10
                 }}
            >
                     <Text style={{
                         color:"#FFF",
                         fontFamily:"Bold",
                         fontSize:12
                     }}>Signup</Text>
                     <Image
                         source={require('../images/a3.png')}
                         style={{marginLeft:20,width:8,height:8}}
                     />
            </TouchableOpacity>
          </View>

          <Button
          style={{
            alignItems:"center",
            borderRadius:14,
            color="#f194ff"

          }}
          title="Signup"
          onPress={() => Alert.alert('Simple Button pressed')}
          />








          </ImageBackground>
        )
      }
    }
