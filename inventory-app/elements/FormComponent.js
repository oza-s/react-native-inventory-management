import React from 'react'
import { Text, Header, Button } from 'react-native-elements'
import { View, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

const FormComponent = (props, inventoryData) => (
    <View>
        <FormLabel>Product Name:</FormLabel>
        <FormInput onChangeText={
            text => props.updateForm(text, 'product_name')
        } />
        <FormValidationMessage>
            Product Name is required
        </FormValidationMessage>

        <FormLabel>Bar Code</FormLabel>
        <FormInput onChangeText={
            text => props.updateForm(text, 'barcode')
        } />
        <FormValidationMessage>
            Bar code is required
        </FormValidationMessage>
    </View>
    )

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      btn: {
          backgroundColor: '#74489D',
          height: 40,
          width: 400,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,        

      },
})


export default FormComponent