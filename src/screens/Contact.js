import React from 'react';
import { View, Text, StyleSheet,Image} from 'react-native';
import Colors from '../constants/Colors';
import MCIcons from 'react-native-vector-icons/MaterialIcons'
import MCCIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import VideoPlayer from 'react-native-video-player';
import YoutubePlayer from 'react-native-youtube-iframe'
import { SafeAreaView } from 'react-native-safe-area-context';

const Contact = () => {
  return (
    <>
    <View style={styles.container}>
      <SafeAreaView/>
      <YoutubePlayer
        height={250}
        play={false}
        videoId={'dLMfzF0FMUg'}
      />
      <View style={{flexDirection:'row',justifyContent:'space-around'}}>
        <View style={{width:'60%'}}>
          <Text style={styles.text1}>Long Chapter Name can be here shown here</Text>
        </View>
          <View style={styles.marginView}/>
        <View style={{alignItems:'center',justifyContent:'center'}}>
          <Image style={{width:18,height:18,marginBottom:8}} resizeMode='contain' source={require('../assets/download.png')}/>
          <Text style={styles.text2}>Download</Text>
        </View>
      </View>
      <View style={styles.secondView}>

        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
          <MCIcons name ='keyboard-arrow-left' size={35} color='#9F9F9F'/> 
          <Text style={{color:'white',fontSize:11}}>Previous</Text>
        </View>

        <View style={{flexDirection:'row',alignItems:'center'}}>
          <MCIcons name ='radio-button-checked' size={17} color={Colors.PRIMARY}/>
          <Text style={{color:'white',fontSize:12,color:Colors.PRIMARY,paddingLeft:5}}>Port 1</Text>
        </View>

        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
          <Text style={{color:'white',fontSize:11}}>Next</Text>
          <MCIcons name ='keyboard-arrow-right' size={35} color={Colors.DEFAULT_WHITE}/> 
        </View>

      </View>

      <View style={{width:'100%',height:240,alignItems:'center',justifyContent:'flex-end'}}>

          <View style={{width:'80%',height:55,backgroundColor:'red',borderRadius:3,backgroundColor:'black',alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
            <View style={{width:'70%',flexDirection:'row',alignItems:'center',marginRight:25}}>
              <Text style={{color:Colors.DEFAULT_WHITE,fontSize:12}}>Your sample question can be shown here no matter how long</Text>
            </View>
              <Image style={{width:30,height:30,borderRadius:90}} source={require('../assets/profile.jpeg')}/>
          </View>

          <View style={{width:'80%',height:50,borderRadius:4,backgroundColor:'#062E40',marginTop:15,justifyContent:'center'}}>
            <View style={{justifyContent:'space-between',flexDirection:'row',paddingHorizontal:10,alignItems:'center'}}>
                <Text style={{color:'#446270',fontSize:12}}>Ask a question?</Text>
                <View style={{width:50,height:30,backgroundColor:'white',borderRadius:4,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{color:'black',fontSize:10,fontWeight:'600'}}>Post</Text>
                </View>
            </View>
          </View>
          <View style={{width:'80%',height:55,borderRadius:2,marginTop:15,borderWidth:1,borderColor:Colors.PRIMARY,borderRadius:4,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
            <MCCIcons size={20} name='whatsapp' color={Colors.PRIMARY}/>
            <Text style={{color:Colors.PRIMARY,fontSize:14,fontWeight:'400',marginLeft:8}}>Chat with teacher</Text>
          </View>
      </View>

   

    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:Colors.SECONDARY
  },
  text1:{
    color:'white',
    fontSize:18,
    fontWeight:'600'
  },
  marginView: {
    height:40,
    width:1,
    backgroundColor:'#173442',
    alignSelf: 'center'
  },
  text2:{
    color:'white',
    fontSize:9,
    fontWeight:'bold'
  },
  secondView: {
    width:'100%',
    height:60,
    marginTop:15,
    borderTopWidth:1,
    borderBottomWidth:1,
    borderColor:'#173442',
    justifyContent:'space-between',
    flexDirection:'row',
    paddingHorizontal:15
  },

});

export default Contact;