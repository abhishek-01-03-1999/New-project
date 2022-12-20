import React, {useState} from 'react';
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
} from 'react-native';
import Home from './Home';
import Iicon from 'react-native-vector-icons/AntDesign';
import Iiicon from 'react-native-vector-icons/Feather';
const Promocode = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

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
                fontSize: 16,
                textAlign: 'center',
                marginVertical: 15,
              }}>
              Air-conditioner dust filter
            </Text>
          </View>
        </View>
        <View>
          <Image
            style={{width: 360, alignSelf: 'center'}}
            source={require('../Images/Wood.png')}
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
              Air-conditioner dust filter
            </Text>
          </View>
          <View style={{height: 350}}>
            <Text style={{fontSize: 14, fontWeight: '300'}}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing lit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit, sed diam nonummy nibh euismod
              tincidunt utoreet dolore magna aliquam erat volutpat. Ut wisi enim
              ad Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
              diam nonummy nibh euismod tincidunt ut laoreet dolore magna
              aliquam erat volutpat. Ut wisi enim ad Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit, sed diam nonummy nibh euismod
              tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
              enim ad
            </Text>
          </View>

          <View
            style={{backgroundColor: '#632E8F', borderRadius: 15, height: 35}}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(true)}>
              <Text style={styles.textStyle}>Get promocode</Text>
            </Pressable>
          </View>
          <View style={styles.centeredView}>
            <Modal
              visible={modalVisible}
              animationType="slide"
              transparent={true}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <View style={{height: 60}}>
                    <Iicon name="checkcircle" size={40} color="#632E8F" />
                  </View>
                  <View style={{flexDirection: 'row', height: 70}}>
                    <View>
                      <Text
                        style={{
                          fontSize: 28,
                          fontWeight: 'bold',
                          color: '#CD198A',
                        }}>
                        UPX8b7
                      </Text>
                    </View>
                    <View style={{marginLeft: 10}}>
                      <Iiicon name="copy" size={30} color="#632E8F" />
                    </View>
                  </View>
                  <View style={{height: 100}}>
                    <Text style={{fontSize: 18}}>
                      40 points have been deducted from Total points
                    </Text>
                  </View>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => navigation.navigate(Home)}>
                    <Text
                      style={{
                        color: 'white',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        fontSize: 16,
                        marginTop: 5,
                        width: 180,
                      }}>
                      Continue to Home
                    </Text>
                  </Pressable>
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
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
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
