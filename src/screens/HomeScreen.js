import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {products} from '../data/mockProducts';

const height = Dimensions.get('screen').height;

export default function HomeScreen() {
  const renderItems = itemData => {
    const item = itemData.item;
    return (
      <View
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
              <Text style={{fontSize: 13, fontWeight: '300', color: '#3d3d3d'}}>
                Posted 10 hrs ago
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
            <Text style={{fontSize: 25, fontWeight: '600', color: 'gray'}}>
              {item.price == 0 ? 'For donation' : `₹ ${item.price}`}
            </Text>
            <Text style={{fontSize: 13, fontWeight: '600', color: 'gray'}}>
              View Details
            </Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.root}>
      <FlatList data={products} renderItem={renderItems} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {flex: 1},
});
