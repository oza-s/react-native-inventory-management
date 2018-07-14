import React from 'react'
import { View, TouchableOpacity, StyleSheet, Alert, Modal } from 'react-native'
import { Text, Button, CheckBox } from 'react-native-elements'
import ButtonComponent from './ButtonComponent'
import FormComponent from './FormComponent'
import { headerEnvelopeData, fieldTagNameOpen, fieldTagBarcodeOpen, fieldTagClose, rootTagClose, productionBaseUrl } from '../constants/constant'
import { xml2js } from 'react-native-xml2js'
import TableComponent from './TableComponent';
import NativeTableComponent from './NativeTableComponent';

class InventoryForm extends React.Component {
    constructor(props) {
        super(props)
        console.log('Inventory constructor')
        this.state = {
            inventoryData: {
                product_name: '',
                barcode: ''
            },
            inventoryArray: [{}],
            productNameError: '',
            barcodeError: '',
            modalVisible: false
        }
    }
    componentWillMount()
    {
        console.log('Inverntory comp will mount')
    }
    componentDidMount()
    {
        console.log('Inverntory comp did mount')
    }
    shouldComponentUpdate(nextProps, nextState)
    {
        console.log('Inventory should comp update')
        // We don't want to re render the NativeTable component.
        // If re-rendered then componentWillReceiveProps() of NativeTale will be triggered
        // componentWillReceiveProps() is triggered beccause props are passed and not passed
        // so returning false
        if(nextState.inventoryArray != this.state.inventoryArray)
        {
            console.log('Inventory should comp update triggered')
            return true;
        }
        return false;
    }
    componentWillUpdate()
    {
        console.log('Inventory comp will update')
    }
    componentDidUpdate()
    {
        console.log('Inventory comp did update')
    }
    componentWillUnmount()
    {
        console.log('Inventory comp will unmount')
    }
    updateForm(text, field) {
        // when we are ready to change the state
        if (field == 'product_name') {
            inventoryData = { ...this.state.inventoryData }
            inventoryData.product_name = text;
            this.setState({ inventoryData });
        }
        else if (field == 'barcode') {
            inventoryData = { ...this.state.inventoryData }
            inventoryData.barcode = text;
            this.setState({ inventoryData });
        }
    }

    save = () => {
        inventoryArray = [...this.state.inventoryArray];
        const inventoryData = { ...this.state.inventoryData}
        console.log('Save array before: ', JSON.stringify(inventoryArray))
        if(inventoryData.product_name === "")
        {
            console.log('Product Name is mandatory!')
            alert('Product name is mandatory');
            return;
        }
        if(inventoryData.barcode === "")
        {
            console.log('Barcode is mandatory!')
            alert('Barcode is mandatory!')
            return;
        }
        data = headerEnvelopeData +
            fieldTagNameOpen + inventoryData.product_name + fieldTagClose +
            fieldTagBarcodeOpen + inventoryData.barcode + fieldTagClose +
            rootTagClose

        url = productionBaseUrl;
        console.log("URL", data);

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/xml",
                "Content-Length": "",
                "QUICKBASE-ACTION": "API_AddRecord"
            },
            body: data
        })
            .then(res => {
                console.log(res)
                let inventoryArrays = this.state.inventoryArray.slice();
                inventoryArrays.push(inventoryData)
                console.log('Array pushed:', JSON.stringify(inventoryArrays))
                this.setState({
                    inventoryArray: inventoryArrays
                });
                console.log('Response success & stringying array',JSON.stringify(this.state.inventoryArray))
                console.log('Data pushed in array')
                
                //alert("Inventory data saved")
            })
            .catch(error => 
                {
                    console.log(error)
                alert("There was error while saving data!")
                })
        // https://sagaroza.quickbase.com/db/bnuczcvnn?a=API_AddRecord&_name=dfvgbhnjmk&_barcode=qwertyuiop&ticket=9_bnuiz4naj_b32xpr_maxt_a_-b_cyts7nbc3qxkx8d9sy3x63cpwvdbt5rqiudixqeuxb9sj6bidk3xymt_7sqq5n&apptoken=app_token=dfign5svc2md9bnksj36djzg58w
        console.log(this.state.inventoryData);
    }

    render() {
        console.log('Inventory render')
        return (
            <View>
                <FormComponent updateForm={this.updateForm.bind(this)} />
                <ButtonComponent save={() => this.save} />

                {/* <TableComponent dataSource={this.state.inventoryArray}/> */}
                <NativeTableComponent dataSource={this.state.inventoryArray}/>
                
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