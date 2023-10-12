import { StyleSheet } from "react-native";
import { colors } from "../../global/colors";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
        
    },
    image:{
        width:'40%',
        height:'27%',
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal: '20%',
        marginBottom:15,
      
    },
    profileCamera:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:colors.color1,
        padding:20,
        borderRadius:20,

    }
})