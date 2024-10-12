import { View, Text } from 'react-native'
import React from 'react'

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
  return (
    <View className={`space-y-2 ${otherStyles}`} >
      <Text className="text-base text-gray-100 font-pmedium" >{title}</Text>
    
      <View >

      </View>
    </View>
  )
}

export default FormField;

// 1:18:18 