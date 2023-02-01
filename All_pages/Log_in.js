import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Button,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import Header from './header';
const Log_in = ({navigation}) => {
  useEffect(() => {
    GoogleSignin.configure();
  }, []);

  const [email, setEmail] = useState('');

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();

      const userInfo = await GoogleSignin.signIn();
      console.log('User Info --> ', userInfo);
      //   this.setState({userInfo});
    } catch (error) {
      console.log('Message', error.message);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User Cancelled the Login Flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Signing In');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play Services Not Available or Outdated');
      } else {
        console.log('Some Other Error Happened', error);
      }
    }
  };

  const [eye, seteye] = useState(true);

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <Header title="                      Log-In" />
        <View style={{backgroundColor: 'white'}}>
          <View
            style={{
              paddingLeft: 10,
              paddingRight: 10,
            }}>
            <Text
              style={{
                fontSize: 15,
                marginBottom: 10,
                marginLeft: 20,
                fontWeight: 'bold',
                marginTop: 40,
              }}>
              Email Adress:
            </Text>
          </View>
          <View style={{}}>
            <TextInput
              onChangeText={text => setEmail(text)}
              style={{
                padding: 10,
                borderRadius: 10,
                borderColor: '#D0C9C0',
                backgroundColor: '#EFEAD8',
                margin: 15,
                borderWidth: 2,
              }}
              placeholder={'Enter email adress'}></TextInput>
          </View>
          <View
            style={{
              marginLeft: 20,
              width: 280,
            }}>
            <Text
              style={{
                fontSize: 15,
                marginBottom: 10,
                marginLeft: 20,
                fontWeight: 'bold',
                marginTop: 40,
              }}>
              Password:
            </Text>
          </View>
          <View style={{}}>
            <TextInput
              onChangeText={text => text}
              style={{
                padding: 10,
                borderRadius: 10,
                borderColor: '#D0C9C0',
                backgroundColor: '#EFEAD8',
                margin: 15,
                borderWidth: 2,
              }}
              secureTextEntry={eye}
              placeholder={'Enter Password'}></TextInput>
            <TouchableOpacity
              onPress={() => seteye(!eye)}
              style={{
                position: 'absolute',
                width: 40,
                height: 30,
                padding: 5,
                marginLeft: 295,
                marginTop: 25,
              }}>
              <Image
                style={{
                  height: 20,
                  width: 30,
                }}
                source={require('../Images/Vector.png')}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <View
              style={{
                alignItems: 'flex-end',
                marginRight: 20,
                height: 80,
              }}>
              <Text
                style={{
                  fontSize: 16,

                  color: '#FFBA00',
                  textDecorationLine: 'underline',
                }}>
                Forgot password?
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Home', {
                email: email,
              })
            }
            style={{
              backgroundColor: '#632E8F',
              height: 60,
              width: 330,
              borderRadius: 30,
              alignSelf: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                textAlign: 'center',
                padding: 18,
                color: 'white',
              }}>
              Log in
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Create_Account')}
            style={{
              backgroundColor: '#CD198A',
              height: 60,
              width: 330,
              borderRadius: 30,
              alignSelf: 'center',
              marginVertical: 30,
            }}>
            <Text
              style={{
                fontSize: 16,
                textAlign: 'center',
                padding: 18,
                color: 'white',
              }}>
              Create Account
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              alignItems: 'center',
            }}>
            <View style={{width: '40%', height: 3, backgroundColor: 'black'}}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                colors={['#F78A59', '#F9B5D0']}
                style={styles.linearGradient}></LinearGradient>
            </View>
            <View style={{width: '20%'}}>
              <Text
                style={{
                  fontSize: 18,
                  color: 'black',
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}>
                or
              </Text>
            </View>
            <View
              style={{
                width: '40%',
                height: 3,
                backgroundColor: 'black',
              }}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                colors={['#F9B5D0', '#F78A59']}
                style={styles.linearGradient}></LinearGradient>
            </View>
          </View>
          <TouchableOpacity
            onPress={signIn}
            style={{
              backgroundColor: '#F78A59',
              borderRadius: 10,
              marginVertical: 30,
              marginHorizontal: 5,
              flexDirection: 'row',
            }}>
            <View
              style={{
                alignContent: 'center',
              }}>
              <Image
                style={{
                  height: 20,
                  width: 20,
                  marginLeft: 70,
                  marginTop: 10,
                }}
                source={require('../Images/GoogleIcon.png')}
              />
            </View>
            <View>
              <Text
                style={{
                  fontSize: 12,
                  color: 'white',
                  padding: 10,
                }}>
                Sign in using Google account
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default Log_in;
var styles = StyleSheet.create({
  linearGradient: {
    width: '100%',
    height: 3,
  },
});
