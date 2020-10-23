import React from 'react'
import {View,Text,ImageBackground,TouchableOpacity,Image} from 'react-native'
import {ScrollView,TextInput} from 'react-native-gesture-handler'


export default class Home extends React.Component{
    render(){
        return(
           <ImageBackground
            source={require('../images/dd.jpg')}
            style={{width:"100%",height:"100%"}}
           >
               <ScrollView>
                   <View style={{
                       width:"100%",
                       alignItems:"center",
                       paddingHorizontal:20
                   }}>
                       <View style={{
                           paddingHorizontal:10,
                           paddingVertical:12,
                           borderRadius:10,
                           marginTop:30,
                           backgroundColor:"#d1a0a7"
                       }}>
                           <Image
                            source={require('../images/hum.png')}
                            style={{height:15,width:20}}
                           />
                       </View>
                   </View>
                   <Text style={{
                       paddingHorizontal:20,
                       fontSize:35,
                       paddingTop:40,
                       fontFamily:"Bold",
                       color:"#d37e2e"
                   }}>
                       Welcome back @msg.sender
                   </Text>

                       <View style={{
                         alignItems:'center'
                       }}>
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
                                    }}>Scan QR</Text>
                                    <Image
                                        source={require('../images/a3.png')}
                                        style={{marginLeft:20,width:8,height:8}}
                                    />
                           </TouchableOpacity>
                       </View>


                       <View style={{
                         alignItems:'center'
                       }}>
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
                              }}>Fund Producers</Text>
                              <Image
                                  source={require('../images/a3.png')}
                                  style={{marginLeft:20,width:8,height:8}}
                              />
                     </TouchableOpacity>
                   </View>


                   <View style={{
                     alignItems:'center'
                   }}>
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
                              }}>Contracts</Text>
                              <Image
                                  source={require('../images/a3.png')}
                                  style={{marginLeft:20,width:8,height:8}}
                              />
                     </TouchableOpacity>
                   </View>

               </ScrollView>
           </ImageBackground>
        )
    }
}
