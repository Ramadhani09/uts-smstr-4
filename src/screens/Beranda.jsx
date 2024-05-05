import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Data = [
    { id: 1, nmicon: 'plus-box-outline', jdlicon: 'Isi Saldo' },
    { id: 2, nmicon: 'swap-horizontal', jdlicon: 'Transfer' },
    { id: 3, nmicon: 'credit-card-scan', jdlicon: 'Pindai' },
    { id: 4, nmicon: 'book-plus-outline', jdlicon: 'Top Up' },
    { id: 4, nmicon: 'cellphone', jdlicon: 'Pulsa & data' },
];

const Beranda = () => {
    return (
        <View style={{ padding: 25 }}>
            <FlatList
                data={Data}
                horizontal={true}
                renderItem={({ item }) => (
                    <TouchableOpacity style={{ marginRight: 30, width: 50 }}>
                        <View style={{ width: 50, height: 50, backgroundColor: '#1e90ff', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                            <MaterialCommunityIcons name={item.nmicon} color='white' size={30} />
                        </View>
                        <Text style={{ color: 'black', fontSize: 13, marginTop: 10, textAlign: 'center' }}>{item.jdlicon}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
};

export default Beranda

const styles = StyleSheet.create({})