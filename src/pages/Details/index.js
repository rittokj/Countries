import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Pressable,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { loginTriggered } from "./actions";

const Login = () => {
  const dispatch = useDispatch();
  const [states, setStates] = useState({
    userName: "arun123456@gmail.com",
    password: 123456,
  });

  const loginPressed = () => {
    dispatch(loginTriggered(states))
      .then((res) => {
        console.log("res: ", res);
      })
      .catch((err) => {
        console.log("err: ", err);
      })
      .finally(() => {
        console.log("Finally");
      });
  };

  return (
    <SafeAreaView sttyle={{ flex: 1 }}>
      <View>
        <View>
          <Text style={styles.title}>Welcome Back</Text>

          <Text style={styles.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
            maecenas mi non sed ut odio. Non, justo, sed facilisi et.
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Username"
            onChangeText={(e) => setStates({ ...states, userName: e })}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={(e) => setStates({ ...states, password: e })}
          />

          <Pressable style={styles.button} onPress={loginPressed}>
            <Text style={styles.buttonText}>Sign In</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center",
    color: "#464444",
    paddingTop: 20,
  },
  subtitle: {
    fontSize: 15,
    textAlign: "center",
    color: "#464444",
    padding: 20,
  },
  bottomView: {
    marginHorizontal: 20,
    flex: 1,
    justifyContent: "center",
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#F89AEE",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 30,
  },
  buttonText: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "500",
  },
  input: {
    width: "100%",
    height: 60,
    backgroundColor: "#F3F3F3",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 15,
    fontSize: 16,
    marginBottom: 20,
  },
});

export default Login;
