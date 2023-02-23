import React,{useContext, useEffect, useState} from 'react'
import { ImageBackground, View,Text,Image } from 'react-native'
import useMyImage from '../customHooks/useMyImage';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Context } from '../App';
import axios from 'axios';


const Upper = () => {

    const image=useMyImage();
    const data=useContext(Context);

    const[res,setRes]=useState(null)

    const date=new Date()


    useEffect(()=>{
     if(data){
      axios.get(data.currentweatherApi)
      .then(data=>{
        setRes(data.data)
      })
     }
    },[data])
    

  return (
      <ImageBackground source={image} className="bg-center bg-no-repeat bg-cover h-[100%] w-full object-contain flex flex-col items-center ">
        <View className="w-[80%] h-28 mt-9 flex flex-row justify-between items-center ">

            <View className="space-y-2">
              <View className="flex flex-row space-x-2">
                
                <Icon name='location-arrow' color='white' size={28} className='text-base text-white'/>
                <Text className="text-white font-semibold text-xl">{res&&res['name']}</Text>
              </View>
              <Text className="text-white font-semibold text-xs">{date&&date.toDateString()}</Text>
            </View>

            <View className="space-y-2 flex flex-col justify-center items-center">
              <Image source={res&&{uri:"http://openweathermap.org/img/w/" + res['weather'][0]['icon'] + ".png"}} className='h-10 w-20'/>
              <Text className="text-white font-semibold text-xs">{res&&res['weather'][0]['description'].toUpperCase()}</Text>
            </View>
        </View>
        <View className="w-52 h-36 self-start ml-10 mt-2 flex flex-col">
          <Text className="font-semibold text-white text-7xl ">{res&&Math.round(res['main']['temp'])}{'\u00b0'} C</Text>
        </View>
      </ImageBackground>
  )
}

export default Upper