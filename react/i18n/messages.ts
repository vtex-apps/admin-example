import { defineMessages } from 'react-intl'

export const messages = {
  ...defineMessages({
    title: { id: 'admin-example.title' },
    tableTitle: { id: 'admin-example.table-label' },
    someAction: { id: 'admin-example.some-action' },
  }),
  navigation: defineMessages({
    appLabel: { id: 'admin-example.navigation.app-label' },
  }),
}
