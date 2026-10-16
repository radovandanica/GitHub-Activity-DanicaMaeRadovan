import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, Button, Alert, Platform, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

export default function SignInScreen({ navigation }) {
  const [fullName, setFullName] = useState('');

  useFocusEffect(
    useCallback(() => {
      setFullName('');
    }, [])
  );

  const handleSignIn = () => {
    const trimmedName = fullName.trim();
    const nameParts = trimmedName.split(/\s+/);

    if (!trimmedName) {
      const message = 'Please enter your Full Name before proceeding.';
      if (Platform.OS === 'web') {
        alert(message);
      } else {
        Alert.alert('Required Field', message);
      }
      return;
    }

    if (nameParts.length < 2) {
      const message = 'Please enter your complete full name (e.g., First Name and Last Name).';
      if (Platform.OS === 'web') {
        alert(message);
      } else {
        Alert.alert('Invalid Name', message);
      }
      return;
    }

    navigation.navigate('Subjects', { name: trimmedName });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Portal Sign-In</Text>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter Full Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. Danica Mae Radovan"
          value={fullName}
          onChangeText={setFullName}
        />
      </View>

      <Button title="Enter Portal" onPress={handleSignIn} color="#0284c7" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#f8fafc',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 30,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#334155',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
});
