import { View, Text } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router';
import { icons } from '../../constants'

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View>
      <Image 
        source={icon}
        resizeMode="contain"
        tinColor={color}
        className="w-6 h-6"
      />
    </View>
  )
}


const TabsLayout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen 
          name="home"
          option={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon 
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}

              />

            )
          }}

        />
      </Tabs>
    </>
  )
}

export default TabsLayout


// 47:32