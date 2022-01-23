import React from 'react';
import styled from 'styled-components/native';
import * as COLORS from '../../styles/colors';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet, Dimensions, Platform} from 'react-native';

const AppContainer = styled.View({
  flex: 1,
  padding: 24,
  backgroundColor: COLORS.PRIMARY,
  justifyContent: 'center',
  alignItems: 'center',
});

const styles = StyleSheet.create({
  descriptionText: {
    marginTop: 15,
  },
  btnStyle: {
    marginTop: 35,
  },
  sliderImage: {
    height: 200,
    marginBottom: 35
  },
});

export {styles, AppContainer};
