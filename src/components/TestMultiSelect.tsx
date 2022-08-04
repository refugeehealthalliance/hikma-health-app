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
import { formatTextDisplay, formatBooleanDisplay } from './shared/EventFieldDisplay';
import SelectMultiple from 'react-native-select-multiple'

const commonProblems = ['Apples', 'Oranges', 'Pears']
const childrenProblems = []

export const CommonProblemsSelect = (props, language) => {
  const {} = props;

  const [selectedProblems, setSelectedProblems] = useState([]);

  const onSelectionsChange = (problem) => {
    // commonProblems is array of { label, value }
    setSelectedProblems(problem);
  };

  console.log(selectedProblems)

  const renderLabel = (label, style) => {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{marginLeft: 10}}>
          <Text style={style}>{label}</Text>
        </View>
      </View>
    )
  }

  const fruits = ["Apples", "Oranges", "Pears"];
  // --- OR ---
  // const fruits = [
  //   { label: 'Apples', value: 'appls' },
  //   { label: 'Oranges', value: 'orngs' },
  //   { label: 'Pears', value: 'pears' }
  // ]

  return (
    <View style={{backgroundColor: "#373940", width: 220, padding: 8}}>
      <SelectMultiple
        renderLabel={renderLabel}
        checkboxSource='https://dummyimage.com/100x100/52c25a/fff&text=S'
        items={fruits}
        selectedItems={selectedFruits}
        onSelectionsChange={onSelectionsChange}
        labelStyle={{color: 'white'}}
        rowStyle={{backgroundColor: "#373940", borderRadius: 4, padding: 8, border: 'none'}}
        selectedLabelStyle={{color: '#38c974'}}
        selectedRowStyle={{backgroundColor: "#2e3137"}}
      />
    </View>
  );
}

export const CommonProblemsDisplay = (metadataObj, language) => {
  return (
    <View>
      <Text>{LocalizedStrings[language].provider}: {metadataObj.doctor} </Text>
      <Text>{LocalizedStrings[language].examination}: {metadataObj.examination} </Text>
      <Text>{LocalizedStrings[language].generalObservations}: {metadataObj.generalObservations}</Text>
      <Text>{LocalizedStrings[language].diagnosis}: {metadataObj.diagnosis}</Text>
      <Text>{LocalizedStrings[language].treatment}: {metadataObj.treatment}</Text>
      <Text>{LocalizedStrings[language].covid19}: {formatBooleanDisplay(metadataObj.covid19, language)}</Text>
      <Text>{LocalizedStrings[language].referral}: {formatTextDisplay(metadataObj.referral, metadataObj.referralText, language)} </Text>
    </View>)
}

const CommonProblems = (props) => {
  const [traumaType, setTraumaType] = useState(null);
  const [commonProblems, setCommonProblems] = useState(null);
  const [diagnosis, setDiagnosis] = useState(null);
  const [treatment, setTreatment] = useState(null);
  const [covid19, setCovid19] = useState(null);
  const [referral, setReferral] = useState(null);
  const [referralText, setReferralText] = useState(null);
  const [language, setLanguage] = useState(props.navigation.getParam('language', 'en'));

  const patientId = props.navigation.getParam('patientId');
  const visitId = props.navigation.getParam('visitId');
  const userName = props.navigation.getParam('userName');

  const submit = async () => {
    database.addEvent({
      id: uuid(),
      patient_id: patientId,
      visit_id: visitId,
      event_type: EventTypes.CommonProblems,
      event_metadata: JSON.stringify({
        doctor: userName,
        examination,
        generalObservations,
        diagnosis,
        treatment,
        covid19,
        referral,
        referralText,
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
        <View style={[styles.responseRow, { paddingBottom: 0 }]}>
          <Text style={{ color: '#FFFFFF' }}>{LocalizedStrings[language].examination}</Text>
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
            style={styles.inputs}
            onChangeText={(text) => setCommonProblems(text)}
            value={examination}
          />
        </View>
        <View style={[styles.responseRow, { paddingVertical: 0 }]}>
          <Text style={{ color: '#FFFFFF' }}>{LocalizedStrings[language].generalObservations}</Text>
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
            style={styles.inputs}
            onChangeText={(text) => setGeneralObservations(text)}
            value={generalObservations}
          />
        </View>
        <View style={[styles.responseRow, { paddingVertical: 0 }]}>
          <Text style={{ color: '#FFFFFF' }}>{LocalizedStrings[language].diagnosis}</Text>
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
            style={styles.inputs}
            onChangeText={(text) => setDiagnosis(text)}
            value={diagnosis}
          />
        </View>
        <View style={[styles.responseRow, { paddingVertical: 0 }]}>
          <Text style={{ color: '#FFFFFF' }}>{LocalizedStrings[language].treatment}</Text>
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
            style={styles.inputs}
            onChangeText={(text) => setTreatment(text)}
            value={treatment}
          />
        </View>
        <View style={styles.responseRow}>
          {radioButtons({ field: covid19, action: setCovid19, prompt: LocalizedStrings[language].covid19, language })}
        </View>
        <View style={styles.responseRow}>
          {radioButtons({ field: referral, action: setReferral, prompt: LocalizedStrings[language].referral, language })}
        </View>
        {!!referral ?
          <View style={[styles.responseRow, { paddingTop: 0, paddingHorizontal: 0 }]}>
            <TextInput
              style={styles.inputs}
              onChangeText={(text) => setReferralText(text)}
              value={referralText}
            />
          </View> :
          null
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

export default CommonProblems;
