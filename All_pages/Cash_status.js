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
const Cash_status = ({navigation}) => {
  return (
    <ScrollView>
      <View style={{backgroundColor: 'white'}}>
        <View>
          <Header
            title="My Cart"
            Acon={<Iiicon name="arrow-left" size={40} color="white" />}
            onPress={() => navigation.goBack()}
          />
        </View>

        <View style={{height: 200}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            activeOpacity={1}
            style={{
              backgroundColor: '#632E8F',
              marginHorizontal: '5%',
              elevation: 10,
              height: 45,
              width: 330,
              marginVertical: 15,
              borderRadius: 20,
              top: 110,
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: '400',
                textAlign: 'center',
                fontSize: 16,
                marginTop: 10,
              }}>
              Make Payment
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
export default Cash_status;
