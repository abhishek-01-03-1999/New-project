import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Button,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import Iiicon from 'react-native-vector-icons/EvilIcons';
import Header from './header';
const Create_Account = ({navigation, route}) => {
  return (
    <ScrollView>
      <Header
        title="Create Your Account"
        Acon={<Iiicon name="arrow-left" size={40} color="white" />}
        onPress={() => navigation.goBack()}
      />
      <View style={{backgroundColor: 'white'}}>
        <View
          style={{
            paddingLeft: 10,
            paddingRight: 10,
          }}>
          <Text
            style={{
              fontSize: 15,

              marginLeft: 20,
              fontWeight: 'bold',
              marginTop: 60,
            }}>
            Phone No. :
          </Text>
        </View>
        <View style={{}}>
          <TextInput
            style={{
              padding: 10,
              borderRadius: 10,
              borderColor: '#D0C9C0',
              backgroundColor: '#EFEAD8',
              margin: 15,
              borderWidth: 2,
            }}
            placeholder={'Enter phone number'}></TextInput>
        </View>
        <View
          style={{
            paddingLeft: 10,
            paddingRight: 10,
          }}>
          <Text
            style={{
              fontSize: 15,
              marginLeft: 20,
              fontWeight: 'bold',
              marginTop: 30,
            }}>
            Email Adress:
          </Text>
        </View>
        <View style={{}}>
          <TextInput
            style={{
              padding: 10,
              borderRadius: 10,
              borderColor: '#D0C9C0',
              backgroundColor: '#EFEAD8',
              margin: 15,
              borderWidth: 2,
            }}
            placeholder={'Enter email adress'}></TextInput>
        </View>
        <View
          style={{
            paddingLeft: 10,
            paddingRight: 10,
          }}>
          <Text
            style={{
              fontSize: 15,

              marginLeft: 20,
              fontWeight: 'bold',
              marginTop: 30,
            }}>
            Password:
          </Text>
        </View>
        <View style={{}}>
          <TextInput
            style={{
              padding: 10,
              borderRadius: 10,
              borderColor: '#D0C9C0',
              backgroundColor: '#EFEAD8',
              margin: 15,
              borderWidth: 2,
            }}
            placeholder={'Enter password'}></TextInput>
        </View>
        <View
          style={{
            paddingLeft: 10,
            paddingRight: 10,
          }}>
          <Text
            style={{
              fontSize: 15,

              marginLeft: 20,
              fontWeight: 'bold',
              marginTop: 30,
            }}>
            Confirm Password:
          </Text>
        </View>
        <View style={{}}>
          <TextInput
            style={{
              padding: 10,
              borderRadius: 10,
              borderColor: '#D0C9C0',
              backgroundColor: '#EFEAD8',
              margin: 15,
              borderWidth: 2,
            }}
            placeholder={'Enter confirm password'}></TextInput>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('Verification')}
          style={{
            height: 100,
            marginTop: 80,

            backgroundColor: 'white',
          }}>
          <Text
            style={{
              width: '90%',
              alignSelf: 'center',
              borderRadius: 20,
              fontSize: 15,
              fontWeight: 'bold',
              textAlign: 'center',
              backgroundColor: '#5C2E7E',
              height: 40,
              color: 'white',
              textAlignVertical: 'center',
            }}>
            Create Now
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default Create_Account;
