import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
  Modal,
  StyleSheet,
  Pressable,
  FlatList,
} from 'react-native';
import Home from './Home';
import Iiicon from 'react-native-vector-icons/Feather';
const Promocode = ({navigation, route}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [issize, setsize] = useState([
    {
      id: 1,
      size: 'S',
    },
    {
      id: 2,
      size: 'M',
    },
    {
      id: 3,
      size: 'L',
    },
    {
      id: 4,
      size: 'XL',
    },
    {
      id: 5,
      size: 'XXL',
    },
  ]);
  const [isquantity, setquantity] = useState([
    {
      id: 1,
      quantity: '1',
    },
    {
      id: 2,
      quantity: '2',
    },
    {
      id: 3,
      quantity: '3',
    },
    {
      id: 4,
      quantity: '4',
    },
    {
      id: 5,
      quantity: '5',
    },
  ]);
  const [isopendropdown, opendropdown] = useState(false);
  const [size, setSize] = useState('M');
  const [isopenQuandropdown, openQuandropdown] = useState(false);
  const [quantity, setQuantity] = useState('1');
  const [price, setPrice] = useState('500');

  return (
    <ScrollView>
      <View style={{backgroundColor: 'white'}}>
        <View style={{flexDirection: 'row'}}>
          <View style={{width: 70}}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              activeOpacity={1}>
              <Iiicon
                name="arrow-left"
                size={32}
                color="#454545"
                style={{margin: '15%'}}
              />
            </TouchableOpacity>
          </View>
          <View style={{width: 200}}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 18,
                textAlign: 'center',
                marginVertical: 15,
              }}>
              Plane T-Shart
            </Text>
          </View>
        </View>
        <View>
          <Image
            style={{width: '90%', alignSelf: 'center', marginTop: 20}}
            source={require('../Images/T-shirts.jpg')}
          />
        </View>
        <View style={{alignSelf: 'center', width: 320}}>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 12,
                marginBottom: '2%',
                color: '#CD198A',
                margin: '5%',
              }}>
              Deal
            </Text>
            <View
              style={{
                marginLeft: 220,
                width: 60,
                height: 20,
                backgroundColor: '#632E8F',
                borderRadius: 15,
                marginTop: 15,
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
          </View>
          <View>
            <Text style={{fontSize: 16, fontWeight: 'bold', height: 40}}>
              {route.params.voucherName.name}
            </Text>
          </View>
          <View style={{height: 110}}>
            <Text style={{fontSize: 14, fontWeight: '300'}}>
              {route.params.voucherName.body}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: 150,
              alignSelf: 'center',
              height: 60,
            }}>
            <Text style={{fontSize: 24, fontWeight: 'bold'}}>Price =</Text>
            <Text style={{fontSize: 24, fontWeight: 'bold'}}> 500 Rs</Text>
          </View>

          <TouchableOpacity
            style={{backgroundColor: '#632E8F', borderRadius: 15, height: 35}}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.textStyle}>Add to Cart</Text>
          </TouchableOpacity>

          <View style={styles.centeredView}>
            <Modal
              visible={modalVisible}
              animationType="slide"
              transparent={true}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <View
                    style={{
                      width: '100%',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View>
                      <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                        size
                      </Text>
                      <TouchableOpacity
                        onPress={() => opendropdown(true)}
                        style={{width: 40, height: 25, borderWidth: 2}}>
                        <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
                          {size}
                        </Text>
                      </TouchableOpacity>
                      {isopendropdown === true ? (
                        <FlatList
                          data={issize}
                          renderItem={({item}) => {
                            return (
                              <View
                                style={{
                                  width: 40,
                                  alignItems: 'center',
                                }}>
                                <TouchableOpacity
                                  onPress={() => {
                                    setSize(item.size);
                                    opendropdown(false);
                                  }}>
                                  <Text>{item.size}</Text>
                                </TouchableOpacity>
                              </View>
                            );
                          }}
                        />
                      ) : null}
                    </View>

                    <View>
                      <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                        {price * quantity}
                      </Text>
                    </View>

                    <View>
                      <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                        quantity
                      </Text>
                      <TouchableOpacity
                        onPress={() => openQuandropdown(true)}
                        style={{width: 40, height: 25, borderWidth: 2}}>
                        <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
                          {quantity}
                        </Text>
                      </TouchableOpacity>
                      {isopenQuandropdown === true ? (
                        <FlatList
                          data={isquantity}
                          renderItem={({item}) => {
                            return (
                              <View
                                style={{
                                  width: 40,
                                  alignItems: 'center',
                                }}>
                                <TouchableOpacity
                                  onPress={() => {
                                    setQuantity(item.quantity);
                                    openQuandropdown(false);
                                  }}>
                                  <Text>{item.quantity}</Text>
                                </TouchableOpacity>
                              </View>
                            );
                          }}
                        />
                      ) : null}
                    </View>
                  </View>

                  <TouchableOpacity
                    onPress={() => navigation.navigate('Cash_status')}
                    style={{
                      backgroundColor: '#632E8F',
                      width: '80%',
                      borderRadius: 20,
                      height: 35,
                      alignSelf: 'center',
                      marginTop: 20,
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        fontSize: 16,
                        marginTop: 5,
                        width: 180,
                      }}>
                      Continue
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default Promocode;
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
  },
  modalView: {
    width: 300,
    height: 250,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 15,
    height: 34,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#632E8F',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
    marginTop: 5,
  },
  modalText: {
    marginBottom: 150,
    textAlign: 'center',
  },
});
