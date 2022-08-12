import React,{ Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight,Image,StatusBar} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Display } from '../utils/Index'
import { Colors } from '../constants/Index'


export default class Register extends Component{
    render(){

        return (
          <View style={styles.container}>
             <StatusBar
                barStyle="dark-content" 
                backgroundColor="transparent"
                translucent
              />

            <Image style={styles.logoContainer}
              source={require('../assets/logo.png')}
              resizeMode={'contain'}
            /> 
            
            <View style={styles.container2}>
              <Text style={styles.text1}>Enter your mobile number</Text>
              <Text style={styles.text2}>We will send you an OTP to verify.</Text>
            </View>

            <View style={styles.container3}>
                <View style={styles.container3Child}>
                    <View style={{flexDirection:'row'}}>
                      <TextInput
                        style={styles.textInput1}
                        placeholder ="+91"
                        placeholderTextColor ="white"

                      />
                      <TextInput
                        style={styles.textInput2}
                        placeholder ="Mobile number"
                        placeholderTextColor ="#2A4C5C"
                        maxLength ={10}
                        keyboardType = 'numeric'
                      />
                    </View>

                    <TouchableHighlight style={styles.buttonDesign} 
                      onPress={()=>this.props.navigation.navigate('Otp')}>
                        <Text style={styles.buttonText}>Continue</Text>
                    </TouchableHighlight>
                </View>
            </View>
          </View>

        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'flex-end',
    backgroundColor: Colors.DEFAULT_WHITE
  },
  container2: {
    alignItems:'center',
    margin:20
  },
  container3: {
    width: Display.setWidth(100),
    height: Display.setHeight(26),
    backgroundColor: Colors.SECONDARY,
    alignItems:'center',
    borderTopLeftRadius:16,
    borderTopRightRadius:16,
    
  },
  logoContainer: {
    height:Display.setHeight(70),
    width:Display.setWidth(65),
   // backgroundColor:'red'
  },
  text1:{
    fontSize:21,
    fontWeight:'500',
    color:Colors.SECONDARY
  },
  text2:{
    fontSize:14,
    marginTop:5,
    color:Colors.TEXT_SCONADARY,
  },
  container3Child:{
    marginTop:Display.setHeight(4)
  },
  textInput1:{
    height:Display.setHeight(8),
    width:Display.setWidth(15),
    backgroundColor: Colors.SECONDARY_LIGHT,
    marginRight:8,
    borderRadius:4,
    paddingLeft:15,
    borderWidth:1,
    borderColor: Colors.INACTIVE_SECONDARY
  },
  textInput2: {
    height:Display.setHeight(8),
    width:Display.setWidth(68),
    backgroundColor: Colors.SECONDARY_LIGHT,
    borderRadius:8,borderWidth:1,
    borderColor: Colors.INACTIVE_SECONDARY,
    paddingLeft:15,
    color: 'white',
  },
  buttonDesign: {
    marginTop:20,
    backgroundColor:Colors.DEFAULT_GREEN,
    alignItems:'center',
    height:Display.setHeight(8),
    width: Display.setWidth(85),
    justifyContent:'center',
    borderRadius:4,
    fontSize:30
  },
  buttonText: {
    color:'white',
    fontSize:15,
    fontWeight:'500'
  }
});

