import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";

let data = [
  { name: "hel" },
  { name: "hel" },
  { name: "hel" },
  { name: "hel" },
  { name: "hel" },
  { name: "hel" },
  { name: "hel" },
];

let country = [
  { name: "Italian" },
  { name: "Indian" },
  { name: "Indian" },
  { name: "Indian" },
  { name: "Indian" },
  { name: "Indian" },
];

const StaticHeader = () => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        height: "45%",
        width: scale(370),
        borderBottomColor: "#F2F2F2",
        borderBottomWidth: 3,
      }}
    >
      <View style={{ backgroundColor: "#000", height: "17%" }} />
      <View
        style={{
          backgroundColor: "#ffffff",
          elevation: 5,
          flexDirection: "row",
          height: "21%",
          margin: "10%",
          width: "85%",
          padding: 10,
          marginLeft: "8%",
          position: "absolute",
          bottom: "62%",
          borderRadius: moderateScale(20),
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Image
            style={{ width: 20, height: 20 }}
            source={require("../assets/seleDate.png")}
          />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: moderateScale(14),
              marginLeft: "5%",
            }}
          >
            21 May 2021
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "gray",
            height: "50%",
            width: "1%",
            marginVertical: "5%",
            marginHorizontal: "1%",
          }}
        />
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            // padding: "5%",
          }}
        >
          <Image
            style={{ width: 20, height: 20 }}
            source={require("../assets/Set_time.png")}
            resizeMode="contain"
          />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: moderateScale(14),
              marginLeft: "5%",
            }}
          >
            10:30 Pm-12:30 Pm
          </Text>
        </View>
      </View>

      {/* options */}
      <View style={{ marginLeft: "5%", flex: 1 }}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={country}
          renderItem={({ item, index }) => {
            // console.log(index)
            return (
              <TouchableOpacity
                style={{ flex: 1, marginStart: moderateScale(17) }}
              >
                <View
                  style={{
                    borderRadius: moderateScale(30),
                    // marginHorizontal: 1,
                    marginTop: moderateVerticalScale(50),
                    borderColor: index == 0 ? "orange" : "gray",
                    borderWidth: 1,
                    height: "12%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      paddingHorizontal: moderateScale(30),
                      width: "100%",
                      // color: index == 0 ? "yellow" : 'black',
                      // backgroundColor: index == 0 ? "lightyellow" : 'black'
                    }}
                    key={index}
                  >
                    {item?.name}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
          horizontal
        />
      </View>
      {/* options */}
      <Text
        style={{
          fontWeight: "bold",
          position: "absolute",
          top: "50%",
          fontSize: moderateScale(18),
          left: "10%",
        }}
      >
        Popular Dishes
      </Text>
      {/* <Text style={{fontWeight: 'bold',sfontSize: moderateScale(18),left: '10%',height: '40%'}}>Popular Dishes</Text> */}
      <View
        style={{
          marginLeft: "5%",
          position: "absolute",
          top: "43%",
          height: "60%",
        }}
      >
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={country}
          renderItem={({ item }, index) => {
            return (
              <TouchableOpacity
                style={{ flex: 1, marginStart: moderateScale(10) }}
              >
                <View
                  style={{
                    borderRadius: moderateScale(70),
                    marginHorizontal: 1,
                    marginTop: moderateVerticalScale(70),
                    borderColor: "red",
                    width: scale(79),
                    borderWidth: 1,
                    height: "45%",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "4%",
                  }}
                >
                  <Image
                    style={{
                      width: "100%",
                      height: "100%",
                      resizeMode: "cover",
                      borderRadius: moderateScale(50),
                    }}
                    source={require("../assets/MaskGroup.png")}
                  />
                  <Text
                    style={{
                      fontWeight: "500",
                      position: "absolute",
                      top: "40%",
                      fontSize: moderateScale(16),
                      color: '#fff',
                      alignSelf: 'center'
                      // left: "10%",
                    }}
                  >
                    Biryani
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
          horizontal
        />
      </View>
    </View>
  );
};

const ListHeader = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        width: "85%",
        marginHorizontal: moderateScale(16),
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "5%",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: moderateScale(21),
            marginRight: "5%",
          }}
        >
          Recommended
        </Text>
        <AntDesign
          style={{ alignSelf: "center", }}
          name="caretdown"
          size={moderateScale(18)}
          color="gray"
        />
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "black",
          height: verticalScale(33),
          width: "25%",
          borderRadius: moderateScale(10),
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: moderateScale(14),
            color: "white",
          }}
        >
          Menu
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const ListItems = ({ item }) => {
  return (
    <View
      style={{
        height: verticalScale(50),
        marginLeft: "5%",
        width: "87%",
        marginTop: "10%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          // backgroundColor: "blue",
          flex: 2,
          // width: "70%",
          height: verticalScale(90),
          alignItems: "flex-start",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "80%",
          }}
        >
          <Text
            style={{
              fontWeight: "500",
              fontSize: moderateScale(16),
              // marginRight: '5%'
            }}
          >
            {item?.name}
          </Text>
          <Image
            resizeMode="contain"
            style={{ width: "20%", height: "50%", right: "30%" }}
            source={require("../assets/Group.png")}
          />
          <View
            style={{
              backgroundColor: "lightgreen",
              height: verticalScale(20),
              width: "23%",
              borderRadius: moderateScale(5),
              justifyContent: "center",
              alignItems: "center",
              borderColor: "#FF9A26",
              borderWidth: 1.5,
              right: "30%",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: moderateScale(10),
                color: "#fff",
              }}
            >
              {item?.rating}{" "}
              <Text style={{ textAlignVertical: "center", color: "white" }}>
                *
              </Text>
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "75%",
            // backgroundColor: "red",
          }}
        >
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              resizeMode="contain"
              style={{ width: "20%", height: "50%" }}
              source={require("../assets/Fridge.png")}
            />
            <Text
              style={{
                fontWeight: "500",
                fontSize: moderateScale(8),

                // marginRight: '5%'
              }}
            >
              Refrigerator
            </Text>
          </View>

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              resizeMode="contain"
              style={{ width: "20%", height: "50%" }}
              source={require("../assets/Fridge.png")}
            />
            <Text
              style={{
                fontWeight: "500",
                fontSize: moderateScale(8),
                // marginRight: '5%'
              }}
            >
              Refrigerator
            </Text>
          </View>

          <View
            style={{
              backgroundColor: "gray",
              height: "50%",
              width: "1%",
              marginVertical: "5%",
              marginHorizontal: "1%",
            }}
          />

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text
              style={{
                fontWeight: "500",
                fontSize: moderateScale(8),

                // marginRight: '5%'
              }}
            >
              Ingredients
            </Text>
            <TouchableOpacity>
            <Text
              style={{
                fontWeight: "500",
                fontSize: moderateScale(8),

                color: "#FF8800",
                // marginRight: '5%'
              }}
            >
              View List >
            </Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text
          style={{
            fontWeight: "500",
            fontSize: moderateScale(11),
            color: "#707070",
            // marginRight: '5%'
          }}
          numberOfLines={2}
        >
          {item?.description}
        </Text>
      </View>

      <View
        style={{
          // backgroundColor: "red",
          flex: 1,
          width: "20%",
          height: verticalScale(90),
          // elevation: 2
        }}
      >
        <Image
          style={{
            width: "90%",
            height: "90%",
            // resizeMode: "cover",
            borderRadius: moderateScale(10),
          }}
          source={require("../assets/MaskGroup.png")}
        />
        <TouchableOpacity
          style={{
            backgroundColor: "#fff",
            height: verticalScale(30),
            width: "75%",
            borderRadius: moderateScale(5),
            justifyContent: "center",
            alignItems: "center",
            borderColor: "#FF9A26",
            borderWidth: 1.5,
            position: "absolute",
            top: "70%",
            left: "8%",
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: moderateScale(17),
              color: "#FF9A26",
            }}
          >
            Add
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: moderateScale(14),
              color: "#FF9A26",
              position: "absolute",
              bottom: "58%",
              alignSelf: "flex-end",
              right: "5%",
            }}
          >
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Home = () => {
  const [showLoading, setShowLoading] = useState(false)
  const [data, setData] = useState([]);

  useEffect(() => {
    setShowLoading(true)
    axios
      .get(
        "https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/"
      )
      .then((res) => {
        setData(res?.data?.dishes);
      }).catch((error) => {
        console.log(error)
      }).finally(() => { 
        setShowLoading(false)
      })
  }, []);

  return (
    <View style={styles.container}>
      <StaticHeader />
      {showLoading ? (
        <ActivityIndicator size={moderateScale(30)} color={"#000"} style={{position: 'absolute',top: '60%'}}/>
      ) : null}
      <FlatList
        data={data}
        renderItem={({ item }, index) => {
          return (
            <View style={{ marginBottom: 50 }}>
              <ListItems item={item} />
            </View>
          );
        }}
        ListHeaderComponent={<ListHeader />}
        ItemSeparatorComponent={() => (
          <View
            style={{
              backgroundColor: "#F2F2F2",
              width: "100%",
              height: "1%",
              marginVertical: "1%",
            }}
          />
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
