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
} from 'react-native';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import ImagePicker from 'react-native-image-crop-picker';
import Iiicon from 'react-native-vector-icons/EvilIcons';
import {storeUserInformation} from '../redux/reducers/Userinformation';
import Header from './header';
const Edit_Profile = ({navigation}) => {
  const [image, setImage] = useState(
    'https://cdn-icons-png.flaticon.com/512/149/149071.png',
  );
  const userInfo = useSelector(state => state.userSignUpInfo.userInfo);
  const pickImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setImage(image.path);
    });
  };
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const dispatch = useDispatch();
  const data = () => {
    dispatch(
      storeUserInformation({
        name: name,
        address: address,
        image: image,
        phone: phone,
      }),
      navigation.navigate('reg'),
    );
  };
  return (
    <ScrollView>
      <Header
        title="Edit Profile"
        Acon={<Iiicon name="arrow-left" size={40} color="white" />}
        onPress={() => navigation.goBack()}
      />

      <View
        style={{
          paddingLeft: 100,
          paddingTop: 50,
          paddingBottom: 50,
          backgroundColor: 'white',
          flexDirection: 'row',
        }}>
        <View>
          <TouchableOpacity
            onPress={() => pickImage()}
            style={{
              width: 150,
              height: 150,
              borderRadius: 150 / 2,
              backgroundColor: 'gray',
            }}>
            <Image
              source={{
                uri: image,
              }}
              style={{width: '100%', height: '100%', borderRadius: 75}}
            />
          </TouchableOpacity>
        </View>
        <View style={{position: 'absolute'}}>
          <Image
            style={{height: 20, width: 20, marginTop: 160, marginLeft: 220}}
            source={require('../Images/camera.png')}
          />
        </View>
      </View>
      <View style={{backgroundColor: 'white'}}>
        <Text style={{textAlign: 'center', fontSize: 18, fontWeight: 'bold'}}>
          Welcome
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 18,
            fontWeight: 'bold',
          }}>
          {userInfo.email}
        </Text>
      </View>
      <View
        style={{paddingLeft: 10, paddingRight: 10, backgroundColor: 'white'}}>
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
          Phone
        </Text>
        <TextInput
          onChangeText={text => setPhone(text)}
          style={{
            borderWidth: 1,
            borderRadius: 30,
            marginBottom: 20,
            borderColor: '#D0C9C0',
            height: 42,
            paddingLeft: 20,
            backgroundColor: '#EFEAD8',
            marginBottom: 20,
          }}
          placeholder={'Phone'}></TextInput>

        <Text
          style={{
            fontSize: 15,
            marginBottom: 10,
            marginLeft: 20,
            fontWeight: 'bold',
          }}>
          Delivery Address
        </Text>
        <TextInput
          onChangeText={text => setAddress(text)}
          style={{
            borderWidth: 1,
            borderRadius: 30,
            marginBottom: 20,
            borderColor: '#D0C9C0',
            height: 42,
            paddingLeft: 20,
            backgroundColor: '#EFEAD8',
            marginBottom: 80,
          }}
          placeholder={'Address'}></TextInput>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => data()}
          style={{
            height: 80,

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
            Update Profile
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default Edit_Profile;
