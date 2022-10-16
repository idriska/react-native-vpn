import styled from 'styled-components/native';
import * as COLORS from './colors';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet, Dimensions, Platform} from 'react-native';

const AppHeader = styled.View({
  width: '100%',
  height: 50,
  paddingHorizontal: 10,
  alignItems: 'center',
  flexDirection: 'row',
});

const AppHeaderTextView = styled.View({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  justifyContent: 'center',
  alignItems: 'center',
});

const AppHeaderText = styled.Text({
  fontSize: 18,
  fontWeight: '500',
  color: COLORS.WHITE
})

const AppPrimaryButton = styled(LinearGradient)({
  width: '100%',
  height: '100%',
  borderRadius: 100,
  justifyContent: 'center',
  alignItems: 'center',
});

const AppTitle = styled.Text({
  fontSize: 22,
  fontWeight: 700,
  color: COLORS.WHITE,
});

const AppText = styled.Text({
  fontSize: 14,
  color: COLORS.WHITE,
  lineHeight: '26px',
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
    fontWeight: '500',
  },
  informBadgeIcon: {
    color: COLORS.WHITE,
    borderRadius: 100,
    backgroundColor: 'red',
    padding: 5,
  },
  headerIcon: {
    color: COLORS.WHITE,
  },
  informTitle: {
    color: COLORS.WHITE,
    fontSize: 20,
    fontWeight: '500',
  },
  unitText: {
    color: 'rgba(255,255,255, 0.5)',
    fontSize: 14,
  },
});

export {
  globalStyles,
  AppHeader,
  AppHeaderTextView,
  AppHeaderText,
  AppPrimaryButton,
  AppTitle,
  AppText,
};
