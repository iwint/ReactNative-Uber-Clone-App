import React, { useState } from 'react'

import { View, Text,  TouchableOpacity } from 'react-native'


 

export default function HeaderTabs() {
 
    const[ activeTab , setActiveTab ] = useState('Delivery')

    return (

        <View style={{flexDirection:"row", alignSelf:"center",marginTop:40 }}>
            <HeaderButton 
            text="Delivery" 
            btnColor="black" 
            textColor="white" 
            activeTab={activeTab} 
            setActiveTab={setActiveTab}
            />
            <HeaderButton 
            text="Pickup" 
            btnColor="white" 
            textColor="black" 
            activeTab={activeTab} 
            setActiveTab={setActiveTab}
            />
        </View>
    )
}

const HeaderButton=(props)=>(
<View>
    {<TouchableOpacity style={{
        backgroundColor: props.activeTab == props.text ? 'orange' : 'white',
        paddingVertical: 6,
        paddingHorizontal: 16 ,
        borderRadius: 30,
    }}
    onPress={()=>props.setActiveTab(props.text)}
    >
        
        { <Text style={{
            color:props.activeTab== props.text ?'white':'black'
            }}>
                {props.text}
                </Text> }
               
     </TouchableOpacity> }

</View>
)