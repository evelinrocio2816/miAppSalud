
import { StyleSheet } from 'react-native'
import { colors } from '../../../global/colors'


export default styles = StyleSheet.create({
  container: {
    flex: 1,
  padding:8,
  borderBottomWidth:1,
  borderBottomColor:colors.color6

},
name:{
    fontSize:30,
},
details:{
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
}
 
})