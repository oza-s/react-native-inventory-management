import React from 'react'
import { View, TouchableOpacity, StyleSheet, Alert} from 'react-native'
import { Text, Button, CheckBox } from 'react-native-elements'
import ButtonComponent from './ButtonComponent'
import FormComponent from './FormComponent'
import { headerEnvelopeData, fieldTagNameOpen, fieldTagBarcodeOpen, fieldTagClose, rootTagClose, productionBaseUrl } from '../constants/constant'
import { xml2js} from 'react-native-xml2js'
// import { js2xmlparser} from 'js2xmlparser'
// import validate from 'validate_wrapper' 

class InventoryForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inventoryData: {
                    product_name: '',
                    barcode: ''
                    },            
            productNameError:'',
            barcodeError: ''
        }
    }

    updateForm(text, field) {
        if(field == 'product_name')
        {
            
            alert(JSON.stringify(this.state));
            inventoryData = {...this.state.inventoryData}
            inventoryData.product_name = text;
            this.setState({inventoryData});
        }
        else if(field == 'barcode')
        {
            inventoryData = {...this.state.inventoryData}
            inventoryData.barcode = text;
            this.setState({inventoryData});
        }
        alert(JSON.stringify(inventoryData));
    }

    save = () => {

        data =  headerEnvelopeData + 
                fieldTagNameOpen + this.state.inventoryData.product_name + fieldTagClose +
                fieldTagBarcodeOpen + this.state.inventoryData.barcode + fieldTagClose +
                rootTagClose

        url = productionBaseUrl;
        console.log("URL", data);
        Alert.alert(JSON.stringify(this.state.inventoryData));

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/xml",
                "Content-Length":"",
                "QUICKBASE-ACTION": "API_AddRecord"
            },
            body: data
        })
        .then(res => console.log(res))
        .catch(error => console.log(error))
       // https://sagaroza.quickbase.com/db/bnuczcvnn?a=API_AddRecord&_name=dfvgbhnjmk&_barcode=qwertyuiop&ticket=9_bnuiz4naj_b32xpr_maxt_a_-b_cyts7nbc3qxkx8d9sy3x63cpwvdbt5rqiudixqeuxb9sj6bidk3xymt_7sqq5n&apptoken=app_token=dfign5svc2md9bnksj36djzg58w
        // xml2js = require('react-native-xml2js');

        // const productNameError = validate('product_name', this.state.product_name)
        // const barcodeError = validate('barcode', this.state.barcode)
    
        // this.setState({
        //     productNameError: productNameError,
        //     barcodeError: barcodeError
        // })
        console.log(this.state.inventoryData);
        // if (!productNameError && !barcodeError) {
        //   alert('Details are valid!')
        // }


    }

    render() {
        return (
            <View>
                <FormComponent inventoryData={this.state.inventoryData} updateForm={this.updateForm}/>
                <ButtonComponent save={() => this.save}/>
            </View>
        )
    };  
}

export default InventoryForm