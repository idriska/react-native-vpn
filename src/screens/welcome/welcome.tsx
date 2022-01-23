import React from 'react';
import {StatusBar, Text, TouchableOpacity, Image} from 'react-native';
import {styles, AppContainer} from './styled';
import {
  globalStyles,
  AppPrimaryButton,
  AppTitle,
  AppText,
} from '../../styles/global-styled-components';
import * as COLORS from '../../styles/colors';

const ConnectionImg = require('../../assets/img/connection.png');

const Welcome = () => {
  return (
    <AppContainer>
      <StatusBar backgroundColor={COLORS.PRIMARY} />
      <Image source={ConnectionImg} style={styles.sliderImage} resizeMode='contain'></Image>
      <AppTitle>Easy Connection</AppTitle>
      <AppText style={[globalStyles.textCenter, styles.descriptionText]}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure libero.
      </AppText>
      <TouchableOpacity style={[globalStyles.primaryButton, styles.btnStyle]}>
        <AppPrimaryButton
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#4f23c9', '#8428f0']}
        >
          <Text style={globalStyles.btnText}>GET STARTED</Text>
        </AppPrimaryButton>
      </TouchableOpacity>
    </AppContainer>
  );
};

export default Welcome;
