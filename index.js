import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Dimensions,
  ScrollView,
} from 'react-native';
import ViewPager from '@react-native-community/viewpager';

const DATA_ONE = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const DATA_TWO = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

function Item({title}) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const renderItem = ({item, index}) => {
  if (index == 0)
    return <View style={{height: 300, backgroundColor: 'blue'}} />;
  else if (index == 1)
    return <View style={{height: 100, backgroundColor: 'black'}} />;
  else {
    return (
      <View style={{flex: 1, backgroundColor: 'yellow'}}>
        <ViewPager scrollEnabled style={styles.viewPager} initialPage={0}>
          <View key="1">
            <FlatList
              nestedScrollEnabled={true}
              data={DATA_ONE}
              renderItem={({item}) => <Item title={item.title} />}
              keyExtractor={(item, index) => index.toString()}
              listKey={(item, index) => 'SSB' + index.toString()}
            />
          </View>
          <View key="2">
            <FlatList
              nestedScrollEnabled={true}
              data={DATA_TWO}
              renderItem={({item}) => <Item title={item.title} />}
              keyExtractor={(item, index) => index.toString()}
              listKey={(item, index) => 'SUBK' + index.toString()}
            />
          </View>
        </ViewPager>
      </View>
    );
  }
};

const MyPager = () => {
  return (
    <>
      <FlatList
        nestedScrollEnabled={true}
        stickyHeaderIndices={[1]}
        contentContainerStyle={{backgroundColor: 'red'}}
        data={[1, 2, 3]}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        listKey={(item, index) => 'SUB' + index.toString()}
      />
    </>
  );
};

const styles = StyleSheet.create({
  viewPager: {
    // flex: 1,
    height: Dimensions.get('screen').height,
  },
  container: {
    flex: 1,
    // marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default MyPager;
