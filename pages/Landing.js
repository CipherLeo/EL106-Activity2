import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Button,
  Text,
} from 'react-native-paper';


const Landing = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Login</Text>
    <Text>The easiest way to start your amazing application.</Text>
    <Button onPress={ () => navigation.navigate('Login') }>LOGIN</Button>
    <Button onPress={ () => navigation.navigate('Registration') }>SIGN UP</Button>
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
  }
});

export default Landing;