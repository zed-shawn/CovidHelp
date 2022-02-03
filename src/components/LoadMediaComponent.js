import React, { FC, useState, useCallback } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  Alert,
  ScrollView,
  Pressable,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { StylesMain } from '../../Utilities/Styles';
import { useTheme } from '../../Utilities/Theme/ThemeProvider';
import StyledText, { TextType } from '../Common/Text';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../State/store';
import * as createActivityActions from '../../State/features/createActivity/actions';



const screen = Dimensions.get('screen');

const LoadMediaComponent= (props) => {
  const colors = useTheme().colors;
  const dispatch = useDispatch();

  const loadedMedia = useSelector(
    (state: RootState) => state.createActivity.activity.media
  );
  const loadedMediaRaw = useSelector(
    (state: RootState) => state.createActivity.activity.mediaRaw
  );
  const dispatchLoadedMedia = useCallback(
    (media, mediaRaw) => {
      dispatch(
        createActivityActions.createActivity_AddDataToState('media', media)
      );
      dispatch(
        createActivityActions.createActivity_AddDataToState(
          'mediaRaw',
          mediaRaw
        )
      );
    },
    [dispatch]
  );

  // const [, setLoadedMedia] = useState<string[]>([]);
  //const [, setLoadedMediaRaw] = useState<object[]>([]);

  const forceUpdate = React.useReducer(() => ({}), {})[1] as () => void;

  const launchLibrary = () => {
    launchImageLibrary(
      { mediaType: props.type, selectionLimit: props.selectionLimit },
      (a) => {
        if (a.assets) {
          a.assets.map((a) => {
            const copy = loadedMedia;
            const copyRaw = loadedMediaRaw;
            if (loadedMedia.length < props.selectionLimit) {
              copy.push(a.uri!);
              copyRaw.push(a!);
              dispatchLoadedMedia(copy, copyRaw);
              //setLoadedMedia(copy);
              //setLoadedMediaRaw(copyRaw);
              props.uriSetter(copyRaw);
              forceUpdate();
            }
          });
        }
      }
    );
  };
  const replaceMedia = (id: string) => {
    launchImageLibrary({ mediaType: props.type, selectionLimit: 1 }, (a) => {
      if (a.assets) {
        a.assets.map((a) => {
          const copy = loadedMedia;
          const copyRaw = loadedMediaRaw;
          let i = copy.indexOf(id);
          copy.splice(i, 1, a.uri!);
          copyRaw.splice(i, 1, a!);
          dispatchLoadedMedia(copy, copyRaw);
          //          setLoadedMedia(copy);
          //        setLoadedMediaRaw(copyRaw);
          props.uriSetter(copyRaw);
          forceUpdate();
        });
      }
    });
  };
  const removeMedia = (id: string) => {
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
          backgroundColor: colors.transparentOrange,
        },
        StylesMain.MarginHorizontalExtraSmall,
        StylesMain.BorderRadiusMedium,
        StylesMain.FlexColumnAllCenter,
      ]}>
      <View
        style={[
          { borderWidth: 2, borderColor: colors.primaryOrange },
          StylesMain.FlexRowAllCenter,
          StylesMain.BorderRadiusExtraSmall,
        ]}>
        <StyledText
          type={TextType.H3Title}
          style={StyleSheet.flatten([
            {
              color: colors.primaryOrange,
            },
            StylesMain.PaddingHorizontalExtraSmall,
          ])}>
          +
        </StyledText>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={[{ flex: 1 }, StylesMain.FlexRow, StylesMain.MarginLeftLarge]}>
      {loadedMedia.map((data) => {
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
              StylesMain.MarginHorizontalExtraSmall,
              StylesMain.BorderRadiusMedium,
            ]}>
            <Image
              source={{ uri: data }}
              style={{ width: '100%', height: '100%' }}
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
