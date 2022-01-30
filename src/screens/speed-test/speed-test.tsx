import React from 'react';
import {
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles, AppContainer} from './styled';
import {
  globalStyles,
  AppPrimaryButton,
  AppHeader,
  AppHeaderTextView,
  AppHeaderText,
} from '../../styles/global-styled-components';
import Feather from 'react-native-vector-icons/Feather';
import * as COLORS from '../../styles/colors';
import {SpeedChart, SpeedSemicircleChart} from '../../components';


const dataPing = {
  details: {
    name: 'PING',
    value: '10',
    unit: 'ms',
    icon: 'bar-chart-2',
    iconBgColor: '#8428f0',
  },
  data: {
    labels: [],
    datasets: [
      {
        data: [17, 21, 22, 19, 15, 17, 22, 21],
        color: (opacity = 1) => `#8428f0`, // optional
        strokeWidth: 2, // optional
      },
    ],
  },
  config: {
    backgroundGradientFrom: '#19185a',
    backgroundGradientTo: '#19185a',
    strokeWidth: 2,
    useShadowColorFromDataset: false, // optional
    propsForDots: {
      r: '0',
    },
    fillShadowGradient: '#8428f0',
    fillShadowGradientOpacity: 0.4,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  },
};

const dataUpload = {
  details: {
    name: 'UPLOAD',
    value: '2,5',
    unit: 'mbps',
    icon: 'arrow-up',
    iconBgColor: '#29bac1',
  },
  data: {
    labels: [],
    datasets: [
      {
        data: [11, 16, 13, 19, 23, 20, 15, 21],
        color: (opacity = 1) => `#29bac1`,
        strokeWidth: 2,
      },
    ],
  },
  config: {
    backgroundGradientFrom: '#19185a',
    backgroundGradientTo: '#19185a',
    strokeWidth: 2,
    useShadowColorFromDataset: false,
    propsForDots: {
      r: '0',
    },
    fillShadowGradient: '#29bac1',
    fillShadowGradientOpacity: 0.4,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  },
};

const dataDownload = {
  details: {
    name: 'DOWNLOAD',
    value: '15,47',
    unit: 'mbps',
    icon: 'arrow-down',
    iconBgColor: '#fa6f4d',
  },
  data: {
    labels: [],
    datasets: [
      {
        data: [25, 21, 18, 12, 15, 21, 25, 24],
        color: (opacity = 1) => `#fa6f4d`,
        strokeWidth: 2,
      },
    ],
  },
  config: {
    backgroundGradientFrom: '#19185a',
    backgroundGradientTo: '#19185a',
    strokeWidth: 2,
    useShadowColorFromDataset: false,
    propsForDots: {
      r: '0',
    },
    fillShadowGradient: '#fa6f4d',
    fillShadowGradientOpacity: 0.4,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  },
};

const SpeedTest = () => {
  return (
    <AppContainer>
      <StatusBar backgroundColor={COLORS.PRIMARY} />
      <AppHeader>
        <Feather
          name="chevron-left"
          style={[globalStyles.headerIcon]}
          size={26}
        />
        <AppHeaderTextView>
          <AppHeaderText>Speed Test</AppHeaderText>
        </AppHeaderTextView>
      </AppHeader>
      <SpeedSemicircleChart />
      <View style={{marginTop: 30}}>
        <SpeedChart data={dataPing} />
        <SpeedChart data={dataUpload} />
        <SpeedChart data={dataDownload} />
      </View>
      <TouchableOpacity style={[globalStyles.primaryButton, styles.btnStyle]}>
        <AppPrimaryButton
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#4f23c9', '#8428f0']}>
          <Text style={globalStyles.btnText}>TEST SPEED NOW</Text>
        </AppPrimaryButton>
      </TouchableOpacity>
    </AppContainer>
  );
};

export default SpeedTest;
