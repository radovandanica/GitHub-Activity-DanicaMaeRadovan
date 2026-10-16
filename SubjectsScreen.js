import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

export default function SubjectsScreen({ route, navigation }) {
  const { name } = route.params;

  const subjects = [
    { id: '1', code: 'ITCC 106', name: 'Application Development and Emerging Technologies', units: 2 },
    { id: '2', code: 'ITPC 107', name: 'Networking 2', units: 2 },
    { id: '3', code: 'ISPC 101', name: 'System Analysis and Design', units: 2 },
    { id: '4', code: 'ITPC 108', name: 'Information Assurance and Security 1', units: 2 },
    { id: '5', code: 'ITIC 101', name: 'GREEN COMPUTING', units: 3 },
    { id: '6', code: 'ITIC 102', name: 'Research', units: 3 },
    { id: '7', code: 'ITDC 2', name: 'Cloud Computing', units: 2 },
    { id: '8', code: 'CSPC 101', name: 'Software Engineering 1', units: 2 },
  ];

  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'SignIn' }],
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.welcomeText}>Welcome, {name}!</Text>
        <Text style={styles.infoText}>Year & Section: BS-INFOTECH-3C</Text>
      </View>

      <View style={styles.headerRow}>
        <Text style={styles.sectionHeader}>Enrolled Subjects (8)</Text>
        <Text style={styles.totalUnits}>Total Units: 18</Text>
      </View>

      <FlatList
        data={subjects}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.subjectCard}>
            <View style={styles.subjectInfo}>
              <Text style={styles.subjectCode}>{item.code}</Text>
              <Text style={styles.subjectName}>{item.name}</Text>
            </View>
            <Text style={styles.unitsBadge}>{item.units} Units</Text>
          </View>
        )}
      />

      <View style={styles.buttonContainer}>
        <Button 
          title="Log Out" 
          onPress={handleLogout} 
          color="#ef4444" 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8fafc',
  },
  card: {
    backgroundColor: '#0284c7',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  infoText: {
    fontSize: 16,
    color: '#e0f2fe',
    marginTop: 6,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  totalUnits: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0284c7',
  },
  subjectCard: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#0284c7',
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subjectInfo: {
    flex: 1,
    marginRight: 10,
  },
  subjectCode: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0369a1',
  },
  subjectName: {
    fontSize: 14,
    color: '#475569',
    marginTop: 4,
  },
  unitsBadge: {
    fontSize: 12,
    fontWeight: '600',
    color: '#0284c7',
    backgroundColor: '#e0f2fe',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
  },
  buttonContainer: {
    marginTop: 10,
  },
});
