import { Stack } from 'expo-router'
import { HomeScreen } from './Home/screen'
import { Heart, Menu, ShoppingCart } from '@tamagui/lucide-icons'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Froever 21',
          headerRight: () => (
            <>
              <Heart margin={10} />
              <ShoppingCart />
            </>
          ),
          headerLeft: () => <Menu margin={8} />,
        }}
      />

      <HomeScreen />
    </>
  )
}
