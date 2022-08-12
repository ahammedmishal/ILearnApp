import React from 'react';
import { View, Text, StyleSheet ,TouchableOpacity,Image,TouchableHighlight,ScrollView, ImageBackground,StatusBar,SafeAreaView} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MCIcons from 'react-native-vector-icons/MaterialIcons'
import Colors from '../constants/Colors';
import { Header } from 'react-native-elements';
import Display from '../utils/Display';

const Profile = ({navigation}) => {
  return (
    <View style={styles.container}>
      
      <StatusBar barStyle="light-content" backgroundColor='white'/> 

      <View style={styles.backgroundImage}></View>
      <Header
        backgroundColor={Colors.SECONDARY}
       
        leftComponent={ 
        <TouchableOpacity >
            
        </TouchableOpacity>}

        centerComponent={
          <Text style={{fontSize:20,color:'white',textAlign:'center'}}>Profile</Text>
        }

        rightComponent={
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
          <Image style={{width:20,height:20}} resizeMode='contain' source={require('../assets/bellIcon.png')}/>
          <TouchableOpacity style={styles.iconContainer}>
            <MaterialCommunityIcons name ='view-grid' size={12} color={Colors.PRIMARY}/>    
          </TouchableOpacity>
        </View>
        }
         containerStyle={{
          paddingHorizontal:20,
          borderBottomColor:Colors.SECONDARY
        }}
      />
  
           <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false} >
           {/* <View style={{flexDirection:'row',marginTop:50,justifyContent:'space-between'}}>
             <View style={{paddingLeft:140}}></View>
              <Text style={{fontSize:20,color:'white',textAlign:'center'}}>Profile</Text>
              <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:80,alignItems:'center'}}>
                <Image style={{width:20,height:20}} resizeMode='contain' source={require('../assets/bellIcon.png')}/>
                <TouchableOpacity style={styles.iconContainer}>
                  <MaterialCommunityIcons name ='view-grid' size={12} color={Colors.PRIMARY}/>    
                </TouchableOpacity>
              </View>
           </View> */}

      

            <View style={styles.shadow}>
                <View style={{marginTop:15,flexDirection:'row',alignItems:'center',marginLeft:15}}>
                  <Image style={{width:50,height:50,borderRadius:90,borderWidth:3,borderColor:Colors.PRIMARY}} source={require('../assets/profile.jpeg')}/>
                  <View style={{paddingLeft:15}}>                
                    <Text style={{color:'#4D4D4D',fontWeight:'500'}}>Aaron Taylor</Text>
                    <Text style={{color:'#4D4D4D',fontSize:12}}>ID 1234</Text>
                  </View>
                </View>
                <Text style={{color:'#4D4D4D',fontWeight:'500',marginTop:15,marginLeft:15}}>Personal Info</Text>
                <View style={styles.marginView}></View>

                <View style={{flexDirection:'row',paddingHorizontal:10,justifyContent:'space-between'}}>
                    <Text style={styles.test4}>Account Settings</Text>
                    <Text style={{paddingLeft:10,color:'#4D4D4D',fontWeight:'500'}}>Aaron Taylor</Text>
                  </View>
                <View style={styles.marginView1}></View>

                
                <View style={{flexDirection:'row',paddingHorizontal:10,justifyContent:'space-between'}}>
                  <Text  style={styles.test4}>Email</Text>
                  <Text style={{paddingLeft:10,color:'#4D4D4D',fontWeight:'500'}}>emaidid123@server.com</Text>
                </View>
                <View style={styles.marginView1}></View>

                <View style={{flexDirection:'row',paddingHorizontal:10,justifyContent:'space-between'}}>
                    <Text  style={styles.test4}>Number</Text>
                    <Text style={{paddingLeft:10,color:'#4D4D4D',fontWeight:'500'}}>+91 9876543210</Text>
                  </View>
                <View style={styles.marginView1}></View>

                <View style={{flexDirection:'row',paddingHorizontal:10,justifyContent:'space-between'}}>
                  <Text style={{color:'#4D4D4D',fontWeight:'700',fontSize:15}}>Course Info</Text>
                </View>
                <View style={styles.marginView}></View>

                <View style={{flexDirection:'row',paddingHorizontal:10,justifyContent:'space-between'}}>
                  <Text  style={styles.test4}>Center</Text>
                  <Text style={{paddingLeft:10,color:'#4D4D4D',fontWeight:'500'}}>Inmakes edu</Text>
                </View>
                <View style={styles.marginView1}></View>

                <View style={{flexDirection:'row',paddingHorizontal:10,justifyContent:'space-between'}}>
                  <Text style={styles.test4}>Course</Text>
                  <Text style={{paddingLeft:10,color:'#4D4D4D',fontWeight:'500'}}>Plus Two Science</Text>
                </View>
                <View style={styles.marginView1}></View>

                <View style={{flexDirection:'row',paddingHorizontal:10,justifyContent:'space-between'}}>
                  <Text style={styles.test4}>Payment Status</Text>
                  <Text style={{paddingLeft:10,color:'#4D4D4D',fontWeight:'500'}}>Free</Text>
                </View>
                <View style={styles.marginView1}></View>

                <View style={{flexDirection:'row',paddingHorizontal:10,justifyContent:'space-between'}}>
                  <Text style={styles.test4}>Expiry Date</Text>
                  <Text style={{paddingLeft:10,color:'#4D4D4D',fontWeight:'500'}}>Not Applicable</Text>
                </View>
            </View>

            <View style={styles.paymentButtonDesign}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <TouchableOpacity style={styles.paymentButtonIcon}>
                  <Image style={{width:15,height:15}} resizeMode={'contain'} source={require('../assets/payment.png')}/>
                </TouchableOpacity>
                <Text style={styles.buttonText}>Custom Payment</Text>
              </View>
                <MCIcons name ='keyboard-arrow-right' size={15} color={Colors.DEFAULT_WHITE}/>    
            </View>

            <View style={styles.paymentButtonDesign}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <TouchableOpacity style={styles.paymentButtonIcon}>
                  <Image style={{width:15,height:15}} resizeMode={'contain'} source={require('../assets/share.png')}/>
                </TouchableOpacity>
                <Text style={styles.buttonText}>Referrals</Text>
              </View>
                <MCIcons name ='keyboard-arrow-right' size={15} color={Colors.DEFAULT_WHITE}/>    
            </View>

            <View style={{height:140}}/>

         </ScrollView>
         </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
   //  backgroundColor:Colors.SECONDARY
  },
  test4:{
    color:'#4D4D4D'
  },
  scrollView:{
    width:'90%',
  },
  backgroundImage: {
    width:'100%',
    height:'40%',
    alignItems:'center',
    justifyContent:'center',
    position:'absolute',
    backgroundColor:Colors.SECONDARY,
    top:10
  },
  buttonDesign: {
    marginTop:10,
    backgroundColor:Colors.DEFAULT_GREEN,
    alignItems:'center',
    height:Display.setHeight(8),
    width: Display.setWidth(80),
    justifyContent:'center',
    borderRadius:8,
    fontSize:30
  },
  buttonText: {
    color:'white',
    fontSize:13,
    fontWeight:'500'
  },
  paymentButtonDesign: {
    marginTop:10,
    backgroundColor:Colors.DEFAULT_GREEN,
    alignItems:'center',
    height:Display.setHeight(9),
    width: Display.setWidth(90),
    borderRadius:8,
    fontSize:30,
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:10
  },
  shadow:{
    width:'100%',
    backgroundColor:Colors.DEFAULT_WHITE,
    height:560,
    marginTop:40,
    borderRadius:6,
    shadowColor:'#7F5DF0',
    shadowOffset:{
      width:0,
      height:10,
    },
    containerTwoText:{
      fontSize:13,
      color: Colors.DEFAULT_WHITE,
      paddingLeft:10,
      textAlign:'center',
      fontWeight:'400'
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
    drawerItems:{
      flexDirection:'row',
      alignItems:'center'
    },
    shadowOpacity:0.25,
    shadowRadius:3.5,
    elevation:1
  },
  marginView:{
    width:'100%',
    height:1,
    backgroundColor:'#F0F0F0',
    marginTop:20,
    marginBottom:15,
  },
  marginView1:{
    width:'80%',
    height:1,
    backgroundColor:'#F0F0F0',
    marginTop:20,
    marginBottom:15,
    marginLeft:35
  },
  classesContainer: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    borderColor: Colors.PRIMARY,
    borderWidth: 1,
    borderRadius: 4,
    padding:7
  },
  classesCircle: {
    backgroundColor: '#007345',
    width:15,
    height:15,
    borderRadius:16,
  },
  textClasses: {
    marginLeft:10,
    color: Colors.PRIMARY,
    fontSize:12
  },

  paymentButtonIcon: {
    height:30,
    width:30,
    alignItems:'center',
    justifyContent:'center',
    borderColor:'#D5D5D5',
    borderRadius:4,
    marginLeft:5,
    marginRight:10,
    backgroundColor:'#2ECE76'
  },
  imageConatiner: {
    width: 150,
    height: 35,
  },
});

export default Profile;