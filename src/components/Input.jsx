import React from 'react'
import { View, TextInput } from 'react-native'

import styles from 'assets/styles'

export default function Input ({ textInputColor, placeholder, placeholderColor, style, handleChangeText, handleFocus, handleBlur }) {
  return (
    <View style={[style, styles.input]}>
      <TextInput
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={{ fontSize: 18, textAlign: 'center', color: textInputColor }}
        placeholder={placeholder}
        placeholderTextColor={placeholderColor}
        onChangeText={handleChangeText}
      />
    </View>
  )
}
