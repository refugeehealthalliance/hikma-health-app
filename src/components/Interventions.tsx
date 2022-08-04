import React, { useState } from 'react';
import {
  View, Text, Image, TouchableOpacity, ScrollView, Button, TextInput
} from 'react-native';
import styles from './Style';
import { EventTypes } from '../enums/EventTypes';
import { database } from "../storage/Database";
import { v4 as uuid } from 'uuid';
import { LocalizedStrings } from '../enums/LocalizedStrings';
import radioButtons from './shared/RadioButtons'
import Header from './shared/Header';

export const InterventionsDisplay = (metadataObj, language) => {
  return (
    <View>
      {!!metadataObj.resourceConnection ? <Text>{LocalizedStrings[language].resourceConnection}: {LocalizedStrings[language].yes}</Text> : null}
      {!!metadataObj.resourceConnectionSpecify ? <Text>{LocalizedStrings[language].resourceConnectionSpecify}: {metadataObj.resourceConnectionSpecify}</Text> : null}
      {!!metadataObj.activeListening ? <Text>{LocalizedStrings[language].activeListening}: {LocalizedStrings[language].yes}</Text> : null}
      {!!metadataObj.psychoeducation ? <Text>{LocalizedStrings[language].psychoeducation}: {LocalizedStrings[language].yes}</Text> : null}
      {!!metadataObj.sleepHygiene ? <Text>{LocalizedStrings[language].sleepHygiene}: {LocalizedStrings[language].yes}</Text> : null}
      {!!metadataObj.safeSpaceImagine ? <Text>{LocalizedStrings[language].safeSpaceImagine}: {LocalizedStrings[language].yes}</Text> : null}
      {!!metadataObj.muscleRelaxation ? <Text>{LocalizedStrings[language].muscleRelaxation}: {LocalizedStrings[language].yes}</Text> : null}
      {!!metadataObj.behavioralActivation ? <Text>{LocalizedStrings[language].behavioralActivation}: {LocalizedStrings[language].yes}</Text> : null}
      {!!metadataObj.griefLetter ? <Text>{LocalizedStrings[language].griefLetter}: {LocalizedStrings[language].yes}</Text> : null}
      {!!metadataObj.changingThoughts ? <Text>{LocalizedStrings[language].changingThoughts}: {LocalizedStrings[language].yes}</Text> : null}
      {!!metadataObj.senses ? <Text>{LocalizedStrings[language].senses}: {LocalizedStrings[language].yes}</Text> : null}
      {!!metadataObj.distractionTechniques ? <Text>{LocalizedStrings[language].distractionTechniques}: {LocalizedStrings[language].yes}</Text> : null}
      {!!metadataObj.diaryYourself ? <Text>{LocalizedStrings[language].diaryYourself}: {LocalizedStrings[language].yes}</Text> : null}
      {!!metadataObj.chairTechnique ? <Text>{LocalizedStrings[language].chairTechnique}: {LocalizedStrings[language].yes}</Text> : null}
      {!!metadataObj.buildStrengths ? <Text>{LocalizedStrings[language].buildStrengths}: {LocalizedStrings[language].yes}</Text> : null}
      {!!metadataObj.motivationalInterviewing ? <Text>{LocalizedStrings[language].motivationalInterviewing}: {LocalizedStrings[language].yes}</Text> : null}
      {!!metadataObj.diaphragmaticBreathing ? <Text>{LocalizedStrings[language].diaphragmaticBreathing}: {LocalizedStrings[language].yes}</Text> : null}
      {!!metadataObj.safetyPlan ? <Text>{LocalizedStrings[language].safetyPlan}: {LocalizedStrings[language].yes}</Text> : null}
      {!!metadataObj.interpersonalCommunication ? <Text>{LocalizedStrings[language].interpersonalCommunication}: {LocalizedStrings[language].yes}</Text> : null}
      {!!metadataObj.prayer ? <Text>{LocalizedStrings[language].prayer}: {LocalizedStrings[language].yes}</Text> : null}
      <Text>{LocalizedStrings[language].notes}:</Text>
      <Text>{LocalizedStrings[language].supportivePeople}: {metadataObj.supportivePeople}</Text>
      <Text>{LocalizedStrings[language].otherStrategies}: {metadataObj.otherStrategies}</Text>
      <Text>{LocalizedStrings[language].psychiatricMedications}: {metadataObj.psychiatricMedications}</Text>
    </View>
  )
}

const Interventions = (props) => {
    const [resourceConnection, setResourceConnection] = useState(null);
    const [resourceConnectionSpecify, setResourceConnectionSpecify] = useState(null);
    const [activeListening, setActiveListening] = useState(null);
    const [psychoeducation, setPsychoeducation] = useState(null);
    const [sleepHygiene, setSleepHygiene] = useState(null);
    const [safeSpaceImagine, setSafeSpaceImagine] = useState('');
    const [muscleRelaxation, setMuscleRelaxation] = useState(null);
    const [behavioralActivation, setBehavioralActivation] = useState(null);
    const [griefLetter, setGriefLetter] = useState(null);
    const [changingThoughts, setChangingThoughts] = useState(null);
    const [senses, setSenses] = useState(null);
    const [distractionTechniques, setDistractionTechniques] = useState(null);
    const [diaryYourself, setDiaryYourself] = useState(null);
    const [chairTechnique, setChairTechnique] = useState(null);
    const [buildStrengths, setBuildStrengths] = useState(null);
    const [motivationalInterviewing, setMotivationalInterviewing] = useState(null);
    const [diaphragmaticBreathing, setDiaphragmaticBreathing] = useState(null);
    const [safetyPlan, setSafetyPlan] = useState(null);
    const [interpersonalCommunication, setInterpersonalCommunication] = useState(null);
    const [prayer, setPrayer] = useState(null);
    const [supportivePeople, setSupportivePeople] = useState(null);
    const [otherStrategies, setOtherStrategies] = useState('');
    const [psychiatricMedications, setPsychiatricMedications] = useState('');
  
    const [language, setLanguage] = useState(props.navigation.getParam('language', 'en'));
    const patientId = props.navigation.getParam('patientId');
    const visitId = props.navigation.getParam('visitId');
    const userName = props.navigation.getParam('userName');
  
    const submit = async () => {
      database.addEvent({
        id: uuid(),
        patient_id: patientId,
        visit_id: visitId,
        event_type: EventTypes.Interventions,
        event_metadata: JSON.stringify({
          doctor: userName,
          resourceConnection,
          resourceConnectionSpecify,
          activeListening,
          psychoeducation,
          sleepHygiene,
          safeSpaceImagine,
          muscleRelaxation,
          behavioralActivation,
          griefLetter,
          changingThoughts,
          senses,
          distractionTechniques,
          diaryYourself,
          chairTechnique,
          buildStrengths,
          motivationalInterviewing,
          diaphragmaticBreathing,
          safetyPlan,
          interpersonalCommunication,
          prayer,
          supportivePeople,
          otherStrategies,
          psychiatricMedications,
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
            <Text style={[styles.text, { fontSize: 16, fontWeight: 'bold' }]}>{LocalizedStrings[language].interventions}</Text>
          </View>
          <View style={styles.responseRow}>
            {radioButtons({ field: resourceConnection, action: setResourceConnection, prompt: LocalizedStrings[language].resourceConnection, language })}
          </View>
					<View style={[styles.responseRow, { padding: 0 }]}>
            <TextInput
              style={styles.inputs}
							placeholder={LocalizedStrings[language].resourceConnectionSpecify}
              onChangeText={(text) => setResourceConnectionSpecify(text)}
              value={resourceConnectionSpecify}
            />
          </View>
          <View style={styles.responseRow}>
            {radioButtons({ field: activeListening, action: setActiveListening, prompt: LocalizedStrings[language].activeListening, language })}
          </View>
          <View style={styles.responseRow}>
            {radioButtons({ field: psychoeducation, action: setPsychoeducation, prompt: LocalizedStrings[language].psychoeducation, language })}
          </View>
          <View style={styles.responseRow}>
            {radioButtons({ field: sleepHygiene, action: setSleepHygiene, prompt: LocalizedStrings[language].sleepHygiene, language })}
          </View>
          <View style={styles.responseRow}>
            {radioButtons({ field: safeSpaceImagine, action: setSafeSpaceImagine, prompt: LocalizedStrings[language].safeSpaceImagine, language })}
          </View>
          <View style={styles.responseRow}>
            {radioButtons({ field: muscleRelaxation, action: setMuscleRelaxation, prompt: LocalizedStrings[language].muscleRelaxation, language })}
          </View>
          <View style={styles.responseRow}>
            {radioButtons({ field: behavioralActivation, action: setBehavioralActivation, prompt: LocalizedStrings[language].behavioralActivation, language })}
          </View>
		    	<View style={styles.responseRow}>
            {radioButtons({ field: griefLetter, action: setGriefLetter, prompt: LocalizedStrings[language].griefLetter, language })}
          </View>
					<View style={styles.responseRow}>
            {radioButtons({ field: changingThoughts, action: setChangingThoughts, prompt: LocalizedStrings[language].changingThoughts, language })}
          </View>
					<View style={styles.responseRow}>
            {radioButtons({ field: senses, action: setSenses, prompt: LocalizedStrings[language].senses, language })}
          </View>
					<View style={styles.responseRow}>
            {radioButtons({ field: distractionTechniques, action: setDistractionTechniques, prompt: LocalizedStrings[language].distractionTechniques, language })}
          </View>
					<View style={styles.responseRow}>
            {radioButtons({ field: diaryYourself, action: setDiaryYourself, prompt: LocalizedStrings[language].diaryYourself, language })}
          </View>
					<View style={styles.responseRow}>
            {radioButtons({ field: chairTechnique, action: setChairTechnique, prompt: LocalizedStrings[language].chairTechnique, language })}
          </View>
					<View style={styles.responseRow}>
            {radioButtons({ field: buildStrengths, action: setBuildStrengths, prompt: LocalizedStrings[language].buildStrengths, language })}
          </View>
					<View style={styles.responseRow}>
            {radioButtons({ field: motivationalInterviewing, action: setMotivationalInterviewing, prompt: LocalizedStrings[language].motivationalInterviewing, language })}
          </View>
					<View style={styles.responseRow}>
            {radioButtons({ field: diaphragmaticBreathing, action: setDiaphragmaticBreathing, prompt: LocalizedStrings[language].diaphragmaticBreathing, language })}
          </View>
					<View style={styles.responseRow}>
            {radioButtons({ field: safetyPlan, action: setSafetyPlan, prompt: LocalizedStrings[language].safetyPlan, language })}
          </View>
					<View style={styles.responseRow}>
            {radioButtons({ field: interpersonalCommunication, action: setInterpersonalCommunication, prompt: LocalizedStrings[language].interpersonalCommunication, language })}
          </View>
					<View style={styles.responseRow}>
            {radioButtons({ field: prayer, action: setPrayer, prompt: LocalizedStrings[language].prayer, language })}
          </View>
					<Text style={{ fontSize: 16, fontWeight: 'bold' }}>{LocalizedStrings[language].notes}</Text>
					<View style={[styles.responseRow, { padding: 0 }]}>
            <TextInput
              style={styles.inputs}
							placeholder={LocalizedStrings[language].supportivePeople}
              onChangeText={(text) => setSupportivePeople(text)}
              value={supportivePeople}
            />
          </View>
					<View style={[styles.responseRow, { padding: 0 }]}>
            <TextInput
              style={styles.inputs}
							placeholder={LocalizedStrings[language].otherStrategies}
              onChangeText={(text) => setOtherStrategies(text)}
              value={otherStrategies}
            />
          </View>
					<View style={[styles.responseRow, { padding: 0 }]}>
            <TextInput
              style={styles.inputs}
							placeholder={LocalizedStrings[language].psychiatricMedications}
              onChangeText={(text) => setPsychiatricMedications(text)}
              value={psychiatricMedications}
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
  
export default Interventions;
