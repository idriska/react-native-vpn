import React from 'react';
import styled from 'styled-components/native';
import * as COLORS from '../../styles/colors';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet, Dimensions, Platform} from 'react-native';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

const AppContainer = styled.View({
  flex: 1,
  padding: 24,
  backgroundColor: COLORS.PRIMARY,
  justifyContent: 'center',
  alignItems: 'center',
});

const styles = StyleSheet.create({
  semiCircle:{
    width: viewportWidth - 40,
    height:viewportWidth - 40,
    backgroundColor: 'red',
    borderRadius: 300,
    justifyContent: 'center',
    alignItems: 'center'
  },
  semiCircleInner:{
    width: viewportWidth - 150,
    height:viewportWidth - 150,
    backgroundColor: COLORS.PRIMARY,
    borderRadius: viewportWidth -  120
  }
});

export {styles, AppContainer};
