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
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Iicon from 'react-native-vector-icons/Entypo';
import Iiicon from 'react-native-vector-icons/Ionicons';
import Header from './header';
const Home = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#ddd'}}>
      <ScrollView>
        <Header
          title="Home"
          Acon={<Iicon name="menu" size={40} color="white" />}
          onPress={() => navigation.navigate('Dashboard')}
        />
        <View style={{backgroundColor: 'white', width: '100%'}}>
          <View style={{marginTop: 100}}>
            <Image source={require('../Images/Afla_logo.png')} />
          </View>
          <View style={{height: 110}}>
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
                color="#632E8F"
                style={{marginTop: 25, marginLeft: 300}}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              height: 30,
            }}>
            <View
              style={{
                alignItems: 'flex-start',
                marginLeft: 20,
                justifyContent: 'flex-start',
                width: 280,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 'bold',
                  color: 'black',
                }}>
                Paid Link
              </Text>
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}>
              <Text
                style={{
                  fontSize: 12,
                  color: '#CB1C8D',

                  fontWeight: 'bold',
                }}>
                See All
              </Text>
            </View>
          </View>
          <View
            style={{
              borderRadius: 10,
              backgroundColor: 'white',
              marginHorizontal: '5%',
              shadowColor: 'black',
              elevation: 10,
              flexDirection: 'row',
              marginTop: '1%',
            }}>
            <View
              style={{
                borderRadius: 17.5,
                alignItems: 'flex-start',
                width: 35,
                height: 35,
                marginVertical: '3%',
                marginLeft: '4%',
              }}>
              <LinearGradient
                start={{x: 1.2, y: 0}}
                end={{x: 1.2, y: 1}}
                colors={['#F78A59', '#F9B5D0', 'white']}
                style={styles.linearGradient}>
                <Iicon
                  name="link"
                  size={22}
                  color="#632E8F"
                  style={{margin: '15%'}}
                />
              </LinearGradient>
            </View>
            <Text
              style={{
                fontWeight: '400',
                fontSize: 16,
                alignSelf: 'center',
                marginLeft: '4%',
                color: '#632E8F',
              }}>
              demo-link
            </Text>
          </View>
          <View
            style={{
              borderRadius: 10,
              backgroundColor: 'white',
              marginHorizontal: '5%',
              shadowColor: 'black',
              elevation: 10,
              flexDirection: 'row',
              marginTop: '3%',
            }}>
            <View
              style={{
                borderRadius: 17.5,
                alignItems: 'flex-start',
                width: 35,
                height: 35,
                marginVertical: '3%',
                marginLeft: '4%',
              }}>
              <LinearGradient
                start={{x: 1.2, y: 0}}
                end={{x: 1.2, y: 1}}
                colors={['#F78A59', '#F9B5D0', 'white']}
                style={styles.linearGradient}>
                <Iicon
                  name="link"
                  size={22}
                  color="#632E8F"
                  style={{margin: '15%'}}
                />
              </LinearGradient>
            </View>
            <Text
              style={{
                fontWeight: '400',
                fontSize: 16,
                alignSelf: 'center',
                marginLeft: '4%',
                color: '#632E8F',
              }}>
              demo-link
            </Text>
          </View>
          <View
            style={{
              borderRadius: 10,
              backgroundColor: 'white',
              marginHorizontal: '5%',
              shadowColor: 'black',
              elevation: 10,
              flexDirection: 'row',
              marginVertical: '3%',
            }}>
            <View
              style={{
                borderRadius: 17.5,
                alignItems: 'flex-start',
                width: 35,
                height: 35,
                marginVertical: '3%',
                marginLeft: '4%',
              }}>
              <LinearGradient
                start={{x: 1.2, y: 0}}
                end={{x: 1.2, y: 1}}
                colors={['#F78A59', '#F9B5D0', 'white']}
                style={styles.linearGradient}>
                <Iicon
                  name="link"
                  size={22}
                  color="#632E8F"
                  style={{margin: '15%'}}
                />
              </LinearGradient>
            </View>
            <Text
              style={{
                fontWeight: '400',
                fontSize: 16,
                alignSelf: 'center',
                marginLeft: '4%',
                color: '#632E8F',
              }}>
              demo-link
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 14,
                marginBottom: '2%',
                fontWeight: 'bold',
                color: 'black',
                margin: '5%',
              }}>
              Vouchers
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Vouchers')}
              activeOpacity={1}>
              <View style={{marginLeft: 205}}>
                <Text
                  style={{
                    fontSize: 12,
                    color: '#CB1C8D',
                    fontWeight: 'bold',
                  }}>
                  See All
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{width: '100%', flexDirection: 'row', marginBottom: 20}}>
            <ScrollView horizontal={true}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Home_items', {
                    voucherName: 'Home Items',
                  })
                }
                activeOpacity={1}>
                <View style={{width: 135, marginLeft: 10}}>
                  <ImageBackground
                    style={{height: 120, width: 120}}
                    imageStyle={{borderRadius: 15}}
                    source={require('../Images/Home-items.jpg')}>
                    <View style={{marginTop: 85, marginLeft: 5}}>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontSize: 14,
                          marginLeft: '4%',
                          color: 'white',
                        }}>
                        Home Items
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
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Home_items', {
                    voucherName: 'Women Fashion',
                  })
                }
                activeOpacity={1}>
                <View style={{width: 135}}>
                  <ImageBackground
                    style={{height: 120, width: 120}}
                    imageStyle={{borderRadius: 15}}
                    source={require('../Images/Women-fashion.jpeg')}>
                    <View style={{marginTop: 85, marginLeft: 5}}>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontSize: 14,
                          marginLeft: '4%',
                          color: 'white',
                        }}>
                        Women Fashion
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
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Home_items', {
                    voucherName: 'Computers',
                  })
                }
                activeOpacity={1}>
                <View style={{width: 135}}>
                  <ImageBackground
                    style={{height: 120, width: 120}}
                    imageStyle={{borderRadius: 15}}
                    source={require('../Images/Electronics-items.jpg')}>
                    <View style={{marginTop: 85, marginLeft: 5}}>
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
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() => navigation.navigate('Cash_status')}
        activeOpacity={1}
        style={{
          position: 'absolute',
          width: 320,
          bottom: 60,
          height: 35,
          backgroundColor: '#632E8F',
          borderRadius: 15,
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 20,
        }}>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                alignSelf: 'center',
              }}>
              Cash Request
            </Text>
          </View>
          <View style={{justifyContent: 'center', left: 10}}>
            <Iiicon name="send-outline" style={{color: 'white'}} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default Home;
var styles = StyleSheet.create({
  linearGradient: {
    borderRadius: 17.5,
    width: 35,
    height: 35,
  },
});
