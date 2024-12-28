import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Amenities = () => {
  const services = [
    {
      id: '0',
      name: 'First Aid',
    },
    {
      id: '2',
      name: 'free wifi',
    },
    {
      id: '3',
      name: 'Wash Rooms',
    },
    {
      id: '4',
      name: 'Change Rooms',
    },
    {
      id: '5',
      name: 'Drinking Water',
    },
    {
      id: '6',
      name: 'Juice',
    },
    {
      id: '7',
      name: 'Fitness Coach',
    },
    {
      id: '8',
      name: "Member's Lounge",
    },
  ];

  return (
    <View style={{padding: 10}}>
      <Text style={{fontSize: 17, fontWeight: '500'}}>
        Most Popular Facilities
      </Text>
      <View
        style={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center'}}>
        {services.map((item, index) => (
          <View
            key={index}
            style={{
              margin: 10,
              backgroundColor: '#17B169',
              paddingHorizontal: 11,
              paddingVertical: 5,
              borderRadius: 25,
            }}>
            :
            <Text style={{color: 'white', textAlign: 'center'}}>
              {item?.name}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Amenities;

const styles = StyleSheet.create({});
