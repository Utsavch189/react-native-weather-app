import React,{useEffect,useState,useContext} from 'react'
import { View ,Text} from 'react-native'
import Cards from './Cards'
import { Context } from '../App';
import axios from 'axios';


const Lower = () => {

  const data=useContext(Context);
 
  const[forecast,setForecast]=useState([])

  useEffect(()=>{
    if(data){
     axios.get(data.forecastweatherApi)
     .then(data=>{
  
       setForecast([data.data['hourly'][1],data.data['hourly'][2],data.data['hourly'][3],data.data['hourly'][4]])
     })
    }
   },[data])


  return (
    
    <View className='w-full h-[260px] absolute bottom-0 shadow-inner bg-white/60 b px-5 rounded-t-3xl py-2 flex flex-col items-center  backdrop-brightness-60' >
        <Text className='text-slate-900 font-semibold text-xl'>Forecast</Text>

        <View className='w-[98%] h-20 mt-16 flex flex-row justify-between'>
            {forecast.map((v,i)=>
              <Cards key={i} data={v}/>
            )}
        </View>
    </View>
   
  )
}

export default Lower