import { StyleSheet, Text, View } from 'react-native'
import { styles } from './Orders.styles'
import { Header } from '../../components'

const Orders = () => {
  return (
    <View style={styles.container}>
        <Header title={'Orden de turno'}/>
      <Text>Orders</Text>
    </View>
  )
}

export default Orders

