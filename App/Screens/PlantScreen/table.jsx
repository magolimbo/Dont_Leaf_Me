import React, { Component } from 'react'
import {
    Platform,
    StyleSheet,
    View,
    Text
} from 'react-native'
import Table from 'react-native-simple-table'

// import DataFactory from '../mock/DataFactory'

const columns = [
    {
        title: 'ID',
        dataIndex: 'ID',
        width: 105
    },
    {
        title: 'AVG',
        dataIndex: 'AVG',
        width: 140
    },
    {
        title: 'Min',
        dataIndex: 'Min'
    },
    {
        title: 'Max',
        dataIndex: 'Max'
    },
];

class TableAvg extends Component {
    render() {
        // let dataSource = DataFactory.generate().data;
        return (
            <View style={styles.container}>
                <TableAvg height={320} columnWidth={60} columns={columns} dataSource={dataSource} />
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

export default TableAvg