import styled from 'styled-components/native';
import * as COLORS from './colors';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet, Dimensions, Platform} from 'react-native';

const AppPrimaryButton = styled(LinearGradient)({
  width: '100%',
  height: '100%',
  borderRadius: 100,
  justifyContent: 'center',
  alignItems: 'center'
});

const AppTitle = styled.Text({
  fontSize: 22,
  fontWeight: 700,
  color: COLORS.WHITE,
});

const AppText = styled.Text({
  fontSize: 14,
  color: COLORS.WHITE,
  lineHeight: 26,
});

const globalStyles = StyleSheet.create({
  fitContent: {
    alignSelf: 'flex-start',
  },
  primaryButton: {
    width: '85%',
    height: 50,
  },
  textCenter: {
    textAlign: 'center',
  },
  btnText: {
    color: COLORS.WHITE,
    fontWeight: '500'
  }
});

export {globalStyles, AppPrimaryButton, AppTitle, AppText};