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
import Iiicon from 'react-native-vector-icons/EvilIcons';
import Header from './header';

const Reg = ({navigation, route}) => {
  console.log(route);
  const [image, setImage] = useState(
    'https://cdn-icons-png.flaticon.com/512/149/149071.png',
  );
  return (
    <ScrollView>
      <Header
        title="Profile"
        Acon={<Iiicon name="arrow-left" size={40} color="white" />}
        onPress={() => navigation.goBack()}
      />
      <View style={{backgroundColor: 'white'}}>
        <Image
          source={{uri: route.params?.image || image}}
          style={{
            height: 150,
            width: 150,
            alignSelf: 'center',
            borderRadius: 90,
            marginTop: 50,
          }}
        />
        <Text
          style={{
            textAlign: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            marginTop: 10,
          }}>
          {route.params?.name}
        </Text>

        <View style={{flexDirection: 'row', marginTop: 30}}>
          <Text
            style={{
              width: '24%',
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            Email:
          </Text>
          <Text
            style={{
              fontSize: 18,
              width: '76%',
              fontWeight: '450',
            }}>
            {route.params?.email}
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text
            style={{
              width: '24%',
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            Phone No:
          </Text>
          <Text
            style={{
              fontSize: 18,
              width: '76%',
              fontWeight: '450',
            }}>
            {route.params?.phone}
          </Text>
        </View>

        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text
            style={{
              width: '24%',
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            Address:
          </Text>
          <Text
            style={{
              fontSize: 18,
              width: '76%',
              fontWeight: '450',
            }}>
            {route.params?.address}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={{
            height: 40,
            marginVertical: 100,

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
            Home
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default Reg;
