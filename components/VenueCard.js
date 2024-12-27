import {Pressable, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const VenueCard = ({item}) => {
  console.log('item');
  console.log(item);
  return (
    <View style={{margin: 14}}>
      <Pressable
        style={{
          backgroundColor: 'white',
          borderRadius: 5,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}>
        <View>
          <Image
            style={{
              width: '100%',
              height: 200,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
            source={{uri: item?.image}}
          />
        </View>
        <View style={{paddingVertical: 12, paddingHorizontal: 9}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text>
              {item?.name.length > 40
                ? item?.name?.substr(0, 40) + '...'
                : item?.name}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 6,
                backgroundColor: 'green',
                padding: 6,
                borderRadius: 5,
              }}>
              <AntDesign name="star" size={20} color="white" />
              <Text style={{color: 'white', fontWeight: 'bold'}}>
                {item?.rating}
              </Text>
            </View>
          </View>
          <Text style={{color: 'gray'}}>
            {item?.address.length > 40
              ? item?.address?.substr(0, 40) + '...'
              : item?.address}
          </Text>
          <View
            style={{
              height: 1,
              borderWidth: 0.6,
              borderColor: '#E0E0E0',
              marginVertical: 10,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text>Upto 10% OFF</Text>
            <Text>CAD 10 Onwards</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default VenueCard;

const styles = StyleSheet.create({});
