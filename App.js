import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [age, setAge] = useState("")
  const [lower, setLower] = useState("")
  const [upper, setUpper] = useState("")

  const calculate = () => {
    resultLower = (220-age) * 0.65
    resultUpper = (220-age) * 0.85 
    setLower(resultLower)
    setUpper(resultUpper)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Age</Text>
      <TextInput
            style={styles.text}
            value = {age}
            onChangeText = {text => setAge(text)}
            keyboardType='desimal-pad'
          />
      <Text style={styles.text}>Limit</Text>
      <Text style={styles.text}>
        {lower > 0 && upper > 0 ? `${lower.toFixed(0)} - ${upper.toFixed(0)}` : "-"}
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="Calculate" onPress={calculate} color="red" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'Flex-start',
    justifyContent: 'Flex-start',
    marginTop: 32,
    padding: 16
  },
  text: {
    padding: 8,
  },
  buttonContainer: {
    marginTop: 16,
    Padding: 16,
    color: 'red'
  }
});
