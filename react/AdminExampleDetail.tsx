import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { Layout, PageBlock, PageHeader } from 'vtex.styleguide'

import './styles.global.css'

const AdminExampleDetail: FC = () => {
  return <Layout
      pageHeader={
        <PageHeader
          title={<FormattedMessage id="admin-example.hello-world" />}
        />
      }
    >
      <PageBlock variation="full">
        <FormattedMessage id="admin-example.hello-world" />
      </PageBlock>
  </Layout>
}

export default AdminExampleDetail
