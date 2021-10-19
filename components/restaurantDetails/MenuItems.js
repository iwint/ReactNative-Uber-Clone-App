import React from 'react'
import { ScrollView } from 'react-native'
import { View, Text, StyleSheet } from 'react-native'
import { Divider } from 'react-native-elements'
import { Image } from 'react-native-elements/dist/image/Image'


const foods =[
    {
        title:'Chicken Chilli',
        price:'$14.50',
        image:'https://media.istockphoto.com/photos/baked-chicken-wings-with-sesame-seeds-and-sweet-chili-sauce-on-white-picture-id835903320?b=1&k=20&m=835903320&s=170667a&w=0&h=r3X2_ncc9zVTxjm3Xbc0HBzHJqKckbZSBR3YKiXRzXU=',
        description:'Spicy Food With Butter Lemon Onion Mass sketch',
    },
    {
        title:'Chicken Chilli',
        price:'$14.50',
        image:'https://media.istockphoto.com/photos/baked-chicken-wings-with-sesame-seeds-and-sweet-chili-sauce-on-white-picture-id835903320?b=1&k=20&m=835903320&s=170667a&w=0&h=r3X2_ncc9zVTxjm3Xbc0HBzHJqKckbZSBR3YKiXRzXU=',
        description:'Spicy Food With Butter Lemon Onion Mass sketch',
    },
    {
        title:'Chicken Chilli',
        price:'$14.50',
        image:'https://media.istockphoto.com/photos/baked-chicken-wings-with-sesame-seeds-and-sweet-chili-sauce-on-white-picture-id835903320?b=1&k=20&m=835903320&s=170667a&w=0&h=r3X2_ncc9zVTxjm3Xbc0HBzHJqKckbZSBR3YKiXRzXU=',
        description:'Spicy Food With Butter Lemon Onion Mass sketch',
    },
    {
        title:'Chicken Chilli',
        price:'$14.50',
        image:'https://media.istockphoto.com/photos/baked-chicken-wings-with-sesame-seeds-and-sweet-chili-sauce-on-white-picture-id835903320?b=1&k=20&m=835903320&s=170667a&w=0&h=r3X2_ncc9zVTxjm3Xbc0HBzHJqKckbZSBR3YKiXRzXU=',
        description:'Spicy Food With Butter Lemon Onion Mass sketch',
    },
    {
        title:'Chicken Chilli',
        price:'$14.50',
        image:'https://media.istockphoto.com/photos/baked-chicken-wings-with-sesame-seeds-and-sweet-chili-sauce-on-white-picture-id835903320?b=1&k=20&m=835903320&s=170667a&w=0&h=r3X2_ncc9zVTxjm3Xbc0HBzHJqKckbZSBR3YKiXRzXU=',
        description:'Spicy Food With Butter Lemon Onion Mass sketch',
    },
  
]

const styles = StyleSheet.create({
    menuItemStyle :{
      flexDirection :'row',
      justifyContent:'space-between',
      margin:20,
     
    },

    titleStyle:{
        fontSize:19,
        fontWeight:"600"
    }
})


export default function MenuItems() {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        {foods.map((food,index) =>(
            <View key={index}>
        <View style={styles.menuItemStyle}>
            <FoodInfo foods={food}/>
            <FoodImage foods={food}/>
        </View>
        <Divider width={0.5} orientation={"vertical"}  style={{ marginHorizontal:20}}  />
        </View>
        ))}
      </ScrollView>
    )
}

const FoodInfo = (props)=>(
    <View style={{width:240, justifyContent:"space-evenly"}}>
        <Text style={styles.titleStyle} >{props.foods.title}</Text>
        <Text>{props.foods.description}</Text>
        <Text>{props.foods.price}</Text>
    </View>
    
)

const FoodImage =(props) =>(
    <View>
        <Image source={{uri : props.foods.image}} style={{width:100, height:100, borderRadius:8}}/>
    </View>
)


