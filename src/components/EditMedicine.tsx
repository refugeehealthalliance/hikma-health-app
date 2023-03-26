import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, ScrollView, Button, TouchableOpacity, Picker
} from 'react-native';

import { database } from "../storage/Database";
import styles from './Style';
import { LocalizedStrings } from '../enums/LocalizedStrings';
import { MedicineType, Route } from './Medicine';
import Header from './shared/Header';
import radioButtons from './shared/RadioButtons';

const EditMedicine = (props) => {
  const event = props.navigation.getParam('event');
  const userName = props.navigation.getParam('userName');

  const [language, setLanguage] = useState(props.navigation.getParam('language', 'sp'));
  const [medicationM1, setMedicationM1] = useState(null);
  const [typeM1, setTypeM1] = useState(null);
  const [routeM1, setRouteM1] = useState(null);
  const [dosageM1, setDosageM1] = useState(null);
  const [daysM1, setDaysM1] = useState(null);
  const [medicationM2, setMedicationM2] = useState(null);
  const [typeM2, setTypeM2] = useState(null);
  const [routeM2, setRouteM2] = useState(null);
  const [dosageM2, setDosageM2] = useState(null);
  const [daysM2, setDaysM2] = useState(null);
  const [medicationM3, setMedicationM3] = useState(null);
  const [typeM3, setTypeM3] = useState(null);
  const [routeM3, setRouteM3] = useState(null);
  const [dosageM3, setDosageM3] = useState(null);
  const [daysM3, setDaysM3] = useState(null);
  const [medicationM4, setMedicationM4] = useState(null);
  const [typeM4, setTypeM4] = useState(null);
  const [routeM4, setRouteM4] = useState(null);
  const [dosageM4, setDosageM4] = useState(null);
  const [daysM4, setDaysM4] = useState(null);
  const [medicationM5, setMedicationM5] = useState(null);
  const [typeM5, setTypeM5] = useState(null);
  const [routeM5, setRouteM5] = useState(null);
  const [dosageM5, setDosageM5] = useState(null);
  const [daysM5, setDaysM5] = useState(null);
  const [medicationM6, setMedicationM6] = useState(null);
  const [typeM6, setTypeM6] = useState(null);
  const [routeM6, setRouteM6] = useState(null);
  const [dosageM6, setDosageM6] = useState(null);
  const [daysM6, setDaysM6] = useState(null);
  const [medicationM7, setMedicationM7] = useState(null);
  const [typeM7, setTypeM7] = useState(null);
  const [routeM7, setRouteM7] = useState(null);
  const [dosageM7, setDosageM7] = useState(null);
  const [daysM7, setDaysM7] = useState(null);
  const [medicationM8, setMedicationM8] = useState(null);
  const [typeM8, setTypeM8] = useState(null);
  const [routeM8, setRouteM8] = useState(null);
  const [dosageM8, setDosageM8] = useState(null);
  const [daysM8, setDaysM8] = useState(null);
  const [medicationM9, setMedicationM9] = useState(null);
  const [typeM9, setTypeM9] = useState(null);
  const [routeM9, setRouteM9] = useState(null);
  const [dosageM9, setDosageM9] = useState(null);
  const [daysM9, setDaysM9] = useState(null);
  const [medicationM10, setMedicationM10] = useState(null);
  const [typeM10, setTypeM10] = useState(null);
  const [routeM10, setRouteM10] = useState(null);
  const [dosageM10, setDosageM10] = useState(null);
  const [daysM10, setDaysM10] = useState(null);

  const [showMore, setShowMore] = useState(null);


  useEffect(() => {
    if (!!event.event_metadata) {
      const metadataObj = JSON.parse(event.event_metadata)
      setMedicationM1(metadataObj.medicationM1)
      setTypeM1(metadataObj.typeM1)
      setRouteM1(metadataObj.routeM1)
      setDosageM1(metadataObj.dosageM1)
      setDaysM1(metadataObj.daysM1)
      setMedicationM2(metadataObj.medicationM2)
      setTypeM2(metadataObj.typeM2)
      setRouteM2(metadataObj.routeM2)
      setDosageM2(metadataObj.dosageM2)
      setDaysM2(metadataObj.daysM2)
      setMedicationM3(metadataObj.medicationM3)
      setTypeM3(metadataObj.typeM3)
      setRouteM3(metadataObj.routeM3)
      setDosageM3(metadataObj.dosageM3)
      setDaysM3(metadataObj.daysM3)
      setMedicationM4(metadataObj.medicationM4)
      setTypeM4(metadataObj.typeM4)
      setRouteM4(metadataObj.routeM4)
      setDosageM4(metadataObj.dosageM4)
      setDaysM4(metadataObj.daysM4)
      setMedicationM5(metadataObj.medicationM5)
      setTypeM5(metadataObj.typeM5)
      setRouteM5(metadataObj.routeM5)
      setDosageM5(metadataObj.dosageM5)
      setDaysM5(metadataObj.daysM5)
      setMedicationM6(metadataObj.medicationM6)
      setTypeM6(metadataObj.typeM6)
      setRouteM6(metadataObj.routeM6)
      setDosageM6(metadataObj.dosageM6)
      setDaysM6(metadataObj.daysM6)
      setMedicationM7(metadataObj.medicationM7)
      setTypeM7(metadataObj.typeM7)
      setRouteM7(metadataObj.routeM7)
      setDosageM7(metadataObj.dosageM7)
      setDaysM7(metadataObj.daysM7)
      setMedicationM8(metadataObj.medicationM8)
      setTypeM8(metadataObj.typeM8)
      setRouteM8(metadataObj.routeM8)
      setDosageM8(metadataObj.dosageM8)
      setDaysM8(metadataObj.daysM8)
      setMedicationM9(metadataObj.medicationM9)
      setTypeM9(metadataObj.typeM9)
      setRouteM9(metadataObj.routeM9)
      setDosageM9(metadataObj.dosageM9)
      setDaysM9(metadataObj.daysM9)
      setMedicationM10(metadataObj.medicationM10)
      setTypeM10(metadataObj.typeM10)
      setRouteM10(metadataObj.routeM10)
      setDosageM10(metadataObj.dosageM10)
      setDaysM10(metadataObj.daysM10)
    }
  }, [props])

  const submit = async () => {
    database.editEvent(
      event.id,
      JSON.stringify({
        doctor: userName,
        medicationM1,
        typeM1,
        routeM1,
        dosageM1,
        daysM1,
        medicationM2,
        typeM2,
        routeM2,
        dosageM2,
        daysM2,
        medicationM3,
        typeM3,
        routeM3,
        dosageM3,
        daysM3,
        medicationM4,
        typeM4,
        routeM4,
        dosageM4,
        daysM4,
        medicationM5,
        typeM5,
        routeM5,
        dosageM5,
        daysM5,
        medicationM6,
        typeM6,
        routeM6,
        dosageM6,
        daysM6,
        medicationM7,
        typeM7,
        routeM7,
        dosageM7,
        daysM7,
        medicationM8,
        typeM8,
        routeM8,
        dosageM8,
        daysM8,
        medicationM9,
        typeM9,
        routeM9,
        dosageM9,
        daysM9,
        medicationM10,
        typeM10,
        routeM10,
        dosageM10,
        daysM10,
      })
    ).then((response) => props.navigation.navigate('EventList', { events: response, language }))
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.containerLeft}>
        {Header({ action: () => props.navigation.navigate('EventList', { language }), language, setLanguage })}

        <View style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'stretch', }}>
          <Text style={[styles.text, { fontSize: 16, fontWeight: 'bold' }]}>{LocalizedStrings[language].medicine}</Text>
        </View>
        <View style={[styles.responseRow, { paddingBottom: 0 }]}>
          <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>{LocalizedStrings[language].medication} 1</Text>
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
            placeholder={LocalizedStrings[language].medication}
            style={styles.inputs}
            onChangeText={(text) => setMedicationM1(text)}
            value={medicationM1}
          />
        </View>
        <View style={styles.inputRow}>
          {MedicineType(typeM1, setTypeM1, language)}
          {Route(routeM1, setRouteM1, language)}
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
          placeholder={LocalizedStrings[language].dosage}
            style={styles.inputs}
            onChangeText={(text) => setDosageM1(text)}
            value={dosageM1}
          />
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
            placeholder={LocalizedStrings[language].days}
            style={styles.inputs}
            onChangeText={(text) => setDaysM1(text)}
            value={daysM1}
            keyboardType='numeric'
          />
        </View>
        
        {/* Medication 2 */}
        <View style={[styles.responseRow, { paddingBottom: 0 }]}>
          <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>{LocalizedStrings[language].medication} 2</Text>
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
            placeholder={LocalizedStrings[language].medication}
            style={styles.inputs}
            onChangeText={(text) => setMedicationM2(text)}
            value={medicationM2}
          />
        </View>
        <View style={styles.inputRow}>
          {MedicineType(typeM2, setTypeM2, language)}
          {Route(routeM2, setRouteM2, language)}
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
          placeholder={LocalizedStrings[language].dosage}
            style={styles.inputs}
            onChangeText={(text) => setDosageM2(text)}
            value={dosageM2}
          />
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
            placeholder={LocalizedStrings[language].days}
            style={styles.inputs}
            onChangeText={(text) => setDaysM2(text)}
            value={daysM2}
            keyboardType='numeric'
          />
        </View>

        {/* Medication 3 */}
        <View style={[styles.responseRow, { paddingBottom: 0 }]}>
          <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>{LocalizedStrings[language].medication} 3</Text>
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
            placeholder={LocalizedStrings[language].medication}
            style={styles.inputs}
            onChangeText={(text) => setMedicationM3(text)}
            value={medicationM3}
          />
        </View>
        <View style={styles.inputRow}>
          {MedicineType(typeM3, setTypeM3, language)}
          {Route(routeM3, setRouteM3, language)}
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
          placeholder={LocalizedStrings[language].dosage}
            style={styles.inputs}
            onChangeText={(text) => setDosageM3(text)}
            value={dosageM3}
          />
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
            placeholder={LocalizedStrings[language].days}
            style={styles.inputs}
            onChangeText={(text) => setDaysM3(text)}
            value={daysM3}
            keyboardType='numeric'
          />
        </View>

        {/* Medication 4 */}
        <View style={[styles.responseRow, { paddingBottom: 0 }]}>
          <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>{LocalizedStrings[language].medication} 4</Text>
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
            placeholder={LocalizedStrings[language].medication}
            style={styles.inputs}
            onChangeText={(text) => setMedicationM4(text)}
            value={medicationM4}
          />
        </View>
        <View style={styles.inputRow}>
          {MedicineType(typeM4, setTypeM4, language)}
          {Route(routeM4, setRouteM4, language)}
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
          placeholder={LocalizedStrings[language].dosage}
            style={styles.inputs}
            onChangeText={(text) => setDosageM4(text)}
            value={dosageM4}
          />
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
            placeholder={LocalizedStrings[language].days}
            style={styles.inputs}
            onChangeText={(text) => setDaysM4(text)}
            value={daysM4}
            keyboardType='numeric'
          />
        </View>

        {/* Medication 5 */}
        <View style={[styles.responseRow, { paddingBottom: 0 }]}>
          <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>{LocalizedStrings[language].medication} 5</Text>
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
            placeholder={LocalizedStrings[language].medication}
            style={styles.inputs}
            onChangeText={(text) => setMedicationM5(text)}
            value={medicationM5}
          />
        </View>
        <View style={styles.inputRow}>
          {MedicineType(typeM5, setTypeM5, language)}
          {Route(routeM5, setRouteM5, language)}
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
          placeholder={LocalizedStrings[language].dosage}
            style={styles.inputs}
            onChangeText={(text) => setDosageM5(text)}
            value={dosageM5}
          />
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
            placeholder={LocalizedStrings[language].days}
            style={styles.inputs}
            onChangeText={(text) => setDaysM5(text)}
            value={daysM5}
            keyboardType='numeric'
          />
        </View>

        {/* Show more */}
        {(showMore == null || !showMore) ?
        <View style={styles.responseRow}>
          {radioButtons({ field: showMore, action: setShowMore, prompt: LocalizedStrings[language].showMore, language })}
        </View> : null
        }
        {/* Meducation 6 */}
        {!!showMore ?
          <View>
            <View style={[styles.responseRow, { paddingBottom: 0 }]}>
              <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>{LocalizedStrings[language].medication} 6</Text>
            </View>
            <View style={[styles.responseRow, { padding: 0 }]}>
              <TextInput
                placeholder={LocalizedStrings[language].medication}
                style={styles.inputs}
                onChangeText={(text) => setMedicationM6(text)}
                value={medicationM6}
              />
            </View>
            <View style={styles.inputRow}>
              {MedicineType(typeM6, setTypeM6, language)}
              {Route(routeM6, setRouteM6, language)}
            </View>
            <View style={[styles.responseRow, { padding: 0 }]}>
              <TextInput
              placeholder={LocalizedStrings[language].dosage}
                style={styles.inputs}
                onChangeText={(text) => setDosageM6(text)}
                value={dosageM6}
              />
            </View>
            <View style={[styles.responseRow, { padding: 0 }]}>
              <TextInput
                placeholder={LocalizedStrings[language].days}
                style={styles.inputs}
                onChangeText={(text) => setDaysM6(text)}
                value={daysM6}
                keyboardType='numeric'
              />
            </View>

            {/* Medication 7 */}
            <View style={[styles.responseRow, { paddingBottom: 0 }]}>
              <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>{LocalizedStrings[language].medication} 7</Text>
            </View>
            <View style={[styles.responseRow, { padding: 0 }]}>
              <TextInput
                placeholder={LocalizedStrings[language].medication}
                style={styles.inputs}
                onChangeText={(text) => setMedicationM7(text)}
                value={medicationM7}
              />
            </View>
            <View style={styles.inputRow}>
              {MedicineType(typeM7, setTypeM7, language)}
              {Route(routeM7, setRouteM7, language)}
            </View>
            <View style={[styles.responseRow, { padding: 0 }]}>
              <TextInput
              placeholder={LocalizedStrings[language].dosage}
                style={styles.inputs}
                onChangeText={(text) => setDosageM7(text)}
                value={dosageM7}
              />
            </View>
            <View style={[styles.responseRow, { padding: 0 }]}>
              <TextInput
                placeholder={LocalizedStrings[language].days}
                style={styles.inputs}
                onChangeText={(text) => setDaysM7(text)}
                value={daysM7}
                keyboardType='numeric'
              />
            </View>

            {/* Medication 8 */}
            <View style={[styles.responseRow, { paddingBottom: 0 }]}>
              <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>{LocalizedStrings[language].medication} 8</Text>
            </View>
            <View style={[styles.responseRow, { padding: 0 }]}>
              <TextInput
                placeholder={LocalizedStrings[language].medication}
                style={styles.inputs}
                onChangeText={(text) => setMedicationM8(text)}
                value={medicationM8}
              />
            </View>
            <View style={styles.inputRow}>
              {MedicineType(typeM8, setTypeM8, language)}
              {Route(routeM8, setRouteM8, language)}
            </View>
            <View style={[styles.responseRow, { padding: 0 }]}>
              <TextInput
              placeholder={LocalizedStrings[language].dosage}
                style={styles.inputs}
                onChangeText={(text) => setDosageM8(text)}
                value={dosageM8}
              />
            </View>
            <View style={[styles.responseRow, { padding: 0 }]}>
              <TextInput
                placeholder={LocalizedStrings[language].days}
                style={styles.inputs}
                onChangeText={(text) => setDaysM8(text)}
                value={daysM8}
                keyboardType='numeric'
              />
            </View>

            {/* Medication 9 */}
            <View style={[styles.responseRow, { paddingBottom: 0 }]}>
              <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>{LocalizedStrings[language].medication} 9</Text>
            </View>
            <View style={[styles.responseRow, { padding: 0 }]}>
              <TextInput
                placeholder={LocalizedStrings[language].medication}
                style={styles.inputs}
                onChangeText={(text) => setMedicationM9(text)}
                value={medicationM9}
              />
            </View>
            <View style={styles.inputRow}>
              {MedicineType(typeM9, setTypeM9, language)}
              {Route(routeM9, setRouteM9, language)}
            </View>
            <View style={[styles.responseRow, { padding: 0 }]}>
              <TextInput
              placeholder={LocalizedStrings[language].dosage}
                style={styles.inputs}
                onChangeText={(text) => setDosageM9(text)}
                value={dosageM9}
              />
            </View>
            <View style={[styles.responseRow, { padding: 0 }]}>
              <TextInput
                placeholder={LocalizedStrings[language].days}
                style={styles.inputs}
                onChangeText={(text) => setDaysM9(text)}
                value={daysM9}
                keyboardType='numeric'
              />
            </View>

            {/* Medication 10 */}
            <View style={[styles.responseRow, { paddingBottom: 0 }]}>
              <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>{LocalizedStrings[language].medication} 10</Text>
            </View>
            <View style={[styles.responseRow, { padding: 0 }]}>
              <TextInput
                placeholder={LocalizedStrings[language].medication}
                style={styles.inputs}
                onChangeText={(text) => setMedicationM10(text)}
                value={medicationM10}
              />
            </View>
            <View style={styles.inputRow}>
              {MedicineType(typeM10, setTypeM10, language)}
              {Route(routeM10, setRouteM10, language)}
            </View>
            <View style={[styles.responseRow, { padding: 0 }]}>
              <TextInput
              placeholder={LocalizedStrings[language].dosage}
                style={styles.inputs}
                onChangeText={(text) => setDosageM10(text)}
                value={dosageM10}
              />
            </View>
            <View style={[styles.responseRow, { padding: 0 }]}>
              <TextInput
                placeholder={LocalizedStrings[language].days}
                style={styles.inputs}
                onChangeText={(text) => setDaysM10(text)}
                value={daysM10}
                keyboardType='numeric'
              />
            </View>

          </View>
          :null
        }
        <View style={{ alignItems: 'center' }}>
          <Button
            title={LocalizedStrings[language].save}
            color={'#F77824'}
            onPress={() => submit()} />
        </View>
      </View>
    </ScrollView>
  );
};

export default EditMedicine;
