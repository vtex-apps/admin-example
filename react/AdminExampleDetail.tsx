import React from 'react'
import { Flex, ThemeProvider } from '@vtex/admin-ui'
import { useIntl } from 'react-intl'
import { useRuntime } from 'vtex.render-runtime'

import { PageHeader } from './components/PageHeader'
import { messages } from './i18n/messages'
import { system } from './system'
import { items } from './utils/data'

function AdminExampleDetail() {
  const { formatMessage } = useIntl()
  const { navigate, route } = useRuntime()
  const item = items[Number(route.path.replace('/admin/app/example/', ''))]

  return (
    <ThemeProvider system={system}>
      <PageHeader>
        <PageHeader.Title
          label={formatMessage(messages.title)}
          onBack={() => navigate({ page: 'admin.app.example' })}
        />
      </PageHeader>
      <Flex csx={{ padding: 4 }} grow={1} direction="column">
        <img
          src={item.imageUrl}
          style={{
            height: 400,
            width: 400,
          }}
        />
        {item.name}
      </Flex>
    </ThemeProvider>
  )
}

export default AdminExampleDetail
