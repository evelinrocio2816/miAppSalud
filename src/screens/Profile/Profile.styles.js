import { StyleSheet } from "react-native";
import { colors } from "../../global/colors";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
        
    },
    image:{
        width:200,
        height:200,
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal: '20%',
        marginBottom:15,
        borderRadius:95,
      
    },
    profileCamera:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:colors.color1,
        padding:20,
        borderRadius:20,
     marginTop:10,

    }
})