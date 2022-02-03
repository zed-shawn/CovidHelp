import React, {useState} from 'react';
import {View, Text, TextInput, Button, ToastAndroid} from 'react-native';
import LoadMediaComponent from '../components/LoadMediaComponent';
import {useSelector, useDispatch} from 'react-redux';
import * as shopActions from '../state/shopHandler';
import * as imageActions from '../state/imageHandling';
import {useNavigation} from '@react-navigation/native';

export default function AddListing() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const image = useSelector(state => state.image.media);

  const clickHandler = () => {
    if (name && desc && price && image) {
      dispatch(shopActions.addListing(name, desc, price, image[0]));
      dispatch(imageActions.clearMedia());
      setName('');
      setDesc('');
      setPrice('');
      navigation.navigate('Home');
    } else {
      ToastAndroid.showWithGravityAndOffset(
        'Please enter all fields',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        0,
        100,
      );
    }
  };

  return (
    <View
      style={{
        backgroundColor: 'beige',
        flex: 1,
        justifyContent: 'space-between',
        padding: '3%',
      }}>
      <Text style={{fontSize: 20, textAlign: 'center', paddingVertical: '5%'}}>
        Add a new listing
      </Text>
      <TextInput
        underlineColorAndroid={'gray'}
        placeholder="Enter the product name"
        onChangeText={e => {
          setName(e);
        }}
        value={name}
      />
      <TextInput
        underlineColorAndroid={'gray'}
        placeholder="Enter the product description"
        onChangeText={e => {
          setDesc(e);
        }}
        value={desc}
      />
      <TextInput
        underlineColorAndroid={'gray'}
        placeholder="Enter price, or 0 for donation"
        onChangeText={e => {
          setPrice(e);
        }}
        value={price}
      />
      <Text style={{fontSize: 20}}>Select Product Image</Text>
      <LoadMediaComponent type="photo" selectionLimit={1} />
      <Button title="Submit" color="orange" onPress={clickHandler} />
    </View>
  );
}
