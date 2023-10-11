import { StyleSheet } from "react-native"




export default styles = StyleSheet.create({
    container:{
        flex:1,
        borderBottomWidth:1,
        padding:8,
        borderBottomColor:'#000000',
    
    },
    name:{
        fontSize:18,
    },
    details:{
        flex:1, 
        flexDirection:'row',
        flexWrap:'wrap',
        alignItems:'center',
        justifyContent:'space-between'
    }
})