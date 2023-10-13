import { Text, View, Image, Pressable } from "react-native";
import React, { useState } from "react";

import { styles } from "./Profile.styles";
import * as ImagePicker from "expo-image-picker";
import { useDispatch, useSelector } from "react-redux";
import { setCameraImage } from "../../features/Auth/authSlice";
import { usePostProfileImageMutation } from "../../services/medicApi";

const Profile = () => {
  const image = useSelector(state => state.auth.imageCamera);
  const { localId } = useSelector(state => state.auth)
  const [triggerSaveProfileImage,result ] = usePostProfileImageMutation()
  const dispatch = useDispatch();

  const verifyCameraPermissions = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      return false;
    }
    return true;
  };

  const pickImage = async () => {
    const isCameraOk = await verifyCameraPermissions();

    if (isCameraOk) {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [9, 16],
        base64: true,
        quality: 0.4,
      });
      if (!result.canceled) {
        console.log(result.assets);
        dispatch(
          setCameraImage(`data:image/jpeg;base64,${result.assets[0].base64}`)
        );
      }
    }
  };

  const confirmImage = () => {
    triggerSaveProfileImage({ image, localId })
    console.log(result);
  };

  return (
    <>
      <View style={styles.container}>
        {image ?  <Image
            source={{
              uri: image,
            }}
            style={styles.image}
            resizeMode="cover"
          /> : (
          <Image
            source={{
              uri: "https://static.vecteezy.com/system/resources/previews/024/293/032/non_2x/illustration-of-user-icon-in-gray-color-vector.jpg",
            }}
            style={styles.image}
            resizeMode="cover"
          />
        )}

        <Pressable style={styles.profileCamera} onPress={pickImage}>
          <Text>Tomar Foto De Perfil</Text>
        </Pressable>
        <Pressable style={styles.profileCamera} onPress={confirmImage}>
        <Text>Confirm</Text>
      </Pressable>
      </View>
    </>
  );
};

export default Profile;
