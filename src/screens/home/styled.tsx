import React from 'react';
import styled from 'styled-components/native';
import * as COLORS from '../../styles/colors';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet, Dimensions, Platform} from 'react-native';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

const AppContainer = styled.View({
  flex: 1,
  backgroundColor: COLORS.PRIMARY,
  justifyContent: 'space-between',
  alignItems: 'center',
});

const styles = StyleSheet.create({
  header: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    height: 50,
    width: '100%',
    paddingHorizontal: 15,
  },
  headerTitle: {
    fontSize: 18,
    color: COLORS.WHITE,
  },
  powerContainer: {
    alignItems: 'center',
  },
  powerIcon: {
    padding: 30,
    backgroundColor: '#dfdbfe',
    borderRadius: 100,
  },
  powerMiddleContainer: {
    padding: 20,
    borderRadius: 100,
  },
  powerOuterContainer: {
    padding: 20,
    borderRadius: 100,
    backgroundColor: '#1e0d6d',
  },
  status: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    backgroundColor: '#1e0d6d',
    borderRadius: 100,
    color: '#759ad4',
    fontSize: 16,
    marginTop: 20,
  },
  duration: {
    color: COLORS.WHITE,
    fontSize: 18,
    marginTop: 10,
  },
  informContainer: {
    width: viewportWidth - 4,
    paddingHorizontal: 1,
  },
  informSection: {
    flexDirection: 'row',
  },
  informBox: {
    backgroundColor: '#19185a',
    flex: 1,
    height: 120,
    margin: 1,
    paddingHorizontal: 15,
    justifyContent: 'space-evenly',
  },
  informBoxBottom: {
    backgroundColor: '#19185a',
    height: 90,
    margin: 1,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  informBadgeImg: {
    height: 32,
    width: 32,
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
  informSubTitle: {
    color: COLORS.WHITE,
    fontSize: 12,
  },
  vipBox: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 100,
    marginTop: 5,
  },
  vipText: {
    paddingHorizontal: 10,
    fontWeight: '700',
    fontSize: 12,
  },
  informBadgeIcon: {
    color: COLORS.WHITE,
    borderRadius: 100,
    backgroundColor: 'red',
    padding: 5,
  },
});

export {styles, AppContainer};
