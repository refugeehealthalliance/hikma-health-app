import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, ScrollView, Button, TouchableOpacity
} from 'react-native';

import { database } from "../storage/Database";
import styles from './Style';
import { LocalizedStrings } from '../enums/LocalizedStrings';
import radioButtons from './shared/RadioButtons';
import Header from './shared/Header';

const EditCommonProblems = (props) => {
  const event = props.navigation.getParam('event');
  const userName = props.navigation.getParam('userName');
  const [language, setLanguage] = useState(props.navigation.getParam('language', 'sp'));
  
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
      setDifficultyEating(metadataObj.difficultyEating)
      setSuicidalIdeation(metadataObj.suicidalIdeation)
      setDifficultySleeping(metadataObj.difficultySleeping)
      setHoursSlept(metadataObj.hoursSlept)
      setSleepingNight(metadataObj.sleepingNight)
      setSleepingFalling(metadataObj.sleepingFalling)
      setSleepingWalking(metadataObj.sleepingWalking)
      setRestless(metadataObj.restless)
      setDifficultyStoppingWorrying(metadataObj.difficultyStoppingWorrying)
      setBodyAches(metadataObj.bodyAches)
      setBodyAchesWhere(metadataObj.bodyAchesWhere)
      setLowEnergy(metadataObj.lowEnergy)
      setNoInterest(metadataObj.noInterest)
      setGuilt(metadataObj.guilt)
      setHopeless(metadataObj.hopeless)
      setFlashbacks(metadataObj.flashbacks)
      setHypervigilance(metadataObj.hypervigilance)
      setSadIrritable(metadataObj.sadIrritable)
      setHallucinations(metadataObj.hallucinations)
      setPotentialDiagnosis(metadataObj.potentialDiagnosis)
      setOtherSymptom(metadataObj.otherSymptom)
      setBedWetting(metadataObj.bedWetting)
      setDefiant(metadataObj.defiant)
      setSeparationAnxiety(metadataObj.separationAnxiety)
      setCommunicationDifficulties(metadataObj.communicationDifficulties)
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

  const submitCommonProblems = async () => {
    database.editEvent(
      event.id,
      JSON.stringify({
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
        communicationDifficulties,
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
		<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
		<View style={styles.containerLeft}>
			{Header({ action: () => props.navigation.navigate('EventList', { language }), language, setLanguage })}
			<View style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'stretch', }}>
				<Text style={[styles.text, { fontSize: 16, fontWeight: 'bold' }]}>{LocalizedStrings[language].commonProblems}</Text>
			</View>
			<Text style={[styles.text, { fontSize: 16}]}>{LocalizedStrings[language].commonProblemsDesc}</Text>
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
			<Text style={[styles.text, { fontSize: 16, fontWeight: 'bold' }]}>{LocalizedStrings[language].traumaType}:</Text>
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
					onPress={() => submitCommonProblems()} />
			</View>
		</View>
	</ScrollView>
  );
};

export default EditCommonProblems;
