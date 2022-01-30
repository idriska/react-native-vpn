import React from 'react';
import styled from 'styled-components/native';
import * as COLORS from '../../styles/colors';
import {StyleSheet, Dimensions} from 'react-native';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

const AppContainer = styled.View({
  flex: 1,
  backgroundColor: COLORS.PRIMARY,
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingBottom: 25
});

const styles = StyleSheet.create({
  btnStyle: {
    marginTop: 25,
  },
});

export {styles, AppContainer};
