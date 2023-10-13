import { Pressable, Text, TextInput, View } from "react-native";
import styles from "./SignUp.styles";
import { Header } from "../../components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/Auth/authSlice";
import { useSignUpMutation } from "../../services/AuthApi";

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [triggerSignUp,result] = useSignUpMutation();
  const dispatch = useDispatch();

  const onSubmit = () => {
    console.log(email, password, confirmPass);
    triggerSignUp({
      email,
      password,
    });

    console.log(result);
    if(result. isSuccess){
      dispatch(setUser(result))
    }
  
  };

  return (
    <>
      <Header title={"Welcome to Salud"} />
      <View style={styles.container}>
        <View style={styles.loginContainer}>
          <Text>Sign Up To Start</Text>
          <TextInput
            style={styles.inputEmail}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.inputEmail}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
          />
          <TextInput
            style={styles.inputEmail}
            placeholder="Confirm Pasword"
            value={confirmPass}
            onChangeText={setConfirmPass}
          />
          <Pressable style={styles.loginButtom} onPress={onSubmit}>
            <Text style={{ color: "white" }}>Sign Up</Text>
          </Pressable>
          <Text>Already have an Account?</Text>
          <Pressable style={styles.loginButtom}>
            <Text style={{ color: "white" }} onPress={()=>navigation.navigate('Login')}>Login</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default SignUp;
