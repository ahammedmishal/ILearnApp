import React,{ Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';
import { Display } from '../utils/Index'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class StudentDetails extends Component{
  constructor(){
      super();
      this.state = {
        isActive : false
      }
    }

    render(){
          return (
            <View style={styles.container}>
              <Image 
                style={styles.imageContainer}
                source={require('../assets/logo.png')}
                resizeMode={'contain'}
              />
              <View style={styles.roundView}>
                <Text style={{marginTop: Display.setHeight(7),fontSize:14,fontWeight:'600',color: Colors.DEFAULT_BLACK}}>ICON</Text>
                <Image 
                  style={styles.imageContainer2}
                  source={require('../assets/effect1.png')}
                  resizeMode={'contain'}
                />
              </View>
              <View style={{marginTop:Display.setHeight(8),alignItems:'center'}}>
                <Text style={{color: Colors.TEXT_PRIMARY,fontSize:20,fontWeight:'600',marginBottom:8}}>Student details</Text>
              </View>
  
              <View style={{backgroundColor: Colors.SECONDARY,height:'50%',width: Display.setWidth(100),alignItems:'center',borderTopLeftRadius:16,borderTopRightRadius:16,marginTop:20}}>
                <View style={{paddingLeft:6,marginTop:20}}>
                          
                          <TextInput
                            style={{...styles.textInput1,borderColor: this.state.isActive ? Colors.PRIMARY : Colors.INACTIVE_SECONDARY,}}
                            placeholder = "Full name"
                            placeholderTextColor ="#2A4C5C"
                              onFocus={()=>this.setState({
                                isActive: true
                              })}
                              onBlur={()=>this.setState({
                                isActive: false
                              })}
                          />
                          <TextInput
                           style={{...styles.textInput1,borderColor: this.state.isActive ? Colors.PRIMARY : Colors.INACTIVE_SECONDARY,}}
                            placeholder = "Email"
                            placeholderTextColor ="#2A4C5C"
                            onFocus={()=>this.setState({
                              isActive: true
                            })}
                            onBlur={()=>this.setState({
                              isActive: false
                            })}
                          />

                          <View style={{
                                flexDirection:'row',
                                alignItems:'center',
                                justifyContent:'space-between',
                                paddingRight:10,
                                marginTop:15,
                                height:Display.setHeight(7),
                                width:Display.setWidth(87),
                                backgroundColor: Colors.SECONDARY_LIGHT,
                                marginRight:7,
                                borderRadius:4,
                                borderWidth:1,
                                paddingLeft:15,
                                borderColor: this.state.isActive ? Colors.PRIMARY : Colors.INACTIVE_SECONDARY,
                              }}>
                                <TextInput
                                    placeholder="Select state"
                                    placeholderTextColor ="#2A4C5C"
                                    onFocus={()=>this.setState({
                                      isActive: true
                                    })}
                                    onBlur={()=>this.setState({
                                      isActive: false
                                    })}
                                />
                                <Icon name='keyboard-arrow-down' size={20} color={'#446270'}/>
                          </View>

                          <TextInput
                            style={{...styles.textInput1,borderColor: this.state.isActive ? Colors.PRIMARY : Colors.INACTIVE_SECONDARY,}}
                            placeholder = "Pin code"
                            placeholderTextColor ="#2A4C5C"
                            onFocus={()=>this.setState({
                              isActive: true
                            })}
                            onBlur={()=>this.setState({
                              isActive: false
                            })}onFocus={()=>this.setState({
                                isActive: true
                              })}
                              onBlur={()=>this.setState({
                                isActive: false
                              })}
                          />

                  </View>
                <TouchableHighlight style={styles.buttonDesign} 
                          onPress={()=>this.props.navigation.navigate('OnboardingItem')}>
                            <Text style={styles.buttonText}>Register</Text>
                </TouchableHighlight>
              </View>
            </View>
          );
      }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor:Colors.DEFAULT_WHITE,
      justifyContent:'flex-end',
    },
    imageContainer: {
      height: Display.setHeight(10),
      width: Display.setWidth(50),
    },
    roundView:{
      marginTop: Display.setHeight(6),
      height: Display.setHeight(17),
      width: Display.setWidth(32),
      borderRadius: 60,
      backgroundColor:'#F9F9F9',
      alignItems:'center',
      
    },
    imageContainer2:{
      marginTop: Display.setHeight(-10),
      height: Display.setHeight(18),
      width: Display.setWidth(38),
    },
    buttonDesign: {
      marginTop:25,
      backgroundColor:Colors.DEFAULT_GREEN,
      alignItems:'center',
      height:Display.setHeight(8),
      width: Display.setWidth(87),
      justifyContent:'center',
      borderRadius:4,
      fontSize:30
    },
    buttonText: {
      color:'white',
      fontSize:15,
      fontWeight:'500'
    },
    textInput1:{
      marginTop:15,
      height:Display.setHeight(7),
      width:Display.setWidth(87),
      backgroundColor: Colors.SECONDARY_LIGHT,
      marginRight:7,
      borderRadius:4,
      borderWidth:1,
      paddingLeft:20,
      borderWidth:1,
      //borderColor: Colors.INACTIVE_SECONDARY
    },
  });
  
  

