import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {products} from '../data/mockProducts';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const height = Dimensions.get('screen').height;

export default function HomeScreen() {
  const navigation = useNavigation();
  const renderItems = itemData => {
    const item = itemData.item;
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Details', {item});
        }}
        style={{
          height: height / 3,
          //borderBottomWidth: 1,
          marginVertical: '3%',
          marginHorizontal: '4%',
          paddingHorizontal: '2%',
          paddingTop: '2%',
          paddingBottom: '2%',
          elevation: 3,
          borderBottomWidth: 1,
          borderBottomColor: 'gray',
          backgroundColor: '#e6e6e6',
        }}>
        <View style={{flex: 7}}>
          <Image
            source={{uri: item.imageUri}}
            style={{width: '100%', height: '100%', resizeMode: 'cover'}}
          />
        </View>
        <View style={{flex: 3, paddingHorizontal: '1%'}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 28, color: 'black'}}>
              {item.title}
            </Text>
            <View style={{alignItems: 'flex-end'}}>
              <Text style={{fontSize: 13, fontWeight: '400', color: '#3d3d3d'}}>
                Posted {item.postTime} hrs ago
              </Text>
              <Text style={{fontSize: 12, fontWeight: '600', color: 'gray'}}>
                {item.location} KM away
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon
                name="keyboard-arrow-up"
                color={'gray'}
                size={30}
                onPress={() => {
                  console.log('clicked');
                }}
              />
              <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 18, fontWeight: '600', color: 'gray'}}>
                  {item.reach}
                </Text>
                <Text style={{fontSize: 12, fontWeight: '600', color: 'gray'}}>
                  {item.reach == 0 || item.reach == 1 ? 'reach' : 'reaches'}
                </Text>
              </View>
              <Icon name="keyboard-arrow-down" color={'gray'} size={30} />
            </View>
            <Text style={{fontSize: 25, fontWeight: '600', color: 'gray'}}>
              {item.price == 0 ? 'For donation' : `₹ ${item.price}`}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.root}>
      <FlatList data={products} renderItem={renderItems} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {flex: 1, backgroundColor: 'beige'},
});
