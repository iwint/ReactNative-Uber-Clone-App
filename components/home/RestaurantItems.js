import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


export const localRestaurants = [
  {
    name : "ChettiNadu ",
    rating : "4.7",
    image_url:
      "https://scontent.fixm2-1.fna.fbcdn.net/v/t1.6435-9/s960x960/104541606_106106891156820_1771913620884889877_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=e3f864&_nc_ohc=5bcFvjNL2AAAX_n6BdK&_nc_ht=scontent.fixm2-1.fna&oh=b5e684954133e3e8d86f9c26c0dd7929&oe=618BA0B0",
      price : "$$",
      reviews : "1123"
  },
 
];

export default function RestaurantItems({navigation, ...props}) {
  return (
    <>
      { props.hotelData.map((restaurant, index) => (
    <TouchableOpacity activeOpacity={1}   key={index} style={{ marginBottom: 30 }} 
    onPress={()=> navigation.navigate('RestaurantDetails',{
      name:restaurant.name,
      image: restaurant.image_url,
      price: restaurant.price,
      reviews: restaurant.review_count,
      rating: restaurant.rating,
      categories: restaurant.categories,
    })}
    >
    
        <View 
      
        style={{ marginTop: 10, padding: 15, backgroundColor: "white" ,shadowColor:"blue"}}>
          <RestaurantImage image={restaurant.image_url} />
          <RestaurantInfo name={restaurant.name} rating={restaurant.rating}/>
        </View>
    </TouchableOpacity>
       ))}
    </>
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
      <MaterialCommunityIcons name="heart-outline" size={25} color={"#F7AC30"} />
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
        backgroundColor: "#F7AC30",
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
