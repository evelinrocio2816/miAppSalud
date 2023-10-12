
import { StyleSheet } from "react-native";
import { colors } from "../../global/colors";

export default styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    } ,
    loginContainer:{
      
       width:'100%',
       paddingHorizontal:20,
       justifyContent:'center',
       alignItems:'center'
    },
    inputEmail:{
        width:'95%',
        height:40,
        backgroundColor:colors.color1,
        marginVertical:10,
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:25,
        fontFamily:'RelewayItalic',
        fontSize:15,
       
    
    },
    loginButtom:{
        backgroundColor:colors.color6,
        width:'40%',
        height:50,
        borderRadius:20,
        marginBottom:15,
        justifyContent:'center',
        alignItems:'center'
    }
})