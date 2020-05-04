import { ClientsConfig, IOClients, Service, ServiceContext } from '@vtex/api'

const TIMEOUT_MS = 800

const clients: ClientsConfig<IOClients> = {
  implementation: IOClients,
  options: {
    default: {
      retries: 2,
      timeout: TIMEOUT_MS,
    },
  },
}

declare global {
  type Context = ServiceContext<IOClients, State>

  interface State {
    code: number
  }
}

export default new Service<IOClients, State>({
  clients,
  graphql: {
    resolvers: {
      Query: {
        helloworld: () => 'VTEX Europe rocks!',
      },
    },
  },
})
