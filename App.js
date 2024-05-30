/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import Route from './src/Route';

const App = () => {
  useEffect(() => {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
    );
  }, []);

  return (
      <AlertNotificationRoot>
        <Route />
      </AlertNotificationRoot>
  );
};

export default App;

const styles = StyleSheet.create({});