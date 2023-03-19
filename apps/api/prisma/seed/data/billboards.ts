import { PrismaClient } from '@prisma/client'
import { CreateBillboardStatusInput } from 'src/models/billboard-statuses/dto/create-billboard-status.input'

import { faker } from '@faker-js/faker'

import { random } from '../functions/util'
import {
  BillboardStatusType,
  BillboardType,
  CreateBillboardInput,
  CreateCampaignInput,
  CreateFavoriteInput,
} from '../generated/graphql'
import { advertisers, agents, owners } from './user'

export const billboards: CreateBillboardInput[] = [
  {
    type: BillboardType.Classic,
    ownerId: owners[0].uid,
    lat: 13.0827,
    lng: 80.2707,
    height: 10,
    width: 20,
    impressionsPerDay: 500,
    minBookingDays: 7,
    address: '123 Main St',
    images: [
      'https://via.placeholder.com/500',
      'https://via.placeholder.com/500',
    ],
    angle: 30,
    elevation: 30,
  },
  {
    type: BillboardType.Vinyl,
    ownerId: owners[1].uid,
    lat: 13.0473,
    lng: 80.2209,
    height: 15,
    width: 30,
    impressionsPerDay: 1000,
    minBookingDays: 14,
    address: '456 Elm St',
    images: [
      'https://via.placeholder.com/500',
      'https://via.placeholder.com/500',
    ],
    angle: 45,
    elevation: 50,
  },
  // Repeat the above format to create 8 more billboards
  // ...
]

export const getFavourites = async (): Promise<CreateFavoriteInput[]> => {
  const prisma = new PrismaClient()
  const billboards = await prisma.billboard.findMany()
  return [
    {
      advertiserId: advertisers[0].uid,
      billboardId: random(billboards).id,
    },
    {
      advertiserId: advertisers[1].uid,
      billboardId: random(billboards).id,
    },
  ]
}

export const getBillboardStatus = async (): Promise<
  CreateBillboardStatusInput[]
> => {
  const prisma = new PrismaClient()
  const billboards = await prisma.billboard.findMany()
  return billboards.map((billboard) => ({
    agentId: random(agents).uid,
    billboardId: billboard.id,
    status: BillboardStatusType.Approved,
    notes: faker.random.words(6),
  }))
}

export const getCampaigns = async (): Promise<CreateCampaignInput[]> => {
  const prisma = new PrismaClient()
  const billboards = await prisma.billboard.findMany()

  return advertisers.map((advertiser) => {
    const startDate = faker.date.between(new Date(), new Date('2030-12-31'))
    const endDate = faker.date.between(startDate, new Date('2030-12-31'))

    return {
      advertiserId: advertiser.uid,
      name: faker.random.words(6),
      startDate,
      endDate,
      bookings: [
        {
          billboardId: billboards[0].id,
          pricePerDay: billboards[0].pricePerDay,
        },
        {
          billboardId: billboards[1].id,
          pricePerDay: billboards[1].pricePerDay,
        },
      ],
    }
  })
}
