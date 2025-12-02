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

const Register = () => {

  const nameRef = useRef("");
  const emailRef = useRef("");
  const passWordRef = useRef("");
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async()=>{
    if(!nameRef.current || !emailRef.current || !passWordRef.current){
      Alert.alert("Sign Up","Please fill all the fields")
    }
  }
  return (
    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : 'height'} style={{ flex: 1 }}>
    <ScreenWrapper showPattern={true}>
      <View style={styles.container}>
        <View style={styles.header}>
            <BackButton />
            <Typo color={colors.white} size={17}>
              Need Some Help?
            </Typo>
        </View>
        <View style={styles.content}>
          <ScrollView contentContainerStyle={styles.form}
            showsVerticalScrollIndicator={false}
          >
            <View style={{gap: spacingY._10 , marginBottom: spacingY._15}}>
              <Typo size={24} fontWeight={"600"}>
                Getting Started
              </Typo>
              <Typo color={colors.neutral600}>
                Create an Account
              </Typo>
            </View>
          {/*  Inputs */}
            <Input 
             placeholder='Enter Your Name'
             icon={<User size={24} color={colors.neutral500}/>}
             onChangeText={(value: string)=>nameRef.current = value}
            />
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
                <Typo fontWeight="bold" color={colors.black}>Sign Up</Typo>
              </Button>
            </View>


          {/* Footer */}
            <View style={styles.footer}>
              <Typo>
                Alredy have an account ?
              </Typo>
              <Pressable onPress={()=>router.push("/(auth)/login")}>
                <Typo color={colors.primaryDark} fontWeight="600">
                  Log In
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

export default Register

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