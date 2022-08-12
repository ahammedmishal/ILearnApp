import React from 'react';
import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native';
import Colors from '../constants/Colors';

const OnboardingItem = ({item}) => {

const { width } = useWindowDimensions();


  return (
    <View style={[styles.container],{width}}>
      <Image source={item.image} style={[styles.image,{width,resizeMode: 'contain'}]}/>
      <View style={{flex:0.3}}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.content}>{item.content}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
  },
  image: {
    flex: 0.7,
    justifyContent: 'center',
  },
  title:{
    marginTop:90,
    fontWeight: '300',
    color: Colors.TEXT_PRIMARY,
    textAlign:'center',
    fontSize:28,
    marginBottom:10
  },
  content:{
    fontWeight: '300',
    color:  Colors.TEXT_SCONADARY,
    paddingHorizontal:64,
    textAlign:'center'
  }

});

export default OnboardingItem;