import React from 'react';
import { View, Text, StyleSheet,TouchableHighlight} from 'react-native';
import Colors from '../constants/Colors';
import Display from '../utils/Display';

import { DrawerActions } from 'react-navigation';
const Recent = ({navigation}) => {
 
  return (
    <View style={styles.container}>
        <TouchableHighlight style={styles.buttonDesign} 
             onPress={()=>navigation.DrawerActions.openDrawer()}>
              <Text style={styles.buttonText}>Recent here</Text>
        </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
});

export default Recent;