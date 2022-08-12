import React, { useState , useRef ,useEffect } from 'react';
import { View, StyleSheet,TouchableOpacity, Animated } from 'react-native';
import { Svg, G, Circle,Rect} from 'react-native-svg'
import AntDesign from 'react-native-vector-icons/AntDesign'

const NextButton = ({percentage,scrollTo}) => {
    const size = 110;
    const strokeWidth = 3;
    const center = size /2;
    const radius = size / 2;
    const circumference = radius * 5;

    const progressAnimation = useRef(new Animated.Value(0)).current
    const progressRef = useRef(null);

    const animation = (toValue) => {
        return Animated.timing(progressAnimation, {
            toValue,
            duration: 250,
            useNativeDriver: true
        }).start()
    };

    useEffect(() => {
        animation(percentage);
    }, [percentage]);

    useEffect(() => {
        progressAnimation.addListener((value) =>{
            const strokeDashoffset = circumference - (circumference * value.value) / 100;

            if (progressRef?.current){
                progressRef.current.setNativeProps({
                    strokeDashoffset
                })
            }

        },[percentage]);
    });

  return (
    <View style={styles.container}>
      <Svg width={size} height={size}> 
        <G rotation="90" origin={center}>
            {/* <Circle 
            stroke="lightgrey" 
            cx={center} 
            cy={center} 
            r={radius} 
            strokeWidth={strokeWidth}
            
            />
            <Circle 
                ref={progressRef}
                stroke="green"
                cx={center}
                cy={center}
                r={radius}
                strokeWidth={strokeWidth}
                strokeDasharray = {circumference}
            /> */}
            <Rect
            ref={progressRef}
            x="25"
            y="25"
            width="60"
            height="60"
            stroke="#E5E5E5"
            strokeWidth="4"
            fill="white"
            rx={5}
            />
            <Rect
            ref={progressRef}
            x="25"
            y="25"
            width="60"
            height="60"
            rx={5}
            stroke="#00C458"
            strokeWidth="2"
            fill="white"
            strokeDasharray ={circumference}
            />
        </G>
      </Svg>
      <TouchableOpacity onPress={scrollTo} style={styles.button} activeOpacity={0.6}>
          <AntDesign name="arrowright" size={20} color="#fff"/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'red',
    width:'100%'
  },
  button:{
      position: 'absolute',
      backgroundColor: '#00C458',
      borderRadius: 4,
      padding: 14,
  }
});

export default NextButton;