import React, { useEffect, useState } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import {
  Box,
  Button,
  Flex,
  IconAction,
  IconEdit,
  IconPreview,
  IconSales,
  Menu,
  Set,
  StatefulTable,
  Text,
  useSystem,
} from '@vtex/admin-ui'
import { Link } from 'vtex.render-runtime'

import { Thumbnail } from '../Thumbnail'
import { messages } from '../../i18n/messages'
import { Item, items } from '../../utils/data'

export function Table() {
  const { formatMessage } = useIntl()
  const { cn } = useSystem()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 800)
  }, [])

  return (
    <StatefulTable
      csx={{
        minWidth: 'calc(100vw - 2rem)',
        "div[role='row'] div[role='cell']:nth-child(1)": {
          width: 80,
          textAlign: 'center',
          paddingLeft: 16,
        },
      }}
      items={items}
      loading={loading}
      columns={[
        {
          id: 'imageUrl',
          header: function ProductHeader() {
            return (
              <Text csx={{ color: 'dark.secondary', paddingLeft: 2 }}>
                {formatMessage(messages.tableTitle)}
              </Text>
            )
          },
          resolver: {
            type: 'plain',
            render: function ImageCell({ item }) {
              return (
                <Box>
                  <Link
                    page="admin.app.example-detail"
                    params={{ id: item.id }}
                  >
                    <Thumbnail src={item.imageUrl} />
                  </Link>
                </Box>
              )
            },
          },
        },
        {
          id: 'name',
          resolver: {
            type: 'plain',
            render: function NameCell({ item }) {
              return (
                <Box
                  onClick={(e: React.MouseEvent) => {
                    e.stopPropagation()
                    e.nativeEvent.stopImmediatePropagation()
                  }}
                >
                  <Link
                    page="admin.app.example-detail"
                    params={{ id: item.id }}
                    className={cn({ textDecoration: 'none !important' })}
                  >
                    <Set orientation="vertical">
                      <Text csx={{ fontVariationSettings: 'medium' }}>
                        {item.name}
                      </Text>
                      <Text
                        csx={{ color: 'dark.secondary' }}
                      >{`ID ${item.id}`}</Text>
                    </Set>
                  </Link>
                </Box>
              )
            },
          },
        },
        {
          id: 'id',
          resolver: {
            type: 'plain',
            render: function ActionMenuRender({ item }) {
              return <ActionMenu item={(item as unknown) as Item} />
            },
          },
        },
      ]}
    />
  )
}

const ActionMenu = ({ item }: { item: Item }) => {
  const { formatMessage } = useIntl()

  return (
    <Flex justify="flex-end">
      <Menu
        hideOnClick
        aria-label={formatMessage(messages.someAction)}
        disclosure={
          <Button variant="tertiary" size="small" csx={{ padding: 1 }}>
            <IconAction csx={{ margin: 0 }} />
          </Button>
        }
      >
        <Menu.Item key={`edit-item-${item.id}`} icon={<IconEdit />}>
          <FormattedMessage {...messages.someAction} />
        </Menu.Item>
        <Menu.Item key={`edit-price-${item.id}`} icon={<IconSales />}>
          <FormattedMessage {...messages.someAction} />
        </Menu.Item>

        <Menu.Item
          key={`toogle-product-status-item-${item.id}`}
          icon={<IconPreview />}
        >
          <FormattedMessage {...messages.someAction} />
        </Menu.Item>
      </Menu>
    </Flex>
  )
}
