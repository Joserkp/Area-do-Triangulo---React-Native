import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [base, setBase] = React.useState('');
  const [altura, setAltura] = React.useState('');
  const [exibirResultado, setExibirResultado] = React.useState(false);

  const calcularArea = () => {
    const baseFloat = parseFloat(base);
    const alturaFloat = parseFloat(altura);

    if (!isNaN(baseFloat) && !isNaN(alturaFloat)) {
      const area = (baseFloat * alturaFloat) / 2;
      return area.toFixed(2);
    } else {
      return 'Por favor, insira valores válidos para base e altura.';
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Insira a base e a altura do triângulo:</Text>
      <TextInput onChangeText={setBase} style={styles.txtField} keyboardType="numeric" placeholder="Base" />
      <TextInput onChangeText={setAltura} style={styles.txtField} keyboardType="numeric" placeholder="Altura" />
      <TouchableOpacity onPress={() => setExibirResultado(true)} style={styles.botao}>
        <Text style={styles.field}>Calcular Área</Text>
      </TouchableOpacity>

      {exibirResultado && <Text style={styles.field}>Área do triângulo: {calcularArea()}</Text>}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(53, 55, 75)',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  field: {
    color: '#0c0c0c',
    fontSize: 18,
    marginBottom: 10,
  },
  txtField: {
    backgroundColor: 'white',
    width: 'auto',
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
  },
  botao: {
    backgroundColor: 'orange',
    width: 'auto',
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
    alignItems: 'center',
  },
});