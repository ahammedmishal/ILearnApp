import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image ,ScrollView} from 'react-native';
import { Header } from 'react-native-elements'
import Colors from '../constants/Colors';
import MCIcon from 'react-native-vector-icons/MaterialIcons'

const ChapterScreen = ({navigation,route}) => {

    const subName = route.params.subname;

  return (
    <View style={styles.container}>
      <Header
        backgroundColor={Colors.SECONDARY}
       
        leftComponent={ 
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
          <TouchableOpacity style={styles.iconContainer} onPress={()=>navigation.goBack()}>
            <MCIcon name ='arrow-back-ios' size={13} color={Colors.PRIMARY}/>    
          </TouchableOpacity>
        </View>
        }

        centerComponent={
          <></>
        }

        rightComponent={<View/>}
         containerStyle={{
          paddingHorizontal:20,
          borderBottomColor:Colors.SECONDARY
        }}
      />

    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={{height:140,backgroundColor:Colors.SECONDARY,paddingTop:10,paddingTop:25}}>
            <View style={{paddingLeft:30}}>
                <Text style={{color:'white' ,fontSize:23,fontWeight:'bold'}}>{subName}</Text>

                <View style={{flexDirection:'row',marginTop:10}}> 
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                    <MCIcon name ='radio-button-checked' size={15} color={Colors.PRIMARY}/>
                    <Text style={{color:'white',marginLeft:4,color:Colors.PRIMARY,fontSize:11}}>12 Chapters</Text>
                    </View>

                    <View style={{flexDirection:'row',alignItems:'center',marginLeft:15}}>
                    <MCIcon name ='radio-button-checked' size={15} color={Colors.PRIMARY}/>
                    <Text style={{color:'white',marginLeft:4,color:Colors.PRIMARY,fontSize:11}}>124 hours</Text>
                    </View>
                </View>
            </View>

            <TouchableOpacity activeOpacity={0.9} onPress={()=>navigation.navigate('Class',{subname: subName})} style={{height:130,marginTop:45,marginHorizontal:30,backgroundColor:Colors.DEFAULT_WHITE,borderRadius:4,elevation:2}}>
                <Text style={{color:'black' ,fontSize:21,fontWeight:'500',width:'90%',paddingLeft:20,marginTop:15}}>Long chapter name can be shown here.</Text>
                <View style={{flexDirection:'row',marginTop:20,paddingLeft:20}}> 
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <MCIcon name ='radio-button-checked' size={15} />
                    <Text style={{color:'#9F9F9F',marginLeft:4,fontSize:11}}>Chapter 1</Text>
                </View>

                <View style={{flexDirection:'row',alignItems:'center',marginLeft:15}}>
                    <MCIcon name ='radio-button-checked' size={15} />
                    <Text style={{color:'#9F9F9F',marginLeft:4,fontSize:11}}>Chapter 1</Text>
                </View>
                </View>
            </TouchableOpacity>

        </View>

        <TouchableOpacity activeOpacity={0.9} onPress={()=>navigation.navigate('Class',{subname: subName})} style={{height:130,marginTop:130,marginHorizontal:30,backgroundColor:Colors.DEFAULT_WHITE,borderRadius:4,elevation:2}}>
                <Text style={{color:'black' ,fontSize:21,fontWeight:'500',width:'90%',paddingLeft:20,marginTop:15}}>Long chapter name can be shown here.</Text>
                <View style={{flexDirection:'row',marginTop:20,paddingLeft:20}}> 
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <MCIcon name ='radio-button-checked' size={15} />
                    <Text style={{color:'#9F9F9F',marginLeft:4,fontSize:11}}>Chapter 1</Text>
                </View>

                <View style={{flexDirection:'row',alignItems:'center',marginLeft:15}}>
                    <MCIcon name ='radio-button-checked' size={15} />
                    <Text style={{color:'#9F9F9F',marginLeft:4,fontSize:11}}>Chapter 1</Text>
                </View>
                </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.9} onPress={()=>navigation.navigate('Class',{subname: subName})} style={{height:130,marginTop:15,marginHorizontal:30,backgroundColor:Colors.DEFAULT_WHITE,borderRadius:4,elevation:2}}>
                <Text style={{color:'black' ,fontSize:21,fontWeight:'500',width:'90%',paddingLeft:20,marginTop:15}}>Long chapter name can be shown here.</Text>
                <View style={{flexDirection:'row',marginTop:20,paddingLeft:20}}> 
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <MCIcon name ='radio-button-checked' size={15} />
                    <Text style={{color:'#9F9F9F',marginLeft:4,fontSize:11}}>Chapter 1</Text>
                </View>

                <View style={{flexDirection:'row',alignItems:'center',marginLeft:15}}>
                    <MCIcon name ='radio-button-checked' size={15} />
                    <Text style={{color:'#9F9F9F',marginLeft:4,fontSize:11}}>Chapter 1</Text>
                </View>
                </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.9} onPress={()=>navigation.navigate('Class',{subname: subName})} style={{height:130,marginTop:15,marginHorizontal:30,backgroundColor:Colors.DEFAULT_WHITE,borderRadius:4,elevation:2}}>
                <Text style={{color:'black' ,fontSize:21,fontWeight:'500',width:'90%',paddingLeft:20,marginTop:15}}>Long chapter name can be shown here.</Text>
                <View style={{flexDirection:'row',marginTop:20,paddingLeft:20}}> 
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <MCIcon name ='radio-button-checked' size={15} />
                    <Text style={{color:'#9F9F9F',marginLeft:4,fontSize:11}}>Chapter 1</Text>
                </View>

                <View style={{flexDirection:'row',alignItems:'center',marginLeft:15}}>
                    <MCIcon name ='radio-button-checked' size={15} />
                    <Text style={{color:'#9F9F9F',marginLeft:4,fontSize:11}}>Chapter 1</Text>
                </View>
                </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.9} onPress={()=>navigation.navigate('Class',{subname: subName})} style={{height:130,marginTop:15,marginHorizontal:30,backgroundColor:Colors.DEFAULT_WHITE,borderRadius:4,elevation:2}}>
                <Text style={{color:'black' ,fontSize:21,fontWeight:'500',width:'90%',paddingLeft:20,marginTop:15}}>Long chapter name can be shown here.</Text>
                <View style={{flexDirection:'row',marginTop:20,paddingLeft:20}}> 
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <MCIcon name ='radio-button-checked' size={15} />
                    <Text style={{color:'#9F9F9F',marginLeft:4,fontSize:11}}>Chapter 1</Text>
                </View>

                <View style={{flexDirection:'row',alignItems:'center',marginLeft:15}}>
                    <MCIcon name ='radio-button-checked' size={15} />
                    <Text style={{color:'#9F9F9F',marginLeft:4,fontSize:11}}>Chapter 1</Text>
                </View>
                </View>
        </TouchableOpacity>

        <View style={{height:140}}/>

        </ScrollView>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconContainer: {
    height:30,
    width:30,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1,
    borderColor:'#D5D5D5',
    borderRadius:4,
    marginLeft:10,
    paddingLeft:5
  },
  scrollView:{
    width:'100%',
  },
});

export default ChapterScreen;