import { gql } from 'graphql-request'

export const CreateAgent = gql`
  mutation CreateAgent($createAgentInput: CreateAgentInput!) {
    createAgent(createAgentInput: $createAgentInput) {
      uid
    }
  }
`
