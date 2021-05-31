import React from 'react'
import { Flex, useSystem } from '@vtex/admin-ui'

export function Thumbnail(props: ThumbnailProps) {
  const { src } = props
  const { cn } = useSystem()

  return (
    <Flex
      justify="center"
      csx={{
        border: '1px solid',
        borderColor: 'mid.tertiary',
        borderRadius: 4,
      }}
    >
      <img className={cn({ objectFit: 'contain' })} src={src} />
    </Flex>
  )
}

interface ThumbnailProps {
  src: string
}
