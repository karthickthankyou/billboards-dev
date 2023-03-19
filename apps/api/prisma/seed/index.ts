import { PrismaClient } from '@prisma/client'
import {
  createAdvertiserDocuments,
  createAgentDocuments,
  createBillboardDocuments,
  createOwnerDocuments,
} from './functions'

const prisma = new PrismaClient()

const deleteAll = async () => {
  await prisma.favorite.deleteMany()
  await prisma.campaignStatus.deleteMany()
  await prisma.booking.deleteMany()
  await prisma.campaign.deleteMany()
  await prisma.billboardStatus.deleteMany()
  await prisma.billboard.deleteMany()

  //   Users
  await prisma.advertiser.deleteMany()
  await prisma.owner.deleteMany()
  await prisma.agent.deleteMany()
}

const main = async () => {
  await deleteAll()

  await createAgentDocuments()
  await createOwnerDocuments()
  await createAdvertiserDocuments()
  await createBillboardDocuments()
}

main()
