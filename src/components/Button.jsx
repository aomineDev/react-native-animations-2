import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Zocial } from '@expo/vector-icons'

import styles from 'assets/styles'

export default function Button ({ iconName, text, handlePress, textColor, fontSize, style }) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={handlePress}
    >
      <View
        style={[style, {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        }]}
      >
        {iconName && <Zocial name={iconName} color='white' size={25} style={{ marginRight: 16 }} />}
        <Text
          style={[
            {
              color: textColor || '#000',
              fontSize: fontSize || 20,
              fontWeight: 'bold'
            }
          ]}
        >{text}</Text>
      </View>
    </TouchableOpacity>
  )
}