import React, { useState, useRef } from 'react'
import { Text, View, ScrollView, Animated, ImageBackground, Dimensions } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import { Button, Input } from 'components'

import styles from 'assets/styles'

const { width } = Dimensions.get('screen')

export default function App () {
  const [blur, setBlur] = useState(0)
  const [theme, setTheme] = useState('dark')

  const alignment = useRef(new Animated.Value(width / 3)).current
  const buttonAlignment = useRef(new Animated.Value(400)).current

  const containerBg = theme === 'dark' ? 'rgba(0, 0, 0, .5)' : 'rgba(255, 255, 255, .6)'
  const textInputColor = theme === 'dark' ? 'white' : 'black'
  const submitColor = theme === 'dark' ? 'white' : 'black'
  const dynamicBoder = {
    borderBottomColor: theme === 'dark' ? '#aaa' : 'black'
  }
  const placeholderColor = theme === 'dark' ? '#aaa' : '#333'

  function animateAlignmentToTop () {
    Animated.timing(alignment, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false
    }).start(() => {
      AnimateButtonsToTop()
    })
  }

  function animateAlignmentToBottom () {
    Animated.timing(alignment, {
      toValue: width / 3,
      duration: 500,
      useNativeDriver: false
    }).start(() => {
      AnimateButtonsToBottom()
    })
  }

  function AnimateButtonsToTop () {
    Animated.timing(buttonAlignment, {
      toValue: 0,
      diration: 500,
      useNativeDriver: false
    }).start(() => {
      setBlur(15)
      setTheme('light')
    })
  }

  function AnimateButtonsToBottom () {
    Animated.timing(buttonAlignment, {
      toValue: 400,
      diration: 500,
      useNativeDriver: false
    }).start(() => {
      setBlur(0)
      setTheme('dark')
    })
  }

  const buttonsAlignment = {
    transform: [
      {
        translateY: buttonAlignment
      }
    ]
  }

  return (
    <ImageBackground
      source={{ uri: 'https://desktopwalls.net/wp-content/uploads/2015/02/Firewatch%20Game%20Campo%20Santo%20Desktop%20Wallpaper.jpg' }}
      style={styles.bg}
      blurRadius={blur}
    >
      <ScrollView
        style={[styles.container, { backgroundColor: containerBg }]}
      >
        <View style={styles.inputContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.title}>SIGN IN</Text>
            <Button text='/ UP' style={{ marginTop: 16, marginLeft: 12 }} />
          </View>
          <Animated.View style={{ marginTop: alignment }}>
            <Input
              textInputColor={textInputColor}
              placeholder='Username'
              placeholderColor={placeholderColor}
              style={dynamicBoder}
              handleFocus={animateAlignmentToTop}
              handleBlur={animateAlignmentToBottom}
            />
            <Input
              textInputColor={textInputColor}
              placeholder='Password'
              placeholderColor={placeholderColor}
              style={dynamicBoder}
              handleFocus={animateAlignmentToTop}
              handleBlur={animateAlignmentToBottom}
            />
          </Animated.View>
          <View style={styles.submitContainer}>
            <Button text='Enter >' textColor={submitColor} />
          </View>
        </View>
        <Animated.View style={[styles.buttonsContainer, buttonsAlignment]}>
          <Button
            iconName='facebook'
            text='Sign in With Facebook'
            style={[styles.socialBtn, styles.facebookBtn]}
            textColor='#fff'
            fontSize={16}
          />
          <Button
          iconName='twitter'
          text='Sign in With Twitter'
          style={[styles.socialBtn, styles.twitterBtn]}
          textColor='#fff'
          fontSize={16}
          />
        </Animated.View>
      </ScrollView>
      <StatusBar style="dark" />
    </ImageBackground>
  )
}
