import React from 'react';
import {Text, View, Dimensions} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {LineChart} from 'react-native-chart-kit';
import {globalStyles} from './../styles/global-styled-components';
import * as COLORS from './../styles/colors';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

const SpeedChart = ({data}: any) => {
  return (
    <View
      style={{
        backgroundColor: '#19185a',
        width: viewportWidth - 20,
        height: 100,
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
            name={data.details.icon}
            style={[
              globalStyles.informBadgeIcon,
              globalStyles.fitContent,
              {backgroundColor: data.details.iconBgColor},
            ]}
            size={22}
          />
          <Text style={{marginLeft: 10, color: COLORS.WHITE}}>
            {data.details.name}
          </Text>
        </View>
        <Text style={globalStyles.informTitle}>
          {data.details.value}{' '}
          <Text style={globalStyles.unitText}>{data.details.unit}</Text>
        </Text>
      </View>
      <LineChart
        data={data.data}
        width={viewportWidth + 100}
        height={60}
        chartConfig={data.config}
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
  );
};

export default SpeedChart;
