import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, ScrollView, Button, TouchableOpacity
} from 'react-native';

import { database } from "../storage/Database";
import styles from './Style';
import { LocalizedStrings } from '../enums/LocalizedStrings';
import Header from './shared/Header';
import radioButtons from './shared/RadioButtons';

const EditMedicalHistory = (props) => {
  const event = props.navigation.getParam('event');
  const userName = props.navigation.getParam('userName');
  const [language, setLanguage] = useState(props.navigation.getParam('language', 'sp'));

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

  useEffect(() => {
    if (!!event.event_metadata) {
      const metadataObj = JSON.parse(event.event_metadata)
      setAllergies(metadataObj.allergies)
      setTobacco(metadataObj.tobacco)
      setAlcohol(metadataObj.alcohol)
      setDrugs(metadataObj.drugs)
      setSurgeryHx(metadataObj.surgeryHx)
      setChronicConditions(metadataObj.chronicConditions)
      setCurrentMedications(metadataObj.currentMedications)
      setVaccinations(metadataObj.vaccinations)
      setCancer(metadataObj.cancer)
      setCancerDetails(metadataObj.cancerDetails)
      setEpilepsy(metadataObj.epilepsy)
      setEpilepsyDetails(metadataObj.epilepsyDetails)
      setHeartDisease(metadataObj.heartDisease)
      setHeartDiseaseDetails(metadataObj.heartDiseaseDetails)
      setHypertension(metadataObj.hypertension)
      setHypertensionDetails(metadataObj.hypertensionDetails)
      setThyroidConditions(metadataObj.thyroidConditions)
      setThyroidConditionsDetails(metadataObj.thyroidConditionsDetails)
      setTuberculosis(metadataObj.tuberculosis)
      setTuberculosisDetails(metadataObj.tuberculosisDetails)
      setDiabetes(metadataObj.diabetes)
      setDiabetesDetails(metadataObj.diabetesDetails)
      setMultipleBirths(metadataObj.multipleBirths)
      setMultipleBirthsDetails(metadataObj.multipleBirthsDetails)
      setBreechBirths(metadataObj.breechBirths)
      setBreechBirthsDetails(metadataObj.breechBirthsDetails)
      setDomesticViolence(metadataObj.domesticViolence)
      setDomesticViolenceDetails(metadataObj.domesticViolenceDetails)
      setAlcoholismDrugAddiction(metadataObj.alcoholismDrugAddiction)
      setAlcoholismDrugAddictionDetails(metadataObj.alcoholismDrugAddictionDetails)
      setCodependency(metadataObj.codependency)
      setCodependencyDetails(metadataObj.codependencyDetails)
      setNutritionalDisorder(metadataObj.nutritionalDisorder)
      setNutritionalDisorderDetails(metadataObj.nutritionalDisorderDetails)
      setAbuse(metadataObj.abuse)
      setAbuseDetails(metadataObj.abuseDetails)
      setSexualAbuse(metadataObj.sexualAbuse)
      setSexualAbuseDetails(metadataObj.sexualAbuseDetails)
      setMentalDisorders(metadataObj.mentalDisorders)
      setMentalDisordersDetails(metadataObj.mentalDisordersDetails)
    }
  }, [props])

  const submit = async () => {
    database.editEvent(
      event.id,
      JSON.stringify({
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
    ).then((response) => props.navigation.navigate('EventList', { events: response, language }))
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.containerLeft}>
        {Header({ action: () => props.navigation.navigate('EventList', { language }), language, setLanguage })}

        <View style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'stretch', }}>
          <Text style={[styles.text, { fontSize: 16, fontWeight: 'bold' }]}>{LocalizedStrings[language].medicalHistory}</Text>
        </View>
        <View style={[styles.responseRow, { paddingBottom: 0 }]}>
          <Text style={{ color: '#FFFFFF' }}>{LocalizedStrings[language].allergies}</Text>
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
            style={styles.inputs}
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
            style={styles.inputs}
            onChangeText={(text) => setSurgeryHx(text)}
            value={surgeryHx}
          />
        </View>
        <View style={[styles.responseRow, { paddingVertical: 0 }]}>
          <Text style={{ color: '#FFFFFF' }}>{LocalizedStrings[language].chronicConditions}</Text>
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
            style={styles.inputs}
            onChangeText={(text) => setChronicConditions(text)}
            value={chronicConditions}
          />
        </View>
        <View style={[styles.responseRow, { paddingVertical: 0 }]}>
          <Text style={{ color: '#FFFFFF' }}>{LocalizedStrings[language].currentMedications}</Text>
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
            style={styles.inputs}
            onChangeText={(text) => setCurrentMedications(text)}
            value={currentMedications}
          />
        </View>
        <View style={[styles.responseRow, { paddingVertical: 0 }]}>
          <Text style={{ color: '#FFFFFF' }}>{LocalizedStrings[language].vaccinations}</Text>
        </View>
        <View style={[styles.responseRow, { paddingTop: 0, paddingHorizontal: 0 }]}>
          <TextInput
            style={styles.inputs}
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
              style={[styles.inputs, styles.smallTextbox]}
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
              style={[styles.inputs, styles.smallTextbox]}
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
              style={[styles.inputs, styles.smallTextbox]}
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
              style={[styles.inputs, styles.smallTextbox]}
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
              style={[styles.inputs, styles.smallTextbox]}
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
              style={[styles.inputs, styles.smallTextbox]}
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
              style={[styles.inputs, styles.smallTextbox]}
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
              style={[styles.inputs, styles.smallTextbox]}
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
              style={[styles.inputs, styles.smallTextbox]}
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
              style={[styles.inputs, styles.smallTextbox]}
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
              style={[styles.inputs, styles.smallTextbox]}
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
              style={[styles.inputs, styles.smallTextbox]}
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
              style={[styles.inputs, styles.smallTextbox]}
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
              style={[styles.inputs, styles.smallTextbox]}
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
              style={[styles.inputs, styles.smallTextbox]}
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
              style={[styles.inputs, styles.smallTextbox]}
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

export default EditMedicalHistory;
