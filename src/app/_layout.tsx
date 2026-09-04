/** INTEGRANTES
 * Cauê Gomes Prieto
 * Murillo Batista Maquiné
 * Yago Matheus Santos Lima
 */

import * as NavigationBar from 'expo-navigation-bar'

import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
} from '@expo-google-fonts/montserrat'

import { colors } from '@/styles/colors'
import { Stack } from 'expo-router'
import { useEffect } from 'react'
import { Platform, StatusBar, View } from 'react-native'
import { Loading } from '@/components/loading'

export default function LayoutCMY() {
  useEffect(() => {
    if (Platform.OS === 'android') {
      NavigationBar.setStyle('dark')
      NavigationBar.setVisibilityAsync('hidden')
    }
  }, [])

  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
  })
  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.gray[900],
      }}
    >
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.gray[900] },
        }}
      >
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="settings" />
        <Stack.Screen name="profile" />
      </Stack>
    </View>
  )
}
