import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Button,
  Text,
} from 'react-native-paper';

const Login = () => (
  <View style={styles.container}>
    <Text>Login Template</Text>
    <Text>Welcome back.</Text>
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

export default Login;