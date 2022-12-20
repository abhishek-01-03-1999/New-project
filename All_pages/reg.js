import React, {useState} from 'react';
import {
  Text,
  View,
  Button,
  TextInput,
  Image,
  ScrollView,
  Alert,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Iiicon from 'react-native-vector-icons/EvilIcons';
import Header from './header';

const Reg = ({navigation}) => {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Rewards, setRewards] = useState('');
  const [Credits, setCredits] = useState('');
  const [UID, setUID] = useState('');
  const xyz = () => {
    if (
      Name.length == 0 ||
      Email.length == 0 ||
      Rewards.length == 0 ||
      Credits.length == 0 ||
      UID.length == 0
    ) {
      Alert.alert(`Enter the Details`);
    } else {
      Alert.alert(`Welcome ${Name} `);
      navigation.navigate('verification', {
        name: Name,
        Email: Email,
        Rewards: Rewards,
        Credits: Credits,
        UID: UID,
      });
    }
  };

  return (
    <ScrollView>
      <Header
        title="Profile"
        Acon={<Iiicon name="arrow-left" size={40} color="white" />}
        onPress={() => navigation.goBack()}
      />
      <View
        style={{paddingLeft: 10, paddingRight: 10, backgroundColor: '#F7F7F7'}}>
        <Text
          style={{
            fontSize: 15,
            marginBottom: 10,
            marginLeft: 20,
            fontWeight: 'bold',
            marginTop: 40,
          }}>
          Username
        </Text>
        <TextInput
          onChangeText={text => setName(text)}
          style={{
            borderWidth: 1,
            borderRadius: 30,
            marginBottom: 20,
            borderColor: '#D0C9C0',
            height: 42,
            paddingLeft: 20,
            backgroundColor: '#EFEAD8',
          }}
          placeholder={'Username'}></TextInput>
        <Text
          style={{
            fontSize: 15,
            marginBottom: 10,
            marginLeft: 20,
            fontWeight: 'bold',
          }}>
          Email
        </Text>
        <TextInput
          onChangeText={text => setEmail(text)}
          style={{
            borderWidth: 1,
            borderRadius: 30,
            marginBottom: 20,
            borderColor: '#D0C9C0',
            height: 42,
            paddingLeft: 20,
            backgroundColor: '#EFEAD8',
          }}
          placeholder={'niteshbiswas@digimonk.in'}></TextInput>
        <Text
          style={{
            fontSize: 15,
            marginBottom: 10,
            marginLeft: 20,
            fontWeight: 'bold',
          }}>
          Rewards points
        </Text>
        <TextInput
          onChangeText={text => setRewards(text)}
          style={{
            borderWidth: 1,
            borderRadius: 30,
            marginBottom: 20,
            borderColor: '#D0C9C0',
            height: 42,
            paddingLeft: 20,
            backgroundColor: '#EFEAD8',
          }}
          placeholder={'niteshbiswas@digimonk.in'}></TextInput>
        <Text
          style={{
            fontSize: 15,
            marginBottom: 10,
            marginLeft: 20,
            fontWeight: 'bold',
          }}>
          Credits Accumulated
        </Text>
        <TextInput
          onChangeText={text => setCredits(text)}
          style={{
            borderWidth: 1,
            borderRadius: 30,
            marginBottom: 20,
            borderColor: '#D0C9C0',
            height: 42,
            paddingLeft: 20,
            backgroundColor: '#EFEAD8',
          }}
          placeholder={'0.00'}></TextInput>
        <Text
          style={{
            fontSize: 15,
            marginBottom: 10,
            marginLeft: 20,
            fontWeight: 'bold',
          }}>
          UID
        </Text>
        <TextInput
          onChangeText={text => setUID(text)}
          style={{
            borderWidth: 1,
            borderRadius: 30,
            marginBottom: 20,
            borderColor: '#D0C9C0',
            height: 42,
            paddingLeft: 20,
            backgroundColor: '#EFEAD8',
          }}
          placeholder={'89'}></TextInput>
        <View>
          <TouchableOpacity>
            <Text
              style={{
                borderRadius: 20,
                fontSize: 15,
                fontWeight: 'bold',
                textAlign: 'center',
                backgroundColor: '#5C2E7E',
                height: 40,
                color: 'white',
                textAlignVertical: 'center',
                marginTop: 80,
              }}>
              Redeem
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
export default Reg;
