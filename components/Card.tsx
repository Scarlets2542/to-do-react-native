import React from "react";
import { View, Text, StyleSheet } from "react-native";
import IconButton from "./Icon";
import dayjs from "dayjs";

type CardProps = {
  headerText: any;
  content: {
    title: string;
    time: string;
    desc: string;
    remove: () => void;
  };
};
export const Card = (props: CardProps) => {
  const { headerText, content } = props;
  return (
    <View>
      <View
        style={{
          justifyContent: "flex-start",
          alignItems: "flex-start",
          paddingBottom: 5,
        }}
      >
        <Text style={{ fontSize: 15 }}>
          {dayjs(headerText).format("DD MMM YYYY")}
        </Text>
      </View>
      <View style={styles.box}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.text}>{content.title}</Text>
          <Text style={styles.text}>{dayjs(content.time).format("HH:mm")}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={styles.text}>{content.desc}</Text>
          <IconButton
            name="delete"
            onPress={() => content.remove()}
            size={25}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    borderWidth: 2, // Width of the border
    borderColor: "#6200ee", // Color of the border
    borderRadius: 10, // Rounded corners (optional)
    backgroundColor: "#fff", // Background color of the view
    padding: 20,
  },
  text: {
    fontSize: 12,
  },
});
