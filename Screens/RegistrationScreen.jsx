// import React, { useState } from "react";
// import { View, Text, TextInput, Button, StyleSheet } from "react-native";

// const RegistrationScreen = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = () => {
//     console.log({ name, email, password });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Реєстрація</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Ім'я"
//         onChangeText={setName}
//         value={name}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Електронна пошта"
//         onChangeText={setEmail}
//         value={email}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Пароль"
//         secureTextEntry
//         onChangeText={setPassword}
//         value={password}
//       />
//       <Button onPress={handleSubmit} title="Зареєструватися" />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 16,
//     backgroundColor: "#f0f0f0",
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 16,
//     textAlign: "center",
//   },
//   input: {
//     width: "100%",
//     height: 40,
//     borderColor: "#ddd",
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     marginBottom: 16,
//     backgroundColor: "#fff",
//   },
// });

// export default RegistrationScreen;
