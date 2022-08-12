import React,{ Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';
import { Display } from '../utils/Index'


export default class Otp extends Component{
    render(){
        return (
          <View style={styles.container}>
            <Image 
              style={styles.imageContainer}
              source={require('../assets/logo.png')}
              resizeMode={'contain'}
            />
            <View style={styles.roundView}>
              <Text style={{marginTop: Display.setHeight(6),fontSize:12,fontWeight:'600',color: Colors.DEFAULT_BLACK}}>ICON</Text>
              <Image 
                style={styles.imageContainer2}
                source={require('../assets/effect1.png')}
                resizeMode={'contain'}
              />
            </View>
            <View style={{marginTop:Display.setHeight(12),alignItems:'center'}}>
              <Text style={{color: Colors.TEXT_PRIMARY,fontSize:20,fontWeight:'600'}}>Verfication code</Text>
              <Text style={{color: Colors.TEXT_SCONADARY,marginTop:5}}>Please type the verification code sent to</Text>
              <Text style={{color: Colors.TEXT_PRIMARY,fontSize:13,fontWeight:'400',marginTop:Display.setHeight(2)}}>+91 9876543210</Text>
            </View>

            <View style={{backgroundColor: Colors.SECONDARY,height:'30%',width: Display.setWidth(100),alignItems:'center',borderTopLeftRadius:16,borderTopRightRadius:16,marginTop:20}}>
              <View style={{flexDirection:'row',paddingLeft:6}}>
                        <TextInput
                          style={styles.textInput1}
                          placeholder =""
                          placeholderTextColor ="#2A4C5C"
                          maxLength ={1}
                          keyboardType = 'numeric'
                        />
                        <TextInput
                          style={styles.textInput1}
                          placeholder =""
                          placeholderTextColor ="#2A4C5C"
                          maxLength ={1}
                          keyboardType = 'numeric'
                        />
                        <TextInput
                          style={styles.textInput1}
                          placeholder =""
                          placeholderTextColor ="#2A4C5C"
                          maxLength ={1}
                          keyboardType = 'numeric'
                        />
                        <TextInput
                          style={styles.textInput1}
                          placeholder =""
                          placeholderTextColor ="#2A4C5C"
                          maxLength ={1}
                          keyboardType = 'numeric'
                        />
                        <TextInput
                          style={styles.textInput1}
                          placeholder =""
                          placeholderTextColor ="#2A4C5C"
                          maxLength ={1}
                          keyboardType = 'numeric'
                        />
                        <TextInput
                          style={styles.textInput1}
                          placeholder =""
                          placeholderTextColor ="#2A4C5C"
                          maxLength ={1}
                          keyboardType = 'numeric'
                        />
                </View>
              <TouchableHighlight style={styles.buttonDesign} 
                        onPress={()=>this.props.navigation.navigate('StudentDetails')}>
                          <Text style={styles.buttonText}>Resend OTP</Text>
              </TouchableHighlight>
              <Text style={{color: Colors.TEXT_SCONADARY_LIGHT,marginTop:6,fontSize:12}}>Resend after 28s</Text>

              <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:15}}>
                <Image
                  style={{width: Display.setWidth(3) , height: Display.setHeight(3)}}
                  source={require('../assets/call.png')}
                  resizeMode={'contain'}
                />
                <Text style={{color: Colors.PRIMARY,fontWeight:'700',padding:10,fontSize:15}}>Conatact Us</Text>
              </View>

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
    height: Display.setHeight(20),
    width: Display.setWidth(50),
  },
  roundView:{
    marginTop: Display.setHeight(6),
    height: Display.setHeight(15),
    width: Display.setWidth(28),
    borderRadius: 60,
    backgroundColor:'#F9F9F9',
    alignItems:'center',
    
  },
  imageContainer2:{
    marginTop: Display.setHeight(-10),
    height: Display.setHeight(19),
    width: Display.setWidth(34),
  },
  buttonDesign: {
    marginTop:15,
    backgroundColor:Colors.DEFAULT_GREEN,
    alignItems:'center',
    height:Display.setHeight(7),
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
    marginTop:30,
    height:Display.setHeight(7),
    width:Display.setWidth(13),
    backgroundColor: Colors.SECONDARY_LIGHT,
    marginRight:7,
    borderRadius:4,
    borderWidth:1,
    paddingLeft:20,
    borderColor: Colors.INACTIVE_SECONDARY
  },
});

