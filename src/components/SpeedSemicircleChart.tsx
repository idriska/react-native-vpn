import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import * as COLORS from './../styles/colors';
import {globalStyles} from './../styles/global-styled-components';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

const data = [
  {
    value: 0,
    valueHorizontalPos: 18,
    valueBottom: 0,
    lineHorizontalPos: 30,
    lineBottom: -5,
    lineTranfrom: '0deg',
  },
  {
    value: 10,
    valueHorizontalPos: 22,
    valueBottom: 54,
    lineHorizontalPos: 40,
    lineBottom: 45,
    lineTranfrom: '18deg',
  },
  {
    value: 20,
    valueHorizontalPos: 46,
    valueBottom: 99,
    lineHorizontalPos: 62,
    lineBottom: 85,
    lineTranfrom: '36deg',
  },
  {
    value: 30,
    valueHorizontalPos: 82,
    valueBottom: 137,
    lineHorizontalPos: 97,
    lineBottom: 118,
    lineTranfrom: '54deg',
  },
  {
    value: 40,
    valueHorizontalPos: 128,
    valueBottom: 160,
    lineHorizontalPos: 138,
    lineBottom: 139,
    lineTranfrom: '68deg',
  },
  {
    value: 50,
    valueHorizontalPos: viewportWidth / 2 - 10,
    valueBottom: 168,
    lineHorizontalPos: viewportWidth / 2 - 5,
    lineBottom: 145,
    lineTranfrom: '90deg',
  },
  {
    value: 60,
    valueHorizontalPos: 128,
    valueBottom: 160,
    lineHorizontalPos: 140,
    lineBottom: 139,
    lineTranfrom: '-68deg',
  },
  {
    value: 70,
    valueHorizontalPos: 82,
    valueBottom: 137,
    lineHorizontalPos: 97,
    lineBottom: 118,
    lineTranfrom: '-54deg',
  },
  {
    value: 80,
    valueHorizontalPos: 46,
    valueBottom: 99,
    lineHorizontalPos: 62,
    lineBottom: 85,
    lineTranfrom: '-36deg',
  },
  {
    value: 90,
    valueHorizontalPos: 22,
    valueBottom: 54,
    lineHorizontalPos: 40,
    lineBottom: 45,
    lineTranfrom: '-18deg',
  },
  {
    value: 100,
    valueHorizontalPos: 10,
    valueBottom: 0,
    lineHorizontalPos: 30,
    lineBottom: -5,
    lineTranfrom: '0deg',
  },
];

const SpeedSemicircleChart = () => {
  return (
    <View
      style={{
        width: viewportWidth,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
      }}>
      {data.map((item, index) => (
        <>
          <Text
            key={`value-${index}`}
            style={[
              index > 5
                ? {right: item.valueHorizontalPos}
                : {left: item.valueHorizontalPos},
              {
                color: COLORS.WHITE,
                position: 'absolute',
                fontSize: 10,
                zIndex: 10,
                bottom: item.valueBottom,
              },
            ]}>
            {item.value}
          </Text>
          <Text
            key={`line-${index}`}
            style={[
              index > 5
                ? {right: item.lineHorizontalPos}
                : {left: item.lineHorizontalPos},
              {
                color: 'gray',
                position: 'absolute',
                fontSize: 20,
                zIndex: 10,
                bottom: item.lineBottom,
                transform: [{rotate: item.lineTranfrom}],
              },
            ]}>
            -
          </Text>
        </>
      ))}
      <View style={styles.semicircle}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#4f23c9', '#8428f0']}
          style={styles.semicircleUpper}
        />
        <View style={styles.semicircleInner}>
          <Text style={globalStyles.informTitle}>15,47</Text>
          <View
            style={{margin: 10, flexDirection: 'row', alignItems: 'center'}}>
            <Feather
              name="arrow-down"
              style={[
                globalStyles.informBadgeIcon,
                globalStyles.fitContent,
                {backgroundColor: '#fa6f4d'},
              ]}
              size={10}
            />
            <Text style={[globalStyles.unitText, {marginLeft: 5}]}>mbps</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  semicircle: {
    width: viewportWidth - 80,
    height: viewportWidth / 2.6,
    backgroundColor: '#19185a',
    borderTopLeftRadius: viewportWidth,
    borderTopRightRadius: viewportWidth,
    alignItems: 'center',
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  semicircleUpper: {
    position: 'absolute',
    width: '55%',
    height: '100%',
    backgroundColor: 'green',
    alignSelf: 'flex-start',
  },
  semicircleInner: {
    width: viewportWidth - 200,
    borderTopLeftRadius: viewportWidth,
    borderTopRightRadius: viewportWidth,
    height: 97,
    backgroundColor: COLORS.PRIMARY,
    justifyContent: 'flex-end',
    alignItems: 'center',
    bottom: -1,
  },
});

export default SpeedSemicircleChart;
