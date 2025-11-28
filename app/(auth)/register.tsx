import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import Typo from '@/components/Typo'
import { colors, radius, spacingX, spacingY } from '@/constants/theme'
import BackButton from '@/components/BackButton'
import Input from '@/components/Input'

const Register = () => {
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

            <Input />
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