import { Pressable, Text, TextInput, View } from "react-native";
import styles from './Login.styles'



const Login = () => {
  return (
    <View style={styles.container}>
     
      <View style={styles.loginContainer}>
        <Text>Login</Text>
        <TextInput style={styles.inputEmail} placeholder="Email" />
        <TextInput style={styles.inputEmail} placeholder="Password" />
        <Pressable style={styles.loginButtom}>
            <Text style={{color:'white'}}>Login</Text>
        </Pressable>
        <Text >No have an Account?</Text>
        <Pressable style={styles.loginButtom}>
            <Text style={{color:'white'}} >Sign Up</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;
