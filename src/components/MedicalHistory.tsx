import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, ScrollView, Button, TouchableOpacity
} from 'react-native';

import { database } from "../storage/Database";
import { v4 as uuid } from 'uuid';
import styles from './Style';
import { EventTypes } from '../enums/EventTypes';
import { LocalizedStrings } from '../enums/LocalizedStrings';
import Header from './shared/Header';
import radioButtons from './shared/RadioButtons';

export const MedicalHistoryDisplay = (metadataObj, language) => {
  return (
    <View>
      <Text>{LocalizedStrings[language].provider}: {metadataObj.doctor} </Text>
      <Text>{LocalizedStrings[language].allergies}: {metadataObj.allergies} </Text>
      {!!metadataObj.tobacco ? <Text>{LocalizedStrings[language].tobacco}: {LocalizedStrings[language].yes}</Text> : null}
      {!!metadataObj.alcohol ? <Text>{LocalizedStrings[language].alcohol}: {LocalizedStrings[language].yes}</Text> : null}
      {!!metadataObj.drugs ? <Text>{LocalizedStrings[language].drugs}: {LocalizedStrings[language].yes}</Text> : null}
      <Text>{LocalizedStrings[language].surgeryHx}: {metadataObj.surgeryHx}</Text>
      <Text>{LocalizedStrings[language].chronicConditions}: {metadataObj.chronicConditions}</Text>
      <Text>{LocalizedStrings[language].currentMedications}: {metadataObj.currentMedications}</Text>
      <Text>{LocalizedStrings[language].vaccinations}: {metadataObj.vaccinations}</Text>
      <Text style={{ fontWeight: 'bold' }} >{LocalizedStrings[language].familyHistory}:</Text>
      {!!metadataObj.cancer ? <Text>{LocalizedStrings[language].cancer}: {metadataObj.cancerDetails}</Text>: null}
      {!!metadataObj.epilepsy ? <Text>{LocalizedStrings[language].epilepsy}: {metadataObj.epilepsyDetails}</Text>: null}
      {!!metadataObj.heartDisease ? <Text>{LocalizedStrings[language].heartDisease}: {metadataObj.heartDiseaseDetails}</Text>: null}
      {!!metadataObj.hypertension ? <Text>{LocalizedStrings[language].hypertension}: {metadataObj.hypertensionDetails}</Text>: null}
      {!!metadataObj.thyroidConditions ? <Text>{LocalizedStrings[language].thyroidConditions}: {metadataObj.thyroidConditionsDetails}</Text>: null}
      {!!metadataObj.tuberculosis ? <Text>{LocalizedStrings[language].tuberculosis}: {metadataObj.tuberculosisDetails}</Text>: null}
      {!!metadataObj.diabetes ? <Text>{LocalizedStrings[language].diabetes}: {metadataObj.diabetesDetails}</Text>: null}
      {!!metadataObj.multipleBirths ? <Text>{LocalizedStrings[language].multipleBirths}: {metadataObj.multipleBirthsDetails}</Text>: null}
      {!!metadataObj.breechBirths ? <Text>{LocalizedStrings[language].breechBirths}: {metadataObj.breechBirthsDetails}</Text>: null}
      <Text style={{ fontWeight: 'bold' }} >{LocalizedStrings[language].spiritualEmotionalHistory}:</Text>
      {!!metadataObj.domesticViolence ? <Text>{LocalizedStrings[language].domesticViolence}: {metadataObj.domesticViolenceDetails}</Text>: null}
      {!!metadataObj.alcoholismDrugAddiction ? <Text>{LocalizedStrings[language].alcoholismDrugAddiction}: {metadataObj.alcoholismDrugAddictionDetails}</Text>: null}
      {!!metadataObj.codependency ? <Text>{LocalizedStrings[language].codependency}: {metadataObj.codependencyDetails}</Text>: null}
      {!!metadataObj.nutritionalDisorder ? <Text>{LocalizedStrings[language].nutritionalDisorder}: {metadataObj.nutritionalDisorderDetails}</Text>: null}
      {!!metadataObj.abuse ? <Text>{LocalizedStrings[language].abuse}: {metadataObj.abuseDetails}</Text>: null}
      {!!metadataObj.sexualAbuse ? <Text>{LocalizedStrings[language].sexualAbuse}: {metadataObj.sexualAbuseDetails}</Text>: null}
      {!!metadataObj.mentalDisorders ? <Text>{LocalizedStrings[language].mentalDisorders}: {metadataObj.mentalDisordersDetails}</Text>: null}
    </View>)
}

const MedicalHistory = (props) => {
  const [allergies, setAllergies] = useState(null);
  const [tobacco, setTobacco] = useState(null);
  const [alcohol, setAlcohol] = useState(null);
  const [drugs, setDrugs] = useState(null);
  const [surgeryHx, setSurgeryHx] = useState(null);
  const [chronicConditions, setChronicConditions] = useState(null);
  const [currentMedications, setCurrentMedications] = useState(null);
  const [vaccinations, setVaccinations] = useState(null);
  const [cancer, setCancer] = useState(null);
  const [cancerDetails, setCancerDetails] = useState(null);
  const [epilepsy, setEpilepsy] = useState(null);
  const [epilepsyDetails, setEpilepsyDetails] = useState(null);
  const [heartDisease, setHeartDisease] = useState(null);
  const [heartDiseaseDetails, setHeartDiseaseDetails] = useState(null);
  const [hypertension, setHypertension] = useState(null);
  const [hypertensionDetails, setHypertensionDetails] = useState(null);
  const [thyroidConditions, setThyroidConditions] = useState(null);
  const [thyroidConditionsDetails, setThyroidConditionsDetails] = useState(null);
  const [tuberculosis, setTuberculosis] = useState(null);
  const [tuberculosisDetails, setTuberculosisDetails] = useState(null);
  const [diabetes, setDiabetes] = useState(null);
  const [diabetesDetails, setDiabetesDetails] = useState(null);
  const [multipleBirths, setMultipleBirths] = useState(null);
  const [multipleBirthsDetails, setMultipleBirthsDetails] = useState(null);
  const [breechBirths, setBreechBirths] = useState(null);
  const [breechBirthsDetails, setBreechBirthsDetails] = useState(null);
  const [domesticViolence, setDomesticViolence] = useState(null);
  const [domesticViolenceDetails, setDomesticViolenceDetails] = useState(null);
  const [alcoholismDrugAddiction, setAlcoholismDrugAddiction] = useState(null);
  const [alcoholismDrugAddictionDetails, setAlcoholismDrugAddictionDetails] = useState(null);
  const [codependency, setCodependency] = useState(null);
  const [codependencyDetails, setCodependencyDetails] = useState(null);
  const [nutritionalDisorder, setNutritionalDisorder] = useState(null);
  const [nutritionalDisorderDetails, setNutritionalDisorderDetails] = useState(null);
  const [abuse, setAbuse] = useState(null);
  const [abuseDetails, setAbuseDetails] = useState(null);
  const [sexualAbuse, setSexualAbuse] = useState(null);
  const [sexualAbuseDetails, setSexualAbuseDetails] = useState(null);
  const [mentalDisorders, setMentalDisorders] = useState(null);
  const [mentalDisordersDetails, setMentalDisordersDetails] = useState(null);
  const [language, setLanguage] = useState(props.navigation.getParam('language', 'sp'));

  const patientId = props.navigation.getParam('patientId');
  const visitId = props.navigation.getParam('visitId');
  const userName = props.navigation.getParam('userName');

  useEffect(() => {
    database.getLatestPatientEventByType(patientId, EventTypes.MedicalHistoryFull).then((response: any) => {
      if (response.length > 0) {
        const responseObj = JSON.parse(response)
        setAllergies(responseObj.allergies)
        setTobacco(responseObj.tobacco)
        setAlcohol(responseObj.alcohol)
        setDrugs(responseObj.drugs)
        setSurgeryHx(responseObj.surgeryHx)
        setChronicConditions(responseObj.chronicConditions)
        setCurrentMedications(responseObj.currentMedications)
        setVaccinations(responseObj.vaccinations)
        setCancer(responseObj.cancer)
        setCancerDetails(responseObj.cancerDetails)
        setEpilepsy(responseObj.epilepsy)
        setEpilepsyDetails(responseObj.epilepsyDetails)
        setHeartDisease(responseObj.heartDisease)
        setHeartDiseaseDetails(responseObj.heartDiseaseDetails)
        setHypertension(responseObj.hypertension)
        setHypertensionDetails(responseObj.hypertensionDetails)
        setThyroidConditions(responseObj.thyroidConditions)
        setThyroidConditionsDetails(responseObj.thyroidConditionsDetails)
        setTuberculosis(responseObj.tuberculosis)
        setTuberculosisDetails(responseObj.tuberculosisDetails)
        setDiabetes(responseObj.diabetes)
        setDiabetesDetails(responseObj.diabetesDetails)
        setMultipleBirths(responseObj.multipleBirths)
        setMultipleBirthsDetails(responseObj.multipleBirthsDetails)
        setBreechBirths(responseObj.breechBirths)
        setBreechBirthsDetails(responseObj.breechBirthsDetails)
        setDomesticViolence(responseObj.domesticViolence)
        setDomesticViolenceDetails(responseObj.domesticViolenceDetails)
        setAlcoholismDrugAddiction(responseObj.alcoholismDrugAddiction)
        setAlcoholismDrugAddictionDetails(responseObj.alcoholismDrugAddictionDetails)
        setCodependency(responseObj.codependency)
        setCodependencyDetails(responseObj.codependencyDetails)
        setNutritionalDisorder(responseObj.nutritionalDisorder)
        setNutritionalDisorderDetails(responseObj.nutritionalDisorderDetails)
        setAbuse(responseObj.abuse)
        setAbuseDetails(responseObj.abuseDetails)
        setSexualAbuse(responseObj.sexualAbuse)
        setSexualAbuseDetails(responseObj.sexualAbuseDetails)
        setMentalDisorders(responseObj.mentalDisorders)
        setMentalDisordersDetails(responseObj.mentalDisordersDetails)
      }
    })
  }, [])

  const submit = async () => {
    database.addEvent({
      id: uuid(),
      patient_id: patientId,
      visit_id: visitId,
      event_type: EventTypes.MedicalHistoryFull,
      event_metadata: JSON.stringify({
        doctor: userName,
        allergies,
        tobacco,
        alcohol,
        drugs,
        surgeryHx,
        chronicConditions,
        currentMedications,
        vaccinations,
        cancer,
        cancerDetails,
        epilepsy,
        epilepsyDetails,
        heartDisease,
        heartDiseaseDetails,
        hypertension,
        hypertensionDetails,
        thyroidConditions,
        thyroidConditionsDetails,
        tuberculosis,
        tuberculosisDetails,
        diabetes,
        diabetesDetails,
        multipleBirths,
        multipleBirthsDetails,
        breechBirths,
        breechBirthsDetails,
        domesticViolence,
        domesticViolenceDetails,
        alcoholismDrugAddiction,
        alcoholismDrugAddictionDetails,
        codependency,
        codependencyDetails,
        nutritionalDisorder,
        nutritionalDisorderDetails,
        abuse,
        abuseDetails,
        sexualAbuse,
        sexualAbuseDetails,
        mentalDisorders,
        mentalDisordersDetails,
        
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
          <Text style={[styles.text, { fontSize: 16, fontWeight: 'bold' }]}>{LocalizedStrings[language].medicalHistory}</Text>
        </View>
        <View style={[styles.responseRow, { paddingBottom: 0 }]}>
          <Text style={{ color: '#FFFFFF' }}>{LocalizedStrings[language].allergies}</Text>
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
            multiline={true}
            numberOfLines={10}
            style={[styles.inputs, styles.xSmallTextbox]}
            onChangeText={(text) => setAllergies(text)}
            value={allergies}
          />
        </View>
        <View style={styles.responseRow}>
          {radioButtons({ field: tobacco, action: setTobacco, prompt: LocalizedStrings[language].tobacco, language })}
        </View>
        <View style={styles.responseRow}>
          {radioButtons({ field: alcohol, action: setAlcohol, prompt: LocalizedStrings[language].alcohol, language })}
        </View>
        <View style={styles.responseRow}>
          {radioButtons({ field: drugs, action: setDrugs, prompt: LocalizedStrings[language].drugs, language })}
        </View>
        <View style={[styles.responseRow, { paddingVertical: 0 }]}>
          <Text style={{ color: '#FFFFFF' }}>{LocalizedStrings[language].surgeryHx}</Text>
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
            multiline={true}
            numberOfLines={10}
            style={[styles.inputs, styles.xSmallTextbox]}
            onChangeText={(text) => setSurgeryHx(text)}
            value={surgeryHx}
          />
        </View>
        <View style={[styles.responseRow, { paddingVertical: 0 }]}>
          <Text style={{ color: '#FFFFFF' }}>{LocalizedStrings[language].chronicConditions}</Text>
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
            multiline={true}
            numberOfLines={10}
            style={[styles.inputs, styles.xSmallTextbox]}
            onChangeText={(text) => setChronicConditions(text)}
            value={chronicConditions}
          />
        </View>
        <View style={[styles.responseRow, { paddingVertical: 0 }]}>
          <Text style={{ color: '#FFFFFF' }}>{LocalizedStrings[language].currentMedications}</Text>
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
            multiline={true}
            numberOfLines={10}
            style={[styles.inputs, styles.xSmallTextbox]}
            onChangeText={(text) => setCurrentMedications(text)}
            value={currentMedications}
          />
        </View>
        <View style={[styles.responseRow, { paddingVertical: 0 }]}>
          <Text style={{ color: '#FFFFFF' }}>{LocalizedStrings[language].vaccinations}</Text>
        </View>
        <View style={[styles.responseRow, { paddingTop: 0, paddingHorizontal: 0 }]}>
          <TextInput
            multiline={true}
            numberOfLines={10}
            style={[styles.inputs, styles.xSmallTextbox]}
            onChangeText={(text) => setVaccinations(text)}
            value={vaccinations}
          />
        </View>
        <View style={[styles.responseRow, { paddingVertical: 0 }]}>
          <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>{LocalizedStrings[language].familyHistory}</Text>
        </View>
        <View style={styles.responseRow}>
          {radioButtons({ field: cancer, action: setCancer, prompt: LocalizedStrings[language].cancer, language })}
        </View>
        {!!cancer ?
          <View style={[styles.responseRow, { paddingTop: 0, paddingHorizontal: 0 }]}>
            <TextInput
              multiline={true}
              numberOfLines={10}
              style={[styles.inputs, styles.xSmallTextbox]}
              placeholder={LocalizedStrings[language].medicalHistoryDetails}
              onChangeText={(text) => setCancerDetails(text)}
              value={cancerDetails}
            />
          </View> :
          null
        }
        <View style={styles.responseRow}>
          {radioButtons({ field: epilepsy, action: setEpilepsy, prompt: LocalizedStrings[language].epilepsy, language })}
        </View>
        {!!epilepsy ?
          <View style={[styles.responseRow, { paddingTop: 0, paddingHorizontal: 0 }]}>
            <TextInput
              multiline={true}
              numberOfLines={10}
              style={[styles.inputs, styles.xSmallTextbox]}
              placeholder={LocalizedStrings[language].medicalHistoryDetails}
              onChangeText={(text) => setEpilepsyDetails(text)}
              value={epilepsyDetails}
            />
          </View> :
          null
        }
        <View style={styles.responseRow}>
          {radioButtons({ field: heartDisease, action: setHeartDisease, prompt: LocalizedStrings[language].heartDisease, language })}
        </View>
        {!!heartDisease ?
          <View style={[styles.responseRow, { paddingTop: 0, paddingHorizontal: 0 }]}>
            <TextInput
              multiline={true}
              numberOfLines={10}
              style={[styles.inputs, styles.xSmallTextbox]}
              placeholder={LocalizedStrings[language].medicalHistoryDetails}
              onChangeText={(text) => setHeartDiseaseDetails(text)}
              value={heartDiseaseDetails}
            />
          </View> :
          null
        }
        <View style={styles.responseRow}>
          {radioButtons({ field: hypertension, action: setHypertension, prompt: LocalizedStrings[language].hypertension, language })}
        </View>
        {!!hypertension ?
          <View style={[styles.responseRow, { paddingTop: 0, paddingHorizontal: 0 }]}>
            <TextInput
              multiline={true}
              numberOfLines={10}
              style={[styles.inputs, styles.xSmallTextbox]}
              placeholder={LocalizedStrings[language].medicalHistoryDetails}
              onChangeText={(text) => setHypertensionDetails(text)}
              value={hypertensionDetails}
            />
          </View> :
          null
        }
        <View style={styles.responseRow}>
          {radioButtons({ field: thyroidConditions, action: setThyroidConditions, prompt: LocalizedStrings[language].thyroidConditions, language })}
        </View>
        {!!thyroidConditions ?
          <View style={[styles.responseRow, { paddingTop: 0, paddingHorizontal: 0 }]}>
            <TextInput
              multiline={true}
              numberOfLines={10}
              style={[styles.inputs, styles.xSmallTextbox]}
              placeholder={LocalizedStrings[language].medicalHistoryDetails}
              onChangeText={(text) => setThyroidConditionsDetails(text)}
              value={thyroidConditionsDetails}
            />
          </View> :
          null
        }
        <View style={styles.responseRow}>
          {radioButtons({ field: tuberculosis, action: setTuberculosis, prompt: LocalizedStrings[language].tuberculosis, language })}
        </View>
        {!!tuberculosis ?
          <View style={[styles.responseRow, { paddingTop: 0, paddingHorizontal: 0 }]}>
            <TextInput
              multiline={true}
              numberOfLines={10}
              style={[styles.inputs, styles.xSmallTextbox]}
              placeholder={LocalizedStrings[language].medicalHistoryDetails}
              onChangeText={(text) => setTuberculosisDetails(text)}
              value={tuberculosisDetails}
            />
          </View> :
          null
        }
        <View style={styles.responseRow}>
          {radioButtons({ field: diabetes, action: setDiabetes, prompt: LocalizedStrings[language].diabetes, language })}
        </View>
        {!!diabetes ?
          <View style={[styles.responseRow, { paddingTop: 0, paddingHorizontal: 0 }]}>
            <TextInput
              multiline={true}
              numberOfLines={10}
              style={[styles.inputs, styles.xSmallTextbox]}
              placeholder={LocalizedStrings[language].medicalHistoryDetails}
              onChangeText={(text) => setDiabetesDetails(text)}
              value={diabetesDetails}
            />
          </View> :
          null
        }
        <View style={styles.responseRow}>
          {radioButtons({ field: multipleBirths, action: setMultipleBirths, prompt: LocalizedStrings[language].multipleBirths, language })}
        </View>
        {!!multipleBirths ?
          <View style={[styles.responseRow, { paddingTop: 0, paddingHorizontal: 0 }]}>
            <TextInput
              multiline={true}
              numberOfLines={10}
              style={[styles.inputs, styles.xSmallTextbox]}
              placeholder={LocalizedStrings[language].medicalHistoryDetails}
              onChangeText={(text) => setMultipleBirthsDetails(text)}
              value={multipleBirthsDetails}
            />
          </View> :
          null
        }
        <View style={styles.responseRow}>
          {radioButtons({ field: breechBirths, action: setBreechBirths, prompt: LocalizedStrings[language].breechBirths, language })}
        </View>
        {!!breechBirths ?
          <View style={[styles.responseRow, { paddingTop: 0, paddingHorizontal: 0 }]}>
            <TextInput
              multiline={true}
              numberOfLines={10}
              style={[styles.inputs, styles.xSmallTextbox]}
              placeholder={LocalizedStrings[language].medicalHistoryDetails}
              onChangeText={(text) => setBreechBirthsDetails(text)}
              value={breechBirthsDetails}
            />
          </View> :
          null
        }

        <View style={[styles.responseRow, { paddingVertical: 0 }]}>
          <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>{LocalizedStrings[language].spiritualEmotionalHistory}</Text>
        </View>

        <View style={styles.responseRow}>
          {radioButtons({ field: domesticViolence, action: setDomesticViolence, prompt: LocalizedStrings[language].domesticViolence, language })}
        </View>
        {!!domesticViolence ?
          <View style={[styles.responseRow, { paddingTop: 0, paddingHorizontal: 0 }]}>
            <TextInput
              multiline={true}
              numberOfLines={10}
              style={[styles.inputs, styles.xSmallTextbox]}
              placeholder={LocalizedStrings[language].spiritualEmotionalHistoryDetails}
              onChangeText={(text) => setDomesticViolenceDetails(text)}
              value={domesticViolenceDetails}
            />
          </View> :
          null
        }
        <View style={styles.responseRow}>
          {radioButtons({ field: alcoholismDrugAddiction, action: setAlcoholismDrugAddiction, prompt: LocalizedStrings[language].alcoholismDrugAddiction, language })}
        </View>
        {!!alcoholismDrugAddiction ?
          <View style={[styles.responseRow, { paddingTop: 0, paddingHorizontal: 0 }]}>
            <TextInput
              multiline={true}
              numberOfLines={10}
              style={[styles.inputs, styles.xSmallTextbox]}
              placeholder={LocalizedStrings[language].spiritualEmotionalHistoryDetails}
              onChangeText={(text) => setAlcoholismDrugAddictionDetails(text)}
              value={alcoholismDrugAddictionDetails}
            />
          </View> :
          null
        }
        <View style={styles.responseRow}>
          {radioButtons({ field: codependency, action: setCodependency, prompt: LocalizedStrings[language].codependency, language })}
        </View>
        {!!codependency ?
          <View style={[styles.responseRow, { paddingTop: 0, paddingHorizontal: 0 }]}>
            <TextInput
              multiline={true}
              numberOfLines={10}
              style={[styles.inputs, styles.xSmallTextbox]}
              placeholder={LocalizedStrings[language].spiritualEmotionalHistoryDetails}
              onChangeText={(text) => setCodependencyDetails(text)}
              value={codependencyDetails}
            />
          </View> :
          null
        }
        <View style={styles.responseRow}>
          {radioButtons({ field: nutritionalDisorder, action: setNutritionalDisorder, prompt: LocalizedStrings[language].nutritionalDisorder, language })}
        </View>
        {!!nutritionalDisorder ?
          <View style={[styles.responseRow, { paddingTop: 0, paddingHorizontal: 0 }]}>
            <TextInput
              multiline={true}
              numberOfLines={10}
              style={[styles.inputs, styles.xSmallTextbox]}
              placeholder={LocalizedStrings[language].spiritualEmotionalHistoryDetails}
              onChangeText={(text) => setNutritionalDisorderDetails(text)}
              value={nutritionalDisorderDetails}
            />
          </View> :
          null
        }
        <View style={styles.responseRow}>
          {radioButtons({ field: abuse, action: setAbuse, prompt: LocalizedStrings[language].abuse, language })}
        </View>
        {!!abuse ?
          <View style={[styles.responseRow, { paddingTop: 0, paddingHorizontal: 0 }]}>
            <TextInput
              multiline={true}
              numberOfLines={10}
              style={[styles.inputs, styles.xSmallTextbox]}
              placeholder={LocalizedStrings[language].spiritualEmotionalHistoryDetails}
              onChangeText={(text) => setAbuseDetails(text)}
              value={abuseDetails}
            />
          </View> :
          null
        }
        <View style={styles.responseRow}>
          {radioButtons({ field: sexualAbuse, action: setSexualAbuse, prompt: LocalizedStrings[language].sexualAbuse, language })}
        </View>
        {!!sexualAbuse ?
          <View style={[styles.responseRow, { paddingTop: 0, paddingHorizontal: 0 }]}>
            <TextInput
              multiline={true}
              numberOfLines={10}
              style={[styles.inputs, styles.xSmallTextbox]}
              placeholder={LocalizedStrings[language].spiritualEmotionalHistoryDetails}
              onChangeText={(text) => setSexualAbuseDetails(text)}
              value={sexualAbuseDetails}
            />
          </View> :
          null
        }
        <View style={styles.responseRow}>
          {radioButtons({ field: mentalDisorders, action: setMentalDisorders, prompt: LocalizedStrings[language].mentalDisorders, language })}
        </View>
        {!!mentalDisorders ?
          <View style={[styles.responseRow, { paddingTop: 0, paddingHorizontal: 0 }]}>
            <TextInput
              multiline={true}
              numberOfLines={10}
              style={[styles.inputs, styles.xSmallTextbox]}
              placeholder={LocalizedStrings[language].spiritualEmotionalHistoryDetails}
              onChangeText={(text) => setMentalDisordersDetails(text)}
              value={mentalDisordersDetails}
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

export default MedicalHistory;
