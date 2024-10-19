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

export const Card = ({ headerText, content }: CardProps) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.textHeader}>
          {dayjs(headerText).format("DD MMM YYYY")}
        </Text>
        <IconButton
          name="delete"
          onPress={content.remove}
          size={20}
          color="tomato"
          buttonStyle={styles.deleteButton}
        />
      </View>
      <View style={styles.box}>
        <View style={styles.titleContainer}>
          <Text style={styles.text}>{content.title}</Text>
          <Text style={styles.text}>{dayjs(content.time).format("HH:mm")}</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.textDes}>{content.desc}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    backgroundColor: "#fff",
    padding: 10,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  deleteButton: {
    backgroundColor: "#ffedeb",
    padding: 5,
    borderRadius: 10,
    alignSelf: "center",
  },
  box: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    backgroundColor: "#fff",
    padding: 20,
    marginTop: 10,
    gap: 4,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  descriptionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textHeader: {
    padding: 5,
    fontSize: 18,
    fontWeight: "bold", // Changed from 700 to 'bold' for consistency
  },
  text: {
    fontWeight: "600",
    fontSize: 16,
  },
  textDes: {
    fontSize: 12,
    color: "gray",
  },
});
