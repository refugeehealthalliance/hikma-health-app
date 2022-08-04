import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, ScrollView, Button, TouchableOpacity
} from 'react-native';

import { database } from "../storage/Database";
import { v4 as uuid } from 'uuid';
import styles from './Style';
import { EventTypes } from '../enums/EventTypes';
import { LocalizedStrings } from '../enums/LocalizedStrings';
import radioButtons from './shared/RadioButtons';
import Header from './shared/Header';

export const ExaminationDisplay = (metadataObj, language) => {
  return (
    <View>
      <Text>{LocalizedStrings[language].provider}: {metadataObj.doctor} </Text>
      <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{LocalizedStrings[language].traumaType}:</Text>
      <Text>{LocalizedStrings[language].traumaDesc}</Text>
      {!!metadataObj.traumaPhysical ? <Text>{LocalizedStrings[language].traumaPhysical}: {LocalizedStrings[language].yes}</Text> : null}
      {!!metadataObj.traumaSexual ? <Text>{LocalizedStrings[language].traumaSexual}: {LocalizedStrings[language].yes}</Text> : null}
      {!!metadataObj.traumaAbuse ? <Text>{LocalizedStrings[language].traumaAbuse}: {LocalizedStrings[language].yes}</Text> : null}
      {!!metadataObj.traumaKilling ? <Text>{LocalizedStrings[language].traumaKilling}: {LocalizedStrings[language].yes}</Text> : null}
      {!!metadataObj.traumaPSeperation ? <Text>{LocalizedStrings[language].traumaPSeperation}: {LocalizedStrings[language].yes}</Text> : null}
      {!!metadataObj.traumaThreats ? <Text>{LocalizedStrings[language].traumaThreats}: {LocalizedStrings[language].yes}</Text> : null}
      {!!metadataObj.traumaTJ ? <Text>{LocalizedStrings[language].traumaTJ}: {LocalizedStrings[language].yes}</Text> : null}
      <Text>{LocalizedStrings[language].traumaOthers}: {metadataObj.traumaOthers} </Text>
    </View>)
}

const Examination = (props) => {
  const [traumaPhysical, setTraumaPhysical] = useState(null);
  const [traumaSexual, setTraumaSexual] = useState(null);
  const [traumaAbuse, setTraumaAbuse] = useState(null);
  const [traumaKilling, setTraumaKilling] = useState(null);
  const [traumaPSeperation, setTraumaPSeperation] = useState(null);
  const [traumaThreats, setTraumaThreats] = useState(null);
  const [traumaTJ, setTraumaTJ] = useState(null);
  const [traumaOthers, setTraumaOthers] = useState(null);
  const [language, setLanguage] = useState(props.navigation.getParam('language', 'en'));

  const patientId = props.navigation.getParam('patientId');
  const visitId = props.navigation.getParam('visitId');
  const userName = props.navigation.getParam('userName');

  const submit = async () => {
    database.addEvent({
      id: uuid(),
      patient_id: patientId,
      visit_id: visitId,
      event_type: EventTypes.ExaminationFull,
      event_metadata: JSON.stringify({
        doctor: userName,
        traumaPhysical,
        traumaSexual,
        traumaAbuse,
        traumaKilling,
        traumaPSeperation,
        traumaThreats,
        traumaTJ,
        traumaOthers
      })
    }).then(() => {
      props.navigation.navigate('NewVisit')
    })
  };

  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <View style={styles.containerLeft}>
        {Header({ action: () => props.navigation.navigate('NewVisit', { language }), language, setLanguage })}
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'stretch', }}>
          <Text style={[styles.text, { fontSize: 16, fontWeight: 'bold' }]}>{LocalizedStrings[language].examination}</Text>
        </View>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{LocalizedStrings[language].traumaType}:</Text>
        <Text style={[styles.text]}>{LocalizedStrings[language].traumaDesc}</Text>
        <View style={styles.responseRow}>
          {radioButtons({ field: traumaPhysical, action: setTraumaPhysical, prompt: LocalizedStrings[language].traumaPhysical, language })}
        </View>
        <View style={styles.responseRow}>
          {radioButtons({ field: traumaSexual, action: setTraumaSexual, prompt: LocalizedStrings[language].traumaSexual, language })}
        </View>
        <View style={styles.responseRow}>
          {radioButtons({ field: traumaAbuse, action: setTraumaAbuse, prompt: LocalizedStrings[language].traumaAbuse, language })}
        </View>
        <View style={styles.responseRow}>
          {radioButtons({ field: traumaKilling, action: setTraumaKilling, prompt: LocalizedStrings[language].traumaKilling, language })}
        </View>
        <View style={styles.responseRow}>
          {radioButtons({ field: traumaPSeperation, action: setTraumaPSeperation, prompt: LocalizedStrings[language].traumaPSeperation, language })}
        </View>
        <View style={styles.responseRow}>
          {radioButtons({ field: traumaThreats, action: setTraumaThreats, prompt: LocalizedStrings[language].traumaThreats, language })}
        </View>
        <View style={styles.responseRow}>
          {radioButtons({ field: traumaTJ, action: setTraumaTJ, prompt: LocalizedStrings[language].traumaTJ, language })}
        </View>
        <View style={[styles.responseRow, { paddingVertical: 0 }]}>
          <Text style={{ color: '#FFFFFF' }}>{LocalizedStrings[language].traumaOthers}</Text>
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
            style={styles.inputs}
            onChangeText={(text) => setTraumaOthers(text)}
            value={traumaOthers}
          />
        </View>
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

export default Examination;
