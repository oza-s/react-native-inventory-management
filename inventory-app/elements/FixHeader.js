import React from 'react'
import { Text, View, Header } from 'react-native-elements'

const FixedHeader = () => (
        <Header backgroundColor='#74489D'
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={<Text style={{fontSize: 18, fontWeight: '300', fontFamily: 'sans-serif', 
            color: '#fff'}}>
            QuickBase Inventory Management</Text>}
        rightComponent={{ icon: 'home', color: '#fff' }}/>
    
)

export default FixedHeader