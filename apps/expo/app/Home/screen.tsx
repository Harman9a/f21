import {
  Anchor,
  Button,
  H1,
  Input,
  Paragraph,
  Separator,
  Sheet,
  SizeTokens,
  Text,
  TextArea,
  useToastController,
  XStack,
  YStack,
} from '@my/ui'
import { ChevronDown, ChevronUp, Search } from '@tamagui/lucide-icons'
import { useState } from 'react'
import { useLink } from 'solito/link'

export function HomeScreen() {
  const linkProps = useLink({
    href: '/user/nate',
  })

  return (
    // <YStack f={1} jc="center" ai="center" p="$4" space>
    //   <YStack space="$4" bc="$background">
    //     <H1 ta="center">Welcome to Tamagui.</H1>
    //     <Paragraph ta="center">
    //       Here's a basic starter to show navigating from one screen to another. This screen uses the
    //       same code on Next.js and React Native.
    //     </Paragraph>

    //     <Separator />
    //     <Paragraph ta="center">
    //       Made by{' '}
    //       <Anchor color="$color12" href="https://twitter.com/natebirdman" target="_blank">
    //         @natebirdman
    //       </Anchor>
    //       ,{' '}
    //       <Anchor
    //         color="$color12"
    //         href="https://github.com/tamagui/tamagui"
    //         target="_blank"
    //         rel="noreferrer"
    //       >
    //         give it a ⭐️
    //       </Anchor>
    //     </Paragraph>
    //   </YStack>
    // </YStack>
    <YStack>
      <YStack padding={10}>
        <Input size="$5" placeholder="Search Item" />
      </YStack>
      <YStack
        style={{
          height: 50,
          padding: 12,
          backgroundColor: 'black',
        }}
      >
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
          }}
        >
          Buy Now Pay leter with Tabby
        </Text>
      </YStack>
    </YStack>
  )
}
