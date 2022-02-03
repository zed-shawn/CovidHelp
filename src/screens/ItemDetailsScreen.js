import React, {useCallback} from 'react';
import {View, Text, Image, ScrollView, Button} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSelector, useDispatch} from 'react-redux';
import * as shopActions from '../state/shopHandler';

export default function ItemDetailsScreen({route}) {
  const dispatch = useDispatch();
  const forceUpdate = React.useReducer(() => ({}), {})[1];

  const itemData = route.params.item;
  const dispatchUpvote = useCallback(
    data => {
      dispatch(shopActions.upvoteHandler(data));
    },
    [dispatch],
  );
  const dispatchDownvote = useCallback(
    data => {
      dispatch(shopActions.downvoteHandler(data));
    },
    [dispatch],
  );
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
            color={itemData.upvote ? 'orange' : 'gray'}
            size={30}
            onPress={() => {
              dispatchUpvote(itemData.id);
              forceUpdate();
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
            color={itemData.upvote == false ? 'orange' : 'gray'}
            size={30}
            onPress={() => {
              dispatchDownvote(itemData.id);
              forceUpdate();
            }}
          />
        </View>
        <Button title="Add to Cart" color={'#e6e640'} />
      </View>
    </View>
  );
}
