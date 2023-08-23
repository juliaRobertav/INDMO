import {View, Text, Button} from 'react-native'
import styles from './styles.js'

export default function Final({navigation, route}){

    const {dobro} = route.params

    return(
        <View style={styles.container}>
            <Text style={styles.txt}>Final</Text>

            <Text>
                {dobro}
            </Text>
            <Button
                title='Next Page'
                onPress={()=>navigation.navigate('Tela4')}
            />
        </View>
    )
}