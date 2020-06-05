import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  //userState devolve um vetor
  const[texto, setTexto] = useState('Texto Inicial!');
  const[contador, setContador] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={{marginBottom: 16}}>{texto}</Text>
      <Button 
        title="Alterar texto" 
        onPress={() => setTexto("Novo Texto!")}
      />
      <Button 
        title="Texto inicial" 
        onPress={() => setTexto('Texto Inicial!')}
      />
      
      <Text style={{marginTop: 16}}>{contador}</Text>
      <Button 
        title="Contador mais um" 
        onPress={() => setContador(contador + 1)}
      />
      <Button 
        title="Zerar contador" 
        onPress={() => setContador(0)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
