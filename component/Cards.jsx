import React from 'react'
import { View,Text,Image } from 'react-native'

const Cards = ({data}) => {

  function format_time(s) {
    return new Date(s * 1e3).toLocaleString().slice(-13, -5);
  }

  return (
    <View className='w-20 h-28 flex flex-col justify-between items-center'>
        <Image source={data&&{uri:"http://openweathermap.org/img/w/" + data['weather'][0]['icon'] + ".png"}} className='h-10 w-16'/>
        <Text className='text-xs font-semibold'>{format_time(data['dt'])}</Text>
        <Text className='text-base font-semibold'>{data&&(data['temp'])}{'\u00b0'} C</Text>
    </View>
    
  )
}

export default Cards