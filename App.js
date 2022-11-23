import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';


const App = () => {

  return (
    <>

      <View>

        <View style={{ flexDirection: 'row' }}>
          <Image
            style={styles.banner}
            source={require('./assets/img/bg.jpg')}
          />
        </View>

        <View>
          <Text>
            Algo
          </Text>
        </View>

      </View>

    </>

  );
};

const styles = StyleSheet.create({
  banner: {
    height: 200,
    flex: 1
  }
});

export default App;
