import {Image, Text, View } from 'react-native'
import React from 'react'
import { styles } from './Header.styles'

const Header = ({title}) => {
  return (
    <View  style={styles.container}>
      <Image style={styles.image} source={require('../../assets/Image/logo.png')}/>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default Header