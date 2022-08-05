import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, ScrollView, Button, Picker
} from 'react-native';

import { database } from "../storage/Database";
import styles from './Style';
import { LocalizedStrings } from '../enums/LocalizedStrings';
import radioButtons from './shared/RadioButtons';
import Header from './shared/Header';
import DatePicker from 'react-native-datepicker';

export const RepeatingPicker = (value, action, language) => {
    return (
      <Picker
        selectedValue={value}
        onValueChange={value => action(value)}
        style={[styles.picker, { width: 180 }]}
      >
        <Picker.Item value='0' label={LocalizedStrings[language].notAtAll} />
        <Picker.Item value='1' label={LocalizedStrings[language].severalDays} />
        <Picker.Item value='2' label={LocalizedStrings[language].moreHalfDays} />
        <Picker.Item value='3' label={LocalizedStrings[language].nearlyEveryDay} />
      </Picker>
    )
  }
  
  export const FrequentPicker = (value, action, language) => {
    return (
      <Picker
        selectedValue={value}
        onValueChange={value => action(value)}
        style={[styles.picker, { width: 180 }]}
      >
        <Picker.Item value='0' label={LocalizedStrings[language].frequent1} />
        <Picker.Item value='1' label={LocalizedStrings[language].frequent2} />
        <Picker.Item value='2' label={LocalizedStrings[language].frequent3} />
        <Picker.Item value='3' label={LocalizedStrings[language].frequent4} />
      </Picker>
    )
  }
  
  export const StressRange = (value, action, language) => {
    return (
      <Picker
        selectedValue={value}
        onValueChange={value => action(value)}
        style={[styles.picker, { width: 180 }]}
      >
        <Picker.Item value='0' label={LocalizedStrings[language].none} />
        <Picker.Item value='1' label={LocalizedStrings[language].little} />
        <Picker.Item value='2' label={LocalizedStrings[language].moderately} />
        <Picker.Item value='3' label={LocalizedStrings[language].goodDeal} />
              <Picker.Item value='4' label={LocalizedStrings[language].alot} />
      </Picker>
    )
  }
  
  export const feelingPicker = (value, action, language) => {
    return (
      <Picker
        selectedValue={value}
        onValueChange={value => action(value)}
        style={[styles.picker, { width: 180 }]}
      >
        <Picker.Item value='0' label={LocalizedStrings[language].dealWithAny} />
        <Picker.Item value='1' label={LocalizedStrings[language].dealWithMostThings} />
        <Picker.Item value='2' label={LocalizedStrings[language].dealWithSomeThings} />
        <Picker.Item value='3' label={LocalizedStrings[language].cannotDealWithMost} />
              <Picker.Item value='4' label={LocalizedStrings[language].cannotDealWithAny} />
      </Picker>
    )
  }


const EditMentalHealth = (props) => {
  const event = props.navigation.getParam('event');
  const userName = props.navigation.getParam('userName');
  const [language, setLanguage] = useState(props.navigation.getParam('language', 'en'));
  
  const [inPerson, setInPerson] = useState(null);
	const [tele, setTele] = useState(null);
	const [femaleOnly, setFemaleOnly] = useState(null);
	const [goClinic, setGoClinic] = useState(null);
	const [mentalOther, setMentalOther] = useState('');
	const [acupuncture, setAcupuncture] = useState(null);
	const [sendAudio, setSendAudio] = useState(null);
	const [psychiatry, setPsychiatry] = useState(null);
	const [refill, setRefill] = useState(null);
	const [takingRegularly, setTakingRegularly] = useState(null);
	const [concernsFollowup, setConcernsFollowup] = useState(null);
	const [lastFollowUpDate, setLastFollowUpDate] = useState(null);
	const [feelingNervous, setFeelingNervous] = useState(null);
	const [noControlWorrying, setNoControlWorrying] = useState(null);
	const [littleInterest, setLittleInterest] = useState(null);
	const [feelingDown, setFeelingDown] = useState(null);
	const [cantSleep, setCantSleep] = useState(null);
	const [dontFeelSafeLiving, setDontFeelSafeLiving] = useState(null);
	const [howYouFeel, setHowYouFeel] = useState(null);
	const [childBodyFeeling, setChildBodyFeeling] = useState(null);
	const [childAwayFromPeople, setClildAwayFromPeople] = useState(null);
	const [childFeelingHappy, setChildFeelingHappy] = useState(null);
	const [childTroubleSleeping, setChildTroubleSleeping] = useState(null);
	const [childHardPayAttention, setChildHardPayAttention] = useState(null);
	const [childFeelsAlone, setChildFeelsAlone] = useState(null);
	const [bodyFeelings, setBodyFeelings] = useState(null);
	const [awayFromPeople, setAwayFromPeople] = useState(null);
	const [feelingHappy, setFeelingHappy] = useState(null);
	const [troubleSleeping, setTroubleSleeping] = useState(null);
	const [hardPayAttention, setHardPayAttention] = useState(null);
	const [feelAlone, setFeelAlone] = useState(null);
	const [pastWeekStress, setPastWeekStress] = useState(null);

  useEffect(() => {
    if (!!event.event_metadata) {
      const metadataObj = JSON.parse(event.event_metadata)
      setInPerson(metadataObj.inPerson)
      setTele(metadataObj.tele)
      setFemaleOnly(metadataObj.femaleOnly)
      setGoClinic(metadataObj.goClinic)
      setMentalOther(metadataObj.mentalOther)
      setAcupuncture(metadataObj.acupuncture)
      setSendAudio(metadataObj.sendAudio)
      setPsychiatry(metadataObj.psychiatry)
      setRefill(metadataObj.refill)
      setTakingRegularly(metadataObj.takingRegularly)
      setConcernsFollowup(metadataObj.concernsFollowup)
      setLastFollowUpDate(metadataObj.lastFollowUpDate)
      setFeelingNervous(metadataObj.feelingNervous)
      setNoControlWorrying(metadataObj.noControlWorrying)
      setLittleInterest(metadataObj.littleInterest)
      setFeelingDown(metadataObj.feelingDown)
      setCantSleep(metadataObj.cantSleep)
      setDontFeelSafeLiving(metadataObj.dontFeelSafeLiving)
      setHowYouFeel(metadataObj.howYouFeel)
      setChildBodyFeeling(metadataObj.childBodyFeeling)
      setClildAwayFromPeople(metadataObj.childAwayFromPeople)
      setChildFeelingHappy(metadataObj.childFeelingHappy)
			setChildTroubleSleeping(metadataObj.childTroubleSleeping)
			setChildHardPayAttention(metadataObj.childHardPayAttention)
			setChildFeelingHappy(metadataObj.childFeelsAlone)
			setChildFeelsAlone(metadataObj.childFeelsAlone)
			setBodyFeelings(metadataObj.bodyFeelings)
			setAwayFromPeople(metadataObj.awayFromPeople)
			setFeelingHappy(metadataObj.feelingHappy)
			setTroubleSleeping(metadataObj.troubleSleeping)
			setHardPayAttention(metadataObj.hardPayAttention)
			setFeelAlone(metadataObj.feelAlone)
			setPastWeekStress(metadataObj.pastWeekStress)
    }
  }, [props])

  const submitMentalHealth = async () => {
    database.editEvent(
      event.id,
      JSON.stringify({
        doctor: userName,
        inPerson,
				tele,
				femaleOnly,
				goClinic,
				mentalOther,
				acupuncture,
				sendAudio,
				psychiatry,
				refill,
				takingRegularly,
				concernsFollowup,
				lastFollowUpDate,
				feelingNervous,
				noControlWorrying,
				littleInterest,
				feelingDown,
				cantSleep,
				dontFeelSafeLiving,
				howYouFeel,
				childBodyFeeling,
				childAwayFromPeople,
				childFeelingHappy,
				childTroubleSleeping,
				childHardPayAttention,
				childFeelsAlone,
				bodyFeelings,
				awayFromPeople,
				feelingHappy,
				troubleSleeping,
				hardPayAttention,
				feelAlone,
				pastWeekStress
      })
    ).then((response) => props.navigation.navigate('EventList', { events: response, language }))
  };

  return (
		<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
		<View style={styles.containerLeft}>
			{Header({ action: () => props.navigation.navigate('NewVisit', { language }), language, setLanguage })}
			<View style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'stretch', }}>
				<Text style={[styles.text, { fontSize: 16, fontWeight: 'bold' }]}>{LocalizedStrings[language].MentalHealth}</Text>
			</View>
			<View style={styles.responseRow}>
				{radioButtons({ field: inPerson, action: setInPerson, prompt: LocalizedStrings[language].inPerson, language })}
			</View>
			<View style={[styles.responseRow, { paddingVertical: 0 }]}>
				<Text style={{ color: '#FFFFFF' }}>{LocalizedStrings[language].tele}</Text>
			</View>
			<View style={[styles.responseRow, { padding: 0 }]}>
				<TextInput
					style={styles.inputs}
					placeholder={LocalizedStrings[language].tele}
					onChangeText={(text) => setTele(text)}
					value={tele}
				/>
			</View>
			<View style={styles.responseRow}>
				{radioButtons({ field: femaleOnly, action: setFemaleOnly, prompt: LocalizedStrings[language].femaleOnly, language })}
			</View>
			<View style={styles.responseRow}>
				{radioButtons({ field: goClinic, action: setGoClinic, prompt: LocalizedStrings[language].goClinic, language })}
			</View>
			<View style={[styles.responseRow, { paddingVertical: 0 }]}>
				<Text style={{ color: '#FFFFFF' }}>{LocalizedStrings[language].mentalOther}</Text>
			</View>
			<View style={[styles.responseRow, { padding: 0 }]}>
				<TextInput
					style={styles.inputs}
					placeholder={LocalizedStrings[language].mentalOther}
					onChangeText={(text) => setMentalOther(text)}
					value={mentalOther}
				/>
			</View>
			<View style={[styles.responseRow, { paddingVertical: 0 }]}>
				<Text style={{ color: '#FFFFFF' }}>{LocalizedStrings[language].acupuncture}</Text>
			</View>
			<View style={[styles.responseRow, { padding: 0 }]}>
				<TextInput
					style={styles.inputs}
					placeholder={LocalizedStrings[language].acupuncture}
					onChangeText={(text) => setAcupuncture(text)}
					value={acupuncture}
				/>
			</View>
			<View style={[styles.responseRow, { paddingVertical: 0 }]}>
				<Text style={{ color: '#FFFFFF' }}>{LocalizedStrings[language].sendAudio}</Text>
			</View>
			<View style={[styles.responseRow, { padding: 0 }]}>
				<TextInput
					style={styles.inputs}
					placeholder={LocalizedStrings[language].sendAudio}
					onChangeText={(text) => setSendAudio(text)}
					value={sendAudio}
				/>
			</View>
			<View style={[styles.responseRow, { paddingVertical: 0 }]}>
				<Text style={{ color: '#FFFFFF' }}>{LocalizedStrings[language].psychiatry}</Text>
			</View>
			<View style={[styles.responseRow, { padding: 0 }]}>
				<TextInput
					style={styles.inputs}
					placeholder={LocalizedStrings[language].psychiatry}
					onChangeText={(text) => setPsychiatry(text)}
					value={psychiatry}
				/>
			</View>
			<View style={[styles.responseRow, { paddingVertical: 0 }]}>
				<Text style={{ color: '#FFFFFF' }}>{LocalizedStrings[language].refill}</Text>
			</View>
			<View style={[styles.responseRow, { padding: 0 }]}>
				<TextInput
					style={styles.inputs}
					placeholder={LocalizedStrings[language].refill}
					onChangeText={(text) => setRefill(text)}
					value={refill}
				/>
			</View>
			<View style={styles.responseRow}>
				{radioButtons({ field: takingRegularly, action: setTakingRegularly, prompt: LocalizedStrings[language].takingRegularly, language })}
			</View>
			<View style={[styles.responseRow, { paddingVertical: 0 }]}>
				<Text style={{ color: '#FFFFFF' }}>{LocalizedStrings[language].concernsFollowup}</Text>
			</View>
			<View style={[styles.responseRow, { padding: 0 }]}>
				<TextInput
					style={styles.inputs}
					placeholder={LocalizedStrings[language].concernsFollowup}
					onChangeText={(text) => setConcernsFollowup(text)}
					value={concernsFollowup}
				/>
			</View>
			<View style={[styles.responseRow, { paddingVertical: 0 }]}>
				<Text style={{ color: '#FFFFFF' }}>{LocalizedStrings[language].lastFollowUpDate}</Text>
			</View>
			<View style={[styles.responseRow, { padding: 0 }]}>
				<TextInput
					style={styles.inputs}
					placeholder={LocalizedStrings[language].lastFollowUpDate}
					onChangeText={(text) => setLastFollowUpDate(text)}
					value={lastFollowUpDate}
				/>
			</View>
			<Text style={[styles.text]}>{LocalizedStrings[language].firstSectionHint}</Text>
			<Text style={[styles.text, { fontSize: 16, fontWeight: 'bold' }]}>{LocalizedStrings[language].firstSectionQuestion}</Text>
			<Text style={[styles.text, { fontSize: 16}]}>{LocalizedStrings[language].feelingNervous}</Text>
			{RepeatingPicker(feelingNervous, setFeelingNervous, language)}
			<Text style={[styles.text, { fontSize: 16}]}>{LocalizedStrings[language].noControlWorrying}</Text>
			{RepeatingPicker(noControlWorrying, setNoControlWorrying, language)}
			<Text style={[styles.text, { fontSize: 16}]}>{LocalizedStrings[language].littleInterest}</Text>
			{RepeatingPicker(littleInterest, setLittleInterest, language)}
			<Text style={[styles.text, { fontSize: 16}]}>{LocalizedStrings[language].feelingDown}</Text>
			{RepeatingPicker(feelingDown, setFeelingDown, language)}
			<Text style={[styles.text, { fontSize: 16}]}>{LocalizedStrings[language].cantSleep}</Text>
			{RepeatingPicker(cantSleep, setCantSleep, language)}
			<Text style={[styles.text, { fontSize: 16}]}>{LocalizedStrings[language].dontFeelSafeLiving}</Text>
			{RepeatingPicker(dontFeelSafeLiving, setDontFeelSafeLiving, language)}
			<Text style={[styles.text, { fontSize: 16}]}>{LocalizedStrings[language].secondSectionQuestion}</Text>
			{feelingPicker(howYouFeel, setHowYouFeel, language)}
			<Text style={[styles.text]}>{LocalizedStrings[language].thirdSectionHint}</Text>
			<Text style={[styles.text, { fontSize: 16, fontWeight: 'bold' }]}>{LocalizedStrings[language].thridSectionQuestion}</Text>
			<Text style={[styles.text, { fontSize: 16}]}>{LocalizedStrings[language].childBodyFeeling}</Text>
			{FrequentPicker(childBodyFeeling, setChildBodyFeeling, language)}
			<Text style={[styles.text, { fontSize: 16}]}>{LocalizedStrings[language].childAwayFromPeople}</Text>
			{FrequentPicker(childAwayFromPeople, setClildAwayFromPeople, language)}
			<Text style={[styles.text, { fontSize: 16}]}>{LocalizedStrings[language].childFeelingHappy}</Text>
			{FrequentPicker(childFeelingHappy, setChildFeelingHappy, language)}
			<Text style={[styles.text, { fontSize: 16}]}>{LocalizedStrings[language].childTroubleSleeping}</Text>
			{FrequentPicker(childTroubleSleeping, setChildTroubleSleeping, language)}
			<Text style={[styles.text, { fontSize: 16}]}>{LocalizedStrings[language].childHardPayAttention}</Text>
			{FrequentPicker(childHardPayAttention, setChildHardPayAttention, language)}
			<Text style={[styles.text, { fontSize: 16}]}>{LocalizedStrings[language].childFeelsAlone}</Text>
			{FrequentPicker(childFeelsAlone, setChildFeelsAlone, language)}
			<Text style={[styles.text]}>{LocalizedStrings[language].forthSectionHint}</Text>
			<Text style={[styles.text, { fontSize: 16, fontWeight: 'bold' }]}>{LocalizedStrings[language].forthSectionQuestion}</Text>
			<Text style={[styles.text, { fontSize: 16}]}>{LocalizedStrings[language].bodyFeelings}</Text>
			{FrequentPicker(bodyFeelings, setBodyFeelings, language)}
			<Text style={[styles.text, { fontSize: 16}]}>{LocalizedStrings[language].awayFromPeople}</Text>
			{FrequentPicker(awayFromPeople, setAwayFromPeople, language)}
			<Text style={[styles.text, { fontSize: 16}]}>{LocalizedStrings[language].feelingHappy}</Text>
			{FrequentPicker(feelingHappy, setFeelingHappy, language)}
			<Text style={[styles.text, { fontSize: 16}]}>{LocalizedStrings[language].troubleSleeping}</Text>
			{FrequentPicker(troubleSleeping, setTroubleSleeping, language)}
			<Text style={[styles.text, { fontSize: 16}]}>{LocalizedStrings[language].hardPayAttention}</Text>
			{FrequentPicker(hardPayAttention, setHardPayAttention, language)}
			<Text style={[styles.text, { fontSize: 16}]}>{LocalizedStrings[language].feelAlone}</Text>
			{FrequentPicker(feelAlone, setFeelAlone, language)}
			<Text style={[styles.text, { fontSize: 16}]}>{LocalizedStrings[language].pastWeekStress}</Text>
			{StressRange(pastWeekStress, setPastWeekStress, language)}
			<View style={{ alignItems: 'center' }}>
				<Button
					title={LocalizedStrings[language].save}
					color={'#F77824'}
					onPress={() => submitMentalHealth()} />
			</View>
		</View>
	</ScrollView>
  );
};

export default EditMentalHealth;
