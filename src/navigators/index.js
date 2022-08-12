import React ,{useState,useEffect} from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Register from '../screens/Rejister';
import Otp from '../screens/Otp';
import StudentDetails from '../screens/StudentDetails';
import Onboard from '../onboarding/Onboard';
import Home from '../screens/Home';

import { View,Text,StyleSheet,TouchableHighlight,TouchableOpacity,Image,ActivityIndicator} from 'react-native';
import Animated from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Mcicons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../constants/Colors';
import Recent from '../screens/Recent';
import Exams from '../screens/Exams';
import Profile from '../screens/Profile';
import Contact from '../screens/Contact';
import Video from '../screens/Video';
import Class from '../screens/Class';
import QnBank from '../screens/QnBank'
import Resources from '../screens/Resources'
import TopTabBar from './TopTabBar';
import ChapterScreen from '../screens/ChapterScreen';



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
  
  
  
  const Stack = createStackNavigator()
  const Drawer = createDrawerNavigator()
  const Tab = createBottomTabNavigator();
  
  const Navigators = () =>{
    
    // const Loading = () =>{
      //   return(
        //     <View>
        //       <ActivityIndicator size={50}/>
  //     </View>
  //   )
  // }
  // const [loading,setloading] = useState(true);
  // const [viewedOnboarding,setViewedOnboarding] = useState(false);

  // const checkOnboarding = async () =>{
  //   try {
  //     const value = await AsyncStorage.getItem('@viewedOnboarding')

  //     if(value !== null) {
  //       setViewedOnboarding(true)
  //     }
  //   } catch (err) {
  //     console.log('error @checkOnboarding: ', err);
  //   } finally {
  //     setloading(false)
  //   }
  // }

  // useEffect(() => {
  //   checkOnboarding();
  // },[])

    return(
        <NavigationContainer>
                {/* {loading ? <Loading/> : viewedOnboarding ? <Home/> : <Onboard/>} */}
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Register" component={Register}/>
                <Stack.Screen name="Otp" component={Otp}/>
                <Stack.Screen name="StudentDetails" component={StudentDetails}/>
                <Stack.Screen name="OnboardingItem" component={Onboard}/>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="CustomDrawer" component={CustomDrawer}/>
                <Stack.Screen name="MyTabs" component={MyTabs}/>
                <Stack.Screen name="Class" component={Class}/>
                <Stack.Screen name="ChapterScreen" component={ChapterScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}





const CustomDrawer = () =>{
    const [progress,setProgress] = React.useState(new Animated.Value(0))

    const scale = Animated.interpolateNode(progress, {
        inputRange: [0, 1],
        outputRange: [1, 0.8]
    })
    const borderRadius = Animated.interpolateNode(progress, {
        inputRange: [0, 1],
        outputRange: [0, 26]
    })

    const animatedStyle = {borderRadius, transform: [{scale}]}

    return(
    <View style={{ flex: 1, backgroundColor: Colors.SECONDARY}}>
      <Drawer.Navigator
        screenOptions={{headerShown:false}}
        drawerType="slide"
        overlayColor="transparent"
        drawerStyle={{
          flex: 1,
          width: '65%',
          paddingRight: 20,
          backgroundColor: 'transparent',
        }}
        sceneContainerStyle={{
          backgroundColor: 'transparent',
        }}
            initialRouteName = "Home"
            drawerContent={props => {
                setTimeout(()=>{
                  setProgress(props.progress) 
                }, 0)
                return( 
                    <CustomDrawerContent
                     navigation = {props.navigation}
                    />
                )
            }}
        >
        <Drawer.Screen name='Home' >
            {props => <Home {...props} drawerAnimationStyle={animatedStyle} />}
        </Drawer.Screen>
        <Drawer.Screen name='MyTabs' component={MyTabs}/>
        <Drawer.Screen name='Recent' component={Recent}/>
        </Drawer.Navigator>
        </View>
    )
}


function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown:false,
        tabBarShowLabel:false,
        tabBarOptions:true,
        tabBarStyle:{
          position: 'absolute',
          bottom:20,
          left:15,
          right:15,
          elevation: 0,
          borderRadius:6,
          height:75,
          ...styles.shadow,
          backgroundColor:Colors.DEFAULT_WHITE,
          paddingRight:10
        },
      }}
    >
    <Tab.Screen 
      name="CustomDrawer"
      component={CustomDrawer}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({focused,size})=>(
          <View>
            {focused ?
                <View style={{alignItems:'center',justifyContent:'center'}}>
                    <Image 
                      style={{width:20,height:20}}
                      source={require('../assets/Home.png')}
                    />
                    <View style={{width:5,height:5,backgroundColor:'black',borderRadius:5,marginTop:5}}/>
                </View>
                :
                <View style={{alignItems:'center',justifyContent:'space-between',flexDirection:'row'}}>
                    <Image 
                      style={{width:16,height:16,}}
                      source={require('../assets/Home1.png')}
                    />
                    <Text style={{fontSize:10,fontWeight:'400',color:Colors.TEXT_SCONADARY,marginLeft:3}}>Home</Text>
                </View>  
          }
          </View>
        )
      }}
      />
      <Tab.Screen name="Recent" component={Recent}
         options={{
          tabBarLabel: 'Recent',
          tabBarIcon: ({focused,size})=>(
            <View>
              {focused ?
                  <View style={{alignItems:'center',justifyContent:'center'}}>
                      <Ionicons name='md-play' size={size} color={Colors.PRIMARY}/>
                      <View style={{width:5,height:5,backgroundColor:'black',borderRadius:5,marginTop:0}}/>
                  </View>
                  :
                  <View style={{alignItems:'center',justifyContent:'space-between',flexDirection:'row'}}>
                      <Ionicons name='md-play-outline' size={20} color='#C2C2C2'/>
                      <Text style={{fontSize:10,fontWeight:'400',color:Colors.TEXT_SCONADARY,marginLeft:3}}>Recent</Text>
                  </View>  
            }
            </View>
          )
        }}
      />
      <Tab.Screen name="Exams" component={Exams}
                 options={{
                  tabBarLabel: 'Exams',
                  tabBarIcon: ({focused,size})=>(
                    <View>
                      {focused ?
                          <View style={{alignItems:'center',justifyContent:'center'}}>
                              <Mcicons name='text-box-outline' size={size} color={Colors.PRIMARY}/>
                              <View style={{width:5,height:5,backgroundColor:'black',borderRadius:5,marginTop:2}}/>
                          </View>
                          :
                          <View style={{alignItems:'center',justifyContent:'space-between',flexDirection:'row'}}>
                              <Mcicons name='text-box-outline' size={20} color='#C2C2C2'/>
                              <Text style={{fontSize:10,fontWeight:'400',color:Colors.TEXT_SCONADARY,marginLeft:3}}>Exams</Text>
                          </View>  
                    }
                    </View>
                  )
                }}
      />
      <Tab.Screen name="Profile" component={Profile} 
                 options={{
                  tabBarLabel: 'Profile',
                  tabBarIcon: ({focused,size})=>(
                    <View>
                      {focused ?
                          <View style={{alignItems:'center',justifyContent:'center'}}>
                              <Ionicons name='person-outline' size={size} color={Colors.PRIMARY}/>
                              <View style={{width:5,height:5,backgroundColor:'black',borderRadius:5,marginTop:0}}/>
                          </View>
                          :
                          <View style={{alignItems:'center',justifyContent:'space-between',flexDirection:'row'}}>
                              <Ionicons name='person-outline' size={20} color='#C2C2C2'/>
                              <Text style={{fontSize:10,fontWeight:'400',color:Colors.TEXT_SCONADARY,marginLeft:3}}>Profile</Text>
                          </View>  
                    }
                    </View>
                  )
                }}
      />
      <Tab.Screen name="Contact" component={Contact} 
                 options={{
                  tabBarLabel: 'Contact',
                  tabBarIcon: ({focused,size})=>(
                    <View>
                      {focused ?
                          <View style={{alignItems:'center',justifyContent:'center'}}>
                              <Ionicons name='mail-outline' size={size} color={Colors.PRIMARY}/>
                              <View style={{width:5,height:5,backgroundColor:'black',borderRadius:5,marginTop:0}}/>
                          </View>
                          :
                          <View style={{alignItems:'center',justifyContent:'space-between',flexDirection:'row'}}>
                              <Ionicons name='mail-outline' size={20} color='#C2C2C2'/>
                              <Text style={{fontSize:10,fontWeight:'400',color:Colors.TEXT_SCONADARY,marginLeft:3}}>Contact</Text>
                          </View>  
                    }
                    </View>
                  )
                }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:Colors.SECONDARY,
    },
    shadow:{
      shadowColor:'#7F5DF0',
      shadowOffset:{
        width:0,
        height:10,
      },
      shadowOpacity:0.25,
      shadowRadius:3.5,
      elevation:5
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


export default Navigators