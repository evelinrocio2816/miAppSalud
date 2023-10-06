import { StyleSheet } from 'react-native'


export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'
  },
  imageContainer: {
    height: '50%',
    width: '100%',
  },
  image: {
    height: '40%',
    width:'70%',
    
  },
  title: {
    fontSize: 30,
    fontFamily:'RelewayRegular'
  },
  description:{
    fontSize:20,
    fontFamily:'RelewayItalic'

  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 15,
  },
})