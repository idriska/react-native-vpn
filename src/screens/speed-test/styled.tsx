import React from 'react';
import styled from 'styled-components/native';
import * as COLORS from '../../styles/colors';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet, Dimensions, Platform} from 'react-native';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

const AppContainer = styled.View({
  flex: 1,
  backgroundColor: COLORS.PRIMARY,
  justifyContent: 'center',
  alignItems: 'center',
});

const styles = StyleSheet.create({

});

export {styles, AppContainer};
