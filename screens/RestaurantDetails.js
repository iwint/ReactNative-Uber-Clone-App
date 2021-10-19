import React from 'react'
import { View, Text ,ScrollView} from 'react-native'
import { Divider } from 'react-native-elements'
import About from '../components/restaurantDetails/about'
import MenuItems from '../components/restaurantDetails/MenuItems'


export default function RestaurantDetails({route}) {
    return (
        <View>
            <About route={route}/>
            <Divider width={1.8} style={{marginVertical:20}} />
            
            <MenuItems/>
        
            
        </View>
    )
}
