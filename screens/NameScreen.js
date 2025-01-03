import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React, { useEffect } from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {getRegistrationProgress, saveRegistrationProgress} from '../registrationUtils';
import { get } from 'core-js/core/dict';

const NameScreen = () => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const navigation = useNavigation();




  useEffect(() => {
    getRegistrationProgress('Name').then(progressData => {
      if (progressData) {
        setFirstName(progressData.firstName || '');
        setLastName(progressData.lastName || '');
      }
    });
  }, []);
  


  const saveName = () => {
    if (firstName.traim !== '') {
      saveRegistrationProgress('Name', {firstName, lastName});
    }
    navigation.navigate('Image');
  };
  return (
    <>
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{marginHorizontal: 10}}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </View>

        <View style={{marginHorizontal: 10, marginVertical: 15}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            Complete Your Profile
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
              gap: 5,
            }}>
            <Text
              style={{
                color: 'gray',
                alignContent: 'center',
                justifyContent: 'center',
              }}>
              What would you like your mates to call you?
            </Text>
            <Ionicons name="heart" size={20} color="red" />
          </View>
        </View>

        <View
          style={{
            backgroundColor: 'white',
            marginHorizontal: 10,
            marginVertical: 25,
            gap: 20,
            flexDirection: 'column',
          }}>
          <View>
            <Text style={{fontSize: 16, color: 'gray'}}>First Name *</Text>
            <TextInput
              value={firstName}
              onChangeText={setFirstName}
              style={{
                padding: 10,
                borderColor: '#D0D0D0',
                borderWidth: 1,
                borderRadius: 10,
                marginTop: 10,
              }}
            />
          </View>
          <View>
            <Text style={{fontSize: 16, color: 'gray'}}>Last Name </Text>
            <TextInput
              value={lastName}
              onChangeText={setLastName}
              style={{
                padding: 10,
                borderColor: '#D0D0D0',
                borderWidth: 1,
                borderRadius: 10,
                marginTop: 10,
              }}
            />
          </View>
        </View>
      </SafeAreaView>
      <Pressable
        onPress={saveName}
        style={{
          backgroundColor: '#07bc0c',
          padding: 12,
          marginTop: 'auto',
          marginBottom: 30,
          marginHorizontal: 10,
          borderRadius: 4,
        }}>
        <Text
          style={{
            textAlign: 'center',
            color: 'white',
            fontWeight: '500',
            fontSize: 15,
          }}>
          Next
        </Text>
      </Pressable>
    </>
  );
};

export default NameScreen;

const styles = StyleSheet.create({});
