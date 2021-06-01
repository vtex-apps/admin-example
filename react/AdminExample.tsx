import React from 'react'
import { Button, Flex, ThemeProvider, toast } from '@vtex/admin-ui'
import { useIntl } from 'react-intl'

import { Table } from './components/Table'
import { system } from './system'
import { PageHeader } from './components/PageHeader'
import { messages } from './i18n/messages'

function AdminExample() {
  const { formatMessage } = useIntl()

  return (
    <ThemeProvider system={system}>
      <PageHeader>
        <PageHeader.Title label={formatMessage(messages.title)} />
        <PageHeader.ActionItems>
          <Button
            onClick={() => {
              toast.dispatch({
                message: formatMessage(messages.someAction),
                type: 'success',
              })
            }}
          >
            {formatMessage(messages.someAction)}
          </Button>
        </PageHeader.ActionItems>
      </PageHeader>
      <Flex csx={{ padding: 4 }} grow={1}>
        <Table />
      </Flex>
    </ThemeProvider>
  )
}

/**
 * Note how this component is default exported.
 * This is a MUST for it to be available for the
 * builders.
 */
export default AdminExample
