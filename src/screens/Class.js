import React , {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity , Image} from 'react-native';
import { Tab , TabView ,Header, ThemeProvider} from 'react-native-elements'
import Colors from '../constants/Colors';
import Video from './Video';
import MCIcon from 'react-native-vector-icons/MaterialIcons'


const Class = ({navigation,route}) => {
 
  const subName = route.params.subname;

  const [index,setIndex] = useState(0);

  const theme = {
    colors: {
      primary: Colors.SECONDARY,
      secondary: Colors.SECONDARY
    },
  };

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
          <Text style={{fontSize:22,color:'white',textAlign:'center'}}>{subName}</Text>
        }

        rightComponent={<View/>}
         containerStyle={{
          paddingHorizontal:20,
          borderBottomColor:Colors.SECONDARY
        }}
      />

      <View style={{height:120,backgroundColor:Colors.SECONDARY,paddingTop:10,paddingLeft:30}}>
        <Text style={{color:'white' ,fontSize:23,fontWeight:'500'}}>Long chapter name can</Text>
        <Text style={{color:'white' ,fontSize:23,fontWeight:'500'}}>be shown here.</Text>

          <View style={{flexDirection:'row',marginTop:5}}> 
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
      <ThemeProvider  theme={theme}>
        <Tab value={index} onChange={setIndex} variant={'primary'} indicatorStyle={{backgroundColor:Colors.PRIMARY,width:'10%',alignSelf:'center',marginLeft:30,height:3}}>
          <Tab.Item titleStyle={{fontSize:13,width:150,textTransform:'none'}} title="Videos" />
          <Tab.Item titleStyle={{fontSize:13,width:150,textTransform:'none'}} title="Chapter Test" />
          <Tab.Item titleStyle={{fontSize:13,width:150,textTransform:'none'}} title="Resources" />
          <Tab.Item titleStyle={{fontSize:13,width:150,textTransform:'none'}} title="QN Bank" />
        </Tab>
      </ThemeProvider>
      <TabView value={index} onChange={setIndex} animationType="spring" >
        <TabView.Item style={{ width: "100%" }}>
          <Video/>
        </TabView.Item>
        <TabView.Item style={{ width: "100%" }}>
          <Text h1>Favorite</Text>
        </TabView.Item>
        <TabView.Item style={{ width: "100%" }}>
          <Text h1>Cart</Text>
        </TabView.Item>
        <TabView.Item style={{ width: "100%" }}>
          <Text h1>Cart</Text>
        </TabView.Item>
      </TabView>

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
});



export default Class;