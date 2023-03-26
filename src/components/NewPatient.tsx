import React, { useState } from 'react';
import {
  View, Text, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, Picker, Button
} from 'react-native';
import { database } from "../storage/Database";
import { v4 as uuid } from 'uuid';
import styles from './Style';
import DatePicker from 'react-native-datepicker'
import { LocalizedStrings } from '../enums/LocalizedStrings';
import { EventTypes } from '../enums/EventTypes';
import Header from './shared/Header';

export const Gender = (value, action, language) => {
  return (
    <Picker
      selectedValue={value}
      onValueChange={value => action(value)}
      style={[styles.picker, { width: 180 }]}
    >
      <Picker.Item value={LocalizedStrings[language].male} label={LocalizedStrings[language].male} />
      <Picker.Item value={LocalizedStrings[language].female} label={LocalizedStrings[language].female} />
      <Picker.Item value={LocalizedStrings[language].nonBinary} label={LocalizedStrings[language].nonBinary} />
      <Picker.Item value={LocalizedStrings[language].transGender} label={LocalizedStrings[language].transGender} />
      <Picker.Item value={LocalizedStrings[language].preferNotRespond} label={LocalizedStrings[language].preferNotRespond} />
    </Picker>
  )
}

const NewPatient = (props) => {
  const [givenName, setGivenName] = useState('');
  const [surname, setSurname] = useState('');
  const [dob, setDob] = useState('');
  // const [male, setMale] = useState(false);
  const [gender, setGender] = useState('');
  const [number, setNumber] = useState(Math.random().toString().substr(2, 6));
  const [country, setCountry] = useState('');
  const [hometown, setHometown] = useState('');
  const [phone, setPhone] = useState('');
  const [language, setLanguage] = useState(props.navigation.getParam('language', 'en'))
  const [camp, setCamp] = useState('');

  const today = new Date();
  const [patientId] = useState(uuid().replace(/-/g, ''));

  const handleSaveCamp = (campName: string) => {
    database.addEvent({
      id: uuid(),
      patient_id: patientId,
      visit_id: null,
      event_type: EventTypes.Camp,
      event_metadata: campName
    }).then(() => console.log('camp saved'))
  }

  const addPatient = async () => {
    const givenNameId = await database.saveStringContent([{ language: language, content: givenName }])
    const surnameId = await database.saveStringContent([{ language: language, content: surname }])
    const countryId = await database.saveStringContent([{ language: language, content: country }])
    const hometownId = await database.saveStringContent([{ language: language, content: hometown }])

    database.addPatient({
      id: patientId,
      given_name: givenNameId,
      surname: surnameId,
      date_of_birth: dob,
      country: countryId,
      hometown: hometownId,
      phone: phone,
      sex: gender,
      number: number
    }).then(() => {
      if (!!camp) {
        handleSaveCamp(camp)
      }
      props.navigation.navigate('PatientList', {
        reloadPatientsToggle: !props.navigation.state.params.reloadPatientsToggle,
        language: language
      })
    })
  };

  // function RadioButton(props) {
  //   return (
  //     <TouchableOpacity onPress={() => setMale(!male)}>
  //       <View style={styles.outerRadioButton}>
  //         {props.selected ? <View style={styles.selectedRadioButton} /> : null}
  //       </View>
  //     </TouchableOpacity>
  //   );
  // }

  return (
    <View style={styles.container}>
      {Header({ action: () => props.navigation.navigate('PatientList', { language }), language, setLanguage })}
      <View style={styles.inputRow}>
        <TextInput
          style={styles.inputs}
          placeholder={LocalizedStrings[language].firstName}
          onChangeText={(text) => setGivenName(text)}
          value={givenName}
        />
      </View>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.inputs}
          placeholder={LocalizedStrings[language].surname}
          onChangeText={(text) => setSurname(text)}
          value={surname}
        />
      </View>
      <View style={styles.inputRow}>
        <View style={[styles.responseRow]}>
          <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>MRN: </Text>
        </View>
        <TextInput
          style={styles.inputs}
          placeholder="MRN"
          onChangeText={(text) => setNumber(text)}
          value={number}
        />
      </View>
      <View style={styles.inputRow}>
        <DatePicker
          style={styles.datePicker}
          date={dob}
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
          onDateChange={(date) => setDob(date)}
        />
        {Gender(gender, setGender, language)}
      </View>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.inputs}
          placeholder={LocalizedStrings[language].country}
          onChangeText={(text) => setCountry(text)}
          value={country}
        />
        <TextInput
          style={styles.inputs}
          placeholder={LocalizedStrings[language].hometown}
          onChangeText={(text) => setHometown(text)}
          value={hometown}
        />
      </View>
      <View style={styles.inputRow}>
        <TextInput
          style={[styles.inputs]}
          placeholder={LocalizedStrings[language].camp}
          onChangeText={(text) => {
            setCamp(text)
          }}
          value={camp}
        />
        <TextInput
          style={styles.inputs}
          placeholder={LocalizedStrings[language].phone}
          onChangeText={(text) => setPhone(text)}
          value={phone}
        />
      </View>
      <View style={{ marginTop: 30 }}>
        <Button
          title={LocalizedStrings[language].save}
          color={'#F77824'}
          onPress={() => addPatient()}
        />
      </View>
    </View>
  );
};

export default NewPatient;
