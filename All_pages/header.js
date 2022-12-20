import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const Header = props => {
  return (
    <View style={{backgroundColor: 'white'}}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={['#F78A59', '#CD198A', '#632E8F']}
        style={styles.linearGradient}>
        <View style={{flexDirection: 'row', marginTop: '5%'}}>
          <TouchableOpacity onPress={props.onPress}>
            {props.Acon}
          </TouchableOpacity>
          <View style={{alignItems: 'center', width: 250}}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: 'white',
                marginVertical: 15,
              }}>
              {props.title}
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 30,
              marginBottom: '2%',
              fontWeight: 'bold',
              color: 'white',
            }}>
            Amanda
          </Text>
          <Text style={{fontSize: 15, color: 'white', marginLeft: '40%'}}>
            Promo Points
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 15, marginBottom: 10, color: 'white'}}>
            amanda@gmail.com
          </Text>
          <Text
            style={{
              fontSize: 20,
              marginBottom: 10,
              fontWeight: 'bold',
              color: 'white',
              marginLeft: '40%',
            }}>
            100
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
};

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
});
export default Header;
