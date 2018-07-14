import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import { ScrollView, Text } from 'react-native';
import { FormLabel } from 'react-native-elements';

class NativeTableComponent extends Component {

    constructor(props) {
        super(props);
        var tableHead = ['Product Name', 'Barcode'];
        console.log('NativeTable constructor')
        this.state = {
            inventoryArr: [{}]
        };
    }

    componentWillMount() {
        console.log('NativeTable comp will mount')
    }
    shouldComponentUpdate(nextProps, nextState) {
        //console.log('NativeTable should comp update', JSON.stringify(this.state))
        console.log('NativeTable should comp update', JSON.stringify(nextState))
        if (nextState.inventoryArray != this.state.inventoryArr) {
            return true;
        }
        return false;
    }
    componentWillUpdate() {
        console.log('NativeTable comp will update')
    }
    componentDidUpdate() {
        console.log('NativeTable comp did update')
    }
    componentWillUnmount() {
        console.log('NativeTable comp will unmount')
    }
    componentDidMount() {
        console.log('NativeTable comp did mount')
    }
    componentWillReceiveProps(nextProps, nextState) {
        console.log('receive Props Native Table')
        console.log('receive prps this', JSON.stringify(this.props))
        console.log('receive prps', JSON.stringify(nextProps))
        //this.inventoryArr = nextProps.dataSource; //this will have updated inventory array after push and api call
        this.setState({
            inventoryArr: nextProps.dataSource
        })
        //console.log('componentwill receive props',JSON.stringify(this.state.inventoryArray))
        //never set state here
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('compon did update Native Table')
        console.log('componentidid update props', JSON.stringify(prevProps))
        console.log('componentidid update state', JSON.stringify(prevState.inventoryArray))

        if (prevProps.inventoryArray != this.props.inventoryArray) {
            alert('Not equals')
            this.setState({ inventoryArray: this.props.inventoryArray })
            console.log('componentwill receive props', JSON.stringify(this.state.inventoryArray))
        }
    }

    render() {
        // this was called on click of save because 
        // on save, state changed which triggered
        // shouldComponentUpdate() - which is true bydefault so IGNORED
        //          |
        // componentWillUpdate() triggered, not present so IGNORED
        //          |
        // render()  of InverntoryForm triggered. This lead to change in props as well
        //          | 
        // compoentnWillReceiveProps() triggered which recieved updated props
        //          |
        // render() of NativeTable triggered which has new updated props
        //          |
        // componentDidUpdate() triggered once render() is finished

        console.log('Render Native Table', JSON.stringify(this.props.dataSource));
        console.log('InventryArr:', this.state.inventoryArr);
        return (
            <View style={styles.container}>
                <View style={styles.container} flexDirection={'row'}>
                    <FormLabel>Product Name:</FormLabel><FormLabel>Barcode:</FormLabel>
                </View>
                {this.state.inventoryArr.map((data, index) => (
                    <View style={styles.container} flexDirection={'row'} key={index}>
                        <FormLabel>{data.product_name ? data.product_name : ''}</FormLabel>
                        <FormLabel>{data.barcode ? data.barcode : ''}</FormLabel>
                    </View>
                ))}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    row: { height: 30 },
    header: { height: 50, backgroundColor: '#537791' },
    text: { textAlign: 'center', fontWeight: '100' },
    dataWrapper: { marginTop: -1 },
    row: { height: 40, backgroundColor: '#E7E6E1' }
});

export default NativeTableComponent