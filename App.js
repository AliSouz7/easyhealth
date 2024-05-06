import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {

  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");

  const cadastro = () => {
    alert(nome);
    alert(sobrenome);
    alert(cpf);
    alert(senha);
  }


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Image style={{ width: 96, height: 100, }} source={require('./assets/Logo.png')} />

      <TextInput placeholder='SEU NOME....' style={styles.TextInput} onChangeText={text => setNome(text)} />
      <TextInput placeholder='SEU SOBRENOME....' style={styles.TextInput} onChangeText={text => setSobrenome(text)} />
      <TextInput placeholder='SEU CPF....' style={styles.TextInput} onChangeText={text => setCpf(text)} />
      <TextInput placeholder='SEU E-MAIL....' style={styles.TextInput} onChangeText={text => setEmail(text)} />
      <TextInput secureTextEntry={true} placeholder='SUA SENHA....' style={styles.TextInput} onChangeText={text => setSenha(text)} />
      <TextInput secureTextEntry={true} placeholder='REPITA A SENHA....' style={styles.TextInput} onChangeText={text => setSenha(text)} />



      <TouchableOpacity style={styles.btnCadastro} onPress={() => cadastro()}>
        <Text style={{ color: 'white', textAlign: 'center', }}>CADASTRAR</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  TextInput: {
    width: "100%",
    height: 40,
    backgroundColor: "white",
    borderRadius: 30,
    paddingLeft: 20,
    marginBottom: 10,
    borderColor: "black",
    justifyContent: "center"
  },
  btnCadastro: {
    width: "30%",
    height: 20,
    backgroundColor: "black",
    borderRadius: 10,
    justifyContent: "center"
  }
});
