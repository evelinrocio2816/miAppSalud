import { Pressable, Text, TextInput, View } from "react-native";
import React, { useState } from 'react'

import styles from './Login.styles'
import { useDispatch } from 'react-redux'
import { useLoginMutation } from '../../services/AuthApi'
import { setUser } from "../../features/Auth/authSlice";



const Login = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [triggerLogin,result] = useLoginMutation()
  const dispatch = useDispatch()

  const onSubmit = () => {
    triggerLogin({
      email,
      password,
    })
     console.log(result);
     if(result. isSuccess){
      dispatch(setUser(result))
    }
  }
  return (
    <View style={styles.container}>
     
      <View style={styles.loginContainer}>
        <Text>Login</Text>
        <TextInput style={styles.inputEmail} placeholder="Email" value={email}onChangeText={setEmail} />
        <TextInput style={styles.inputEmail} placeholder="Password" value={password} onChangeText={setPassword}/>
        <Pressable style={styles.loginButtom} onPress={onSubmit}>
            <Text style={{color:'white'}}>Login</Text>
        </Pressable>
        <Text >No have an Account?</Text>
        <Pressable style={styles.loginButtom} onPress={()=>navigation.navigate('SignUp')}>
            <Text style={{color:'white'}} >Sign Up</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;


