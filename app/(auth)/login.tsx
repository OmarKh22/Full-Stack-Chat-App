import { Alert, KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import Typo from '@/components/Typo'
import { colors, radius, spacingX, spacingY } from '@/constants/theme'
import BackButton from '@/components/BackButton'
import Input from '@/components/Input'
import { Envelope, Password, User } from 'phosphor-react-native'
import { useRouter } from 'expo-router'
import Button from '@/components/Button'

const Login = () => {

  const emailRef = useRef("");
  const passWordRef = useRef("");
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async()=>{
    if( !emailRef.current || !passWordRef.current){
      Alert.alert("LogIn","Please fill all the fields")
    }
  }
  return (
    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : 'height'} style={{ flex: 1 }}>
    <ScreenWrapper showPattern={true}>
      <View style={styles.container}>
        <View style={styles.header}>
            <BackButton />
            <Typo color={colors.white} size={17}>
              Forget Your password?
            </Typo>
        </View>
        <View style={styles.content}>
          <ScrollView contentContainerStyle={styles.form}
            showsVerticalScrollIndicator={false}
          >
            <View style={{gap: spacingY._10 , marginBottom: spacingY._15}}>
              <Typo size={24} fontWeight={"600"}>
                Welcome Back
              </Typo>
              <Typo color={colors.neutral600}>
                We Are Happy To See You Again!
              </Typo>
            </View>
          {/*  Inputs */}
            <Input 
             placeholder='Enter Your Email'
             icon={<Envelope  size={24} color={colors.neutral500}/>}
             onChangeText={(value: string)=>emailRef.current = value}
            />
            <Input 
             placeholder='Enter Your Password'
             icon={<Password  size={24} color={colors.neutral500}/>}
             onChangeText={(value: string)=>passWordRef.current = value}
             secureTextEntry
            />

            <View style={{marginTop: spacingY._20, gap: spacingY._15}}>
              <Button loading={isLoading} onPress={handleSubmit}>
                <Typo fontWeight="bold" color={colors.black}>
                  Login
                </Typo>
              </Button>
            </View>


          {/* Footer */}
            <View style={styles.footer}>
              <Typo>
                Don't have an account ?
              </Typo>
              <Pressable onPress={()=>router.push("/(auth)/register")}>
                <Typo color={colors.primaryDark} fontWeight="600">
                  Sign Up
                </Typo>
              </Pressable>
            </View>
          </ScrollView>
        </View>
      </View>
    </ScreenWrapper>
    </KeyboardAvoidingView>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    header: {
        paddingHorizontal: spacingX._20,
        paddingTop: spacingY._15,
        paddingBottom: spacingY._25,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center"
    },
    content: {
        flex: 1,
        backgroundColor: colors.white,
        borderTopLeftRadius: radius._50,
        borderTopRightRadius: radius._50,
        borderCurve: "continuous",
        paddingHorizontal: spacingX._20,
        paddingTop: spacingY._20
    },
    form: {
        gap: spacingY._15,
        marginTop: spacingY._20
    },
    footer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 5
    }
})