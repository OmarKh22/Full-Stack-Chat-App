import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { colors } from '@/constants/theme'
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useRouter } from 'expo-router';

const SplashScreen = () => {
    const route = useRouter();
    useEffect(()=>{
        setTimeout(()=>{
            route.replace('/(auth)/welcome')
        }, 2000)
    },[])
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.neutral900} />
      <Animated.Image
        source={require('../assets/images/splashImage.png')}
        style={{ width: 200, height: 200 }}
        entering={FadeInDown.duration(700)}
        resizeMode="contain"
      />
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: colors.neutral900,
    }
})