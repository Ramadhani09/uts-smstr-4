import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Beranda from './screens/Beranda';
import Mutasi from './screens/Mutasi';
import Aktivitas from './screens/Aktivitas';
import Akun from './screens/Akun';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Beranda' component={Beranda} options={{
          tabBarLabel: 'Beranda',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home-account" color={color} size={30} />
          ),
        }} />

        <Tab.Screen name='Mutasi' component={Mutasi} options={{
          tabBarLabel: 'Mutasi',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book-open-outline" color={color} size={30} />
          ),
        }} />

        <Tab.Screen name='Aktivitas' component={Aktivitas} options={{
          tabBarLabel: 'Aktivitas',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="email-outline" color={color} size={30} />
          ),
        }} />

        <Tab.Screen name='Akun' component={Akun} options={{
          tabBarLabel: 'Akun',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={30} />
          ),
        }} />

      </Tab.Navigator>
    </NavigationContainer>

  );
};

export default App

const styles = StyleSheet.create({})