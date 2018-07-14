import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  View,
  Text
} from 'react-native'
import Table from 'react-native-simple-table'
 
const columns = [
  {
    title: 'Product Name',
    dataIndex: 'name',
    width: 200,
    backgroundColor: '#74489D'
  },
  {
    title: 'Barcode',
    dataIndex: 'barcode',
    width: 200
  },
];
 
class TableComponent extends Component {

    constructor(props)
    {
        super(props);
        this.state = {inventoryArray: [props.dataSource]}
        //alert(JSON.stringify(this.state.inventoryArray));
    }

    componentWillReceiveProps(nextProps)
    {
      console.log(JSON.stringify(nextProps))
      var inventoryArray = nextProps.dataSource;
      this.setState({ inventoryArray:inventoryArray})
    }

  render() {
    let dataSources = this.props.dataSource;

    return (
      <View flex={1} style={styles.container}>
        <View backgroundColor="#74489D">
            <Text style={styles.title}>Inventory History</Text>
        </View>
        <Table height={320} columnWidth={100} columns={columns} dataSource={this.state.inventoryArray} />
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {
        paddingTop: 20
      },
      android: {}
    }),
    
  },
  title: {
    fontSize: 18,
    padding: 10,
    textAlign: 'center'
  }
});
 
export default TableComponent