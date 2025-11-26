import Button from '@/components/Button'
import ScreenWrapper from '@/components/ScreenWrapper'
import Typo from '@/components/Typo'
import { colors, spacingX, spacingY } from '@/constants/theme'
import { verticalScale } from '@/utils/styling'
import { useRouter } from 'expo-router'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import Animated, { FadeIn } from 'react-native-reanimated'

const Welcome = () => {
    const route = useRouter();
  return (
    <ScreenWrapper showPattern={true}>
        <View style={styles.container}>
            <Typo size={45} fontWeight="900" color={colors.white}>Chatty</Typo>
        </View>
        <Animated.Image 
         entering={FadeIn.duration(500).springify()}
         source={require('../../assets/images/welcome.png')}
         style={styles.welcomeImage}
         resizeMode={'contain'}
        />

        <View style={{...styles.container, marginTop: spacingY._10, justifyContent:'center', alignItems:'center'}}>
            <Typo size={25} fontWeight="800" color={colors.white}>Stay Connected</Typo>
            <Typo size={25} fontWeight="800" color={colors.white}>with your friends</Typo>
            <Typo size={25} fontWeight="800" color={colors.white}>and family</Typo>

            <Button style={{backgroundColor: colors.white , marginTop: spacingY._20, paddingHorizontal: spacingX._30}} 
             onPress={() => route.replace('/(auth)/register')}
             >
             <Typo size={18} fontWeight="700">Let's Go</Typo>
            </Button>
        </View>
    </ScreenWrapper>
  )
}

export default Welcome;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-around',
        alignItems:'center',
        paddingHorizontal: spacingX._20,
        marginVertical: spacingY._10
    },
    background:{
        flex:1,
        backgroundColor: colors.neutral900
    },
    welcomeImage:{
        height: verticalScale(300),
        aspectRatio:1,
        alignSelf: 'center'
    }
})