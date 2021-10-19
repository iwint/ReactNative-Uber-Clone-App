import React from 'react'
import { View, Text,Image } from 'react-native'

const yelpRestaurantInfo ={

 image :"https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg",
 name : "Farmhouse Kitchen Thai Cuisine",
 rating: 4.5,
 categories:[{title:"Thai"},{title:"Comfort Food"}],
 price:"$$",
 reviews:"1500"
 
 
}



export default function about(props) {
    const {name,image,price,reviews,rating,categories} = 
    props.route.params

const formmatedCategories = categories.map((cat)=>cat.title).join(".")

const description = `${formmatedCategories} ${ price ?  ' . ' + price : "" } ${rating}. (${reviews}+)`

    return (
        <View>
            <RestaurantImage image={image} />
            <RestaurantName name={name}/>
            <RestaurantDescription description={description}/>
        </View>
    )
}
const RestaurantImage  =(props)=> (
    <Image source={{ uri: props.image }} 
    style={{
         width:"100%",
         height:180,
        }}/>
)

const RestaurantName = (props) => 
    <Text style={{
     fontSize:29,
     fontWeight:"600",
     marginTop:10,
     marginHorizontal:15
    }}>{props.name}
    </Text>


const RestaurantDescription = (props) =>
    <Text style={{
        marginHorizontal:15,
        marginTop:10,
        fontWeight:"400",
        fontSize:15.5
    }}>{props.description}</Text>
