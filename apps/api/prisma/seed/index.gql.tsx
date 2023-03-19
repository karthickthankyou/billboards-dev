import { gql } from 'graphql-request'

export const CreateAgent = gql`
  mutation CreateAgent($createAgentInput: CreateAgentInput!) {
    createAgent(createAgentInput: $createAgentInput) {
      uid
    }
  }
`

export const CreateOwner = gql`
  mutation CreateOwner($createOwnerInput: CreateOwnerInput!) {
    createOwner(createOwnerInput: $createOwnerInput) {
      uid
    }
  }
`

export const CreateAdvertiser = gql`
  mutation CreateAdvertiser($createAdvertiserInput: CreateAdvertiserInput!) {
    createAdvertiser(createAdvertiserInput: $createAdvertiserInput) {
      uid
    }
  }
`
export const CreateBillboard = gql`
  mutation CreateBillboard($createBillboardInput: CreateBillboardInput!) {
    createBillboard(createBillboardInput: $createBillboardInput) {
      id
    }
  }
`
export const CreateFavorite = gql`
  mutation CreateFavorite($createFavoriteInput: CreateFavoriteInput!) {
    createFavorite(createFavoriteInput: $createFavoriteInput) {
      advertiserId
      billboardId
    }
  }
`
export const CreateBillboardStatus = gql`
  mutation CreateBillboardStatus(
    $createBillboardStatusInput: CreateBillboardStatusInput!
  ) {
    createBillboardStatus(
      createBillboardStatusInput: $createBillboardStatusInput
    ) {
      agentId
      billboardId
    }
  }
`
export const CreateCampaign = gql`
  mutation CreateCampaign($createCampaignInput: CreateCampaignInput!) {
    createCampaign(createCampaignInput: $createCampaignInput) {
      id
    }
  }
`

export const CreateCampaignStatus = gql`
  mutation CreateCampaignStatus(
    $createCampaignStatusInput: CreateCampaignStatusInput!
  ) {
    createCampaignStatus(
      createCampaignStatusInput: $createCampaignStatusInput
    ) {
      agentId
      campaignId
    }
  }
`
