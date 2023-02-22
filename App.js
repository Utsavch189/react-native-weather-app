import React, { useEffect,createContext,useState } from 'react';
import { View,SafeAreaView, Dimensions } from 'react-native';

import Lower from './component/Lower';
import Upper from './component/Upper';
import useLocation from './customHooks/useLocation';

export const Context = createContext();

const API_KEY='3ef770c5bde684b66dbc2a7537492d9c'
const PART='minutely,daily,current,alerts'

export default function App() {

   const location =useLocation();
   const [context,setContext]=useState(null);
   
    useEffect(()=>{
      if(location){
        setContext({
          'height':Dimensions.get('window').height,
          "currentweatherApi":`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${API_KEY}`,
          "forecastweatherApi":`https://api.openweathermap.org/data/2.5/onecall?units=metric&lat=${location.coords.latitude}&lon=${location.coords.longitude}&exclude=${PART}&appid=${API_KEY}`
        })
      }
    },[location])
   

  return (
  <SafeAreaView  className="flex-1 relative bg-white">

      <Context.Provider value={context && context}>
        <View className='h-full'>
          <Upper/>
          <Lower/>
        </View>
      </Context.Provider>

  </SafeAreaView>

   
  );
}
