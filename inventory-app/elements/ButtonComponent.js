import React from 'react'
import { Text, Header, Button } from 'react-native-elements'
import { View, TouchableOpacity, StyleSheet, Alert} from 'react-native'

const ButtonComponent = (props) => (
    <View style={{ flex: 1, flexDirection: "row", justifyContent: 'space-between', marginBottom: 15 }}>
        <Button
            onPress={props.save()}
            backgroundColor="#74489D"
            color="#fff"
            title="Save"
            style={styles.btn} />

        <TouchableOpacity style={styles.btn}>
            <Text style={{
                fontSize: 18, fontWeight: '300', fontFamily: 'sans-serif', marginRight: 50,
                color: '#fff'
            }}>Save Record</Text>
        </TouchableOpacity>
    </View>
)

const styles = StyleSheet.create({
    btn : {
        width: 50, height: 50, backgroundColor: 'powderblue',
        marginTop: 5, 
    }

})

export default ButtonComponent