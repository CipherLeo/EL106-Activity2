import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Button,
  Text,
} from 'react-native-paper';

const Landing = () => (
  <View style={styles.container}>
    <Text>Login Template</Text>
    <Text>The easiest way to start your amazing application.</Text>
    <Button>LOGIN</Button>
    <Button>SIGN UP</Button>
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
  }
});

export default Landing;