import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { images } from '../../constants'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
const signIn = () => {

  const [form, setForm] = useState({
    email: '', 
    password: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {

  }


  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[83vh] px-4 my-4 " >
          <Image 
            source={images.logo}
            resizeMode='contain'
            className="w-[115px] h-[35px]" 
          />
          
          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
            Sign in to Aora
          </Text>
          <FormField 
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e})}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField 
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e})}
            otherStyles="mt-7"
          />

          <CustomButton 
            title="Sign In"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}

          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Don’t have an account?
            </Text>
            <Link href="/sign-up" className="text-lg text-secondary font-semibold">Signup</Link>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default signIn


// 1:18:18
// 1:34:00

// Goal: 4:00:00