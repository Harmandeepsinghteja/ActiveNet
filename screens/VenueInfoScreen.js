import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useRoute} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Amenities from '../components/Amenities';
import AntDesign from 'react-native-vector-icons/AntDesign';
const VenueInfoScreen = () => {
  const route = useRoute();
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <ScrollView>
          <>
            <View>
              <Image
                style={{width: '100%', height: 200, resizeMode: 'cover'}}
                source={{
                  uri: 'https://images.pexels.com/photos/3660204/pexels-photo-3660204.jpeg?auto=compress&cs=tinysrgb&w=800',
                }}
              />
            </View>
            <View style={{padding: 10}}>
              <Text>{route?.params?.name}</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 6,
                  marginTop: 5,
                }}>
                <Ionicons name="time-outline" size={24} color="black" />
                <Text style={{fontSize: 15, fontWeight: '500'}}>
                  6:00 AM - 11:pm PM
                </Text>
              </View>
              <View style={{flexDirection: 'row', marginVertical: 8, gap: 5}}>
                <Ionicons name="location-outline" size={24} color="black" />
                <Text style={{fontSize: 14, width: '80%', fontWeight: '500'}}>
                  {route?.params?.location}
                </Text>
              </View>
            </View>
            <View
              style={{
                padding: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}>
              <View>
                <View style={{flexDirection: 'row'}}>
                  {[0, 0, 0, 0, 0].map((en, i) => (
                    <FontAwesome
                      // key={`${food.id}-${i}`}
                      style={{paddingHorizontal: 3}}
                      name={
                        i < Math.floor(route.params.rating) ? 'star' : 'star-o'
                      }
                      size={15}
                      color="#FFD700"
                    />
                  ))}
                  <Text>{route.params.rating} (9 ratings)</Text>
                </View>
                <Pressable
                  style={{
                    marginTop: 6,
                    width: 160,
                    borderColor: '#6868686',
                    borderWidth: 1,
                    borderRadius: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 10,
                  }}>
                  <Text>Rate Venue</Text>
                </Pressable>
              </View>
              <View>
                <View>
                  <Text>100 total Activities</Text>
                  <Pressable
                    style={{
                      marginTop: 6,
                      width: 160,
                      borderColor: '#6868686',
                      borderWidth: 1,
                      borderRadius: 5,
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: 10,
                    }}>
                    <Text>1 Upcoming</Text>
                  </Pressable>
                </View>
              </View>
            </View>

            <Text
              style={{
                fontSize: 15,
                marginHorizontal: 10,
                fontWeight: '500',
              }}>
              Sports Available
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {route?.params?.sportsAvailable.map((item, index) => (
                <View
                  style={{
                    borderColor: '#686868',
                    margin: 10,
                    padding: 20,
                    width: 130,
                    height: 90,
                    borderWidth: 1,
                    borderRadius: 5,
                  }}>
                  <MaterialCommunityIcons
                    style={{textAlign: 'center'}}
                    name={item.icon}
                    size={24}
                    color="gray"
                  />
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: 'bold',
                      textAlign: 'center',
                      marginTop: 10,
                    }}>
                    {item?.name}
                  </Text>
                </View>
              ))}
            </ScrollView>
            <Amenities />

            <View style={{marginHorizontal: 10}}>
              <Text style={{fontSize: 15, fontWeight: 'bold'}}>Activities</Text>
              <Pressable
                style={{
                  borderColor: '#787878',
                  marginTop: 10,
                  borderWidth: 1,
                  padding: 10,
                  justifyContent: 'center',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 10,
                  borderRadius: 5,
                  marginBottom:8
                }}>
                <AntDesign name="plus" size={24} color="black" />
                <Text>Create Activities</Text>
              </Pressable>
            </View>
          </>
        </ScrollView>
      </SafeAreaView>
      <Pressable
        style={{
          backgroundColor: 'green',
          padding: 8,
          marginBottom: 30,
          borderRadius: 3,
          marginHorizontal: 10,
          
        }}>
        <Text style={{textAlign: 'center', fontWeight: 'bold', color: 'white'}}>
          Book Now
        </Text>
      </Pressable>
    </>
  );
};

export default VenueInfoScreen;

const styles = StyleSheet.create({});
