/** INTEGRANTES
 * Cauê Gomes Prieto
 * Murillo Batista Maquiné
 * Yago Matheus Santos Lima
 */

import { colors } from '@/styles/colors'
import { Tabs } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Home, Library, Search } from 'lucide-react-native'
import { View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

export default function TabsLayoutCMY() {
  return (
    <>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: true,
          tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: '500',
            marginTop: 4,
          },
          tabBarStyle: {
            backgroundColor: 'rgba(18, 18, 18, 0.95)',
            borderTopWidth: 0,
            paddingVertical: 8,
            height: 70,
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            elevation: 20,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: -2 },
            shadowOpacity: 0.25,
            shadowRadius: 10,
          },
          tabBarBackground: () => (
            <LinearGradient
              colors={['rgba(18, 18, 18, 0.9)', 'rgba(33, 33, 33, 0.95)']}
              style={{ flex: 1 }}
            />
          ),
          tabBarActiveTintColor: colors.green,
          tabBarInactiveTintColor: colors.gray[600],
          sceneStyle: {
            backgroundColor: colors.gray[900],
          },
          animation: 'shift',
        }}
      >
        <Tabs.Screen
          name="home/index"
          options={{
            title: 'Início',
            tabBarIcon: ({ color, size, focused }) => (
              <View
                style={{
                  padding: 4,
                  borderRadius: 20,
                  backgroundColor: focused
                    ? 'rgba(29, 185, 84, 0.1)'
                    : 'transparent',
                }}
              >
                <Home color={color} size={size} />
              </View>
            ),
          }}
        />

        <Tabs.Screen
          name="search"
          options={{
            title: 'Buscar',
            tabBarIcon: ({ color, size, focused }) => (
              <View
                style={{
                  padding: 4,
                  borderRadius: 20,
                  backgroundColor: focused
                    ? 'rgba(29, 185, 84, 0.1)'
                    : 'transparent',
                }}
              >
                <Search color={color} size={size} />
              </View>
            ),
          }}
        />

        <Tabs.Screen
          name="library"
          options={{
            title: 'Sua Biblioteca',
            tabBarIcon: ({ color, size, focused }) => (
              <View
                style={{
                  padding: 4,
                  borderRadius: 20,
                  backgroundColor: focused
                    ? 'rgba(29, 185, 84, 0.1)'
                    : 'transparent',
                }}
              >
                <Library color={color} size={size} />
              </View>
            ),
          }}
        />
      </Tabs>
    </>
  )
}
