// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const DoingScreen: React.FC = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Doing Tasks</Text>
//       {/* Add your Doing task management UI here */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//   },
// });

// export default DoingScreen;
import React, { useEffect, useRef, useState } from "react";
import {
  Text,
  StyleSheet,
  FlatList,
  View,
  ActivityIndicator,
  TouchableOpacity,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import { get } from "../../api/fetch";
import { Card } from "../../components/Card";
import { MaterialIcons } from "@expo/vector-icons";

type ITasksData = {
  createdAt: string;
  description: string;
  id: string;
  status: string;
  title: string;
};

const DoingScreen: React.FC = ({ navigation }: any) => {
  const [data, setData] = useState<ITasksData[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const flatListRef = useRef<FlatList<ITasksData>>(null);
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = (): void => {
    if (flatListRef.current) {
      flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
    }
  };

  const handleScroll = (
    event: NativeSyntheticEvent<NativeScrollEvent>
  ): void => {
    const offsetY = event.nativeEvent.contentOffset.y;
    setShowButton(offsetY > 300);
  };

  const fetchData = async (pageParam: number) => {
    if (loading || !hasMore) return; // Prevent fetching if already loading or no more data

    try {
      const response: any = await get(
        `/todo-list?status=DOING&offset=${pageParam}&limit=10`
      );

      if (response.tasks.length > 0) {
        setData((prevData) => [...prevData, ...response.tasks]);
        setPage(response.pageNumber);
      } else {
        setHasMore(false); // No more data to load
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const removeTodo = async (id: string) => {
    setLoading(true);

    setData((prevData) => prevData.filter((item) => item.id !== id));

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setLoading(false);
  };

  const renderItem = ({ item }: { item: ITasksData }) => (
    <View style={styles.itemContainer}>
      <Card
        headerText={item.createdAt}
        content={{
          title: item.title,
          time: item.createdAt,
          desc: item.description,
          remove: () => removeTodo(item.id),
        }}
      />
    </View>
  );

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      setData([]);
      setLoading(true);
      setHasMore(true);
      setShowButton(false);
      fetchData(0);
    });

    return () => unsubscribe();
  }, [navigation]);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
      ) : data.length > 0 ? (
        <View style={{ flex: 1 }}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            onEndReached={() => fetchData(page)}
            ref={flatListRef}
            onScroll={handleScroll}
            scrollEventThrottle={16}
          />
          {showButton && (
            <TouchableOpacity
              style={styles.backToTopButton}
              onPress={scrollToTop}
            >
              <MaterialIcons name="arrow-circle-up" size={25} />
            </TouchableOpacity>
          )}
        </View>
      ) : (
        <View style={{ flex: 1, alignSelf: "center" }}>
          <Text style={styles.notFoundText}>Not found</Text>
        </View>
      )}
    </View>
  );
};

export default DoingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    padding: 15,
    paddingBottom: 5,
  },
  loader: {
    flex: 1,
    alignSelf: "center",
  },
  notFoundText: {
    textAlign: "center",
    marginTop: 20,
  },
  backToTopButton: {
    position: "absolute",
    bottom: 30,
    right: 20,
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderRadius: 50,
  },
});
