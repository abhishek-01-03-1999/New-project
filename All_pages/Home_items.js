import React, {useEffect, useState} from 'react';
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
  FlatList,
} from 'react-native';
import Iiicon from 'react-native-vector-icons/EvilIcons';
import Iicon from 'react-native-vector-icons/Entypo';
import Header from './header';
const Home_items = ({navigation, route}) => {
  const [data, setData] = useState([]);

  const callApi = async () => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/comments?postId=1',
    );
    const result = await response.json();
    console.log('>>>', result);
    setData(result);
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <View style={{backgroundColor: 'white'}}>
      <ScrollView>
        <View>
          <Header
            title="Mens"
            Acon={<Iiicon name="arrow-left" size={40} color="white" />}
            onPress={() => navigation.goBack()}
          />
        </View>
        <View>
          <View>
            <TextInput
              onChangeText={text => setRewards(text)}
              style={{
                padding: 10,
                borderRadius: 10,
                backgroundColor: '#EEF1FF',
                margin: 15,
              }}
              placeholder={'Search'}></TextInput>
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
              {route.params.voucherName}
            </Text>
          </View>
        </View>
        <View>
          <FlatList
            data={data}
            keyExtractor={(item, index) => index}
            renderItem={({item, index}) => {
              return (
                <View>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('Promocode', {
                        voucherName: item,
                      })
                    }
                    activeOpacity={1}>
                    <View style={{flexDirection: 'row', height: 150}}>
                      <View style={{marginHorizontal: 10}}>
                        <Image
                          style={{height: 137, width: 137, borderRadius: 10}}
                          source={require('../Images/T-shirts.jpg')}
                        />
                      </View>
                      <View style={{width: 200}}>
                        <View
                          style={{
                            width: 60,
                            height: 20,
                            backgroundColor: '#632E8F',
                            borderRadius: 15,
                            position: 'absolute',
                            left: 130,
                          }}>
                          <Text
                            style={{
                              fontSize: 12,
                              color: '#FFFFFF',
                              fontWeight: 'bold',
                              textAlign: 'center',
                            }}>
                            18% off
                          </Text>
                        </View>
                        <Text
                          style={{
                            color: '#CD198A',
                            fontSize: 12,
                            marginBottom: 10,
                          }}>
                          Deal
                        </Text>
                        <Text
                          style={{
                            fontWeight: '700',
                            fontSize: 12,
                            marginBottom: 10,
                          }}>
                          {item.name}
                        </Text>
                        <Text
                          style={{
                            color: '#7C7C7C',
                            fontSize: 10,
                            fontWeight: '300',
                          }}>
                          {item.body}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};
export default Home_items;
