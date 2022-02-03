import React from 'react';
import {View, Text, Image, ScrollView, Button} from 'react-native';

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
          paddingHorizontal: '3%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: 20}}>
          {itemData.reach}{' '}
          {itemData.reach == 0 || itemData.reach == 1 ? 'reach' : 'reaches'}
        </Text>
        <Button title="Add to Cart" color={'#e6e640'} />
      </View>
    </View>
  );
}
