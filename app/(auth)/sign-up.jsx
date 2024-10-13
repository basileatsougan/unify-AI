import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { images } from '../../constants'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';

import { createUser } from '../../lib/appwrite';

const signUp = () => {
  const [form, setForm] = useState({
    username: '',
    email: '', 
    password: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {
    
    createUser();
  }


  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full min-h-[8vh] px-4 my-4">
          <Image 
            source={images.logo}
            resizeMode='contain'
            className="w-[115px] h-[35px] mt-5" 
          />
          
          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
            Sign Up to Aora
          </Text>
          <FormField 
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e})}
            otherStyles="mt-10"
          />
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
            title="Sign Up"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}

          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
            Already have an account?
            </Text>
            <Link href="/sign-in" className="text-lg text-secondary font-semibold">Sign in</Link>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default signUp