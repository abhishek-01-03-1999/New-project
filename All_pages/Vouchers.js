import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  Alert,
  TouchableOpacity,
  StyleSheet,
  Platform,
  ImageBackground,
} from 'react-native';
import Iiicon from 'react-native-vector-icons/EvilIcons';
import Header from './header';
import Iicon from 'react-native-vector-icons/Entypo';
const Vouchers = ({navigation}) => {
  return (
    <ScrollView>
      <Header
        title="Vouchers"
        Acon={<Iiicon name="arrow-left" size={40} color="white" />}
        onPress={() => navigation.goBack()}
      />
      <View style={{backgroundColor: 'white'}}>
        <View>
          <TextInput
            onChangeText={text => setRewards(text)}
            style={{
              padding: 10,
              borderRadius: 10,
              backgroundColor: '#EEF1FF',
              margin: 15,
            }}
            placeholder={'Favorite show'}></TextInput>
          <View style={{position: 'absolute'}}>
            <Iicon
              name="magnifying-glass"
              size={30}
              color="black"
              style={{marginTop: 25, marginLeft: 300}}
            />
          </View>
        </View>
        <View>
          <Text
            style={{
              fontSize: 16,
              marginBottom: '2%',
              fontWeight: 'bold',
              color: 'black',
              marginLeft: '5%',
            }}>
            Vouchers
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Home_items', {
                  voucherName: 'Computers',
                })
              }
              activeOpacity={1}
              style={{
                height: 150,
                width: 150,
                marginLeft: 20,
                marginTop: 20,
              }}>
              <ImageBackground
                style={{height: 150, width: 150}}
                imageStyle={{borderRadius: 15}}
                source={require('../Images/Electronics-items.jpg')}>
                <View style={{marginTop: 110, marginLeft: 5}}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 14,
                      marginLeft: '4%',
                      color: 'white',
                    }}>
                    Computers
                  </Text>
                  <View
                    style={{
                      height: 13,
                      width: 70,
                      backgroundColor: 'white',
                      borderRadius: 2,
                    }}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: 11,
                        alignSelf: 'center',
                        color: '#FF8E9E',
                      }}>
                      up to 50% off
                    </Text>
                  </View>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Home_items', {
                  voucherName: 'Home Accessories',
                })
              }
              activeOpacity={1}
              style={{
                height: 150,
                width: 150,
                marginLeft: 20,
                marginTop: 20,
              }}>
              <ImageBackground
                style={{height: 150, width: 150}}
                imageStyle={{borderRadius: 15}}
                source={require('../Images/Home-items.jpg')}>
                <View style={{marginTop: 110, marginLeft: 5}}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 14,
                      marginLeft: '4%',
                      color: 'white',
                    }}>
                    Home Accessories
                  </Text>
                  <View
                    style={{
                      height: 13,
                      width: 70,
                      backgroundColor: 'white',
                      borderRadius: 2,
                    }}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: 11,
                        alignSelf: 'center',
                        color: '#FF8E9E',
                      }}>
                      up to 50% off
                    </Text>
                  </View>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Home_items', {
                  voucherName: ' Women Product',
                })
              }
              activeOpacity={1}
              style={{
                height: 150,
                width: 150,
                marginLeft: 20,
                marginTop: 20,
              }}>
              <ImageBackground
                style={{height: 150, width: 150}}
                imageStyle={{borderRadius: 15}}
                source={require('../Images/Women-fashion.jpeg')}>
                <View style={{marginTop: 110, marginLeft: 5}}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 14,
                      marginLeft: '4%',
                      color: 'white',
                    }}>
                    Women Product
                  </Text>
                  <View
                    style={{
                      height: 13,
                      width: 70,
                      backgroundColor: 'white',
                      borderRadius: 2,
                    }}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: 11,
                        alignSelf: 'center',
                        color: '#FF8E9E',
                      }}>
                      up to 50% off
                    </Text>
                  </View>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Home_items', {
                  voucherName: ' Mens Product',
                })
              }
              activeOpacity={1}
              style={{
                height: 150,
                width: 150,
                marginLeft: 20,
                marginTop: 20,
              }}>
              <ImageBackground
                style={{height: 150, width: 150}}
                imageStyle={{borderRadius: 15}}
                source={require('../Images/Mens-products.jpg')}>
                <View style={{marginTop: 110, marginLeft: 5}}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 14,
                      marginLeft: '4%',
                      color: 'white',
                    }}>
                    Mens Product
                  </Text>
                  <View
                    style={{
                      height: 13,
                      width: 70,
                      backgroundColor: 'white',
                      borderRadius: 2,
                    }}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: 11,
                        alignSelf: 'center',
                        color: '#FF8E9E',
                      }}>
                      up to 50% off
                    </Text>
                  </View>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginBottom: 50}}>
          <View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Home_items', {
                  voucherName: 'Summer Collection',
                })
              }
              activeOpacity={1}
              style={{
                height: 150,
                width: 150,
                marginLeft: 20,
                marginTop: 20,
              }}>
              <ImageBackground
                style={{height: 150, width: 150}}
                imageStyle={{borderRadius: 15}}
                source={require('../Images/T-shirts.jpg')}>
                <View style={{marginTop: 110, marginLeft: 5}}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 14,
                      marginLeft: '4%',
                      color: 'white',
                    }}>
                    Summer Collection
                  </Text>
                  <View
                    style={{
                      height: 13,
                      width: 70,
                      backgroundColor: 'white',
                      borderRadius: 2,
                    }}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: 11,
                        alignSelf: 'center',
                        color: '#FF8E9E',
                      }}>
                      up to 50% off
                    </Text>
                  </View>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Home_items', {
                  voucherName: 'Winter Collection',
                })
              }
              activeOpacity={1}
              style={{
                height: 150,
                width: 150,
                marginLeft: 20,
                marginTop: 20,
              }}>
              <ImageBackground
                style={{height: 150, width: 150}}
                imageStyle={{borderRadius: 15}}
                source={require('../Images/Winter-wear.jpg')}>
                <View style={{marginTop: 110, marginLeft: 5}}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 14,
                      marginLeft: '4%',
                      color: 'white',
                    }}>
                    Winter Collection
                  </Text>
                  <View
                    style={{
                      height: 13,
                      width: 70,
                      backgroundColor: 'white',
                      borderRadius: 2,
                    }}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: 11,
                        alignSelf: 'center',
                        color: '#FF8E9E',
                      }}>
                      up to 50% off
                    </Text>
                  </View>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default Vouchers;
