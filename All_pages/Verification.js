import OTPTextInput from 'react-native-otp-textinput';
import {NavigationContainer, useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';

const Verification = ({navigation, route}) => {
  const inputRef = React.useRef(null);

  return (
    <ScrollView style={{backgroundColor: '#59C1BD', flex: 1}}>
      <View>
        <Text
          style={{
            fontSize: 30,
            marginLeft: 10,
            marginBottom: 10,
            fontWeight: 'bold',
            marginTop: 100,
            textAlign: 'center',
          }}>
          OTP
        </Text>
        <Text
          style={{
            fontSize: 12,
            marginBottom: 40,
            marginLeft: 10,
            marginTop: 10,
            textAlign: 'center',
          }}>
          Please entre the OTP sent to your mobile number and email
        </Text>
      </View>
      <View
        style={{
          paddingLeft: 30,
          paddingRight: 30,
          marginTop: 50,
          borderTopLeftRadius: 70,
          height: 500,
          backgroundColor: '#F7F7F7',
          justifyContent: 'space-evenly',
        }}>
        <View style={{marginTop: 100}}>
          <OTPTextInput ref={inputRef}></OTPTextInput>
        </View>

        <TouchableOpacity>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              textDecorationLine: 'underline',
              textAlign: 'center',
              marginVertical: 20,
            }}>
            Resend OTP
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            height: 40,
            width: '100%',
            backgroundColor: '#59C1BD',
            borderRadius: 20,
            marginVertical: 30,
          }}
          onPress={() =>
            navigation.navigate('Log_in', {
              eemail: route.params.eemail,
              ppassword: route.params.ppassword,
            })
          }>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 20,
              padding: 5,
              color: 'white',
            }}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default Verification;
