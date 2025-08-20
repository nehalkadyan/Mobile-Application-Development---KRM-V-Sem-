import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const Search = () => {

  const data = useLocalSearchParams()

  return (
    <View>
      <Text>Search</Text>
      <Text>{data.location}</Text>
    </View>
  )
}

export default Search