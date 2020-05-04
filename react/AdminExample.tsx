import React, { FC } from 'react'
import { useQuery } from 'react-apollo'
import helloworld from './graphql/helloworld.gql'
import { Layout, PageBlock } from "vtex.styleguide"

const AdminExample: FC = () => {
  const { data } = useQuery(helloworld)

  if (data)
    return <Layout>
      <PageBlock variation="full">
        <h1>This is a backend message:</h1>
        <h1>{data.helloworld}</h1>
      </PageBlock>
    </Layout>
  else
    return null
}

export default AdminExample
