import { StyleSheet } from "react-native";
import { colors } from "../../global/colors";
import fonts from "../../global/fonts";

 export const styles = StyleSheet.create({
    container:{
        
        flexDirection:'row',
        backgroundColor: colors.color4,
        width:'100%',
        height:130,
        justifyContent:'space-evenly',
        alignItems:'center',
        
    },
    image:{
        height:90,
        width:'20%',
      
       
    },
    text:{
        fontFamily:'RelewayItalic',
        fontSize:40,
        color:'#fff'
    }
 })