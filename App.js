import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  //userState devolve um vetor
  const[texto, setTexto] = useState('Texto Inicial!');
  const[contador, setContador] = useState(0);
  
  var sorteados = [];
  var valorMaximo = 60;

  function criarUnico(){
    if (sorteados.length == valorMaximo){
      if (confirm('Já não há mais! Quer recomeçar?')) sorteados = [];
      else return;
    }
    var sugestao = Math.ceil(Math.random() * valorMaximo); // Escolher um numero ao acaso
    while (sorteados.indexOf(sugestao) >= 0) {  // Enquanto o numero já existir, escolher outro
        sugestao = Math.ceil(Math.random() * valorMaximo);
    }
    sorteados.push(sugestao); // adicionar este numero à array de numeros sorteados para futura referência
    return sugestao; // devolver o numero único
  }

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
        title="Contador Aleatório" 
        onPress={() => setContador(criarUnico())}
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
    backgroundColor: '#483D8B',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
