import { Navigation } from 'react-native-navigation';
import { getImageSource } from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
  Promise.all([
    getImageSource('md-map', 30),
    getImageSource('ios-share-alt', 30),
    getImageSource('ios-menu', 30)
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
