import {View, Text, Button} from 'react-native'
import styles from './styles.js'

export default function Final({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.txt}>Final</Text>
            <Button
                title='Login'
                onPress={()=>navigation.navigate('Login')}
            />
        </View>
    )
}
