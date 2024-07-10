import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import style from './style';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import Tab from '../../components/Tab/Tab';
import Badge from '../../components/Badge/Badge';

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <View>
        <Header title={'Azzahri A.'} type={1} />
        {/* <Button
          title={'Donate'}
          onPress={() => {
            console.log('You just pressed me');
          }}
        />
        <Button title={'Donate'} isDisabled={true} /> */}
        <Tab title="Highlight" />
        <Tab title="Highlight" isInactive={true} />
        <Badge title="Environment" />
      </View>
    </SafeAreaView>
  );
};

export default Home;
