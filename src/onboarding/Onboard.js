import React, { useState , useRef ,useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, Animated,TouchableHighlight} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import NextButton from '../components/NextButton';
import Paginator from '../components/Paginator';
import Colors from '../constants/Colors';
import slides from '../constants/slides';
import Display from '../utils/Display';
import OnboardingItem from './OnboardingItem';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator } from 'react-native';
import GetStarted from '../screens/Recent';



const Onboard = ({navigation}) => {

  const[currentIndex , setCurrentIndex] = useState(0);

  const scrollX = useRef(new Animated.Value(0)).current;

  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold : 50}).current;

  const scrollTo = () =>{
    if(currentIndex < slides.length - 1){
      slidesRef.current.scrollToIndex({index: currentIndex + 1});
    } else {
      console.log('presdde',);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{flex: 3}}>
        <FlatList
          data={slides}
          renderItem={({item})=> <OnboardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item)=> item.id}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX }}}],{
            useNativeDriver: false,
          })}

          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>
      <View style={
        {flex:0.3,marginBottom:20,alignItems:'flex-end',paddingLeft:280}
      }>
          {currentIndex === 4 ? (
                  <TouchableHighlight style={styles.buttonDesign} 
                  onPress={()=>navigation.navigate('MyTabs')}>
                  <Text style={styles.buttonText}>Get Started</Text>
                </TouchableHighlight>
          ):(
          <NextButton scrollTo={scrollTo}  percentage={(currentIndex + 1) * (100 / slides.length)}/>
          )}
      
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.DEFAULT_WHITE
  },
  buttonDesign: {
    marginTop:10,
    backgroundColor:Colors.DEFAULT_GREEN,
    alignItems:'center',
    height:Display.setHeight(8),
    width: Display.setWidth(40),
    justifyContent:'center',
    borderRadius:4,
    fontSize:30,
    marginRight:80
  },
  buttonText: {
    color:'white',
    fontSize:15,
    fontWeight:'500'
  },
});

export default Onboard;