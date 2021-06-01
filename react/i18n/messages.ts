import { defineMessages } from 'react-intl'

/**
 * The messages defined on the `messages` folder from
 * the root level should be defined by the `defineMessages`.
 * This way, they're translated according to the language
 * set on the context layer.
 */
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
