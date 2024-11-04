import React, {useState} from "react";
import { Text, TextInput, View, TouchableOpacity, FlatList, Alert } from "react-native"

import { Participant } from "../../components/Participant";

import {styles} from './styles'

export function Home(){
  const [participants, setParticipants] = useState<string[]>([]) ; 
  const [participantsName, setParticipantsName] = useState(''); 
  
  function handleParticipantAdd(){
    if(participants.includes(participantsName)){
        return Alert.alert("Participante existe", "Ja existe um participante!")
    }
    setParticipants(prevState => [...prevState, participantsName]);
    setParticipantsName('');
  }

  function handleParticipantRemove(name: string){
    
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => setParticipants(prevStates => prevStates.filter(participant => participant !== name))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ]);
  }

  return(
    <View style ={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style= {styles.eventDate}>Sexta, 4 de Novembro de 2022.</Text>

      <View style = {styles.form}>
      <TextInput 
        style = {styles.input}
        placeholder="Nome do participante"
        placeholderTextColor={"gray"}
        onChangeText={setParticipantsName}
        value={participantsName}
      />
      <TouchableOpacity style = {styles.button} onPress={handleParticipantAdd}>
        <Text style={styles.buttonText}>
            +
        </Text>
      </TouchableOpacity>
      </View>
    <FlatList
      data={participants}
      keyExtractor={item => item}
      renderItem={({item}) => (
        <Participant 
            key={item}
            name = {item} 
            onRemove = {() => handleParticipantRemove(item)}/>
      )}
      showsHorizontalScrollIndicator = {false}
      ListEmptyComponent={() => (
        <Text style = {styles.listEmptyText}>
          Ninguém chegou no evento!
        </Text>
      )}
    />
          
    </View>
  )
}