import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { InputProps } from '@/types'
import { colors } from '@/constants/theme';

const Input = (props: InputProps) => {
    const [isFocused, setIsFocused] = useState(false);
  return (
    <View
        // style={[
        //     styles.container,
        //     props.containerStyle && props.containerStyle,
        //     isFocused && styles.primaryBorder
        // ]}
    >
        {props.icon && props.icon}
      <TextInput 
       onFocus={()=>setIsFocused(true)}
       onBlur={()=>setIsFocused(false)}
    //    style={styles.input , props.inputStyle}
       placeholderTextColor={colors.neutral400}
       ref={props.inputRef && props.inputRef}
       {...props}
      />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({})