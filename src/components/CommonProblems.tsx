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

export const CommonProblemsDisplay = (metadataObj, language) => {
  return (
    <View>
      {!!metadataObj.difficultyEating ? <Text>{LocalizedStrings[language].difficultyEating}: {LocalizedStrings[language].yes}</Text> : null}
      {!!metadataObj.suicidalIdeation ? <Text>{LocalizedStrings[language].suicidalIdeation}: {LocalizedStrings[language].yes}</Text> : null}
      {!!metadataObj.difficultySleeping ? <Text>{LocalizedStrings[language].difficultySleeping}: {LocalizedStrings[language].yes}</Text> : null}
      {!!metadataObj.difficultySleeping ? <Text>{LocalizedStrings[language].hoursSlept}: {metadataObj.hoursSlept}</Text> : null}
      {!!metadataObj.sleepingNight ? <Text>{LocalizedStrings[language].sleepingNight}: {LocalizedStrings[language].yes}</Text> : null}
      {!!metadataObj.sleepingFalling ? <Text>{LocalizedStrings[language].sleepingFalling}: {LocalizedStrings[language].yes}</Text> : null}
      {!!metadataObj.sleepingWalking ? <Text>{LocalizedStrings[language].sleepingWalking}: {LocalizedStrings[language].yes}</Text> : null}
      {!!metadataObj.restless ? <Text>{LocalizedStrings[language].restless}: {LocalizedStrings[language].yes}</Text> : null}
      {!!metadataObj.difficultyStoppingWorrying ? <Text>{LocalizedStrings[language].difficultyStoppingWorrying}: {LocalizedStrings[language].yes}</Text> : null}
      {!!metadataObj.bodyAches ? <Text>{LocalizedStrings[language].bodyAches}: {LocalizedStrings[language].yes}</Text> : null}
      {!!metadataObj.bodyAches ? <Text>{LocalizedStrings[language].bodyAchesWhere}: {metadataObj.bodyAchesWhere}</Text> : null}
      {!!metadataObj.lowEnergy ? <Text>{LocalizedStrings[language].lowEnergy}: {LocalizedStrings[language].yes}</Text> : null}
      {!!metadataObj.noInterest ? <Text>{LocalizedStrings[language].noInterest}: {LocalizedStrings[language].yes}</Text> : null}
      {!!metadataObj.guilt ? <Text>{LocalizedStrings[language].guilt}: {LocalizedStrings[language].yes}</Text> : null}
      {!!metadataObj.hopeless ? <Text>{LocalizedStrings[language].hopeless}: {LocalizedStrings[language].yes}</Text> : null}
      {!!metadataObj.flashbacks ? <Text>{LocalizedStrings[language].flashbacks}: {LocalizedStrings[language].yes}</Text> : null}
      {!!metadataObj.hypervigilance ? <Text>{LocalizedStrings[language].hypervigilance}: {LocalizedStrings[language].yes}</Text> : null}
      {!!metadataObj.sadIrritable ? <Text>{LocalizedStrings[language].sadIrritable}: {LocalizedStrings[language].yes}</Text> : null}
      {!!metadataObj.hallucinations ? <Text>{LocalizedStrings[language].hallucinations}: {LocalizedStrings[language].yes}</Text> : null}
      <Text>{LocalizedStrings[language].potentialDiagnosis}: {metadataObj.potentialDiagnosis}</Text>
      {!!(metadataObj.bedWetting || metadataObj.defiant || metadataObj.separationAnxiety || metadataObj.communicationDifficulties) ? <Text style={{ fontWeight: 'bold' }}>{LocalizedStrings[language].childrenSpecific}</Text> : null}
      {!!metadataObj.bedWetting ? <Text>{LocalizedStrings[language].bedWetting}: {LocalizedStrings[language].yes}</Text> : null}
      {!!metadataObj.defiant ? <Text>{LocalizedStrings[language].defiant}: {LocalizedStrings[language].yes}</Text> : null}
      {!!metadataObj.separationAnxiety ? <Text>{LocalizedStrings[language].separationAnxiety}: {LocalizedStrings[language].yes}</Text> : null}
      {!!metadataObj.communicationDifficulties ? <Text>{LocalizedStrings[language].communicationDifficulties}: {metadataObj.communicationDifficulties}</Text> : null}
    </View>
  )
}

const CommonProblems = (props) => {
    const [difficultyEating, setDifficultyEating] = useState(null);
    const [suicidalIdeation, setSuicidalIdeation] = useState(null);
    const [difficultySleeping, setDifficultySleeping] = useState(null);
    const [hoursSlept, setHoursSlept] = useState(null);
    const [sleepingNight, setSleepingNight] = useState(null);
    const [sleepingFalling, setSleepingFalling] = useState(null);
    const [sleepingWalking, setSleepingWalking] = useState(null);
    const [restless, setRestless] = useState(null);
    const [difficultyStoppingWorrying, setDifficultyStoppingWorrying] = useState(null);
    const [bodyAches, setBodyAches] = useState(null);
    const [bodyAchesWhere, setBodyAchesWhere] = useState(null);
    const [lowEnergy, setLowEnergy] = useState(null);
    const [noInterest, setNoInterest] = useState(null);
    const [guilt, setGuilt] = useState(null);
    const [hopeless, setHopeless] = useState(null);
    const [flashbacks, setFlashbacks] = useState(null);
    const [hypervigilance, setHypervigilance] = useState(null);
    const [sadIrritable, setSadIrritable] = useState(null);
    const [hallucinations, setHallucinations] = useState(null);
    const [potentialDiagnosis, setPotentialDiagnosis] = useState(null);
    const [otherSymptom, setOtherSymptom] = useState(null);
    const [bedWetting, setBedWetting] = useState(null);
    const [defiant, setDefiant] = useState(null);
    const [separationAnxiety, setSeparationAnxiety] = useState(null);
    const [communicationDifficulties, setCommunicationDifficulties] = useState(null)
  
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
          difficultyEating,
          suicidalIdeation,
          difficultySleeping,
          hoursSlept,
          sleepingNight,
          sleepingFalling,
          sleepingWalking,
          restless,
          difficultyStoppingWorrying,
          bodyAches,
          bodyAchesWhere,
          lowEnergy,
          noInterest,
          guilt,
          hopeless,
          flashbacks,
          hypervigilance,
          sadIrritable,
          hallucinations,
          potentialDiagnosis,
          otherSymptom,
          bedWetting,
          defiant,
          separationAnxiety,
          communicationDifficulties
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
            <Text style={[styles.text, { fontSize: 16, fontWeight: 'bold' }]}>{LocalizedStrings[language].commonProblems}</Text>
          </View>
          <Text style={[styles.text, { fontSize: 16}]}>{LocalizedStrings[language].commomProblemsDesc}</Text>
          <Text style={[styles.text]}>{LocalizedStrings[language].commonProblemsHint}</Text>
          <View style={styles.responseRow}>
            {radioButtons({ field: difficultyEating, action: setDifficultyEating, prompt: LocalizedStrings[language].difficultyEating, language })}
          </View>
          <View style={styles.responseRow}>
            {radioButtons({ field: suicidalIdeation, action: setSuicidalIdeation, prompt: LocalizedStrings[language].suicidalIdeation, language })}
          </View>
          <View style={styles.responseRow}>
            {radioButtons({ field: difficultySleeping, action: setDifficultySleeping, prompt: LocalizedStrings[language].difficultySleeping, language })}
          </View>
          <View style={[styles.responseRow, { paddingVertical: 0 }]}>
						<Text style={{ color: '#FFFFFF' }}>{LocalizedStrings[language].hoursSlept}</Text>
					</View>
					<View style={[styles.responseRow, { padding: 0 }]}>
						<TextInput
								style={styles.inputs}
								placeholder={LocalizedStrings[language].hoursSlept}
								onChangeText={(text) => setHoursSlept(text)}
								value={hoursSlept}
								keyboardType='numeric'
						/>
					</View>
          <View style={styles.responseRow}>
            {radioButtons({ field: sleepingNight, action: setSleepingNight, prompt: LocalizedStrings[language].sleepingNight, language })}
          </View>
          <View style={styles.responseRow}>
            {radioButtons({ field: sleepingFalling, action: setSleepingFalling, prompt: LocalizedStrings[language].sleepingFalling, language })}
          </View>
          <View style={styles.responseRow}>
            {radioButtons({ field: sleepingWalking, action: setSleepingWalking, prompt: LocalizedStrings[language].sleepingWalking, language })}
          </View>
          <View style={styles.responseRow}>
            {radioButtons({ field: restless, action: setRestless, prompt: LocalizedStrings[language].restless, language })}
          </View>
          <View style={styles.responseRow}>
            {radioButtons({ field: difficultyStoppingWorrying, action: setDifficultyStoppingWorrying, prompt: LocalizedStrings[language].difficultyStoppingWorrying, language })}
          </View>
					<View style={styles.responseRow}>
            {radioButtons({ field: bodyAches, action: setBodyAches, prompt: LocalizedStrings[language].bodyAches, language })}
          </View>
          <View style={[styles.responseRow, { paddingVertical: 0 }]}>
						<Text style={{ color: '#FFFFFF' }}>{LocalizedStrings[language].bodyAchesWhere}</Text>
					</View>
					<View style={[styles.responseRow, { padding: 0 }]}>
            <TextInput
              style={styles.inputs}
							placeholder={LocalizedStrings[language].bodyAchesWhere}
              onChangeText={(text) => setBodyAchesWhere(text)}
              value={bodyAchesWhere}
            />
          </View>
					<View style={styles.responseRow}>
            {radioButtons({ field: lowEnergy, action: setLowEnergy, prompt: LocalizedStrings[language].lowEnergy, language })}
          </View>
					<View style={styles.responseRow}>
            {radioButtons({ field: noInterest, action: setNoInterest, prompt: LocalizedStrings[language].noInterest, language })}
          </View>
					<View style={styles.responseRow}>
            {radioButtons({ field: guilt, action: setGuilt, prompt: LocalizedStrings[language].guilt, language })}
          </View>
					<View style={styles.responseRow}>
            {radioButtons({ field: hopeless, action: setHopeless, prompt: LocalizedStrings[language].hopeless, language })}
          </View>
					<View style={styles.responseRow}>
            {radioButtons({ field: flashbacks, action: setFlashbacks, prompt: LocalizedStrings[language].flashbacks, language })}
          </View>
					<View style={styles.responseRow}>
            {radioButtons({ field: hypervigilance, action: setHypervigilance, prompt: LocalizedStrings[language].hypervigilance, language })}
          </View>
					<View style={styles.responseRow}>
            {radioButtons({ field: sadIrritable, action: setSadIrritable, prompt: LocalizedStrings[language].sadIrritable, language })}
          </View>
					<View style={styles.responseRow}>
            {radioButtons({ field: hallucinations, action: setHallucinations, prompt: LocalizedStrings[language].hallucinations, language })}
          </View>
          <View style={[styles.responseRow, { paddingVertical: 0 }]}>
						<Text style={{ color: '#FFFFFF' }}>{LocalizedStrings[language].potentialDiagnosis}</Text>
					</View>
					<View style={[styles.responseRow, { padding: 0 }]}>
            <TextInput
              style={styles.inputs}
							placeholder={LocalizedStrings[language].potentialDiagnosis}
              onChangeText={(text) => setPotentialDiagnosis(text)}
              value={potentialDiagnosis}
            />
          </View>
          <View style={[styles.responseRow, { paddingVertical: 0 }]}>
						<Text style={{ color: '#FFFFFF' }}>{LocalizedStrings[language].otherSymptom}</Text>
					</View>
					<View style={[styles.responseRow, { padding: 0 }]}>
            <TextInput
              style={styles.inputs}
							placeholder={LocalizedStrings[language].otherSymptom}
              onChangeText={(text) => setOtherSymptom(text)}
              value={otherSymptom}
            />
          </View>
					<Text style={[styles.text, { fontSize: 16, fontWeight: 'bold' }]}>{LocalizedStrings[language].childrenSpecific}:</Text>
					<View style={styles.responseRow}>
            {radioButtons({ field: bedWetting, action: setBedWetting, prompt: LocalizedStrings[language].bedWetting, language })}
          </View>
					<View style={styles.responseRow}>
            {radioButtons({ field: defiant, action: setDefiant, prompt: LocalizedStrings[language].defiant, language })}
          </View>
					<View style={styles.responseRow}>
            {radioButtons({ field: separationAnxiety, action: setSeparationAnxiety, prompt: LocalizedStrings[language].separationAnxiety, language })}
          </View>
          <View style={[styles.responseRow, { paddingVertical: 0 }]}>
						<Text style={{ color: '#FFFFFF' }}>{LocalizedStrings[language].communicationDifficulties}</Text>
					</View>
					<View style={[styles.responseRow, { padding: 0 }]}>
            <TextInput
              style={styles.inputs}
							placeholder={LocalizedStrings[language].communicationDifficulties}
              onChangeText={(text) => setCommunicationDifficulties(text)}
              value={communicationDifficulties}
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
  
export default CommonProblems;
