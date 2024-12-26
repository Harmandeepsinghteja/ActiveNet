import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
const BookScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f5f5f5'}}>
      <View>
        <View style={{flexDirection: 'row', alignItems: 'center', gap:5}}>
          <Text>Shahkar Nagar</Text>
          <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BookScreen;

const styles = StyleSheet.create({});
