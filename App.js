// App.js
import React from 'react';
import { StyleSheet, Button, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bem-vindo ao Meu App!</Text>
      <TouchableOpacity style={styles.buton} onPress={() => navigation.navigate('Perfil')} >
        <Text style={{color: 'white', textAlign: 'center', marginTop: 10}}>Não Clique</Text>
      </TouchableOpacity>
    </View>
  );
}
function PerfilScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Olá, essa é a Tela 2 com seu perfil!</Text>
    </View>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Perfil" component={PerfilScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  buton: {
    width: '50%',
    height: 40,
    backgroundColor: '#000',
    marginTop: 20,
    marginLeft: 20

  },

  buton:hover {
    backgroundColor: '#1E90FF'
  },

});