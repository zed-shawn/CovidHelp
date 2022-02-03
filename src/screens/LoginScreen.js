import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import * as userActions from '../state/userDetail';
import LoadMediaComponent from '../components/LoadMediaComponent';

export default function LoginScreen() {
  const dispatch = useDispatch();

  const [enteredName, setEnteredName] = useState('');
  const [enteredNumber, setEnteredNumber] = useState('');
  const [imageUri, setImageUri] = useState('');

  const clickHandler = () => {
    if (enteredName && enteredNumber) {
      console.log('sent');
      dispatch(
        userActions.registerUser(
          enteredName,
          enteredNumber,
          'https://res.cloudinary.com/fsduhag8/image/upload/v1643837365/foodlabsx/1.jpg',
        ),
      );
    }
  };

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: '5%',
        justifyContent: 'space-evenly',
      }}>
      <Text>login sdcreen</Text>
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
