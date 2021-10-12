import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const localHotels = [
  {
    name : "ChettiNadu ",
    rating : "4.7",
    image:
      "https://scontent.fixm2-1.fna.fbcdn.net/v/t1.6435-9/s960x960/104541606_106106891156820_1771913620884889877_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=e3f864&_nc_ohc=5bcFvjNL2AAAX_n6BdK&_nc_ht=scontent.fixm2-1.fna&oh=b5e684954133e3e8d86f9c26c0dd7929&oe=618BA0B0",
  },
  {
    name : "Annai Mess ",
    rating : "4.5",
    image:
      "https://www.collinsdictionary.com/images/full/restaurant_135621509.jpg",
  },
  {
    name : "India Grill ",
    rating : "4.2",
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/1a/b8/46/6d/london-stock.jpg",
  },
];

export default function RestaurantItems() {
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
      {localHotels.map((hotel, index) => (
        <View 
        key={index}
        style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}>
          <RestaurantImage image={hotel.image} />
          <RestaurantInfo name={hotel.name} rating={hotel.rating}/>
        </View>
      ))}
    </TouchableOpacity>
  );
}

const RestaurantImage = (props) => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={{
        width: "100%",
        height: 180,
      }}
    />
    <TouchableOpacity style={{ position: "absolute", top: 20, right: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color={"#fff"} />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = (props) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>{ props.name }</Text>
      <Text style={{ fontSize: 13, color: "gray" }}>30-45 min</Text>
    </View>

    <View
      style={{
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
      }}
    >
      <Text>{props.rating}</Text>
    </View>
  </View>
);
