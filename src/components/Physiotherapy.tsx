import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, ScrollView, Button, Picker
} from 'react-native';

import { database } from "../storage/Database";
import { v4 as uuid } from 'uuid';
import styles from './Style';
import { EventTypes } from '../enums/EventTypes';
import { LocalizedStrings } from '../enums/LocalizedStrings';
import radioButtons from './shared/RadioButtons';
import { formatTextDisplay } from './shared/EventFieldDisplay';
import Header from './shared/Header';
import DatePicker from 'react-native-datepicker'

const today = new Date();

export const IsPregnant = (value, action, language) => {
  return (
    <Picker
      selectedValue={value}
      onValueChange={value => action(value)}
      style={[styles.picker, { width: 180 }]}
    >
      <Picker.Item value='No' label={LocalizedStrings[language].no} />
      <Picker.Item value='Unsure' label={LocalizedStrings[language].unsure} />
      <Picker.Item value='Yes' label={LocalizedStrings[language].yes} />
    </Picker>
  )
}

export const PhysiotherapyDisplay = (metadataObj, language) => {
  return (
    <View>
      <Text>{LocalizedStrings[language].provider}: {metadataObj.doctor} </Text>
      <Text>{LocalizedStrings[language].previousTreatment}: {formatTextDisplay(metadataObj.previousTreatment, metadataObj.previousTreatmentText, language)} </Text>
      <Text>{LocalizedStrings[language].complaint}: {metadataObj.complaint} </Text>
      <Text>{LocalizedStrings[language].hpi}: {metadataObj.hpi} </Text>
      <Text>{LocalizedStrings[language].examinationFindings}: </Text>
      {!!metadataObj.appearance ? <Text>{LocalizedStrings[language].appearance}: {LocalizedStrings[language].yes}</Text> : null}
      {!!metadataObj.eent ? <Text>{LocalizedStrings[language].eent}: {LocalizedStrings[language].yes}</Text> : null}
      {!!metadataObj.heartPulses ? <Text>{LocalizedStrings[language].heartPulses}: {LocalizedStrings[language].yes}</Text> : null}
      {!!metadataObj.lungs ? <Text>{LocalizedStrings[language].lungs}: {LocalizedStrings[language].yes}</Text> : null}
      {!!metadataObj.abdomen ? <Text>{LocalizedStrings[language].abdomen}: {LocalizedStrings[language].yes}</Text> : null}
      {!!metadataObj.genitales ? <Text>{LocalizedStrings[language].genitales}: {LocalizedStrings[language].yes}</Text> : null}
      {!!metadataObj.extremities ? <Text>{LocalizedStrings[language].extremities}: {LocalizedStrings[language].yes}</Text> : null}
      {!!metadataObj.skin ? <Text>{LocalizedStrings[language].skin}: {LocalizedStrings[language].yes}</Text> : null}
      {!!metadataObj.neuro ? <Text>{LocalizedStrings[language].neuro}: {LocalizedStrings[language].yes}</Text> : null}
      <Text>{LocalizedStrings[language].isPregnant}: {metadataObj.isPregnant} </Text>
      <Text>{LocalizedStrings[language].lastPeriodFirstDay}: {metadataObj.lastPeriodFirstDay} </Text>
      <Text>{LocalizedStrings[language].assessmentPlan}: {metadataObj.assessmentPlan} </Text>
      <Text>{LocalizedStrings[language].notes}: {metadataObj.notes}</Text>
      <Text>{LocalizedStrings[language].referral}: {formatTextDisplay(metadataObj.referral, metadataObj.referralText, language)} </Text>
    </View>)
}

const Physiotherapy = (props) => {
  const [previousTreatment, setPreviousTreatment] = useState(null);
  const [previousTreatmentText, setPreviousTreatmentText] = useState(null);
  const [complaint, setComplaint] = useState(null);
  const [hpi, setHpi] = useState(null);
  const [appearance, setAppearance] = useState(null);
  const [eent, setEent] = useState(null);
  const [heartPulses, setHeartPulses] = useState(null);
  const [lungs, setLungs] = useState(null);
  const [abdomen, setAbdomen] = useState(null);
  const [genitales, setGenitales] = useState(null);
  const [extremities, setExtremities] = useState(null);
  const [skin, setSkin] = useState(null);
  const [neuro, setNeuro] = useState(null);
  const [isPregnant, setIsPregnant] = useState(null);
  const [lastPeriodFirstDay, setLastPeriodFirstDay] = useState(null);
  const [assessmentPlan, setAssessmentPlan] = useState(null);
  const [notes, setNotes] = useState(null);
  const [referral, setReferral] = useState(null);
  const [referralText, setReferralText] = useState(null);
  const [language, setLanguage] = useState(props.navigation.getParam('language', 'sp'));

  const patientId = props.navigation.getParam('patientId');
  const visitId = props.navigation.getParam('visitId');
  const userName = props.navigation.getParam('userName');

  useEffect(() => {
    database.getLatestPatientEventByType(patientId, EventTypes.Physiotherapy).then((response: any) => {
      if (response.length > 0) {
        const responseObj = JSON.parse(response)
        setPreviousTreatment(responseObj.previousTreatment)
        setPreviousTreatmentText(responseObj.previousTreatmentText)
        setComplaint(responseObj.complaint)
        setHpi(responseObj.hpi)
        setAppearance(responseObj.appearance)
        setEent(responseObj.eent)
        setHeartPulses(responseObj.heartPulses)
        setLungs(responseObj.lungs)
        setAbdomen(responseObj.abdomen)
        setGenitales(responseObj.genitales)
        setExtremities(responseObj.extremities)
        setSkin(responseObj.skin)
        setNeuro(responseObj.neuro)
        setIsPregnant(responseObj.isPregnant)
        setLastPeriodFirstDay(responseObj.lastPeriodFirstDay)
        setAssessmentPlan(responseObj.assessmentPlan)
        setNotes(responseObj.notes)
        setReferral(responseObj.referral)
        setReferralText(responseObj.referralText)
      }
    })
  }, [])

  const submit = async () => {
    database.addEvent({
      id: uuid(),
      patient_id: patientId,
      visit_id: visitId,
      event_type: EventTypes.Physiotherapy,
      event_metadata: JSON.stringify({
        doctor: userName,
        previousTreatment,
        previousTreatmentText,
        complaint,
        hpi,
        appearance,
        eent,
        heartPulses,
        lungs,
        abdomen,
        genitales,
        extremities,
        skin,
        neuro,
        isPregnant,
        lastPeriodFirstDay,
        assessmentPlan,
        notes,
        referral,
        referralText,
      })
    }).then(() => {
      props.navigation.navigate('NewVisit')
    })
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.containerLeft}>
        {Header({ action: () => props.navigation.navigate('NewVisit', { language }), language, setLanguage })}


        <View style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'stretch', }}>
          <Text style={[styles.text, { fontSize: 16, fontWeight: 'bold' }]}>{LocalizedStrings[language].physiotherapy}</Text>
        </View>

        <View style={styles.responseRow}>
          {radioButtons({ field: previousTreatment, action: setPreviousTreatment, prompt: LocalizedStrings[language].previousTreatment, language })}
        </View>
        {!!previousTreatment ?
          <View style={[styles.responseRow, { paddingTop: 0, paddingHorizontal: 0 }]}>
            <TextInput
              style={styles.inputs}
              onChangeText={(text) => setPreviousTreatmentText(text)}
              value={previousTreatmentText}
            />
          </View> :
          null
        }
        <View style={[styles.responseRow, { paddingBottom: 0 }]}>
          <Text style={{ color: '#FFFFFF' }}>{LocalizedStrings[language].complaint}</Text>
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
            style={styles.inputs}
            onChangeText={(text) => setComplaint(text)}
            value={complaint}
          />
        </View>
        <View style={[styles.responseRow, { paddingVertical: 0 }]}>
          <Text style={{ color: '#FFFFFF' }}>{LocalizedStrings[language].hpi}</Text>
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
            style={styles.inputs}
            onChangeText={(text) => setHpi(text)}
            value={hpi}
          />
        </View>
        <View style={[styles.responseRow, { paddingVertical: 0 }]}>
          <Text style={{ color: '#FFFFFF', fontWeight: "bold" }}>{LocalizedStrings[language].examinationFindings}</Text>
        </View>
        <View style={styles.responseRow}>
          {radioButtons({ field: appearance, action: setAppearance, prompt: LocalizedStrings[language].appearance, language })}
        </View>
        <View style={styles.responseRow}>
          {radioButtons({ field: eent, action: setEent, prompt: LocalizedStrings[language].eent, language })}
        </View>
        <View style={styles.responseRow}>
          {radioButtons({ field: heartPulses, action: setHeartPulses, prompt: LocalizedStrings[language].heartPulses, language })}
        </View>
        <View style={styles.responseRow}>
          {radioButtons({ field: lungs, action: setLungs, prompt: LocalizedStrings[language].lungs, language })}
        </View>
        <View style={styles.responseRow}>
          {radioButtons({ field: abdomen, action: setAbdomen, prompt: LocalizedStrings[language].abdomen, language })}
        </View>
        <View style={styles.responseRow}>
          {radioButtons({ field: genitales, action: setGenitales, prompt: LocalizedStrings[language].genitales, language })}
        </View>
        <View style={styles.responseRow}>
          {radioButtons({ field: extremities, action: setExtremities, prompt: LocalizedStrings[language].extremities, language })}
        </View>
        <View style={styles.responseRow}>
          {radioButtons({ field: skin, action: setSkin, prompt: LocalizedStrings[language].skin, language })}
        </View>
        <View style={styles.responseRow}>
          {radioButtons({ field: neuro, action: setNeuro, prompt: LocalizedStrings[language].neuro, language })}
        </View>

        <View style={[styles.responseRow, { paddingVertical: 0 }]}>
          <Text style={{ color: '#FFFFFF' }}>{LocalizedStrings[language].isPregnant}</Text>
        </View>
        {IsPregnant(isPregnant, setIsPregnant, language)}

        <View style={[styles.responseRow, { paddingVertical: 0 }]}>
          <Text style={{ color: '#FFFFFF' }}>{LocalizedStrings[language].lastPeriodFirstDay}</Text>
        </View>
        <View style={styles.inputRow}>
          <DatePicker
            style={styles.datePicker}
            date={lastPeriodFirstDay}
            mode="date"
            placeholder={LocalizedStrings[language].lastPeriodFirstDay}
            format="YYYY-MM-DD"
            minDate="1900-05-01"
            maxDate={today.toISOString().split('T')[0]}
            confirmBtnText={LocalizedStrings[language].confirm}
            cancelBtnText={LocalizedStrings[language].cancel}
            customStyles={{
              dateInput: {
                alignItems: 'flex-start',
                borderWidth: 0
              }
            }}
            androidMode='spinner'
            onDateChange={(date) => setLastPeriodFirstDay(date)}
          />
        </View>
        <View style={[styles.responseRow, { paddingVertical: 0 }]}>
          <Text style={{ color: '#FFFFFF' }}>{LocalizedStrings[language].assessmentPlan}</Text>
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
            style={styles.inputs}
            onChangeText={(text) => setAssessmentPlan(text)}
            value={assessmentPlan}
          />
        </View>

        <View style={[styles.responseRow, { paddingVertical: 0 }]}>
          <Text style={{ color: '#FFFFFF' }}>{LocalizedStrings[language].notes}</Text>
        </View>
        <View style={[styles.responseRow, { paddingTop: 0, paddingHorizontal: 0 }]}>
          <TextInput
            style={styles.inputs}
            onChangeText={(text) => setNotes(text)}
            value={notes}
          />
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

export default Physiotherapy;
