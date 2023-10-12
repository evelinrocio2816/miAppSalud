
import React,{useState} from 'react'
import AuthStackNavigator from '../Authentication/AuthStackNavigation'
import BottomTabNavigator from '../Bottom/BottomTabNavigator'
import { useSelector } from 'react-redux'

const MainNavigator = () => {
   // const [user , setUser]=useState(null)
  const user= useSelector(state=> state.auth.user)
  
   return user ? <BottomTabNavigator/> : <AuthStackNavigator/>
  
}

export default MainNavigator

