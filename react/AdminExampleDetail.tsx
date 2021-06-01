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
  /**
   * It's worth taking a look at the `render-runtime`,
   * which contains the layer which the Admin runs on top
   * of. It provides many useful tools for the Admin, such
   * as navigation - the `navigate` method below -, the current
   * route - the `route` object below -, among others.
   *
   * vtex.render-runtime: https://github.com/vtex-apps/render-runtime
   */
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

/**
 * Note how this component is default exported.
 * This is a MUST for it to be available for the
 * builders.
 */
export default AdminExampleDetail
