import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { database } from "../storage/Database";
import styles from './Style';
import { LocalizedStrings } from '../enums/LocalizedStrings'
import { EventTypes } from "../enums/EventTypes";
import { Covid19Display } from "./Covid19Form";
import { VitalsDisplay } from "./Vitals";
import { ExaminationDisplay } from "./Examination";
import { MedicineDisplay } from "./Medicine";
import { MedicalHistoryDisplay } from "./MedicalHistory";
import { PhysiotherapyDisplay } from "./Physiotherapy";
import { CommonProblemsDisplay } from "./CommonProblems";
import { InterventionsDisplay } from "./Interventions";
import { MentalHealthDisplay } from "./MentalHealth";
import { NursingNotesDisplay } from "./NursingNotes";
import { LabDisplay } from "./Lab";


const SnapshotList = (props) => {
  const patient = props.navigation.getParam('patient');
  const eventType = props.navigation.getParam('eventType');
  const [language, setLanguage] = useState(props.navigation.getParam('language', 'sp'));

  const [list, setList] = useState(props.navigation.getParam('events', []));

  useEffect(() => {
    database.getAllPatientEventsByType(patient.id, eventType).then(events => {
      const filteredEvents = events.filter(event => {
        return !!event.event_metadata;
      })
      setList(filteredEvents);
    })
  }, [props, language])

  const keyExtractor = (item, index) => index.toString()

  const parseMetadata = (metadata: string) => {
    try {
      JSON.parse(metadata);
    } catch (e) {
      return metadata;
    }
    return JSON.parse(metadata);
  }

  const renderItem = ({ item }) => {
    const metadataObj = parseMetadata(item.event_metadata)

    let eventTypeText: string
    let display
    switch (item.event_type) {
      case EventTypes.Covid19Screening:
        eventTypeText = LocalizedStrings[language].covidScreening
        display = Covid19Display(metadataObj, language)
        break
      case EventTypes.Vitals:
        eventTypeText = LocalizedStrings[language].vitals
        display = VitalsDisplay(metadataObj, language)
        break
      case EventTypes.ExaminationFull:
        eventTypeText = LocalizedStrings[language].examination
        display = ExaminationDisplay(metadataObj, language)
        break
      case EventTypes.Medicine:
        eventTypeText = LocalizedStrings[language].medicine
        display = MedicineDisplay(metadataObj, language)
        break
      case EventTypes.MedicalHistoryFull:
        eventTypeText = LocalizedStrings[language].medicalHistory
        display = MedicalHistoryDisplay(metadataObj, language)
        break
      case EventTypes.Physiotherapy:
        eventTypeText = LocalizedStrings[language].physiotherapy
        display = PhysiotherapyDisplay(metadataObj, language)
        break
      case EventTypes.CommonProblems:
        eventTypeText = LocalizedStrings[language].commonProblems
        display = CommonProblemsDisplay(metadataObj, language)
        break
      case EventTypes.Interventions:
        eventTypeText = LocalizedStrings[language].interventions
        display = InterventionsDisplay(metadataObj, language)
        break
      case EventTypes.MentalHealth:
        eventTypeText = LocalizedStrings[language].mentalHealthFollowUp
        display = MentalHealthDisplay(metadataObj, language)
        break
      case EventTypes.NursingNotes:
        eventTypeText = LocalizedStrings[language].nursingNotes
        display = NursingNotesDisplay(metadataObj, language)
        break
      case EventTypes.Lab:
        eventTypeText = LocalizedStrings[language].bloodTestImaging
        display = LabDisplay(metadataObj, language)
        break
      default:
        eventTypeText = item.event_type
        display = <Text>{metadataObj}</Text>
        break
    }

    const time = new Date(item.edited_at).toLocaleString([], { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true })

    return (
      <TouchableOpacity style={styles.card}
      // onLongPress={() => editEvent(item)}
      >
        <View style={styles.cardContent} >
          <View style={{ margin: 10 }}>
            <Text>{`${eventTypeText}, ${!!metadataObj.doctor ? metadataObj.doctor + ',' : ''} ${time} `}</Text>
            <View
              style={{
                marginVertical: 5,
                borderBottomColor: 'black',
                borderBottomWidth: 1,
              }}
            />
            {display}
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.main}>
      {Header({ action: () => props.navigation.navigate('PatientView', { language: language, patient: patient }), language, setLanguage })}
      <View style={styles.listContainer}>
        <View style={styles.scroll}>
          <FlatList
            keyExtractor={keyExtractor}
            data={list}
            renderItem={(item) => renderItem(item)}
          />
        </View>
      </View>
    </View>
  )
}

export default SnapshotList;