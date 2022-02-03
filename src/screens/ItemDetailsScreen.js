import React from 'react';
import {View, Text, Image, ScrollView, Button} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ItemDetailsScreen({route}) {
  const itemData = route.params.item;
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <View style={{marginBottom: '4%'}}>
          <Image
            source={{uri: itemData.imageUri}}
            style={{
              width: '100%',
              aspectRatio: 1,
              resizeMode: 'contain',
              borderWidth: 1,
            }}
          />
        </View>
        <View style={{marginHorizontal: '2%'}}>
          <Text style={{fontSize: 30, color: 'black', fontWeight: '600'}}>
            {itemData.title}
          </Text>
          <Text>{itemData.description}</Text>
          <Text>{itemData.description}</Text>
        </View>
      </ScrollView>
      <View
        style={{
          height: '8%',
          elevation: 1,
          paddingHorizontal: '5%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#ededed',
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
              {itemData.reach}
            </Text>
            <Text style={{fontSize: 12, fontWeight: '600', color: 'gray'}}>
              {itemData.reach == 0 || itemData.reach == 1 ? 'reach' : 'reaches'}
            </Text>
          </View>
          <Icon
            name="keyboard-arrow-down"
            color={'gray'}
            size={30}
            onPress={() => {
              console.log('clicked');
            }}
          />
        </View>
        <Button title="Add to Cart" color={'#e6e640'} />
      </View>
    </View>
  );
}
