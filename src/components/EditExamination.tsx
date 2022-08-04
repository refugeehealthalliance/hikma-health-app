import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, ScrollView, Button, TouchableOpacity
} from 'react-native';

import { database } from "../storage/Database";
import styles from './Style';
import { LocalizedStrings } from '../enums/LocalizedStrings';
import radioButtons from './shared/RadioButtons';
import Header from './shared/Header';

const EditExamination = (props) => {
  const event = props.navigation.getParam('event');
  const userName = props.navigation.getParam('userName');
  const [language, setLanguage] = useState(props.navigation.getParam('language', 'en'));
  
  const [traumaPhysical, setTraumaPhysical] = useState(null);
  const [traumaSexual, setTraumaSexual] = useState(null);
  const [traumaAbuse, setTraumaAbuse] = useState(null);
  const [traumaKilling, setTraumaKilling] = useState(null);
  const [traumaPSeperation, setTraumaPSeperation] = useState(null);
  const [traumaThreats, setTraumaThreats] = useState(null);
  const [traumaTJ, setTraumaTJ] = useState(null);
  const [traumaOthers, setTraumaOthers] = useState(null);

  useEffect(() => {
    if (!!event.event_metadata) {
      const metadataObj = JSON.parse(event.event_metadata)
      setTraumaPhysical(metadataObj.traumaPhysical)
      setTraumaSexual(metadataObj.traumaSexual)
      setTraumaAbuse(metadataObj.traumaAbuse)
      setTraumaKilling(metadataObj.traumaKilling)
      setTraumaPSeperation(metadataObj.traumaPSeperation)
      setTraumaThreats(metadataObj.traumaThreats)
      setTraumaTJ(metadataObj.traumaTJ)
      setTraumaOthers(metadataObj.traumaOthers)
    }
  }, [props])

  const submitExamination = async () => {
    database.editEvent(
      event.id,
      JSON.stringify({
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
    ).then((response) => props.navigation.navigate('EventList', { events: response, language }))
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
            onPress={() => submitExamination()} />
        </View>
      </View>
    </ScrollView>
  );
};

export default EditExamination;
