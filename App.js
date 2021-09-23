import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Menu from './components/Menu'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cardápio</Text>
      <Menu valor={0}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F3F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    width:'100%',
    marginTop:30,
    borderWidth:1,
    borderRadius:8,
    fontSize:30,
    color:'#281147',
    fontWeight:'bold',
    textAlign:'center',
  },

});
