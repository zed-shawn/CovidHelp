import React, {useState} from 'react';
import {View, Text, TextInput, Button, ToastAndroid} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import * as userActions from '../state/userDetail';
import * as imageActions from '../state/imageHandling';
import LoadMediaComponent from '../components/LoadMediaComponent';

export default function LoginScreen() {
  const dispatch = useDispatch();

  const [enteredName, setEnteredName] = useState('');
  const [enteredNumber, setEnteredNumber] = useState('');
  const image = useSelector(state => state.image.media);

  const clickHandler = () => {
    if (enteredName && enteredNumber && image) {
      dispatch(userActions.registerUser(enteredName, enteredNumber, image[0]));
      dispatch(imageActions.clearMedia());
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
        flex: 1,
        paddingHorizontal: '5%',
        justifyContent: 'space-evenly',
        backgroundColor: 'beige',
      }}>
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 35, textAlign: 'center'}}>
          Welcome to CovidHelp
        </Text>
        <Text
          style={{fontSize: 20, textAlign: 'center', paddingVertical: '5%'}}>
          Please enter the following details
        </Text>
      </View>
      <TextInput
        underlineColorAndroid={'gray'}
        placeholder="Enter your Name"
        onChangeText={e => {
          setEnteredName(e);
        }}
        value={enteredName}
      />
      <TextInput
        underlineColorAndroid={'gray'}
        placeholder="Enter your Phone Number"
        onChangeText={e => {
          setEnteredNumber(e);
        }}
        value={enteredNumber}
      />
      <Text>Select Image</Text>
      <LoadMediaComponent type="photo" selectionLimit={1} />
      <Button title={'Submit'} onPress={clickHandler} />
    </View>
  );
}
