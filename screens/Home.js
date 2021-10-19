import React, { useEffect } from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import BottomTab from '../components/home/BottomTab'
import Categories from '../components/home/Categories'
import HeaderTabs from '../components/home/HeaderTabs'
import RestaurantItems, { localRestaurants } from '../components/home/RestaurantItems'

import SearchBar from '../components/home/SearchBar'

const YELP_API_KEY = "sKk2K9uvdDZd2PaVxj-Wa7DTOTkwm9dXA9kBCkM06X-SzVvCnU-97YGgcFzg4dh9sNcea_Yhw8su9Ct-5gGGemYwsu_Zt2mrN7ROGJqi5tsJwfmBYfH-K1Ip-TJoYXYx"

export default function Home({navigation}) {
   
    
    const [hotelData,sethotelData] = React.useState(localRestaurants)


    const gethotelfromyelp = () =>{

        const yelp_url ="https://api.yelp.com/v3/businesses/search?term=restaurant&location=Hollywood"
     
    

    const apiOptions ={
        headers :{
            Authorization : `Bearer ${YELP_API_KEY}`,
        
    },
    }
    return fetch(yelp_url,apiOptions)
    .then((res) => res.json())
    .then((json) => sethotelData(json.businesses))
}


useEffect(()=>{
    gethotelfromyelp()
},[])

    return (
        <SafeAreaView style={{
            backgroundColor: '#eee',
            flex: 1
        }}>
        <View style={{
        
            backgroundColor : '#edd6e6',
            borderRadius:20,
            padding: 15 

        }}>
        <HeaderTabs/>
        <SearchBar/>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} >
        <Categories/>
        <RestaurantItems hotelData = {hotelData} navigation={navigation} />
        </ScrollView>
        <Divider width={ 1} />
        <View style={{backgroundColor:"#edd6e6"}}>
        <BottomTab/>
       </View>
        </SafeAreaView>
    )
}

