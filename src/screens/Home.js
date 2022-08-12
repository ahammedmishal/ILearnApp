import React from 'react';
import { View, Text, StyleSheet ,Image,TouchableHighlight,FlatList,TouchableOpacity,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Colors from '../constants/Colors';
import Animated, { Extrapolate } from 'react-native-reanimated';
import { useDrawerProgress } from '@react-navigation/drawer';
import { Header } from 'react-native-elements';
import Display from '../utils/Display';
import { DrawerActions } from 'react-navigation';
import subjects from '../constants/subjects';

const Home = ({navigation}) => {
 
    const progress = useDrawerProgress();

    const scale = Animated.interpolateNode(progress,  {
      inputRange: [0, 1],
      outputRange: [1, 0.8],
    });
    const borderRadius = Animated.interpolateNode(progress , {
      inputRange: [0, 1],
      outputRange: [1, 20],
    });
    const animatedStyle = {
      borderRadius,
      transform: [{scale}],overflow: 'hidden' 
    };
    
  const renderItem = ({item})=>{
    return(
      <TouchableOpacity 
        onPress={()=>navigation.navigate('ChapterScreen',{subname: item.subject})}
        style={{
        marginTop:25,
        marginLeft:8,
        //backgroundColor:'green',
        borderRadius:10,
        height:Display.setHeight(5),
        width:Display.setWidth(25),
        borderWidth:1,
        borderColor:Colors.SECONDARY,
        justifyContent:'center',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center'
        }}>
        <View style={{
            backgroundColor: Colors.PRIMARY,
            width:20,
            height:20,
            borderRadius:16,
        }}/>
        <Text style={{fontSize:11,color:Colors.TEXT_PRIMARY,fontWeight:'600'}}>{item.subject}</Text>
      </TouchableOpacity>
    )
  }

  const cardItem = ({item})=>{
    return(
      <View style={styles.cardView2}>
      <Image 
        source={item.image}
        style={styles.cardImageConatiner2}
      />
      <View style={{marginTop:65,marginHorizontal:10}}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <Icon name="play-circle-outline" size={28} color="white"/>
          <Text style={styles.test5}>Course Title</Text>
        </View>
        <View style={{marginTop:4,
          width:Display.setWidth(55),
          height:Display.setHeight(0.2),
          backgroundColor:'lightgrey',
          }}></View>
      </View>
      </View>
    )
  }

  const card_Item1 = ({item})=>{
    return(
    <View style={{height:'44%',backgroundColor:'#002333',borderRadius:8,marginTop:20,marginLeft:8,}}>
      <View style={styles.classesCircle2}/>
      <View style={{paddingRight:35,paddingLeft:40,height:160}}>
        <Text style={{marginTop:10,color:Colors.DEFAULT_WHITE,fontSize:19,fontWeight:'500'}}>Target live classes</Text>   
        <Text style={{marginTop:10,color:Colors.TEXT_SCONADARY_LIGHT,fontSize:16,maxWidth:19/0.1,fontWeight:'200'}}>{item.discription}</Text>   
      </View>
      <View style={{paddingLeft:40}}>
        <TouchableHighlight style={styles.buttonDesign} 
              onPress={()=>navigation.navigate('Otp')}>
              <Text style={styles.buttonText}>Continue</Text>
        </TouchableHighlight>
      </View>
    </View>
    )
  }

  return (
    <Animated.View style={{flex:1, ...animatedStyle,}}>
      <Header
        backgroundColor='transparent'
        placement="left"
        leftComponent={ 
        <TouchableOpacity style={styles.iconContainer}  onPress={()=>navigation.openDrawer()}>
             <MaterialCommunityIcons name ='view-grid' size={12} color={Colors.PRIMARY}/>    
        </TouchableOpacity>}

        centerComponent={
          <Image
          style={styles.imageConatiner}
          resizeMode={'contain'}
          source={require('../assets/logo.png')}
        />
        }

        rightComponent={
          <View style={styles.classesContainer}>
            <View style={styles.classesCircle}></View>
            <Text style={styles.textClasses}>Classes</Text>
          </View>
        }
         containerStyle={{
          paddingHorizontal:20
      
        }}
      />
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false} >
      <View  style={{width:'100%',backgroundColor:'white',paddingLeft:25}}>

        <View style={styles.textContainer}>
          <Text style={styles.test1}>Good morning</Text>
          <Text style={styles.test2}>Aaron Taylor</Text>
        </View>

        <View style={styles.cardView1}>
          <Image 
            source={require('../assets/cardView1.png')}
            style={styles.cardImageConatiner1}
          />
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingHorizontal:20,paddingVertical:15}}>
            <View style={styles.textContainer2}>
             <Text style={styles.test3}>Class</Text>
             <Text style={styles.test4}>Plus two science</Text>
            </View>
            <Icon name="keyboard-arrow-down" size={22} color="white"/>
          </View>
        </View>


      </View>

      <View style={{width:'100%',paddingLeft:16,backgroundColor:'white'}}>
        <FlatList
          data={subjects}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
        />  
      </View>

      <View style={{width:'100%',paddingLeft:16,backgroundColor:'white'}}>
        <View style={{width:'100%',marginTop:20,paddingHorizontal:8}}>
          <Text style={{color:Colors.TEXT_PRIMARY}}>Recent courses</Text>        
        </View>
        <FlatList
          data={subjects}
          renderItem={cardItem}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={{width:'100%',paddingLeft:16,backgroundColor:'white',height:'94%'}}>
        <FlatList
          data={subjects}
          renderItem={card_Item1}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={{height:140}}/>
      </ScrollView> 
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
   
  },
  buttonDesign: {
    marginTop:10,
    backgroundColor:Colors.DEFAULT_GREEN,
    alignItems:'center',
    height:Display.setHeight(8),
    width: Display.setWidth(40),
    justifyContent:'center',
    borderRadius:4,
    fontSize:30
  },
  buttonText: {
    color:'white',
    fontSize:15,
    fontWeight:'500'
  },
  header :{
    width:'100%',
    alignItems:'center',
    flexDirection:'row',
    justifyContent: 'space-around',
    paddingHorizontal:10
  },
  iconContainer: {
    height:30,
    width:30,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1,
    borderColor:'#D5D5D5',
    borderRadius:4
  },
  imageConatiner: {
    width: 150,
    height: 35,
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
  test1: {
    color: Colors.TEXT_PRIMARY
  },
  test2: {
    fontSize: 26,
    fontWeight:'700',
    color: Colors.TEXT_PRIMARY
  },
  textContainer: {
    marginTop:20
  },
  cardView1: {
    marginTop: 30,
    height: Display.setHeight(10),
    width:Display.setWidth(85),
    backgroundColor:Colors.SECONDARY_LIGHT,
    borderRadius:4,
  },
  cardImageConatiner1:{
    width:'100%',
    height:'100%',
    borderRadius:4,justifyContent:'center',alignItems:'center',position:'absolute'
  },
  test3: {
    fontSize: 14,
    color: Colors.TEXT_SCONADARY
  },
  test4: {
    fontSize: 16,
    fontWeight:'400',
    color: Colors.DEFAULT_WHITE
  },
  cardView2: {
    marginTop: 8,
    height: Display.setHeight(15),
    width:Display.setWidth(60),
    backgroundColor:Colors.SECONDARY_LIGHT,
   
    marginLeft:8,
  },
  cardImageConatiner2:{
    width:'100%',
    height:'100%',
    borderRadius:4,justifyContent:'center',alignItems:'center',position:'absolute'
  },
  test5: {
    fontSize: 12,
    fontWeight:'400',
    color: Colors.DEFAULT_WHITE,
    paddingLeft:5
  },
  classesCircle2: {
    backgroundColor: '#002E43',
    width:80,
    height:80,
    borderRadius:40,
    marginLeft:30,
    marginTop:30,
  },

});

export default Home;