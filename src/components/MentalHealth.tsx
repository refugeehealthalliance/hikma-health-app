import React, { useState } from 'react';
import {
  View, Text, Image, TouchableOpacity, ScrollView, Button, TextInput, Picker
} from 'react-native';
import styles from './Style';
import { EventTypes } from '../enums/EventTypes';
import { database } from "../storage/Database";
import { v4 as uuid } from 'uuid';
import { LocalizedStrings } from '../enums/LocalizedStrings';
import radioButtons from './shared/RadioButtons'
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

export const MentalHealthDisplay = (metadataObj, language) => {
  return (
    <View>
			<Text style={{ fontSize: 16, fontWeight: 'bold' }}>{LocalizedStrings[language].mentalHealthFollowUp}</Text>
			{!!metadataObj.inPerson ? <Text>{LocalizedStrings[language].inPerson}: {LocalizedStrings[language].yes}</Text> : null}
			<Text>{LocalizedStrings[language].tele}: {metadataObj.tele}</Text>
			{!!metadataObj.femaleOnly ? <Text>{LocalizedStrings[language].femaleOnly}: {LocalizedStrings[language].yes}</Text> : null}
			{!!metadataObj.goClinic ? <Text>{LocalizedStrings[language].goClinic}: {LocalizedStrings[language].yes}</Text> : null}
			<Text>{LocalizedStrings[language].mentalOther}: {metadataObj.mentalOther}</Text>
			<Text>{LocalizedStrings[language].acupuncture}: {metadataObj.acupuncture}</Text>
			<Text>{LocalizedStrings[language].sendAudio}: {metadataObj.sendAudio}</Text>
			<Text>{LocalizedStrings[language].psychiatry}: {metadataObj.psychiatry}</Text>
			<Text>{LocalizedStrings[language].refill}: {metadataObj.refill}</Text>
      {!!metadataObj.takingRegularly ? <Text>{LocalizedStrings[language].takingRegularly}: {LocalizedStrings[language].yes}</Text> : null}
			<Text>{LocalizedStrings[language].concernsFollowup}: {metadataObj.concernsFollowup}</Text>
			<Text>{LocalizedStrings[language].lastFollowUpDate}: {metadataObj.lastFollowUpDate}</Text>
			<Text>{LocalizedStrings[language].firstSectionQuestion}</Text>
			<Text>{LocalizedStrings[language].feelingNervous}: {metadataObj.feelingNervous}</Text>
			<Text>{LocalizedStrings[language].noControlWorrying}: {metadataObj.noControlWorrying}</Text>
			<Text>{LocalizedStrings[language].littleInterest}: {metadataObj.littleInterest}</Text>
			<Text>{LocalizedStrings[language].feelingDown}: {metadataObj.feelingDown}</Text>
			<Text>{LocalizedStrings[language].cantSleep}: {metadataObj.cantSleep}</Text>
			<Text>{LocalizedStrings[language].dontFeelSafeLiving}: {metadataObj.dontFeelSafeLiving}</Text>
			<Text>{LocalizedStrings[language].firstSectionScore}: {parseInt(metadataObj.feelingNervous) + parseInt(metadataObj.noControlWorrying) + parseInt(metadataObj.littleInterest) + parseInt(metadataObj.feelingDown) + parseInt(metadataObj.cantSleep) }</Text>
			<Text>{LocalizedStrings[language].secondSectionQuestion}: {metadataObj.howYouFeel}</Text>
			<Text>{LocalizedStrings[language].thirdSectionQuestion}:</Text>
			<Text>{LocalizedStrings[language].childBodyFeeling}: {metadataObj.childBodyFeeling}</Text>
			<Text>{LocalizedStrings[language].childAwayFromPeople}: {metadataObj.childAwayFromPeople}</Text>
			<Text>{LocalizedStrings[language].childFeelingHappy}: {metadataObj.childFeelingHappy}</Text>
			<Text>{LocalizedStrings[language].childTroubleSleeping}: {metadataObj.childTroubleSleeping}</Text>
			<Text>{LocalizedStrings[language].childHardPayAttention}: {metadataObj.childHardPayAttention}</Text>
			<Text>{LocalizedStrings[language].childFeelsAlone}: {metadataObj.childFeelsAlone}</Text>
			<Text>{LocalizedStrings[language].forthSectionQuestion}:</Text>
			<Text>{LocalizedStrings[language].bodyFeelings}: {metadataObj.bodyFeelings}</Text>
			<Text>{LocalizedStrings[language].awayFromPeople}: {metadataObj.awayFromPeople}</Text>
			<Text>{LocalizedStrings[language].feelingHappy}: {metadataObj.feelingHappy}</Text>
			<Text>{LocalizedStrings[language].troubleSleeping}: {metadataObj.troubleSleeping}</Text>
			<Text>{LocalizedStrings[language].hardPayAttention}: {metadataObj.hardPayAttention}</Text>
			<Text>{LocalizedStrings[language].feelAlone}: {metadataObj.feelAlone}</Text>
			<Text>{LocalizedStrings[language].pastWeekStress}: {metadataObj.pastWeekStress}</Text>
    </View>
  )
}

const MentalHealth = (props) => {
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
    const [firstSectionScore, setFirstSectionScore] = useState(null);
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
  
    const [language, setLanguage] = useState(props.navigation.getParam('language', 'en'));
    const patientId = props.navigation.getParam('patientId');
    const visitId = props.navigation.getParam('visitId');
    const userName = props.navigation.getParam('userName');
  
		const today = new Date();


    const submit = async () => {
      database.addEvent({
        id: uuid(),
        patient_id: patientId,
        visit_id: visitId,
        event_type: EventTypes.MentalHealth,
        event_metadata: JSON.stringify({
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
          firstSectionScore,
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
      }).then(() => {
        props.navigation.navigate('NewVisit')
      })
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
					<View style={[styles.responseRow, { padding: 0 }]}>
            <TextInput
              style={styles.inputs}
							placeholder={LocalizedStrings[language].mentalOther}
              onChangeText={(text) => setMentalOther(text)}
              value={mentalOther}
            />
          </View>
					<View style={[styles.responseRow, { padding: 0 }]}>
            <TextInput
              style={styles.inputs}
							placeholder={LocalizedStrings[language].acupuncture}
              onChangeText={(text) => setAcupuncture(text)}
              value={acupuncture}
            />
          </View>
					<View style={[styles.responseRow, { padding: 0 }]}>
            <TextInput
              style={styles.inputs}
							placeholder={LocalizedStrings[language].sendAudio}
              onChangeText={(text) => setSendAudio(text)}
              value={sendAudio}
            />
          </View>
					<View style={[styles.responseRow, { padding: 0 }]}>
            <TextInput
              style={styles.inputs}
							placeholder={LocalizedStrings[language].psychiatry}
              onChangeText={(text) => setPsychiatry(text)}
              value={psychiatry}
            />
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
					<View style={[styles.responseRow, { padding: 0 }]}>
            <TextInput
              style={styles.inputs}
							placeholder={LocalizedStrings[language].concernsFollowup}
              onChangeText={(text) => setConcernsFollowup(text)}
              value={concernsFollowup}
            />
          </View>
					<View style={styles.inputRow}>
						<DatePicker
							style={styles.datePicker}
							date={lastFollowUpDate}
							mode="date"
							placeholder={LocalizedStrings[language].lastFollowUpDate}
							format="YYYY-MM-DD"
							minDate="2000-05-01"
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
							onDateChange={(date) => setLastFollowUpDate(date)}
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
					<View style={[styles.responseRow, { padding: 0 }]}>
            <TextInput
              style={styles.inputs}
							placeholder={LocalizedStrings[language].firstSectionScore}
              onChangeText={(score = parseInt(feelingNervous) + parseInt(noControlWorrying) + parseInt(littleInterest) + parseInt(feelingDown) + parseInt(cantSleep)) => setFirstSectionScore(score)}
              value={firstSectionScore}
            />
          </View>
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
              onPress={() => submit()} />
          </View>
        </View>
      </ScrollView>
    );
  };
  
export default MentalHealth;
