import React from 'react'
import { View, TouchableOpacity, StyleSheet, Alert} from 'react-native'
import { Text, Button, CheckBox } from 'react-native-elements'
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
// import { xml2js} from 'react-native-xml2js'
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
        //alert(JSON.stringify(inventoryData));
    }


//login link
// https://sagaroza.quickbase.com/db/main?a=API_Authenticate&username=oza.s@husky.neu.edu&password=P@ssword1&hours=24 

//add_record api
// https://sagaroza.quickbase.com/db/bnuczcvmg?a=API_AddRecord&name=dfvgbhnjmk&barcode=qwertyuiop&ticket=9_bnui3n2bm_b32xpr_maxt_a_-b_5mp5fvj8fzn4bz67ukud3ubvrx3k5ntrd8bb9muccisbrwbeqmy2s_7ss6k7&app_token=dfign5svc2md9bnksj36djzg58w

    save = () => {
        
        data = `<qdbapi>
            <ticket>9_bnui9ywiz_b32xpr_maxt_a_-b_dzatuyccndmv75bw34w5wd6mri22cv3s5dxdyhtny7c4djewsngv6g5_7s5jqq</ticket>
            <apptoken>dfign5svc2md9bnksj36djzg58w</apptoken>
            <usertoken>b32xpr_maxt_9xin5bbb7spukc9hf588f4mf8z</usertoken>
            <field name="name">${this.state.inventoryData.product_name}</field>
            <field name="barcode">${this.state.inventoryData.barcode}</field>
            </qdbapi>`

        url = 'https://sagaroza.quickbase.com/db/bnuczcvnn?a=API_AddRecord?'
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
        //xml2js = require('react-native-xml2js');

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
                <FormLabel>Product Name:</FormLabel>
                <FormInput onChangeText={
                    text => this.updateForm(text, 'product_name')
                } />
                <FormValidationMessage>
                    Product Name is required
                </FormValidationMessage>

                <FormLabel>Bar Code</FormLabel>
                <FormInput onChangeText={
                    text => this.updateForm(text, 'barcode')
                } />
                <FormValidationMessage>
                    Bar code is required
                </FormValidationMessage>

              <View style={{flex:2,flexDirection:"row",justifyContent:'space-between', marginBottom: 15}}></View>

                <Button 
                    onPress={() => this.save()}
                    backgroundColor="#74489D"
                    color="#fff"
                    title="Save"
                    style={{ width: 50, height: 5000, backgroundColor: 'powderblue', 
                            marginTop: 300}} />

                <TouchableOpacity style={styles.btn}>
                <Text style={{fontSize: 18, fontWeight: '300', fontFamily: 'sans-serif', marginRight: 50,
            color: '#fff'}}>Save Record</Text>
                </TouchableOpacity>

                </View>
        )
    };  
}

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

export default InventoryForm