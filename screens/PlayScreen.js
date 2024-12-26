import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import {React, useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PlayScreen = () => {
  const [option, setOptions] = useState('My Sports');
  const [sports, setSports] = useState(['Badminton']);
  return (
    <SafeAreaView>
      <View style={{padding: 13, backgroundColor: '#223536'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignContent: 'center',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
            <Text style={{fontSize: 16, fontWeight: '500', color: 'white'}}>
              Shakar Nagar
            </Text>
            <MaterialIcons name="keyboard-arrow-down" size={24} color="white" />
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
            <Ionicons name="chatbox-outline" size={24} color="white" />
            <Ionicons name="notifications-outline" size={24} color="white" />
            <Image
              style={{width: 30, height: 30, borderRadius: 15}}
              source={{
                uri: 'https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp',
              }}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            marginTop: 10,
          }}>
          <Pressable onPress={() => setOptions('Calender')}>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 15,
                color: option == 'Calender' ? '#12e04c' : 'white',
              }}>
              Calendar
            </Text>
          </Pressable>
          <Pressable onPress={() => setOptions('My Sports')}>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 15,
                color: option == 'My Sports' ? '#12e04c' : 'white',
              }}>
              My Sports
            </Text>
          </Pressable>
          <Pressable onPress={() => setOptions('Other Sports')}>
            <Text
              style={[
                styles.textHeading,
                {color: option == 'Other Sports' ? '#12e04c' : 'white'},
              ]}>
              Other Sports
            </Text>
          </Pressable>
        </View>
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Pressable
              onPress={() => setSports('Badminton')}
              style={[
                styles.mySportsContainerPressable,
                {
                  borderWidth: sports == 'Badminton' ? 0 : 1,
                  backgroundColor:
                    sports == 'Badminton' ? '#1dbf22' : 'transparent',
                },
              ]}>
              <Text style={styles.sportHeadingText}>Badminton</Text>
            </Pressable>
            <Pressable
              onPress={() => setSports('Cricket')}
              style={[
                styles.mySportsContainerPressable,
                {
                  borderWidth: sports == 'Cricket' ? 0 : 1,
                  backgroundColor:
                    sports == 'Cricket' ? '#1dbf22' : 'transparent',
                },
              ]}>
              <Text style={styles.sportHeadingText}>Cricket</Text>
            </Pressable>
            <Pressable
              onPress={() => setSports('Cycling')}
              style={[
                styles.mySportsContainerPressable,
                {
                  borderWidth: sports == 'Cycling' ? 0 : 1,
                  backgroundColor:
                    sports == 'Cycling' ? '#1dbf22' : 'transparent',
                },
              ]}>
              <Text style={styles.sportHeadingText}>Cycling</Text>
            </Pressable>
            <Pressable
              onPress={() => setSports('Running')}
              style={[
                styles.mySportsContainerPressable,
                {
                  borderWidth: sports == 'Running' ? 0 : 1,
                  backgroundColor:
                    sports == 'Running' ? '#1dbf22' : 'transparent',
                },
              ]}>
              <Text style={styles.sportHeadingText}>Running</Text>
            </Pressable>
          </ScrollView>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 10,
          backgroundColor: 'white',
        }}>
        <Pressable>
          <Text style={{fontWeight: 'bold'}}>Create Game</Text>
        </Pressable>
        <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
          <Pressable>
            <Text style={{fontWeight: 'bold'}}>Filter</Text>
          </Pressable>
          <Pressable>
            <Text style={{fontWeight: 'bold'}}>Sort</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PlayScreen;

const styles = StyleSheet.create({
  textHeading: {
    fontWeight: '500',
    fontSize: 15,
  },
  mySportsContainerPressable: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderColor: 'white',
    marginRight: 10,
    borderRadius: 8,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sportHeadingText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 15,
  },
});
