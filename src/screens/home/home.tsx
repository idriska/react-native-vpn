import React from 'react';
import {Image, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import {styles, AppContainer} from './styled';
import {
  globalStyles,
  AppPrimaryButton,
  AppTitle,
  AppText,
} from '../../styles/global-styled-components';
import * as COLORS from '../../styles/colors';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

const UsaImg = require('../../assets/img/usa.png');
const CrownImg = require('../../assets/img/crown.png');

const Home = () => {
  return (
    <AppContainer>
      <StatusBar backgroundColor={COLORS.PRIMARY} />

      <View style={styles.header}>
        <Ionicons name="ios-menu-outline" color={COLORS.WHITE} size={32} />
        <Text style={styles.headerTitle}>
          <MaterialCommunityIcons
            color="#f6b73d"
            name="lightning-bolt-outline"
            size={24}
          />
          StormVPN
        </Text>
        <Entypo name="light-down" color={COLORS.WHITE} size={32} />
      </View>

      <View style={styles.powerContainer}>
        <TouchableOpacity style={styles.powerOuterContainer}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#4f23c9', '#8428f0']}
            style={styles.powerMiddleContainer}>
            <Ionicons
              name="power-outline"
              color="#759ad4"
              size={32}
              style={styles.powerIcon}
            />
          </LinearGradient>
        </TouchableOpacity>
        <Text style={styles.status}>Connected</Text>
        <Text style={styles.duration}>02 : 40 : 54</Text>
      </View>

      <View style={styles.informContainer}>
        <View style={styles.informSection}>
          <View style={styles.informBox}>
            <Image
              source={UsaImg}
              style={styles.informBadgeImg}
              resizeMode="contain"
            />
            <Text style={globalStyles.informTitle}>USA</Text>
            <Text style={styles.informSubTitle}>NEW YOURK CITY</Text>
          </View>
          <View style={styles.informBox}>
            <Feather name="bar-chart-2" style={[globalStyles.informBadgeIcon, globalStyles.fitContent, {backgroundColor: '#8428f0'}]} size={22}/>
            <Text style={globalStyles.informTitle}>10 <Text style={globalStyles.unitText}>ms</Text></Text>
            <Text style={styles.informSubTitle}>PING</Text>
          </View>
        </View>
        <View style={styles.informSection}>
          <View style={styles.informBox}>
            <Feather name="arrow-down" style={[globalStyles.informBadgeIcon, globalStyles.fitContent, {backgroundColor: '#fa6f4d'}]} size={22}/>
            <Text style={globalStyles.informTitle}>15,47 <Text style={globalStyles.unitText}>mbps</Text></Text>
            <Text style={styles.informSubTitle}>DOWNLOAD</Text>
          </View>
          <View style={styles.informBox}>
            <Feather name="arrow-up" style={[globalStyles.informBadgeIcon, globalStyles.fitContent, {backgroundColor: '#29bac1'}]} size={22}/>
            <Text style={globalStyles.informTitle}>2,50 <Text style={globalStyles.unitText}>mbps</Text></Text>
            <Text style={styles.informSubTitle}>UPLOAD</Text>
          </View>
        </View>
        <View style={[styles.informBoxBottom]}>
          <View style={{flexDirection: 'row', alignItems: 'center',}}>
            <Image
              source={CrownImg}
              style={styles.informBadgeImg}
              resizeMode="contain"
            />
            <View style={{marginLeft: 10}}>
              <Text style={styles.informSubTitle}>Super Fast Server</Text>
              <View style={[styles.vipBox, globalStyles.fitContent]}>
                <Text style={styles.vipText}>VIP</Text>
              </View>
            </View>
           </View>
           <Feather name="arrow-right" style={[globalStyles.informBadgeIcon, {backgroundColor: '#2b2a68'}]} size={22}/>
        </View>
      </View>
    </AppContainer>
  );
};

export default Home;
