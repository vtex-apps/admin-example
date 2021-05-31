import type { ReactNode } from 'react'
import React from 'react'
import { Box, Button, Flex, Heading, IconArrow } from '@vtex/admin-ui'
import Headroom from 'react-headroom'

function Title(props: TitleProps) {
  const { onBack, label } = props

  return (
    <Flex align="center" csx={{ minWidth: 0 }}>
      {typeof onBack === 'function' && (
        <Button
          csx={{ marginRight: 2 }}
          onClick={onBack}
          variant="adaptative-light"
          icon={<IconArrow direction="left" csx={{ color: 'blue' }} />}
        />
      )}
      <Heading
        csx={{
          fontSettings: 'medium',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
        }}
      >
        {label}
      </Heading>
    </Flex>
  )
}

function ActionItems(props: ActionItemProps) {
  const { children } = props

  if (Array.isArray(children)) {
    return (
      <Flex align="center" justify="flex-end">
        {children.map((element, index) => (
          <Box key={`page-header-action-item-${index}`} csx={{ marginLeft: 4 }}>
            {element}
          </Box>
        ))}
      </Flex>
    )
  }

  return <Flex align="center">{children}</Flex>
}

function _PageHeader(props: PageHeaderProps) {
  const { children } = props

  return (
    <Headroom downTolerance={20} style={{ zIndex: 2 }}>
      <Flex
        direction="row"
        justify="space-between"
        csx={{
          height: '5.5rem',
          borderBottom: '1px solid',
          borderColor: 'mid.tertiary',
          paddingX: 4,
          backgroundColor: 'light.primary',
        }}
      >
        {children}
      </Flex>
    </Headroom>
  )
}

_PageHeader.Title = Title
_PageHeader.ActionItems = ActionItems

export const PageHeader = _PageHeader

interface TitleProps {
  label: string | ReactNode
  onBack?: () => void
}

interface ActionItemProps {
  children: React.ReactNode | React.ReactNodeArray
}

interface PageHeaderProps {
  children: React.ReactNode
}
