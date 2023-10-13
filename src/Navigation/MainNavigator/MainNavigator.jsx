
import React,{useState,useEffect} from 'react'
import AuthStackNavigator from '../Authentication/AuthStackNavigation'
import BottomTabNavigator from '../Bottom/BottomTabNavigator'
import { useSelector, useDispatch } from 'react-redux'
import { useGetProfileImageQuery } from '../../services/medicApi'
import { setCameraImage } from '../../features/Auth/authSlice'

const MainNavigator = () => {
   const { user, localId } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const { data, error, isLoading } = useGetProfileImageQuery(localId)

  useEffect(() => {
   console.log( data)
   if (data) {
     dispatch(setCameraImage(data.image))
   }
 }, [data])


  
   return user ? <BottomTabNavigator/> : <AuthStackNavigator/>
  
}

export default MainNavigator

