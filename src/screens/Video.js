import React from 'react';
import { View, Text, StyleSheet , TouchableOpacity , Image,ScrollView} from 'react-native';
import { Button,ThemeProvider} from 'react-native-elements'
import Colors from '../constants/Colors';
import MCIcon from 'react-native-vector-icons/MaterialIcons'




const Video = () => {
  return (
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
        <View style={{height:240,marginTop:20,marginHorizontal:30,backgroundColor:Colors.DEFAULT_WHITE,borderRadius:4,elevation:2}}>
          <Image style={{width:'100%',height:150,borderRadius:4}}  source={require('../assets/cardimage.jpg')} />
          <Text style={{color:'black' ,fontSize:16,fontWeight:'500',width:'80%',paddingLeft:20,marginTop:8}}>Long chapter name can be shown here.</Text>


            <View style={{flexDirection:'row',marginTop:10,paddingLeft:20}}> 
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <MCIcon name ='radio-button-checked' size={15} color={Colors.PRIMARY}/>
                <Text style={{color:'white',marginLeft:4,color:Colors.PRIMARY,fontSize:11}}>Chapter 1</Text>
              </View>

              <View style={{flexDirection:'row',alignItems:'center',marginLeft:15}}>
                <MCIcon name ='radio-button-checked' size={15} color={Colors.PRIMARY}/>
                <Text style={{color:'white',marginLeft:4,color:Colors.PRIMARY,fontSize:11}}>Chapter 1</Text>
              </View>
            </View>
        </View>

        <View style={{height:240,marginTop:20,marginHorizontal:30,backgroundColor:Colors.DEFAULT_WHITE,borderRadius:4,elevation:2}}>
          <Image style={{width:'100%',height:150,borderRadius:4}}  source={require('../assets/cardimage.jpg')} />
          <Text style={{color:'black' ,fontSize:16,fontWeight:'500',width:'80%',paddingLeft:20,marginTop:8}}>Long chapter name can be shown here.</Text>


            <View style={{flexDirection:'row',marginTop:10,paddingLeft:20}}> 
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <MCIcon name ='radio-button-checked' size={15} color={Colors.PRIMARY}/>
                <Text style={{color:'white',marginLeft:4,color:Colors.PRIMARY,fontSize:11}}>Chapter 1</Text>
              </View>

              <View style={{flexDirection:'row',alignItems:'center',marginLeft:15}}>
                <MCIcon name ='radio-button-checked' size={15} color={Colors.PRIMARY}/>
                <Text style={{color:'white',marginLeft:4,color:Colors.PRIMARY,fontSize:11}}>Chapter 1</Text>
              </View>
            </View>
        </View>
        <View style={{height:140}}/>
    </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  scrollView:{
    width:'100%',
  }
});

export default Video;