import { Text, View ,Image, Pressable} from 'react-native'
import React, { useState } from 'react'
import { Header } from '../../components'
import { styles } from './Profile.styles'
import * as ImagePicker from 'expo-image-picker'
import { useDispatch ,useSelector} from 'react-redux'
import { setCameraImage } from '../../features/Auth/authSlice'


const Profile = () => {
    const image = useSelector(state => state.auth.imageCamera)
    
    const dispatch=useDispatch()

    const verifyCameraPermissions = async () => {
        const {granted}= await ImagePicker.requestCameraPermissionsAsync()
        if (!granted) {
            return false
          }
          return true
      }
    
      const pickImage = async () => {
          const isCameraOk = await verifyCameraPermissions()

    if (isCameraOk) {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [9, 16],
        base64: true,
        quality: 0.4,
      })
      if (!result.canceled) {
        console.log(result.assets)
        dispatch(
          setImage(`data:image/jpeg;base64,${result.assets[0].base64}`)
        )
      }
    }
      }
    
      const confirmImage = () => {
        dispatch(setCameraImage(images))
      }

  return (<>
    <View>
        <Header title={'Profile'}/>

    </View>
    <View style={styles.container}>
      {image ? null: <Image source={{
        uri:'https://static.vecteezy.com/system/resources/previews/024/293/032/non_2x/illustration-of-user-icon-in-gray-color-vector.jpg'
      }} style={styles.image}
      resizeMode='cover'/>}
     
     <Pressable style={styles.profileCamera} onPress={pickImage}>
        <Text>Tomar Foto De Perfil</Text>
     </Pressable>
    </View>
    </>
  )
}

export default Profile

