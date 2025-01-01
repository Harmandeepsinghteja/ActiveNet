import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
const PasswordScreen = () => {
  const [password, setPassword] = React.useState('');
  const navigation = useNavigation();
  const handleNext = () => {
    navigation.navigate('Name');
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{marginTop: 90, marginHorizontal: 20}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              width: 44,
              height: 44,
              borderRadius: 22,
              borderWidth: 2,
              borderColor: 'green',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AntDesign name="lock1" size={24} color="black" />
          </View>
          <Image
            style={{width: 100, height: 40}}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/10613/10613685.png',
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            fontFamily: 'GeezaPro-Bold',
            marginTop: 15,
          }}>
          Please Choose a password
        </Text>
        <TextInput
          autoFocus={true}
          secureTextEntry={true}
          value={password}
          onChangeText={text => setPassword(text)}
          style={{
            width: 340,
            marginVertical: 10,
            marginTop: 25,
            borderBlockColor: 'black',
            borderBottomWidth: 1,
            paddingBottom: 10,
            fontSize: password ? 22 : 22,
            fontFamily: 'GeezaPro-Bold',
          }}
          placeholder="Enter Your Password"
        />
        <Text style={{color: 'gray', fontSize: 15, marginTop: 7}}>
          Note: Your Details will be safe with us
        </Text>
        <TouchableOpacity
          onPress={handleNext}
          activeOpacity={0.8}
          style={{marginTop: 30, marginLeft: 'auto'}}>
          <MaterialCommunityIcons
            style={{alignSelf: 'center', marginTop: 20}}
            name="arrow-right-circle"
            size={45}
            color="green"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PasswordScreen;

const styles = StyleSheet.create({});
