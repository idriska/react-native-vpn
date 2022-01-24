import React from 'react';
import {
  StatusBar,
  Dimensions,
  Text,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';
import {styles, AppContainer} from './styled';
import {
  globalStyles,
  AppPrimaryButton,
  AppTitle,
  AppText,
} from '../../styles/global-styled-components';
import Feather from 'react-native-vector-icons/Feather';
import * as COLORS from '../../styles/colors';
import {LineChart} from 'react-native-chart-kit';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');
const dataPing = {
  labels: [],
  datasets: [
    {
      data: [17, 21, 22, 19, 15, 17, 22, 21],
      color: (opacity = 1) => `#8428f0`, // optional
      strokeWidth: 2, // optional
    },
  ],
};

const dataUpload = {
  labels: [],
  datasets: [
    {
      data: [11, 16, 13, 19, 23, 20, 15, 21],
      color: (opacity = 1) => `#29bac1`, // optional
      strokeWidth: 2, // optional
    },
  ],
};

const dataDownload = {
  labels: [],
  datasets: [
    {
      data: [25, 21, 18, 12, 15, 21, 25, 24],
      color: (opacity = 1) => `#fa6f4d`, // optional
      strokeWidth: 2, // optional
    },
  ],
};

const chartConfigPing = {
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
};

const chartConfigUpload = {
  backgroundGradientFrom: '#19185a',
  backgroundGradientTo: '#19185a',
  strokeWidth: 2,
  useShadowColorFromDataset: false, // optional
  propsForDots: {
    r: '0',
  },
  fillShadowGradient: '#29bac1',
  fillShadowGradientOpacity: 0.4,
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
};

const chartConfigDownload = {
  backgroundGradientFrom: '#19185a',
  backgroundGradientTo: '#19185a',
  strokeWidth: 2,
  useShadowColorFromDataset: false, // optional
  propsForDots: {
    r: '0',
  },
  fillShadowGradient: '#fa6f4d',
  fillShadowGradientOpacity: 0.4,
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
};

const SpeedTest = () => {
  return (
    <AppContainer>
      <StatusBar backgroundColor={COLORS.PRIMARY} />
      <View
        style={{
          backgroundColor: '#19185a',
          width: viewportWidth - 20,
          height: 120,
          borderRadius: 16,
          overflow: 'hidden',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            marginTop: 15,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Feather
              name="bar-chart-2"
              style={[
                globalStyles.informBadgeIcon,
                globalStyles.fitContent,
                {backgroundColor: '#8428f0'},
              ]}
              size={22}
            />
            <Text style={{marginLeft: 10, color: COLORS.WHITE}}>PING</Text>
          </View>
          <Text style={globalStyles.informTitle}>
            10 <Text style={globalStyles.unitText}>ms</Text>
          </Text>
        </View>
        <LineChart
          data={dataPing}
          width={viewportWidth + 100}
          height={60}
          chartConfig={chartConfigPing}
          bezier
          segments={2}
          fromZero={true}
          withHorizontalLabels={false}
          withVerticalLabels={false}
          withInnerLines={false}
          withOuterLines={false}
          style={{
            left: -65,
          }}
        />
      </View>

      <View
        style={{
          backgroundColor: '#19185a',
          width: viewportWidth - 20,
          height: 120,
          borderRadius: 16,
          overflow: 'hidden',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            marginTop: 15,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Feather
              name="arrow-up"
              style={[
                globalStyles.informBadgeIcon,
                globalStyles.fitContent,
                {backgroundColor: '#29bac1'},
              ]}
              size={22}
            />
            <Text style={{marginLeft: 10, color: COLORS.WHITE}}>UPLOAD</Text>
          </View>
          <Text style={globalStyles.informTitle}>
            2,50 <Text style={globalStyles.unitText}>mbps</Text>
          </Text>
        </View>
        <LineChart
          data={dataUpload}
          width={viewportWidth + 100}
          height={60}
          chartConfig={chartConfigUpload}
          bezier
          segments={2}
          fromZero={true}
          withHorizontalLabels={false}
          withVerticalLabels={false}
          withInnerLines={false}
          withOuterLines={false}
          style={{
            left: -65,
          }}
        />
      </View>

      <View
        style={{
          backgroundColor: '#19185a',
          width: viewportWidth - 20,
          height: 120,
          borderRadius: 16,
          overflow: 'hidden',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            marginTop: 15,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Feather
              name="arrow-down"
              style={[
                globalStyles.informBadgeIcon,
                globalStyles.fitContent,
                {backgroundColor: '#fa6f4d'},
              ]}
              size={22}
            />
            <Text style={{marginLeft: 10, color: COLORS.WHITE}}>DOWNLOAD</Text>
          </View>
          <Text style={globalStyles.informTitle}>
            15,47 <Text style={globalStyles.unitText}>mbps</Text>
          </Text>
        </View>
        <LineChart
          data={dataDownload}
          width={viewportWidth + 100}
          height={60}
          chartConfig={chartConfigDownload}
          bezier
          segments={2}
          fromZero={true}
          withHorizontalLabels={false}
          withVerticalLabels={false}
          withInnerLines={false}
          withOuterLines={false}
          style={{
            left: -65,
          }}
        />
      </View>
    </AppContainer>
  );
};

export default SpeedTest;
