import { StyleSheet } from 'react-native'
import { colors } from '../../global/colors'


export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
   
  },
  imageContainer: {
    height: '50%',
    width: '100%',
  },
  image: {
    
    marginHorizontal:40,
    height: '60%',
    width:'70%',
    
  },
  title: {
    fontSize: 30,
    fontFamily:'RelewayRegular',
    marginHorizontal:40,
  },
  description:{
    fontSize:20,
    fontFamily:'RelewayItalic',
    marginHorizontal:40,

  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 15,
    marginHorizontal:40,
  },
  button:{
    backgroundColor:colors.color1,
    width:150,
   padding:20,
   marginLeft:'40%',
   marginBottom:10,
   borderRadius:20,
  },
  textButton:{
    fontSize:20,
    fontFamily:'RelewayItalic',
    color:'#fff'
  },
})