import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Text, Button, CheckBox } from 'react-native-elements'
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
// import validate from 'validate_wrapper' 

class InventoryForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            product_name: '',
            barcode: '',
            productNameError:'',
            barcodeError: ''
        }
    }

    updateForm(newState) {
        this.setState(newState)
    }

    save() {
        const productNameError = validate('product_name', this.state.product_name)
        const barcodeError = validate('barcode', this.state.barcode)
    
        this.setState({
            productNameError: productNameError,
            barcodeError: barcodeError
        })
    
        if (!productNameError && !barcodeError) {
          alert('Details are valid!')
        }
    }

    render() {
        return (
            <View>
                <FormLabel>Product Name:</FormLabel>
                <FormInput onChangeText={
                    text => this.updateForm({ title: text })
                } />
                <FormValidationMessage>
                    Product Name is required
                </FormValidationMessage>

                <FormLabel>Bar Code</FormLabel>
                <FormInput onChangeText={
                    text => this.updateForm({ description: text })
                } />
                <FormValidationMessage>
                    Bar code is required
                </FormValidationMessage>

              <View style={{flex:2,flexDirection:"row",justifyContent:'space-between', marginBottom: 15}}></View>

                <Button backgroundColor="#74489D"
                    color="white"
                    title="Save"
                    style={{ width: 50, height: 5000, backgroundColor: 'powderblue', 
                            marginTop: 300}} />

                <TouchableOpacity style={{ height: 50, marginTop: 10, 
                                        width: 250, borderColor: 'black',
                                        alignItems: 'center',
                                        backgroundColor: 'powderblue' }}>
                    <Text>My button</Text>
                </TouchableOpacity>

            </View>
        )
    };
}

export default InventoryForm