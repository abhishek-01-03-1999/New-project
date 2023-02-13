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
  Alert,
} from 'react-native';
import Iiicon from 'react-native-vector-icons/EvilIcons';
import Header from './header';
import {useDispatch} from 'react-redux';
import {storeUserInformation} from '../redux/reducers/Userinformation';
const Create_Account = ({navigation, route}) => {
  const [eemail, setemail] = useState('');
  const [ppassword, setpassword] = useState('');
  const [conpassword, setconpassword] = useState('');
  const [phone, setphone] = useState('');

  const dispatch = useDispatch();
  const data = () => {
    dispatch(
      storeUserInformation({
        email: eemail,
        password: ppassword,
        conpassword: conpassword,
        phone: phone,
      }),
    );
  };

  const next = () => {
    if (
      phone.length == 0 ||
      ppassword.length == 0 ||
      conpassword.length == 0 ||
      eemail.length == 0
    ) {
      Alert.alert(`Enter the Details`);
    } else if (ppassword != conpassword) {
      Alert.alert(`not matched password`);
    } else {
      navigation.navigate('Verification', {
        eemail: eemail,
        ppassword: ppassword,
      });
    }
  };

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
            onChangeText={text => setphone(text)}
            style={{
              padding: 10,
              borderRadius: 10,
              borderColor: '#D0C9C0',
              backgroundColor: '#EFEAD8',
              margin: 15,
              borderWidth: 2,
            }}
            keyboardType={'phone-pad'}
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
            onChangeText={text => setemail(text)}
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
            onChangeText={text => setpassword(text)}
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
            onChangeText={text => setconpassword(text)}
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
          onPress={() => {
            next(), data();
          }}
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
