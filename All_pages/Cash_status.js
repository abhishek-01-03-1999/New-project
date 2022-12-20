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
import Icon from 'react-native-vector-icons/Feather';
import Iiicon from 'react-native-vector-icons/EvilIcons';
import Iicon from 'react-native-vector-icons/Entypo';
import Header from './header';
import {VideoExportPreset} from 'expo-image-picker';
const Cash_status = ({navigation}) => {
  return (
    <ScrollView>
      <View style={{backgroundColor: 'white'}}>
        <View>
          <Header
            title="Cash Earned Status"
            Acon={<Iiicon name="arrow-left" size={40} color="white" />}
            onPress={() => navigation.goBack()}
          />
        </View>
        <View style={{marginTop: 30}}>
          <View
            style={{
              borderRadius: 10,
              backgroundColor: 'white',
              marginHorizontal: '5%',
              shadowColor: 'black',
              elevation: 10,
              flexDirection: 'row',
              marginTop: '1%',
              height: 70,
              width: 330,
              marginVertical: 15,
            }}>
            <View
              style={{
                position: 'absolute',
                marginHorizontal: 20,
                marginVertical: 5,
              }}>
              <Text
                style={{fontSize: 10, fontWeight: '400', color: ' #97999B'}}>
                24-Nov-2022
              </Text>
            </View>
            <View
              style={{
                width: 120,
                height: 50,
                marginLeft: 10,
                alignSelf: 'center',
              }}>
              <Text
                style={{
                  color: '#632E8F',
                  fontSize: 28,
                  fontWeight: '600',
                  textAlign: 'center',
                  marginVertical: 5,
                }}>
                UPX8b7
              </Text>
            </View>
            <View style={{alignSelf: 'center'}}>
              <Icon name="copy" size={30} color="#632E8F" />
            </View>
            <View
              style={{
                width: 90,
                height: 30,
                borderRadius: 15,
                alignSelf: 'center',
                backgroundColor: '#DBFFEC',
                left: 70,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  marginVertical: 5,
                  color: '#00D261',
                }}>
                Reedemed
              </Text>
            </View>
          </View>
        </View>
        <View>
          <View
            style={{
              borderRadius: 10,
              backgroundColor: 'white',
              marginHorizontal: '5%',
              shadowColor: 'black',
              elevation: 10,
              flexDirection: 'row',
              marginTop: '1%',
              height: 70,
              width: 330,
              marginVertical: 15,
            }}>
            <View
              style={{
                position: 'absolute',
                marginHorizontal: 20,
                marginVertical: 5,
              }}>
              <Text
                style={{fontSize: 10, fontWeight: '400', color: ' #97999B'}}>
                24-Nov-2022
              </Text>
            </View>
            <View
              style={{
                width: 120,
                height: 50,
                marginLeft: 10,
                alignSelf: 'center',
              }}>
              <Text
                style={{
                  color: '#632E8F',
                  fontSize: 28,
                  fontWeight: '600',
                  textAlign: 'center',
                  marginVertical: 5,
                }}>
                PBS852
              </Text>
            </View>
            <View style={{alignSelf: 'center'}}>
              <Icon name="copy" size={30} color="#632E8F" />
            </View>
            <View
              style={{
                width: 110,
                height: 30,
                borderRadius: 15,
                alignSelf: 'center',
                backgroundColor: '#FFE8DB',
                left: 50,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  marginVertical: 5,
                  color: '#D27200',
                }}>
                Reedem Now
              </Text>
            </View>
          </View>
        </View>
        <View>
          <View
            style={{
              borderRadius: 10,
              backgroundColor: 'white',
              marginHorizontal: '5%',
              shadowColor: 'black',
              elevation: 10,
              flexDirection: 'row',
              marginTop: '1%',
              height: 70,
              width: 330,
              marginVertical: 15,
            }}>
            <View
              style={{
                position: 'absolute',
                marginHorizontal: 20,
                marginVertical: 5,
              }}>
              <Text
                style={{fontSize: 10, fontWeight: '400', color: ' #97999B'}}>
                24-Nov-2022
              </Text>
            </View>
            <View
              style={{
                width: 120,
                height: 50,
                marginLeft: 10,
                alignSelf: 'center',
              }}>
              <Text
                style={{
                  color: '#632E8F',
                  fontSize: 28,
                  fontWeight: '600',
                  textAlign: 'center',
                  marginVertical: 5,
                }}>
                96bdC7
              </Text>
            </View>
            <View style={{alignSelf: 'center'}}>
              <Icon name="copy" size={30} color="#632E8F" />
            </View>
            <View
              style={{
                width: 110,
                height: 30,
                borderRadius: 15,
                alignSelf: 'center',
                backgroundColor: '#FFE8DB',
                left: 50,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  marginVertical: 5,
                  color: '#D27200',
                }}>
                Reedem Now
              </Text>
            </View>
          </View>
        </View>
        <View>
          <View
            style={{
              borderRadius: 10,
              backgroundColor: 'white',
              marginHorizontal: '5%',
              shadowColor: 'black',
              elevation: 10,
              flexDirection: 'row',
              marginTop: '1%',
              height: 70,
              width: 330,
              marginVertical: 15,
            }}>
            <View
              style={{
                position: 'absolute',
                marginHorizontal: 20,
                marginVertical: 5,
              }}>
              <Text
                style={{fontSize: 10, fontWeight: '400', color: ' #97999B'}}>
                24-Nov-2022
              </Text>
            </View>
            <View
              style={{
                width: 120,
                height: 50,
                marginLeft: 10,
                alignSelf: 'center',
              }}>
              <Text
                style={{
                  color: '#632E8F',
                  fontSize: 28,
                  fontWeight: '600',
                  textAlign: 'center',
                  marginVertical: 5,
                }}>
                AB69cf
              </Text>
            </View>
            <View style={{alignSelf: 'center'}}>
              <Icon name="copy" size={30} color="#632E8F" />
            </View>
            <View
              style={{
                width: 110,
                height: 30,
                borderRadius: 15,
                alignSelf: 'center',
                backgroundColor: '#FFE8DB',
                left: 50,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  marginVertical: 5,
                  color: '#D27200',
                }}>
                Reedem Now
              </Text>
            </View>
          </View>
        </View>
        <View>
          <View
            style={{
              borderRadius: 10,
              backgroundColor: 'white',
              marginHorizontal: '5%',
              shadowColor: 'black',
              elevation: 10,
              flexDirection: 'row',
              marginTop: '1%',
              height: 70,
              width: 330,
              marginVertical: 15,
            }}>
            <View
              style={{
                position: 'absolute',
                marginHorizontal: 20,
                marginVertical: 5,
              }}>
              <Text
                style={{fontSize: 10, fontWeight: '400', color: ' #97999B'}}>
                24-Nov-2022
              </Text>
            </View>
            <View
              style={{
                width: 120,
                height: 50,
                marginLeft: 10,
                alignSelf: 'center',
              }}>
              <Text
                style={{
                  color: '#632E8F',
                  fontSize: 28,
                  fontWeight: '600',
                  textAlign: 'center',
                  marginVertical: 5,
                }}>
                UPX8b7
              </Text>
            </View>
            <View style={{alignSelf: 'center'}}>
              <Icon name="copy" size={30} color="#632E8F" />
            </View>
            <View
              style={{
                width: 90,
                height: 30,
                borderRadius: 15,
                alignSelf: 'center',
                backgroundColor: '#DBFFEC',
                left: 70,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  marginVertical: 5,
                  color: '#00D261',
                }}>
                Reedemed
              </Text>
            </View>
          </View>
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
              Continue to Home
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
export default Cash_status;
