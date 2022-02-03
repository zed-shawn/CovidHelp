import React from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function CustomDrawer() {
  const navigation = useNavigation();

  const drawerComponents = [
    {
      name: 'Post an Item',
    },
    {
      name: 'Your Items',
    },
    {
      name: 'Messages',
    },
    {
      name: 'Settings',
    },
    {
      name: 'Saved',
    },
    {
      name: 'Help & Support',
    },
    {
      name: 'FAQs',
    },
    {
      name: 'Logout',
    },
  ];

  const drawerItems = ({item, index}) => (
    <TouchableOpacity style={{marginLeft: 27, marginVertical: 20}} >
      <Text style={{fontSize: 18}}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{backgroundColor: 'beige', flex: 1}}>
      <View
        style={{
          alignItems: 'center',
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            backgroundColor: 'white',
            paddingVertical: 19,
            paddingHorizontal: 16,
            borderBottomRightRadius: 46,
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={{
              uri: 'https://res.cloudinary.com/fsduhag8/image/upload/v1643837365/foodlabsx/1.jpg',
            }}
            style={{width: 74, height: 74, borderRadius: 37, marginRight: 18}}
          />
          <View>
            <Text style={{fontSize: 16, color: 'black'}}>user name</Text>
          </View>
        </View>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={drawerComponents}
        keyExtractor={(item, index) => 'key' + index}
        renderItem={drawerItems}
      />
    </View>
  );
}
