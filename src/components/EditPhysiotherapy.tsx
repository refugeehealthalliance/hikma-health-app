import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, ScrollView, Button, Picker
} from 'react-native';

import { database } from "../storage/Database";
import styles from './Style';
import { LocalizedStrings } from '../enums/LocalizedStrings';
import radioButtons from './shared/RadioButtons';
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

const EditPhysiotherapy = (props) => {
  const event = props.navigation.getParam('event');
  const userName = props.navigation.getParam('userName');
  const [language, setLanguage] = useState(props.navigation.getParam('language', 'sp'));
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

  useEffect(() => {
    if (!!event.event_metadata) {
      const metadataObj = JSON.parse(event.event_metadata)
      setPreviousTreatment(metadataObj.previousTreatment)
      setPreviousTreatmentText(metadataObj.previousTreatmentText)
      setComplaint(metadataObj.complaint)
      setHpi(metadataObj.hpi)
      setAppearance(metadataObj.appearance)
      setEent(metadataObj.eent)
      setHeartPulses(metadataObj.heartPulses)
      setLungs(metadataObj.lungs)
      setAbdomen(metadataObj.abdomen)
      setGenitales(metadataObj.genitales)
      setExtremities(metadataObj.extremities)
      setSkin(metadataObj.skin)
      setNeuro(metadataObj.neuro)
      setIsPregnant(metadataObj.isPregnant)
      setLastPeriodFirstDay(metadataObj.lastPeriodFirstDay)
      setAssessmentPlan(metadataObj.assessmentPlan)
      setNotes(metadataObj.notes)
      setReferral(metadataObj.referral)
      setReferralText(metadataObj.referralText)
    }
  }, [props])

  const submit = async () => {
    database.editEvent(
      event.id,
      JSON.stringify({
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
    ).then((response) => props.navigation.navigate('EventList', { events: response, language }))
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.containerLeft}>
        {Header({ action: () => props.navigation.navigate('EventList', { language }), language, setLanguage })}


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
            placeholder={LocalizedStrings[language].selectDob}
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

export default EditPhysiotherapy;
