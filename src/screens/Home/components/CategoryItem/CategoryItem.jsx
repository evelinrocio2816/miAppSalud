
import { Pressable, Text } from 'react-native'
import { Card } from '../../../../components'
import  styles  from './CategoryItem.styles'


const CategoryItem = ({category, navigation}) => {
  return (
    <Pressable onPress={()=>navigation.navigate('Medicos', {category})}>
        <Card style={styles.Container}>
            <Text style={styles.text}>
{category}
            </Text>
        </Card>
    </Pressable>
  )
}

export default CategoryItem