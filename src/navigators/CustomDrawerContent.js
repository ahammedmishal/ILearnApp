import React from 'react';
import { View, Text, StyleSheet , Image, SafeAreaView,TouchableHighlight,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../constants/Colors';
import { DrawerContentScrollView } from '@react-navigation/drawer';

const CustomDrawerContent = ({navigation}) => {
    return(
      
        <DrawerContentScrollView style={styles.container} scrollEnabled={true} contentContainerStyle={{flex:1}}>
            <TouchableOpacity style={styles.viewz} onPress={() => navigation.closeDrawer()}>
              <Icon name = 'close' size={15} color={Colors.PRIMARY}/>
            </TouchableOpacity>
          <View style={{marginTop:30,flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
              <Image style={{width:70,height:70,borderRadius:90,borderWidth:3,borderColor:Colors.PRIMARY}} source={require('../assets/profile.jpeg')}/>
              <View>                
                <Text style={{color:'white'}}>Aaron Taylor</Text>
                <Text style={{color:'lightgrey',fontSize:12}}>ID 1234</Text>
              </View>
              <Icon name='keyboard-arrow-right' size={20} color={Colors.PRIMARY}/>
          </View>
          <View style={styles.containerTwo}>

            <View style={styles.drawerItems}>
              <View style={styles.viewz1}>
              </View>
              <Text style={styles.containerTwoText} onPress={()=>navigation.navigate('Home')}>Exam Corner</Text>
            </View>
            <View style={styles.marginView}></View>

            <View style={styles.drawerItems}>
              <View style={styles.viewz1}>
              </View>
              <Text style={styles.containerTwoText} onPress={()=>navigation.navigate('Home')}>Subrscriptions</Text>
            </View>
            <View style={styles.marginView}></View>
            <View style={styles.drawerItems}>
              <View style={styles.viewz1}>
              </View>
              <Text style={styles.containerTwoText} onPress={()=>navigation.navigate('Home')}>Analytics</Text>
            </View>
            <View style={styles.marginView}></View>
            <View style={styles.drawerItems}>
              <View style={styles.viewz1}>
              </View>
              <Text style={styles.containerTwoText} onPress={()=>this.props.navigation.navigate('Home')}>Downloads</Text>
            </View>
            <View style={styles.marginView}></View>
            <View style={styles.drawerItems}>
              <View style={styles.viewz1}>
              </View>
              <Text style={styles.containerTwoText} onPress={()=>this.props.navigation.navigate('Home')}>Notifications</Text>
            </View>
            <View style={styles.marginView}></View>
            <View style={styles.drawerItems}>
              <View style={styles.viewz1}>
              </View>
              <Text style={styles.containerTwoText} onPress={()=>this.props.navigation.navigate('Home')}>Referrals</Text>
            </View>
            <View style={styles.marginView}></View>
            <View style={styles.drawerItems}>
              <View style={styles.viewz1}>
              </View>
              <Text style={styles.containerTwoText} onPress={()=>this.props.navigation.navigate('Home')}>Share app</Text>
            </View>
            <View style={styles.marginView}></View>
            <View style={styles.drawerItems}>
              <View style={styles.viewz1}>
              </View>
                 <Text style={styles.logoutText} onPress={()=>this.props.navigation.navigate('Help')} >Logout</Text>
            </View>
          </View>
          <TouchableHighlight style={{marginTop:40,borderRadius:4,borderColor:Colors.PRIMARY,borderWidth:1,justifyContent:'center',alignItems:'center',width:'80%',height:'6%',marginLeft:25}}>
            <Text style={styles.enquireText}>Enquire now</Text>
          </TouchableHighlight>
        </DrawerContentScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:Colors.SECONDARY,
    },
    safeConatiner:{
      flex: 0.5,
    },
    viewz:{
      justifyContent:'center',
      alignItems:'center',
      marginLeft:20,
      borderWidth:1,
      width:25,
      height:25,
      borderColor:Colors.DEFAULT_WHITE,
      borderRadius:3
    },
    viewz1:{
      justifyContent:'center',
      alignItems:'center',
      borderWidth:1,
      width:25,
      height:25,
      borderColor:Colors.PRIMARY,
      borderRadius:3
    },
    image:{
      margin:5,
      marginTop:15,
      width:70,
      height:70
    },
    text:{
      color:'white',
      fontSize:21,
      marginLeft:10
    },
    goldView:{
      width:80,
      height:20,
      backgroundColor:'#52595D',
      borderRadius:4,
      alignItems:'center'
    },
    secondView:{
      flexDirection:'row',
      backgroundColor:'#2A2728',
      height:'40%',
      width:'100%',
      justifyContent:'space-between',
      alignItems:'flex-end',
      padding:5
    },
    inviteView:{
      backgroundColor:'white',
      height:22,
      width:'30%',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:4,
      borderColor:'yellow',
      borderWidth:1,
      marginTop:40,
      marginLeft:5
    },
    containerTwo:{
      width:'100%',
      height:'65%',
      paddingLeft:30,
      paddingTop:40,
    },
    containerTwoText:{
      fontSize:13,
      color: Colors.DEFAULT_WHITE,
      paddingLeft:10,
      textAlign:'center',
      fontWeight:'400'
    },
    logoutText:{
      fontSize:13,
      color:'#E14949',
      paddingLeft:10,
      fontWeight:'400'
    },
    marginView:{
      width:'85%',
      height:1,
      backgroundColor:'#243C47',
      marginTop:15,
      marginBottom:15
    },
    enquireText:{
      textAlign:'center',
      fontSize:15,
      color: Colors.PRIMARY,
      fontWeight:'normal'
    },
    drawerItems:{
      flexDirection:'row',
      alignItems:'center'
    }
  });

export default CustomDrawerContent;