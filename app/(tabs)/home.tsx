// import { Redirect } from "expo-router";
import { Text, View } from "react-native";

const Home = () => {
  // const isAuthenticated = false;

  // if (!isAuthenticated) {
  //   return <Redirect href="/signup" />;
  // }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Home</Text>
    </View>
  );
};

export default Home;
