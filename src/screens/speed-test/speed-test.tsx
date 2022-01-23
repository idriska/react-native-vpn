import React from 'react';
import {StatusBar, Text, TouchableOpacity, Image, View} from 'react-native';
import {styles, AppContainer} from './styled';
import {
  globalStyles,
  AppPrimaryButton,
  AppTitle,
  AppText,
} from '../../styles/global-styled-components';
import * as COLORS from '../../styles/colors';

const SpeedTest = () => {
  return (
    <AppContainer>
      <StatusBar backgroundColor={COLORS.PRIMARY} />

      {/* <View style={styles.semiCircle}>
        <View style={styles.semiCircleInner}></View>
      </View> */}
    </AppContainer>
  );
};

export default SpeedTest;
