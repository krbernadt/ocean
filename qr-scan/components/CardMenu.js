import { StyleSheet, View, Text, Pressable } from "react-native";

function CardMenu({ children }) {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
        },
        styles.card,
      ]}
    >
      <Text>{children}</Text>
    </Pressable>
  );
}

export default CardMenu;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 130,
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#0001c0",
    marginBottom: 10,
  },
});
