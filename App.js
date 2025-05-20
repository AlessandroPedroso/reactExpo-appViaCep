import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import api from "./src/services/api";

export default function App() {
  const [cep, setCep] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.text}>Digite o cep desejado</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex:79003241"
          value={cep}
          onChangeText={(texto) => setCep(texto)}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.areaBtn}>
        <TouchableOpacity
          style={[styles.botao, { backgroundColor: "#1D75CD" }]}
        >
          <Text style={styles.botaoText}>Buscar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.botao, { backgroundColor: "#CD3E1D" }]}
        >
          <Text style={styles.botaoText}>Limpar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.resultados}>
        <Text style={styles.itemText}>CEP: 79000000</Text>
        <Text style={styles.itemText}>Logradouro: 79000000</Text>
        <Text style={styles.itemText}>Bairro: 79000000</Text>
        <Text style={styles.itemText}>Cidade: 79000000</Text>
        <Text style={styles.itemText}>Estado: 79000000</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  text: {
    marginTop: 25,
    marginBottom: 15,
    fontSize: 25,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 5,
    width: "90%",
    padding: 10,
    fontSize: 18,
  },
  areaBtn: {
    alignItems: "center",
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  botao: {
    height: 50,
    justifyContent: "center",
    padding: 12,
    borderRadius: 5,
  },
  botaoText: {
    fontSize: 22,
    color: "#FFF",
  },
  resultados: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemText: {
    fontSize: 22,
  },
});
