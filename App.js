import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
  Image
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Dimensions } from 'react-native';

const App = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  return (
    <SafeAreaView style = {{    
    backgroundColor:'#F6F6F6',
    height:'100%',
    width:'100%',}}>
      <View style = {{
        position:'absolute',
        bottom:0,
        width:windowWidth,
        height:windowHeight*0.08,
        backgroundColor:'#1E2021',
        zIndex:3,
        marginHorizontal:'15%',
        alignSelf:'center',
        marginBottom:'3%',
        borderRadius:32,
        flex:2,
        flexDirection:'row'
      }}>
        <View style = {{
          flex:1,
          alignItems:'center',
          margin:'4%',
          flexDirection:'row',
          borderRightColor:"#5D5E61",
          borderRightWidth:1
        }}>
          <Image source = {require("./assets/Rivian/images/uicon.png")}/>
          <Text style = {{
              marginLeft:'8%',
              color:'white',
              fontFamily:"Inter-Medium",
              letterSpacing:1,
              fontSize:hp('2%'),
          }}>
            UNLOCK
          </Text>
        </View>
        <View style = {{
                    flex:1,
                    alignItems:'center',
                    margin:'4%',
                    flexDirection:'row',
        }}>
        <Image source = {require("./assets/Rivian/images/keyicon.png")}/>
          <Text style = {{
              marginLeft:'8%',
              color:'white',
              fontFamily:"Inter-Medium",
              letterSpacing:1,
              fontSize:hp('2%'),
          }}>
            START
          </Text>
        </View>
      </View>
    <ScrollView vertical = {true} 
    style = {{
    }}
    contentContainerStyle = {{
      alignItems:'center'
    }}
    >
                <Image style ={{
          height:windowHeight*0.4,
          width:windowWidth,
          position:'absolute'
        }}
        source = {require("./assets/Rivian/images/background-texture.png")}
        />
      <View style = {{
        height:windowHeight*0.05,
        width:windowWidth,
        margin:10,
        alignSelf:'center',
        flex:3,
        flexDirection:'row'
      }}>
        <View style = {{
          flex:1,
          justifyContent:'center',
          paddingLeft:'2%'
        }}>
          <Image source = {require("./assets/Rivian/images/Settings.png")}/>
        </View>
        <View style = {{
          flex:1,
          justifyContent:'center',
          alignItems:'center'
        }}>
          <Text style = {{
            fontFamily :"Inter-Light",
            fontSize:hp('2.25%'),
            color:"#ADB1B2",
            fontWeight:'bold',
            letterSpacing:2
          }}>NEILS R1T</Text>
        </View>
        <View style = {{
          flex:1,
          justifyContent:'center',
          alignItems:'flex-end',
          paddingRight:'2%'
        }}>
          <Image source = {require("./assets/Rivian/images/Profilepicture.png")}/>
        </View>
      </View>
      <View style = {{
        height:windowHeight*0.08,
        width:windowWidth*0.4,
        marginTop:'4%',
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'flex-end'
      }}>
        <Text style = {{
          fontSize:hp('7%'),
          letterSpacing:1,
          fontFamily:"Inter-Medium",
          color:'#FFFFFF'
        }}>248</Text>
        <Text style = {{
          fontSize:hp('2.5%'),
          marginBottom:'7%',
          letterSpacing:1,
          fontFamily:"Inter-Medium",
          color:"#ADB1B2",
          marginLeft:'3%'
        }}>mi</Text>
      </View>
      <View style = {{
        height:windowHeight*0.03,
        width:windowWidth*0.27,
        backgroundColor:'#4A4D4D',
        borderRadius:24,
        opacity:0.8,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        marginTop:'2%'
      }}>
        <Image source = {require("./assets/Rivian/images/lightning.png")}/>
        <Text style = {{
          marginLeft:'2%',
          color:'white',
          fontFamily:"Inter-Medium",
          letterSpacing:1,
          fontSize:hp('1.5%')
        }}>CHARGING</Text>
      </View>
      <Image source = {require("./assets/Rivian/images/vehicle.png")} style = {{
        marginTop:'5%'
      }}/>
      <View style ={{
        height:windowHeight*0.25,
        width:windowWidth,
        marginTop:'10%',
        flex:2,
        flexDirection:'row',
        padding:'3%'
      }}>
        <View style = {{
          flex:1,
          backgroundColor:'#03AD70',
          marginRight:'3%',
          borderRadius:12,
          elevation:1
        }}>
          <View style = {{
            flex:2,
            flexDirection:'column'
          }}> 
            <View style = {{
              flex:1,
              margin:'5%',
              flexDirection:'row'
            }}>
              <Image source = {require("./assets/Rivian/images/battery.png")}/>
              <View style = {{
                marginLeft:'10%',
              }}>
                <Text style ={{
                  fontSize:hp('2%'),
                  color:'white',
                  fontFamily:"Inter-Medium",
                }}>Energy</Text>
                <Text style = {{
                  fontSize:hp('1.5%'),
                  color:'white',
                  fontFamily:"Inter-Light",
                }}>
                  Charging
                </Text>
              </View>
              <Image source = {require("./assets/Rivian/images/rightarroww.png")} style = {{marginLeft:'25%',marginTop:'2%'}}/>
            </View>
            <View style = {{
              flex:1,
              margin:'5%',
              flexDirection:'row',
              alignItems:'flex-end'
            }}>
              <Image source = {require("./assets/Rivian/images/chart.png")} />
              <View style = {{
                marginLeft:'10%',
              }}>
                <Text style ={{
                  fontSize:hp('3%'),
                  color:'white',
                  fontFamily:"Inter-Medium",
                }}>248 mi</Text>
                <Text style = {{
                  fontSize:hp('1.5%'),
                  color:'white',
                  fontFamily:"Inter-Light",
                }}>
                  Remaining
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style = {{
          flex:1,
          backgroundColor:'white',
          borderRadius:12,
          elevation:1
        }}>
          <View style = {{
            flex:3,
            flexDirection:'column'
          }}>
            <View style = {{
              flex:1,
              margin:'5%',
              alignItems:'center',
              flexDirection:'row'
            }}>
              <Image source = {require("./assets/Rivian/images/locationIcon.png")} />
              <View style = {{
                marginLeft:'10%',
              }}>
                <Text style ={{
                  fontSize:hp('2%'),
                  color:'#1E2021',
                  fontFamily:"Inter-Medium",
                }}>Location</Text>
                <Text style = {{
                  fontSize:hp('1.5%'),
                  color:'#ADB1B2',
                  fontFamily:"Inter-Light",
                }}>
                  Parked
                </Text>
              </View>
              <Image source = {require("./assets/Rivian/images/rightarrowb.png")} style = {{marginLeft:'20%', marginBottom:'10%'}}/>
            </View>
            <View style = {{
              flex:2,
              margin:'5%',
              backgroundColor:"#F7F6F5",
              borderRadius:8,
              flexDirection:'column',
              justifyContent:'center',
            }}>
              <View style = {{
                margin:'5%'
              }}>
              <Text style ={{
                  fontSize:hp('1.8%'),
                  color:'#1E2021',
                  fontFamily:"Inter-Medium",
                  marginBottom:'2%'
                }}>
                748 Evergreen
              </Text>
              <Text style ={{
                  fontSize:hp('1.8%'),
                  color:'#1E2021',
                  fontFamily:"Inter-Medium",
                  marginBottom:'2%'
                }}>
                Terrace
              </Text>
              <Text style ={{
                  fontSize:hp('1.5%'),
                  color:'#ADB1B2',
                  fontFamily:"Inter-Light",
                  marginBottom:'2%'
                }}>
                Springfield
              </Text>
              </View>
            </View>
            </View>      
        </View>
      </View>


      <View style ={{
        height:windowHeight*0.25,
        width:windowWidth,
        flex:2,
        flexDirection:'row',
        padding:'3%',
        marginBottom:windowHeight*0.1
      }}>
        <View style = {{
          flex:1,
          backgroundColor:'white',
          marginRight:'3%',
          borderRadius:12,
          elevation:1
        }}>
          <View style = {{
            flex:2,
            flexDirection:'column'
          }}> 
            <View style = {{
              flex:1,
              margin:'5%',
              flexDirection:'row'
            }}>
              <Image source = {require("./assets/Rivian/images/thermometreIcon.png")}/>
              <View style = {{
                marginLeft:'10%',
              }}>
                <Text style ={{
                  fontSize:hp('2%'),
                  color:'#2D2F30',
                  fontFamily:"Inter-Medium",
                }}>Aircon</Text>
                <Text style = {{
                  fontSize:hp('1.5%'),
                  color:'#ADB1B2',
                  fontFamily:"Inter-Light",
                }}>
                  On
                </Text>
              </View>
              <Image source = {require("./assets/Rivian/images/rightarrowb.png")} style = {{marginLeft:'25%',marginTop:'2%'}}/>
            </View>
            <View style = {{
              flex:1,
              marginVertical:'15%',
              marginHorizontal:'5%',
              flexDirection:'row',
              backgroundColor:'#F7F6F5',
              alignItems:'center'
            }}>
              <View style = {{
                justifyContent:'center',
                margin:'5%'
              }}>
                <Text style ={{
                  fontSize:hp('2%'),
                  color:'#2D2F30',
                  fontFamily:"Inter-Medium",
                }}>24°F</Text>
                <Text style = {{
                  fontSize:hp('1.5%'),
                  color:'#ADB1B2',
                  fontFamily:"Inter-Light",
                }}>
                  Interior
                </Text>
              </View>
              <Image style = {{marginLeft:'25%'}} source = {require("./assets/Rivian/images/Toggle.png")} />
            </View>
          </View>
        </View>
        <View style = {{
          flex:1,
          backgroundColor:'white',
          borderRadius:12,
          elevation:1
        }}>
          <View style = {{
            flex:3,
            flexDirection:'column'
          }}>
            <View style = {{
              flex:1,
              margin:'5%',
              alignItems:'center',
              flexDirection:'row'
            }}>
              <Image source = {require("./assets/Rivian/images/controlsIcon.png")} />
              <View style = {{
                marginLeft:'10%',
              }}>
                <Text style ={{
                  fontSize:hp('2%'),
                  color:'#1E2021',
                  fontFamily:"Inter-Medium",
                }}>Controls</Text>
                <Text style = {{
                  fontSize:hp('1.5%'),
                  color:'#ADB1B2',
                  fontFamily:"Inter-Light",
                }}>
                  
                </Text>
              </View>
              <Image source = {require("./assets/Rivian/images/rightarrowb.png")} style = {{marginLeft:'20%', marginBottom:'10%'}}/>
            </View>
            <View style = {{
              flex:2,
              margin:'5%',
              backgroundColor:"white",
              borderRadius:8,
              flexDirection:'column',
              justifyContent:'center',
            }}>
              
            </View>
            </View>      
        </View>
      </View>

    </ScrollView>
    </SafeAreaView>
  );
};

export default App;
