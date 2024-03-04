import { Stack } from 'expo-router'
import { DetailScreen } from '../Details/screen'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'User',
        }}
      />
      <DetailScreen />
    </>
  )
}
