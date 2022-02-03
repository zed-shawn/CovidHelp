import React, {FC, useState, useCallback} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  Alert,
  ScrollView,
  Pressable,
  Text,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import * as imageActions from '../state/imageHandling';

const screen = Dimensions.get('screen');

const LoadMediaComponent = props => {
  const dispatch = useDispatch();

  const loadedMedia = useSelector(state => state.image.media);
  const loadedMediaRaw = useSelector(state => state.image.mediaRaw);
  const dispatchLoadedMedia = useCallback(
    (media, mediaRaw) => {
      dispatch(imageActions.loadMedia('media', media));
      dispatch(imageActions.loadMedia('mediaRaw', mediaRaw));
    },
    [dispatch],
  );

  const forceUpdate = React.useReducer(() => ({}), {})[1];

  const launchLibrary = () => {
    launchImageLibrary(
      {mediaType: props.type, selectionLimit: props.selectionLimit},
      a => {
        if (a.assets) {
          a.assets.map(a => {
            const copy = loadedMedia;
            const copyRaw = loadedMediaRaw;
            if (loadedMedia.length < props.selectionLimit) {
              copy.push(a.uri);
              copyRaw.push(a);
              dispatchLoadedMedia(copy, copyRaw);
              //setLoadedMedia(copy);
              //setLoadedMediaRaw(copyRaw);
              props.uriSetter(copyRaw);
              forceUpdate();
            }
          });
        }
      },
    );
  };
  const replaceMedia = id => {
    launchImageLibrary({mediaType: props.type, selectionLimit: 1}, a => {
      if (a.assets) {
        a.assets.map(a => {
          const copy = loadedMedia;
          const copyRaw = loadedMediaRaw;
          let i = copy.indexOf(id);
          copy.splice(i, 1, a.uri);
          copyRaw.splice(i, 1, a);
          dispatchLoadedMedia(copy, copyRaw);
          //          setLoadedMedia(copy);
          //        setLoadedMediaRaw(copyRaw);
          props.uriSetter(copyRaw);
          forceUpdate();
        });
      }
    });
  };
  const removeMedia = id => {
    const copy = loadedMedia;
    const copyRaw = loadedMediaRaw;
    let i = copy.indexOf(id);
    copy.splice(i, 1);
    copyRaw.splice(i, 1);
    dispatchLoadedMedia(copy, copyRaw);
    //    setLoadedMedia(copy);
    //  setLoadedMediaRaw(copyRaw);
    props.uriSetter(copyRaw);
    forceUpdate();
  };

  const addHolder = (
    <TouchableOpacity
      onPress={launchLibrary}
      style={[
        {
          height: screen.width * 0.32,
          width: '27%',
          backgroundColor: '#ffd88a',
          borderRadius: 30,
        },
      ]}>
      <View
        style={[
          {
            borderColor: '#ffd88a',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
          },
        ]}>
        <Text style={{fontSize: 40, color: 'white'}}>+</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      {loadedMedia.map(data => {
        return (
          <Pressable
            key={data}
            onPress={() => {
              replaceMedia(data);
            }}
            onLongPress={() => {
              removeMedia(data);
            }}
            style={[
              {
                height: screen.width * 0.32,
                width: '27%',
                overflow: 'hidden',
              },
            ]}>
            <Image
              source={{uri: data}}
              style={{width: '100%', height: '100%'}}
              resizeMode="cover"
            />
          </Pressable>
        );
      })}
      {loadedMedia.length === props.selectionLimit ? null : addHolder}
    </View>
  );
};

export default LoadMediaComponent;
