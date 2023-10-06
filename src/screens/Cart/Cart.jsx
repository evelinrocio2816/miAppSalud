import { FlatList, Text, View,Pressable } from 'react-native'
import styles from './Cart.styles'
import dataCart from '../../data/dataCart'
import CartItem from './components/CartItem'

const Cart = () => {
  const renderItem=() =>
    <CartItem/>
  
  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
       <FlatList 
       data={dataCart}
        renderItem={renderItem} 
       keyExtractor={item => item.id}/>
      </View>
     
      <View style={styles.containerButton} >
          <View>
         <Text>Total Consulta: $</Text>
          
        </View> 
        <View style={styles.buttonContainer}>
       <Pressable>
        <Text>Confirm</Text>
       </Pressable>
       <Pressable>
        <Text>Cancel</Text>
       </Pressable>
       </View>
    
       </View> 
      
    </View>
  
  )
}

export default Cart

