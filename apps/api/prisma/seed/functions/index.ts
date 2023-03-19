import { FirebaseService } from '../../../src/common/firebase/firebase.service'
import { getAuthHeader, setUserRoles } from '../auth'
import { gqlClient } from '../config'
import {
  billboards,
  getBillboardStatus,
  getCampaigns,
  getFavourites,
} from '../data/billboards'
import { agents, owners, advertisers } from '../data/user'
import {
  CreateAdvertiserDocument,
  CreateAgentDocument,
  CreateBillboardDocument,
  CreateBillboardStatusDocument,
  CreateCampaignDocument,
  CreateFavoriteDocument,
  CreateOwnerDocument,
} from '../generated/graphql'

export const createAgentDocuments = async () => {
  const firebaseService = new FirebaseService()
  await setUserRoles({ firebaseService, roles: ['agent'] })
  for (const { uid, name } of agents) {
    const { authorization } = await getAuthHeader(uid)

    const newUser = await gqlClient.request(
      CreateAgentDocument,
      {
        createAgentInput: { name, uid },
      },
      { authorization },
    )
  }
}

export const createOwnerDocuments = async () => {
  for (const { uid, name } of owners) {
    const { authorization } = await getAuthHeader(uid)

    const newUser = await gqlClient.request(
      CreateOwnerDocument,
      {
        createOwnerInput: { name, uid },
      },
      { authorization },
    )
  }
}

export const createAdvertiserDocuments = async () => {
  for (const { uid, name } of advertisers) {
    const { authorization } = await getAuthHeader(uid)

    const newUser = await gqlClient.request(
      CreateAdvertiserDocument,
      {
        createAdvertiserInput: { name, uid },
      },
      { authorization },
    )
  }
}

export const createBillboardDocuments = async () => {
  for (const billboard of billboards) {
    const { authorization } = await getAuthHeader(billboard.ownerId)

    const newBillboard = await gqlClient.request(
      CreateBillboardDocument,
      {
        createBillboardInput: billboard,
      },
      { authorization },
    )
  }
}

export const createFavoriteDocuments = async () => {
  const favorites = await getFavourites()
  for (const favorite of favorites) {
    const { authorization } = await getAuthHeader(favorite.advertiserId)

    const newBillboard = await gqlClient.request(
      CreateFavoriteDocument,
      {
        createFavoriteInput: favorite,
      },
      { authorization },
    )
  }
}

export const createBillboardStatusDocuments = async () => {
  const billboardStatuses = await getBillboardStatus()
  for (const billboardStatus of billboardStatuses) {
    const { authorization } = await getAuthHeader(billboardStatus.agentId)

    const newBillboard = await gqlClient.request(
      CreateBillboardStatusDocument,
      {
        createBillboardStatusInput: billboardStatus,
      },
      { authorization },
    )
  }
}

export const createCampaignDocuments = async () => {
  const campaigns = await getCampaigns()
  for (const campaign of campaigns) {
    const { authorization } = await getAuthHeader(campaign.advertiserId)

    const newCampaign = await gqlClient.request(
      CreateCampaignDocument,
      {
        createCampaignInput: campaign,
      },
      { authorization },
    )
  }
}
