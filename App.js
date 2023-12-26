import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';

const mockData = [
      { id: '1', title: 'Ulzzang Outfit Korean Style', imageUrl: 'https://64.media.tumblr.com/f09ba4389659c92012c7c1ecd83b2985/d098800d590edf28-ef/s1280x1920/31aa0959920cca64b356667296618107edf2dacb.jpg' },
      { id: '2', title: 'Cute kitten Wallpaper |  Taekook', imageUrl: 'http://2.bp.blogspot.com/--A--xCrAzIk/UQ_ol0HIbMI/AAAAAAAAAHQ/wvwY4z8_rr0/s1600/cute-cats1.jpg' },
      { id: '3', title: 'Farm Fresh Flowers | Aesthetic ', imageUrl: 'https://i.pinimg.com/564x/88/64/f9/8864f93f06dea55f7da08f4f35b90b4c.jpg' },
      { id: '4', title: 'étoiles, 2023 Home Cozy Productive', imageUrl: 'https://i.pinimg.com/564x/2f/6d/76/2f6d760166089d7aa8d1bc68307bb28c.jpg' },
      { id: '5', title: 'Long Sleeve Blouse Women', imageUrl: 'https://i.pinimg.com/736x/84/93/a9/8493a98ab5e0134d76b926a8b2561387.jpg' },
      { id: '6', title: 'Cute Bunny Background | Cute Animated Baby', imageUrl: 'https://th.bing.com/th/id/OIP.LsAAr3KUnv80bkMRgerVRwHaNL?pid=ImgDet&rs=1' },
      { id: '7', title: 'Gorgeous Free Fall Phone Wallpapers', imageUrl: 'https://i.pinimg.com/564x/63/9e/8e/639e8efa2275d41dc17e23e07885bb39.jpg' },
      { id: '8', title: 'missing summer | Sky aesthetic', imageUrl: 'https://i.pinimg.com/564x/bc/57/e7/bc57e7ddbd3f42aff779c263b38b4ba1.jpg' },
      { id: '9', title: 'Quotes about Gods Timing is Perfect', imageUrl: 'https://i.pinimg.com/564x/6f/82/37/6f82371cf748933c41f51dcb56adfca6.jpg' },
      { id: '10', title: 'London Sunset Wallpaper', imageUrl: 'https://i.pinimg.com/564x/6a/51/73/6a517385aaa73be21eb50434dd73f26f.jpg' },
      { id: '11', title: 'Pin by 雨緣 on 壁紙 | Girly art illustrations', imageUrl: 'https://i.pinimg.com/564x/34/6c/5f/346c5fa6e9b7a4b6b8d6e0e64bdd8f0e.jpg' },
      { id: '12', title: 'Nairobi_2007 | creating photos', imageUrl: 'https://i.pinimg.com/564x/db/83/b1/db83b1ea2b66450a99e08d6cce24d13c.jpg' },
      { id: '13', title: 'Minimal Standing Desk Setup', imageUrl: 'https://i.pinimg.com/564x/d5/f5/47/d5f547d4bfcabe678fd693ef3de91e32.jpg' },
      { id: '14', title: 'Baby Girl🌸 | Cute Wallpaper', imageUrl: 'https://i.pinimg.com/564x/f1/e9/81/f1e981a20aa93af9bcdeb4394b5a57c9.jpg' },
    ];
const Tab = createBottomTabNavigator();


const Pinteresthomepage = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <Text style={styles.title}></Text>
      <View style={{ display: 'flex', flexDirection: 'row', width: '100%' }}><Text style={styles.title}>{item.title}</Text><Icon name='ellipsis-horizontal' size={25} color='black' /></View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={mockData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
        
            if (route.name === 'Home') {
              iconName = 'home-outline';
            } else if (route.name === 'Profile') {
              iconName = 'person-outline';
            } else if (route.name === 'Upload') {
              iconName = 'cloud-upload-outline';
            } else if (route.name === 'Search') {
              iconName = 'search-outline';
            } else if (route.name === 'Inbox') {
              iconName = 'mail-outline'; 
            }
        
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarLabel: () => null, 
        })}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'gray',
          tabBarShowLabel: false,
        }}
      >
        <Tab.Screen name="Home" component={Pinteresthomepage} />
        <Tab.Screen name="Search" component={Pinteresthomepage} />
        <Tab.Screen name="Upload" component={Pinteresthomepage} />
        <Tab.Screen name="Inbox" component={Pinteresthomepage} />
        <Tab.Screen name="Profile" component={Pinteresthomepage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 12,
      },
      list: {
        paddingHorizontal: 10,
      },
      card: {
        flex: 1,
        backgroundColor: '#fff',
        margin: 8,
        borderRadius: 8,
        elevation: 2,
      },
      image: {
        width: '100%',
        height: 200,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
      },
      title: {
        flex: 1,
        width:'100%', 
        alignItems: 'center',
        padding: 3,
        fontSize: 12,
      },
      button: {
        margin: 16,
      },
});

export default App;