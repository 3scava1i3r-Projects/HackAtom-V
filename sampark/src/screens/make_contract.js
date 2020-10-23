import React from 'react'
import {View,Text,ImageBackground,TouchableOpacity,Image} from 'react-native'
import {ScrollView,TextInput} from 'react-native-gesture-handler'

export default class make_contract extends React.Component{
    render(){
        return(
          <ImageBackground
                source={require('../images/crs.png')}
                style={{width:"100%",height:"100%"}}
          >

          <View style={{
              flexDirection:"row",
              width:"100%",
              paddingHorizontal:20
          }}>
              <TouchableOpacity
                  onPress={()=>this.props.navigation.navigate("Home")}
                  style={{
                      paddingHorizontal:10,
                      paddingVertical:13,
                      borderRadius:10,
                      marginTop:30,
                      backgroundColor:"#9a3c7e"
                  }}
              >
                      <Image
                          source={require('../images/a1.png')}
                          style={{height:15,width:20}}
                      />
              </TouchableOpacity>
              <View style={{
                  paddingHorizontal:10,
                  paddingVertical:13,
                  borderRadius:10,
                  marginTop:30,
                  backgroundColor:"#9a3c7e",
                  marginLeft:240
              }}>
                  <Image
                      source={require('../images/hum.png')}
                      style={{height:15,width:20}}
                  />
              </View>
          </View>

          <Image
              source={require('../images/plus.jpg')}
              style={{
                  height:35,
                  width:35,
                  alignSelf:"center",
                  marginTop:20
              }}
          />

          <Text style={{
            

          }}>
          </Text>







          </ImageBackground>
        )
      }
    }
