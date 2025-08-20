import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const Profile = () => {

  const {universityName} = useLocalSearchParams()

  return (
    <View>
      <Text>Profile</Text>
      <Text>{universityName}</Text>
    </View>
  )
}

export default Profile