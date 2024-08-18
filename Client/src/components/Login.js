// import React, {useState} from 'react';
// import {StatusBar} from 'expo-status-bar';
// import {
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   TouchableOpacity,
//   Image,
//   Alert,
// } from 'react-native';
// import {login} from '../api/authApi';

// const Login = () => {
//   // const [email, setEmail] = useState('');
//   // const [password, setPassword] = useState('');

//   // const handleSubmit = async () => {
//   //   if (email === '' || password === '') {
//   //     Alert.alert('Error', 'Please fill in all fields');
//   //     return;
//   //   }

//   //   try {
//   //     const data = await login({email, password});
//   //     console.log(data);
//   //     setEmail('');
//   //     setPassword('');
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // };

//   return (
//     // <View style={styles.container}>
//     //   <StatusBar style="auto" />
//     //   <Image source={{ uri: 'https://your-image-url.com/logo.png' }} style={styles.logo} />
//     //   <Text style={styles.title}>CryptoCamGuard</Text>
//     //   <TextInput
//     //     placeholder="Enter Email"
//     //     style={styles.input}
//     //     keyboardType="email-address"
//     //     value={email}
//     //     onChangeText={text => setEmail(text)}
//     //     autoCapitalize="none"
//     //   />
//     //   <TextInput
//     //     placeholder="Password"
//     //     style={styles.input}
//     //     secureTextEntry
//     //     value={password}
//     //     onChangeText={text => setPassword(text)}
//     //     autoCapitalize="none"
//     //   />
//     //   <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//     //     <Text style={styles.buttonText}>Login</Text>
//     //   </TouchableOpacity>
//     //   <TouchableOpacity>
//     //     <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
//     //   </TouchableOpacity>
//     //   <TouchableOpacity style={styles.createAccountButton}>
//     //     <Text style={styles.buttonText}>Create New Account</Text>
//     //   </TouchableOpacity>
//     // </View>
//     <Text>Hello</Text>
//   );
// };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: '#0a2b4e',
// //     paddingHorizontal: 20,
// //   },
// //   logo: {
// //     width: 120,
// //     height: 120,
// //     marginBottom: 20,
// //   },
// //   title: {
// //     fontSize: 24,
// //     fontWeight: 'bold',
// //     color: '#fff',
// //     marginBottom: 20,
// //   },
// //   input: {
// //     width: '100%',
// //     height: 50,
// //     backgroundColor: '#fff',
// //     borderRadius: 8,
// //     paddingHorizontal: 15,
// //     marginBottom: 15,
// //   },
// //   button: {
// //     width: '100%',
// //     height: 50,
// //     backgroundColor: '#0a74da',
// //     borderRadius: 8,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     marginBottom: 10,
// //   },
// //   buttonText: {
// //     color: '#fff',
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //   },
// //   forgotPasswordText: {
// //     color: '#fff',
// //     marginBottom: 20,
// //   },
// //   createAccountButton: {
// //     width: '100%',
// //     height: 50,
// //     backgroundColor: '#0a74da',
// //     borderRadius: 8,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// // });

// export default Login;

import React, {useState} from 'react';
import {StatusBar} from 'react-native'; // Import StatusBar from react-native
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import {login} from '../api/authApi'; // Ensure this path is correct

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    if (email === '' || password === '') {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    try {
      const data = await login({email, password});
      console.log(data);
      setEmail('');
      setPassword('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      {/* <StatusBar barStyle="light-content" backgroundColor="#0a2b4e" />
      <Image
        source={{uri: 'https://your-image-url.com/logo.png'}}
        style={styles.logo}
      />
      <Text style={styles.title}>CryptoCamGuard</Text>
      <TextInput
        placeholder="Enter Email"
        style={styles.input}
        keyboardType="email-address"
        value={email}
        onChangeText={text => setEmail(text)}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.createAccountButton}>
        <Text style={styles.buttonText}>Create New Account</Text>
      </TouchableOpacity> */}

      <Text>login component</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0a2b4e',
    paddingHorizontal: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#0a74da',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPasswordText: {
    color: '#fff',
    marginBottom: 20,
  },
  createAccountButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#0a74da',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Login;
