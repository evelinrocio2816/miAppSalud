import { StyleSheet } from 'react-native'
import { colors } from '../../global/colors'


export default styles = StyleSheet.create({
  container: {
    backgroundColor: colors.color1,
    shadowColor: '#000',
    shadowOffset: { height: 5, width: 3 },
    elevation: 10,
    shadowOpacity: 1,
    shadowRadius: 1,
  },
})