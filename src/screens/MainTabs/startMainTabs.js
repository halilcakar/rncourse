import { Navigation } from 'react-native-navigation';
import { Platform } from 'react-native';
import { getImageSource } from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
  Promise.all([
    getImageSource(Platform.OS === 'android' ? 'md-map' : 'ios-map', 30),
    getImageSource(Platform.OS === 'android' ? 'md-share-alt' : 'ios-share-alt', 30),
    getImageSource(Platform.OS === 'android' ? 'md-menu' : 'ios-menu', 30)
  ]).then(sources => {
    const navigatorButtons = {
      leftButtons: [
        { icon: sources[2], title: 'Menu', id: 'sideDrawerToggle' }
      ]
    };
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: 'awesome-places.FindPlaceScreen',
          label: 'Find Place',
          title: 'Find Place',
          icon: sources[0],
          navigatorButtons
        },
        {
          screen: 'awesome-places.SharePlaceScreen',
          label: 'Share Place',
          title: 'Share Place',
          icon: sources[1],
          navigatorButtons
        }
      ],
      drawer: {
        left: {
          screen: 'awesome-places.SideDrawer'
        }
      }
    });
  });
};

export default startTabs;
