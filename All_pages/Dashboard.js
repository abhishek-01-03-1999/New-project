import React, {useState, useEffect} from 'react';
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
  Platform,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ImagePicker from 'react-native-image-crop-picker';
import Iiicon from 'react-native-vector-icons/EvilIcons';
import Header from './header';
import Icon from 'react-native-vector-icons/Entypo';
import Iicon from 'react-native-vector-icons/MaterialCommunityIcons';
const Dashboard = ({navigation}) => {
  const [data, setData] = useState([]);

  return (
    <ScrollView>
      <Header
        title="Dashboard"
        Acon={<Iiicon name="arrow-left" size={40} color="white" />}
        onPress={() => navigation.goBack()}
      />
      <View style={{backgroundColor: 'white'}}>
        <View style={{flexDirection: 'row'}}>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('reg')}
              activeOpacity={1}
              style={{
                height: 150,
                width: 150,
                marginLeft: 20,
                marginTop: 20,
                borderRadius: 20,
                elevation: 10,
                backgroundColor: 'white',
                shadowColor: 'black',
              }}>
              <Icon
                name="user"
                size={50}
                color="black"
                style={{alignSelf: 'center', marginTop: 30}}
              />
              <Text
                style={{
                  textAlign: 'center',
                  marginTop: 30,
                  fontWeight: 'bold',
                  fontSize: 15,
                }}>
                Profile
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Edit_Profile')}
              activeOpacity={1}
              style={{
                height: 150,
                width: 150,
                marginLeft: 20,
                marginTop: 20,
                borderRadius: 20,
                elevation: 10,
                backgroundColor: 'white',
                shadowColor: 'black',
              }}>
              <Icon
                name="edit"
                size={50}
                color="black"
                style={{alignSelf: 'center', marginTop: 30}}
              />
              <Text
                style={{
                  textAlign: 'center',
                  marginTop: 30,
                  fontWeight: 'bold',
                  fontSize: 15,
                }}>
                Edit Profile
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View>
            <TouchableOpacity
              activeOpacity={1}
              style={{
                height: 150,
                width: 150,
                marginLeft: 20,
                marginTop: 20,
                borderRadius: 20,
                elevation: 10,
                backgroundColor: 'white',
                shadowColor: 'black',
              }}>
              <Iicon
                name="wallet-giftcard"
                size={50}
                color="black"
                style={{alignSelf: 'center', marginTop: 30}}
              />
              <Text
                style={{
                  textAlign: 'center',
                  marginTop: 30,
                  fontWeight: 'bold',
                  fontSize: 15,
                }}>
                Vouchers
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              activeOpacity={1}
              style={{
                height: 150,
                width: 150,
                marginLeft: 20,
                marginTop: 20,
                borderRadius: 20,
                elevation: 10,
                backgroundColor: 'white',
                shadowColor: 'black',
              }}>
              <Iicon
                name="cash-multiple"
                size={50}
                color="black"
                style={{alignSelf: 'center', marginTop: 30}}
              />
              <Text
                style={{
                  textAlign: 'center',
                  marginTop: 30,
                  fontWeight: 'bold',
                  fontSize: 15,
                }}>
                Credit Requests
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View>
            <TouchableOpacity
              activeOpacity={1}
              style={{
                height: 150,
                width: 150,
                marginLeft: 20,
                marginTop: 20,
                borderRadius: 20,
                elevation: 10,
                backgroundColor: 'white',
                shadowColor: 'black',
              }}>
              <Iicon
                name="wallet-giftcard"
                size={50}
                color="black"
                style={{alignSelf: 'center', marginTop: 30}}
              />
              <Text
                style={{
                  textAlign: 'center',
                  marginTop: 30,
                  fontWeight: 'bold',
                  fontSize: 15,
                }}>
                Voucher Details
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              activeOpacity={1}
              style={{
                height: 150,
                width: 150,
                marginLeft: 20,
                marginTop: 20,
                borderRadius: 20,
                elevation: 10,
                backgroundColor: 'white',
                shadowColor: 'black',
              }}>
              <Iicon
                name="account-cash"
                size={50}
                color="black"
                style={{alignSelf: 'center', marginTop: 30}}
              />
              <Text
                style={{
                  textAlign: 'center',
                  marginTop: 30,
                  fontWeight: 'bold',
                  fontSize: 15,
                }}>
                Cash Withdraw
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginBottom: 50}}>
          <TouchableOpacity
            activeOpacity={1}
            style={{
              height: 150,
              width: 150,
              marginLeft: 20,
              marginTop: 20,
              borderRadius: 20,
              elevation: 10,
              backgroundColor: 'white',
              shadowColor: 'black',
            }}>
            <Icon
              name="log-out"
              size={50}
              color="black"
              style={{alignSelf: 'center', marginTop: 30}}
            />
            <Text
              style={{
                textAlign: 'center',
                marginTop: 30,
                fontWeight: 'bold',
                fontSize: 15,
              }}>
              Log out
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            data={data}
            keyExtractor={(item, index) => index}
            renderItem={({item, index}) => {
              return <Text style={{color: '#000'}}>{item.name}</Text>;
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};
export default Dashboard;
