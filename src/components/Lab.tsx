import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, ScrollView, Button, TouchableOpacity
} from 'react-native';

import { database } from "../storage/Database";
import { v4 as uuid } from 'uuid';
import styles from './Style';
import { EventTypes } from '../enums/EventTypes';
import { LocalizedStrings } from '../enums/LocalizedStrings';
import radioButtons from './shared/RadioButtons';
import resultsRadioButtons from './shared/ResultsRadioButtons';
import Header from './shared/Header';
import DatePicker from 'react-native-datepicker'

const today = new Date();

export const LabDisplay = (metadataObj, language) => {
  return (
    <View>
      <Text>{LocalizedStrings[language].provider}: {metadataObj.doctor} </Text>
      {!!metadataObj.testBt1 ? 
      <View>
        <Text style={{ fontWeight: 'bold' }}>{LocalizedStrings[language].bloodTest} 1:</Text>
        <Text>{LocalizedStrings[language].date}: {metadataObj.dateBt1} </Text>
        <Text>{LocalizedStrings[language].test}: {metadataObj.testBt1}</Text>
        <Text>{LocalizedStrings[language].result}: {!!metadataObj.resultBt1 ? LocalizedStrings[language].normal : LocalizedStrings[language].abnormal} </Text>
        <Text>{LocalizedStrings[language].labNotes}: {metadataObj.notesBt1}</Text>
      </View> : null }
      {!!metadataObj.testBt2 ? 
      <View>
        <Text style={{ fontWeight: 'bold' }}>{LocalizedStrings[language].bloodTest} 2:</Text>
        <Text>{LocalizedStrings[language].date}: {metadataObj.dateBt2} </Text>
        <Text>{LocalizedStrings[language].test}: {metadataObj.testBt2}</Text>
        <Text>{LocalizedStrings[language].result}: {!!metadataObj.resultBt2 ? LocalizedStrings[language].normal : LocalizedStrings[language].abnormal} </Text>
        <Text>{LocalizedStrings[language].labNotes}: {metadataObj.notesBt2}</Text>
      </View> : null }
      {!!metadataObj.testBt3 ? 
      <View>
        <Text style={{ fontWeight: 'bold' }}>{LocalizedStrings[language].bloodTest} 3:</Text>
        <Text>{LocalizedStrings[language].date}: {metadataObj.dateBt3} </Text>
        <Text>{LocalizedStrings[language].test}: {metadataObj.testBt3}</Text>
        <Text>{LocalizedStrings[language].result}: {!!metadataObj.resultBt3 ? LocalizedStrings[language].normal : LocalizedStrings[language].abnormal} </Text>
        <Text>{LocalizedStrings[language].labNotes}: {metadataObj.notesBt3}</Text>
      </View> : null }
      {!!metadataObj.testBt4 ? 
      <View>
        <Text style={{ fontWeight: 'bold' }}>{LocalizedStrings[language].bloodTest} 4:</Text>
        <Text>{LocalizedStrings[language].date}: {metadataObj.dateBt4} </Text>
        <Text>{LocalizedStrings[language].test}: {metadataObj.testBt4}</Text>
        <Text>{LocalizedStrings[language].result}: {!!metadataObj.resultBt4 ? LocalizedStrings[language].normal : LocalizedStrings[language].abnormal} </Text>
        <Text>{LocalizedStrings[language].labNotes}: {metadataObj.notesBt4}</Text>
      </View> : null }
      {!!metadataObj.testBt5 ? 
      <View>
        <Text style={{ fontWeight: 'bold' }}>{LocalizedStrings[language].bloodTest} 5:</Text>
        <Text>{LocalizedStrings[language].date}: {metadataObj.dateBt5} </Text>
        <Text>{LocalizedStrings[language].test}: {metadataObj.testBt5}</Text>
        <Text>{LocalizedStrings[language].result}: {!!metadataObj.resultBt5 ? LocalizedStrings[language].normal : LocalizedStrings[language].abnormal} </Text>
        <Text>{LocalizedStrings[language].labNotes}: {metadataObj.notesBt5}</Text>
      </View> : null }

      {!!metadataObj.testI1 ? 
      <View>
        <Text style={{ fontWeight: 'bold' }}>{LocalizedStrings[language].imaging} 1:</Text>
        <Text>{LocalizedStrings[language].date}: {metadataObj.dateI1} </Text>
        <Text>{LocalizedStrings[language].typeOfImaging}: {metadataObj.testI1}</Text>
        <Text>{LocalizedStrings[language].result}: {!!metadataObj.resultI1 ? LocalizedStrings[language].normal : LocalizedStrings[language].abnormal} </Text>
        <Text>{LocalizedStrings[language].labNotes}: {metadataObj.notesI1}</Text>
      </View> : null }
      {!!metadataObj.testI2 ? 
      <View>
        <Text style={{ fontWeight: 'bold' }}>{LocalizedStrings[language].imaging} 2:</Text>
        <Text>{LocalizedStrings[language].date}: {metadataObj.dateI2} </Text>
        <Text>{LocalizedStrings[language].typeOfImaging}: {metadataObj.testI2}</Text>
        <Text>{LocalizedStrings[language].result}: {!!metadataObj.resultI2 ? LocalizedStrings[language].normal : LocalizedStrings[language].abnormal} </Text>
        <Text>{LocalizedStrings[language].labNotes}: {metadataObj.notesI2}</Text>
      </View> : null }
      {!!metadataObj.testI3 ? 
      <View>
        <Text style={{ fontWeight: 'bold' }}>{LocalizedStrings[language].imaging} 3:</Text>
        <Text>{LocalizedStrings[language].date}: {metadataObj.dateI3} </Text>
        <Text>{LocalizedStrings[language].typeOfImaging}: {metadataObj.testI3}</Text>
        <Text>{LocalizedStrings[language].result}: {!!metadataObj.resultI3 ? LocalizedStrings[language].normal : LocalizedStrings[language].abnormal} </Text>
        <Text>{LocalizedStrings[language].labNotes}: {metadataObj.notesI3}</Text>
      </View> : null }
    </View>)
}

const Lab = (props) => {
  const [dateBt1, setDateBt1] = useState('');
  const [testBt1, setTestBt1] = useState(null);
  const [resultBt1, setResultBt1] = useState(null);
  const [notesBt1, setNotesBt1] = useState(null);
  const [dateBt2, setDateBt2] = useState('');
  const [testBt2, setTestBt2] = useState(null);
  const [resultBt2, setResultBt2] = useState(null);
  const [notesBt2, setNotesBt2] = useState(null);
  const [dateBt3, setDateBt3] = useState('');
  const [testBt3, setTestBt3] = useState(null);
  const [resultBt3, setResultBt3] = useState(null);
  const [notesBt3, setNotesBt3] = useState(null);
  const [dateBt4, setDateBt4] = useState('');
  const [testBt4, setTestBt4] = useState(null);
  const [resultBt4, setResultBt4] = useState(null);
  const [notesBt4, setNotesBt4] = useState(null);
  const [dateBt5, setDateBt5] = useState('');
  const [testBt5, setTestBt5] = useState(null);
  const [resultBt5, setResultBt5] = useState(null);
  const [notesBt5, setNotesBt5] = useState(null);
  const [dateI1, setDateI1] = useState('');
  const [testI1, setTestI1] = useState(null);
  const [resultI1, setResultI1] = useState(null);
  const [notesI1, setNotesI1] = useState(null);
  const [dateI2, setDateI2] = useState('');
  const [testI2, setTestI2] = useState(null);
  const [resultI2, setResultI2] = useState(null);
  const [notesI2, setNotesI2] = useState(null);
  const [dateI3, setDateI3] = useState('');
  const [testI3, setTestI3] = useState(null);
  const [resultI3, setResultI3] = useState(null);
  const [notesI3, setNotesI3] = useState(null);
  const [language, setLanguage] = useState(props.navigation.getParam('language', 'sp'));

  const patientId = props.navigation.getParam('patientId');
  const visitId = props.navigation.getParam('visitId');
  const userName = props.navigation.getParam('userName');

  const submit = async () => {
    database.addEvent({
      id: uuid(),
      patient_id: patientId,
      visit_id: visitId,
      event_type: EventTypes.Lab,
      event_metadata: JSON.stringify({
        doctor: userName,
        dateBt1,
        testBt1,
        resultBt1,
        notesBt1,
        dateBt2,
        testBt2,
        resultBt2,
        notesBt2,
        dateBt3,
        testBt3,
        resultBt3,
        notesBt3,
        dateBt4,
        testBt4,
        resultBt4,
        notesBt4,
        dateBt5,
        testBt5,
        resultBt5,
        notesBt5,
        dateI1,
        testI1,
        resultI1,
        notesI1,
        dateI2,
        testI2,
        resultI2,
        notesI2,
        dateI3,
        testI3,
        resultI3,
        notesI3,
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
          <Text style={[styles.text, { fontSize: 16, fontWeight: 'bold' }]}>{LocalizedStrings[language].bloodTestImaging}</Text>
        </View>
        {/* Blood Test 1 */}
        <View style={[styles.responseRow, { paddingVertical: 0 }]}>
          <Text style={{ color: '#FFFFFF', fontWeight: 'bold'  }}>{LocalizedStrings[language].bloodTest} 1</Text>
        </View>
        <View style={styles.inputRow}>
          <DatePicker
            style={styles.datePicker}
            date={dateBt1}
            mode="date"
            placeholder={LocalizedStrings[language].date}
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
            onDateChange={(date) => setDateBt1(date)}
          />
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
            placeholder={LocalizedStrings[language].bloodTest}
            style={styles.inputs}
            onChangeText={(text) => setTestBt1(text)}
            value={testBt1}
          />
        </View>
        <View style={styles.responseRow}>
          {resultsRadioButtons({ field: resultBt1, action: setResultBt1, prompt: LocalizedStrings[language].result, language })}
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
            placeholder={LocalizedStrings[language].labNotes}
            style={styles.inputs}
            onChangeText={(text) => setNotesBt1(text)}
            value={notesBt1}
          />
        </View>

        {/* Blood Test 2 */}
        <View style={[styles.responseRow, { paddingVertical: 0 }]}>
          <Text style={{ color: '#FFFFFF', fontWeight: 'bold'  }}>{LocalizedStrings[language].bloodTest} 2</Text>
        </View>
        <View style={styles.inputRow}>
          <DatePicker
            style={styles.datePicker}
            date={dateBt2}
            mode="date"
            placeholder={LocalizedStrings[language].date}
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
            onDateChange={(date) => setDateBt2(date)}
          />
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
            placeholder={LocalizedStrings[language].bloodTest}
            style={styles.inputs}
            onChangeText={(text) => setTestBt2(text)}
            value={testBt2}
          />
        </View>
        <View style={styles.responseRow}>
          {resultsRadioButtons({ field: resultBt2, action: setResultBt2, prompt: LocalizedStrings[language].result, language })}
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
            placeholder={LocalizedStrings[language].labNotes}
            style={styles.inputs}
            onChangeText={(text) => setNotesBt2(text)}
            value={notesBt2}
          />
        </View>
        
        {/* Blood Test 3 */}
        <View style={[styles.responseRow, { paddingVertical: 0 }]}>
          <Text style={{ color: '#FFFFFF', fontWeight: 'bold'  }}>{LocalizedStrings[language].bloodTest} 3</Text>
        </View>
        <View style={styles.inputRow}>
          <DatePicker
            style={styles.datePicker}
            date={dateBt3}
            mode="date"
            placeholder={LocalizedStrings[language].date}
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
            onDateChange={(date) => setDateBt3(date)}
          />
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
            placeholder={LocalizedStrings[language].bloodTest}
            style={styles.inputs}
            onChangeText={(text) => setTestBt3(text)}
            value={testBt3}
          />
        </View>
        <View style={styles.responseRow}>
          {resultsRadioButtons({ field: resultBt3, action: setResultBt3, prompt: LocalizedStrings[language].result, language })}
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
            placeholder={LocalizedStrings[language].labNotes}
            style={styles.inputs}
            onChangeText={(text) => setNotesBt3(text)}
            value={notesBt3}
          />
        </View>

        {/* Blood Test 4 */}
        <View style={[styles.responseRow, { paddingVertical: 0 }]}>
          <Text style={{ color: '#FFFFFF', fontWeight: 'bold'  }}>{LocalizedStrings[language].bloodTest} 4</Text>
        </View>
        <View style={styles.inputRow}>
          <DatePicker
            style={styles.datePicker}
            date={dateBt4}
            mode="date"
            placeholder={LocalizedStrings[language].date}
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
            onDateChange={(date) => setDateBt4(date)}
          />
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
            placeholder={LocalizedStrings[language].bloodTest}
            style={styles.inputs}
            onChangeText={(text) => setTestBt4(text)}
            value={testBt4}
          />
        </View>
        <View style={styles.responseRow}>
          {resultsRadioButtons({ field: resultBt4, action: setResultBt4, prompt: LocalizedStrings[language].result, language })}
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
            placeholder={LocalizedStrings[language].labNotes}
            style={styles.inputs}
            onChangeText={(text) => setNotesBt4(text)}
            value={notesBt4}
          />
        </View>

        {/* Blood Test 5 */}
        <View style={[styles.responseRow, { paddingVertical: 0 }]}>
          <Text style={{ color: '#FFFFFF', fontWeight: 'bold'  }}>{LocalizedStrings[language].bloodTest} 5</Text>
        </View>
        <View style={styles.inputRow}>
          <DatePicker
            style={styles.datePicker}
            date={dateBt5}
            mode="date"
            placeholder={LocalizedStrings[language].date}
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
            onDateChange={(date) => setDateBt5(date)}
          />
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
            placeholder={LocalizedStrings[language].bloodTest}
            style={styles.inputs}
            onChangeText={(text) => setTestBt5(text)}
            value={testBt5}
          />
        </View>
        <View style={styles.responseRow}>
          {resultsRadioButtons({ field: resultBt5, action: setResultBt5, prompt: LocalizedStrings[language].result, language })}
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
            placeholder={LocalizedStrings[language].labNotes}
            style={styles.inputs}
            onChangeText={(text) => setNotesBt5(text)}
            value={notesBt5}
          />
        </View>

        {/* Imaging 1 */}
        <View style={[styles.responseRow, { paddingVertical: 0 }]}>
          <Text style={{ color: '#FFFFFF', fontWeight: 'bold'  }}>{LocalizedStrings[language].imaging} 1</Text>
        </View>
        <View style={styles.inputRow}>
          <DatePicker
            style={styles.datePicker}
            date={dateI1}
            mode="date"
            placeholder={LocalizedStrings[language].date}
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
            onDateChange={(date) => setDateI1(date)}
          />
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
            placeholder={LocalizedStrings[language].typeOfImaging}
            style={styles.inputs}
            onChangeText={(text) => setTestI1(text)}
            value={testI1}
          />
        </View>
        <View style={styles.responseRow}>
          {resultsRadioButtons({ field: resultI1, action: setResultI1, prompt: LocalizedStrings[language].result, language })}
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
            placeholder={LocalizedStrings[language].labNotes}
            style={styles.inputs}
            onChangeText={(text) => setNotesI1(text)}
            value={notesI1}
          />
        </View>

        {/* Imaging 2 */}
        <View style={[styles.responseRow, { paddingVertical: 0 }]}>
          <Text style={{ color: '#FFFFFF', fontWeight: 'bold'  }}>{LocalizedStrings[language].imaging} 2</Text>
        </View>
        <View style={styles.inputRow}>
          <DatePicker
            style={styles.datePicker}
            date={dateI2}
            mode="date"
            placeholder={LocalizedStrings[language].date}
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
            onDateChange={(date) => setDateI2(date)}
          />
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
            placeholder={LocalizedStrings[language].typeOfImaging}
            style={styles.inputs}
            onChangeText={(text) => setTestI2(text)}
            value={testI2}
          />
        </View>
        <View style={styles.responseRow}>
          {resultsRadioButtons({ field: resultI2, action: setResultI2, prompt: LocalizedStrings[language].result, language })}
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
            placeholder={LocalizedStrings[language].labNotes}
            style={styles.inputs}
            onChangeText={(text) => setNotesI2(text)}
            value={notesI2}
          />
        </View>

        {/* Imaging 3 */}
        <View style={[styles.responseRow, { paddingVertical: 0 }]}>
          <Text style={{ color: '#FFFFFF', fontWeight: 'bold'  }}>{LocalizedStrings[language].imaging} 3</Text>
        </View>
        <View style={styles.inputRow}>
          <DatePicker
            style={styles.datePicker}
            date={dateI3}
            mode="date"
            placeholder={LocalizedStrings[language].date}
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
            onDateChange={(date) => setDateI3(date)}
          />
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
            placeholder={LocalizedStrings[language].typeOfImaging}
            style={styles.inputs}
            onChangeText={(text) => setTestI3(text)}
            value={testI3}
          />
        </View>
        <View style={styles.responseRow}>
          {resultsRadioButtons({ field: resultI3, action: setResultI3, prompt: LocalizedStrings[language].result, language })}
        </View>
        <View style={[styles.responseRow, { padding: 0 }]}>
          <TextInput
            placeholder={LocalizedStrings[language].labNotes}
            style={styles.inputs}
            onChangeText={(text) => setNotesI3(text)}
            value={notesI3}
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

export default Lab;
