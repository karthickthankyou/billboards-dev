import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any
}

export type Advertiser = {
  __typename?: 'Advertiser'
  createdAt: Scalars['DateTime']
  name: Scalars['String']
  uid: Scalars['String']
  updatedAt: Scalars['DateTime']
}

export type AdvertiserOrderByWithRelationInput = {
  Favorite?: InputMaybe<FavoriteOrderByRelationAggregateInput>
  campaigns?: InputMaybe<CampaignOrderByRelationAggregateInput>
  createdAt?: InputMaybe<SortOrder>
  name?: InputMaybe<SortOrder>
  uid?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type AdvertiserRelationFilter = {
  is?: InputMaybe<AdvertiserWhereInput>
  isNot?: InputMaybe<AdvertiserWhereInput>
}

export enum AdvertiserScalarFieldEnum {
  CreatedAt = 'createdAt',
  Name = 'name',
  Uid = 'uid',
  UpdatedAt = 'updatedAt',
}

export type AdvertiserWhereInput = {
  AND?: InputMaybe<Array<AdvertiserWhereInput>>
  Favorite?: InputMaybe<FavoriteListRelationFilter>
  NOT?: InputMaybe<Array<AdvertiserWhereInput>>
  OR?: InputMaybe<Array<AdvertiserWhereInput>>
  campaigns?: InputMaybe<CampaignListRelationFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  name?: InputMaybe<StringFilter>
  uid?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type AdvertiserWhereUniqueInput = {
  uid?: InputMaybe<Scalars['String']>
}

export type Agent = {
  __typename?: 'Agent'
  createdAt: Scalars['DateTime']
  name: Scalars['String']
  uid: Scalars['String']
  updatedAt: Scalars['DateTime']
}

export type AgentOrderByWithRelationInput = {
  billboardsStatuses?: InputMaybe<BillboardStatusOrderByRelationAggregateInput>
  campaignsStatuses?: InputMaybe<CampaignStatusOrderByRelationAggregateInput>
  createdAt?: InputMaybe<SortOrder>
  name?: InputMaybe<SortOrder>
  uid?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type AgentRelationFilter = {
  is?: InputMaybe<AgentWhereInput>
  isNot?: InputMaybe<AgentWhereInput>
}

export enum AgentScalarFieldEnum {
  CreatedAt = 'createdAt',
  Name = 'name',
  Uid = 'uid',
  UpdatedAt = 'updatedAt',
}

export type AgentWhereInput = {
  AND?: InputMaybe<Array<AgentWhereInput>>
  NOT?: InputMaybe<Array<AgentWhereInput>>
  OR?: InputMaybe<Array<AgentWhereInput>>
  billboardsStatuses?: InputMaybe<BillboardStatusListRelationFilter>
  campaignsStatuses?: InputMaybe<CampaignStatusListRelationFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  name?: InputMaybe<StringFilter>
  uid?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type AgentWhereUniqueInput = {
  uid?: InputMaybe<Scalars['String']>
}

export type Billboard = {
  __typename?: 'Billboard'
  address: Scalars['String']
  angle: Scalars['Int']
  createdAt: Scalars['DateTime']
  elevation: Scalars['Int']
  height: Scalars['Int']
  id: Scalars['Int']
  images: Array<Scalars['String']>
  impressionsPerDay: Scalars['Int']
  lat: Scalars['Float']
  lng: Scalars['Float']
  minBookingDays: Scalars['Int']
  ownerId: Scalars['String']
  pricePerDay: Scalars['Int']
  type: BillboardType
  updatedAt: Scalars['DateTime']
  width: Scalars['Int']
}

export type BillboardListRelationFilter = {
  every?: InputMaybe<BillboardWhereInput>
  none?: InputMaybe<BillboardWhereInput>
  some?: InputMaybe<BillboardWhereInput>
}

export type BillboardOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type BillboardOrderByWithRelationInput = {
  address?: InputMaybe<SortOrder>
  angle?: InputMaybe<SortOrder>
  bookings?: InputMaybe<BookingOrderByRelationAggregateInput>
  createdAt?: InputMaybe<SortOrder>
  elevation?: InputMaybe<SortOrder>
  favorites?: InputMaybe<FavoriteOrderByRelationAggregateInput>
  height?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  images?: InputMaybe<SortOrder>
  impressionsPerDay?: InputMaybe<SortOrder>
  lat?: InputMaybe<SortOrder>
  lng?: InputMaybe<SortOrder>
  minBookingDays?: InputMaybe<SortOrder>
  owner?: InputMaybe<OwnerOrderByWithRelationInput>
  ownerId?: InputMaybe<SortOrder>
  pricePerDay?: InputMaybe<SortOrder>
  status?: InputMaybe<BillboardStatusOrderByWithRelationInput>
  type?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
  width?: InputMaybe<SortOrder>
}

export type BillboardRelationFilter = {
  is?: InputMaybe<BillboardWhereInput>
  isNot?: InputMaybe<BillboardWhereInput>
}

export enum BillboardScalarFieldEnum {
  Address = 'address',
  Angle = 'angle',
  CreatedAt = 'createdAt',
  Elevation = 'elevation',
  Height = 'height',
  Id = 'id',
  Images = 'images',
  ImpressionsPerDay = 'impressionsPerDay',
  Lat = 'lat',
  Lng = 'lng',
  MinBookingDays = 'minBookingDays',
  OwnerId = 'ownerId',
  PricePerDay = 'pricePerDay',
  Type = 'type',
  UpdatedAt = 'updatedAt',
  Width = 'width',
}

export type BillboardStatus = {
  __typename?: 'BillboardStatus'
  agentId: Scalars['String']
  billboardId: Scalars['Int']
  createdAt: Scalars['DateTime']
  notes: Scalars['String']
  status: BillboardStatusType
  updatedAt: Scalars['DateTime']
}

export type BillboardStatusListRelationFilter = {
  every?: InputMaybe<BillboardStatusWhereInput>
  none?: InputMaybe<BillboardStatusWhereInput>
  some?: InputMaybe<BillboardStatusWhereInput>
}

export type BillboardStatusOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type BillboardStatusOrderByWithRelationInput = {
  agent?: InputMaybe<AgentOrderByWithRelationInput>
  agentId?: InputMaybe<SortOrder>
  billboard?: InputMaybe<BillboardOrderByWithRelationInput>
  billboardId?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  notes?: InputMaybe<SortOrder>
  status?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type BillboardStatusRelationFilter = {
  is?: InputMaybe<BillboardStatusWhereInput>
  isNot?: InputMaybe<BillboardStatusWhereInput>
}

export enum BillboardStatusScalarFieldEnum {
  AgentId = 'agentId',
  BillboardId = 'billboardId',
  CreatedAt = 'createdAt',
  Notes = 'notes',
  Status = 'status',
  UpdatedAt = 'updatedAt',
}

export enum BillboardStatusType {
  Approved = 'APPROVED',
  InstallationInprogress = 'INSTALLATION_INPROGRESS',
  Live = 'LIVE',
  New = 'NEW',
  OnHold = 'ON_HOLD',
  Rejected = 'REJECTED',
  Verified = 'VERIFIED',
}

export type BillboardStatusWhereInput = {
  AND?: InputMaybe<Array<BillboardStatusWhereInput>>
  NOT?: InputMaybe<Array<BillboardStatusWhereInput>>
  OR?: InputMaybe<Array<BillboardStatusWhereInput>>
  agent?: InputMaybe<AgentRelationFilter>
  agentId?: InputMaybe<StringFilter>
  billboard?: InputMaybe<BillboardRelationFilter>
  billboardId?: InputMaybe<IntFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  notes?: InputMaybe<StringFilter>
  status?: InputMaybe<BillboardStatusType>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type BillboardStatusWhereUniqueInput = {
  billboardId?: InputMaybe<Scalars['Int']>
}

export enum BillboardType {
  Classic = 'CLASSIC',
  Led = 'LED',
  Neon = 'NEON',
  ThreeDimensional = 'THREE_DIMENSIONAL',
  Vinyl = 'VINYL',
}

export type BillboardWhereInput = {
  AND?: InputMaybe<Array<BillboardWhereInput>>
  NOT?: InputMaybe<Array<BillboardWhereInput>>
  OR?: InputMaybe<Array<BillboardWhereInput>>
  address?: InputMaybe<StringFilter>
  angle?: InputMaybe<IntFilter>
  bookings?: InputMaybe<BookingListRelationFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  elevation?: InputMaybe<IntFilter>
  favorites?: InputMaybe<FavoriteListRelationFilter>
  height?: InputMaybe<IntFilter>
  id?: InputMaybe<IntFilter>
  images?: InputMaybe<StringListFilter>
  impressionsPerDay?: InputMaybe<IntFilter>
  lat?: InputMaybe<IntFilter>
  lng?: InputMaybe<IntFilter>
  minBookingDays?: InputMaybe<IntFilter>
  owner?: InputMaybe<OwnerRelationFilter>
  ownerId?: InputMaybe<StringFilter>
  pricePerDay?: InputMaybe<IntFilter>
  status?: InputMaybe<BillboardStatusRelationFilter>
  type?: InputMaybe<BillboardType>
  updatedAt?: InputMaybe<DateTimeFilter>
  width?: InputMaybe<IntFilter>
}

export type BillboardWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>
}

export type Booking = {
  __typename?: 'Booking'
  billboardId: Scalars['Int']
  campaignId: Scalars['Int']
  createdAt: Scalars['DateTime']
  id: Scalars['Int']
  pricePerDay: Scalars['Int']
  updatedAt: Scalars['DateTime']
}

export type BookingListRelationFilter = {
  every?: InputMaybe<BookingWhereInput>
  none?: InputMaybe<BookingWhereInput>
  some?: InputMaybe<BookingWhereInput>
}

export type BookingOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type BookingOrderByWithRelationInput = {
  billboard?: InputMaybe<BillboardOrderByWithRelationInput>
  billboardId?: InputMaybe<SortOrder>
  campaign?: InputMaybe<CampaignOrderByWithRelationInput>
  campaignId?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  pricePerDay?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export enum BookingScalarFieldEnum {
  BillboardId = 'billboardId',
  CampaignId = 'campaignId',
  CreatedAt = 'createdAt',
  Id = 'id',
  PricePerDay = 'pricePerDay',
  UpdatedAt = 'updatedAt',
}

export type BookingWhereInput = {
  AND?: InputMaybe<Array<BookingWhereInput>>
  NOT?: InputMaybe<Array<BookingWhereInput>>
  OR?: InputMaybe<Array<BookingWhereInput>>
  billboard?: InputMaybe<BillboardRelationFilter>
  billboardId?: InputMaybe<IntFilter>
  campaign?: InputMaybe<CampaignRelationFilter>
  campaignId?: InputMaybe<IntFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<IntFilter>
  pricePerDay?: InputMaybe<IntFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type BookingWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>
}

export type Campaign = {
  __typename?: 'Campaign'
  advertiserId: Scalars['String']
  createdAt: Scalars['DateTime']
  endDate: Scalars['DateTime']
  id: Scalars['Int']
  name: Scalars['String']
  startDate: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
}

export type CampaignListRelationFilter = {
  every?: InputMaybe<CampaignWhereInput>
  none?: InputMaybe<CampaignWhereInput>
  some?: InputMaybe<CampaignWhereInput>
}

export type CampaignOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type CampaignOrderByWithRelationInput = {
  advertiser?: InputMaybe<AdvertiserOrderByWithRelationInput>
  advertiserId?: InputMaybe<SortOrder>
  bookings?: InputMaybe<BookingOrderByRelationAggregateInput>
  createdAt?: InputMaybe<SortOrder>
  endDate?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  name?: InputMaybe<SortOrder>
  startDate?: InputMaybe<SortOrder>
  status?: InputMaybe<CampaignStatusOrderByWithRelationInput>
  updatedAt?: InputMaybe<SortOrder>
}

export type CampaignRelationFilter = {
  is?: InputMaybe<CampaignWhereInput>
  isNot?: InputMaybe<CampaignWhereInput>
}

export enum CampaignScalarFieldEnum {
  AdvertiserId = 'advertiserId',
  CreatedAt = 'createdAt',
  EndDate = 'endDate',
  Id = 'id',
  Name = 'name',
  StartDate = 'startDate',
  UpdatedAt = 'updatedAt',
}

export type CampaignStatus = {
  __typename?: 'CampaignStatus'
  agentId: Scalars['String']
  campaignId: Scalars['Int']
  createdAt: Scalars['DateTime']
  status: CampaignStatusType
  updatedAt: Scalars['DateTime']
}

export type CampaignStatusListRelationFilter = {
  every?: InputMaybe<CampaignStatusWhereInput>
  none?: InputMaybe<CampaignStatusWhereInput>
  some?: InputMaybe<CampaignStatusWhereInput>
}

export type CampaignStatusOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type CampaignStatusOrderByWithRelationInput = {
  agent?: InputMaybe<AgentOrderByWithRelationInput>
  agentId?: InputMaybe<SortOrder>
  campaign?: InputMaybe<CampaignOrderByWithRelationInput>
  campaignId?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  status?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type CampaignStatusRelationFilter = {
  is?: InputMaybe<CampaignStatusWhereInput>
  isNot?: InputMaybe<CampaignStatusWhereInput>
}

export enum CampaignStatusScalarFieldEnum {
  AgentId = 'agentId',
  CampaignId = 'campaignId',
  CreatedAt = 'createdAt',
  Status = 'status',
  UpdatedAt = 'updatedAt',
}

export enum CampaignStatusType {
  Approved = 'APPROVED',
  InstallationInprogress = 'INSTALLATION_INPROGRESS',
  Live = 'LIVE',
  New = 'NEW',
  OnHold = 'ON_HOLD',
  Rejected = 'REJECTED',
  Verified = 'VERIFIED',
}

export type CampaignStatusWhereInput = {
  AND?: InputMaybe<Array<CampaignStatusWhereInput>>
  NOT?: InputMaybe<Array<CampaignStatusWhereInput>>
  OR?: InputMaybe<Array<CampaignStatusWhereInput>>
  agent?: InputMaybe<AgentRelationFilter>
  agentId?: InputMaybe<StringFilter>
  campaign?: InputMaybe<CampaignRelationFilter>
  campaignId?: InputMaybe<IntFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  status?: InputMaybe<CampaignStatusType>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type CampaignStatusWhereUniqueInput = {
  campaignId?: InputMaybe<Scalars['Int']>
}

export type CampaignWhereInput = {
  AND?: InputMaybe<Array<CampaignWhereInput>>
  NOT?: InputMaybe<Array<CampaignWhereInput>>
  OR?: InputMaybe<Array<CampaignWhereInput>>
  advertiser?: InputMaybe<AdvertiserRelationFilter>
  advertiserId?: InputMaybe<StringFilter>
  bookings?: InputMaybe<BookingListRelationFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  endDate?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<IntFilter>
  name?: InputMaybe<StringFilter>
  startDate?: InputMaybe<DateTimeFilter>
  status?: InputMaybe<CampaignStatusRelationFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type CampaignWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>
}

export type CreateAdvertiserInput = {
  name: Scalars['String']
  uid: Scalars['String']
}

export type CreateAgentInput = {
  name: Scalars['String']
  uid: Scalars['String']
}

export type CreateBillboardInput = {
  address: Scalars['String']
  angle: Scalars['Int']
  elevation: Scalars['Int']
  height: Scalars['Int']
  images: Array<Scalars['String']>
  impressionsPerDay: Scalars['Int']
  lat: Scalars['Float']
  lng: Scalars['Float']
  minBookingDays: Scalars['Int']
  ownerId: Scalars['String']
  type: BillboardType
  width: Scalars['Int']
}

export type CreateBillboardStatusInput = {
  agentId: Scalars['String']
  billboardId: Scalars['Int']
  notes: Scalars['String']
  status: BillboardStatusType
}

export type CreateBookingInput = {
  billboardId: Scalars['Int']
  campaignId: Scalars['Int']
  pricePerDay: Scalars['Int']
}

export type CreateBookingWithoutCampaignIdInput = {
  billboardId: Scalars['Int']
  pricePerDay: Scalars['Int']
}

export type CreateCampaignInput = {
  advertiserId: Scalars['String']
  bookings: Array<CreateBookingWithoutCampaignIdInput>
  endDate: Scalars['DateTime']
  name: Scalars['String']
  startDate: Scalars['DateTime']
}

export type CreateCampaignStatusInput = {
  agentId: Scalars['String']
  campaignId: Scalars['Int']
  status: CampaignStatusType
}

export type CreateFavoriteInput = {
  advertiserId: Scalars['String']
  billboardId: Scalars['Int']
}

export type CreateOwnerInput = {
  name: Scalars['String']
  uid: Scalars['String']
}

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['String']>
  gt?: InputMaybe<Scalars['String']>
  gte?: InputMaybe<Scalars['String']>
  in?: InputMaybe<Array<Scalars['String']>>
  lt?: InputMaybe<Scalars['String']>
  lte?: InputMaybe<Scalars['String']>
  notIn?: InputMaybe<Array<Scalars['String']>>
}

export type Favorite = {
  __typename?: 'Favorite'
  advertiserId: Scalars['String']
  billboardId: Scalars['Int']
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
}

export type FavoriteListRelationFilter = {
  every?: InputMaybe<FavoriteWhereInput>
  none?: InputMaybe<FavoriteWhereInput>
  some?: InputMaybe<FavoriteWhereInput>
}

export type FavoriteOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type FavoriteOrderByWithRelationInput = {
  advertiser?: InputMaybe<AdvertiserOrderByWithRelationInput>
  advertiserId?: InputMaybe<SortOrder>
  billboard?: InputMaybe<BillboardOrderByWithRelationInput>
  billboardId?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export enum FavoriteScalarFieldEnum {
  AdvertiserId = 'advertiserId',
  BillboardId = 'billboardId',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
}

export type FavoriteWhereInput = {
  AND?: InputMaybe<Array<FavoriteWhereInput>>
  NOT?: InputMaybe<Array<FavoriteWhereInput>>
  OR?: InputMaybe<Array<FavoriteWhereInput>>
  advertiser?: InputMaybe<AdvertiserRelationFilter>
  advertiserId?: InputMaybe<StringFilter>
  billboard?: InputMaybe<BillboardRelationFilter>
  billboardId?: InputMaybe<IntFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type FavoriteWhereUniqueInput = {
  advertiserId_billboardId: WhereUniqueInputFavoriteInner
}

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>
  gt?: InputMaybe<Scalars['Int']>
  gte?: InputMaybe<Scalars['Int']>
  in?: InputMaybe<Scalars['Int']>
  lt?: InputMaybe<Scalars['Int']>
  lte?: InputMaybe<Scalars['Int']>
  not?: InputMaybe<Scalars['Int']>
  notIn?: InputMaybe<Scalars['Int']>
}

export type Mutation = {
  __typename?: 'Mutation'
  createAdvertiser: Advertiser
  createAgent: Agent
  createBillboard: Billboard
  createBillboardStatus: BillboardStatus
  createBooking: Booking
  createCampaign: Campaign
  createCampaignStatus: CampaignStatus
  createFavorite: Favorite
  createOwner: Owner
  removeAdvertiser: Advertiser
  removeAgent: Agent
  removeBillboard: Billboard
  removeBillboardStatus: BillboardStatus
  removeBooking: Booking
  removeCampaign: Campaign
  removeCampaignStatus: CampaignStatus
  removeFavorite: Favorite
  removeOwner: Owner
  updateAdvertiser: Advertiser
  updateAgent: Agent
  updateBillboard: Billboard
  updateBillboardStatus: BillboardStatus
  updateBooking: Booking
  updateCampaign: Campaign
  updateCampaignStatus: CampaignStatus
  updateFavorite: Favorite
  updateOwner: Owner
}

export type MutationCreateAdvertiserArgs = {
  createAdvertiserInput: CreateAdvertiserInput
}

export type MutationCreateAgentArgs = {
  createAgentInput: CreateAgentInput
}

export type MutationCreateBillboardArgs = {
  createBillboardInput: CreateBillboardInput
}

export type MutationCreateBillboardStatusArgs = {
  createBillboardStatusInput: CreateBillboardStatusInput
}

export type MutationCreateBookingArgs = {
  createBookingInput: CreateBookingInput
}

export type MutationCreateCampaignArgs = {
  createCampaignInput: CreateCampaignInput
}

export type MutationCreateCampaignStatusArgs = {
  createCampaignStatusInput: CreateCampaignStatusInput
}

export type MutationCreateFavoriteArgs = {
  createFavoriteInput: CreateFavoriteInput
}

export type MutationCreateOwnerArgs = {
  createOwnerInput: CreateOwnerInput
}

export type MutationRemoveAdvertiserArgs = {
  where?: InputMaybe<AdvertiserWhereUniqueInput>
}

export type MutationRemoveAgentArgs = {
  where?: InputMaybe<AgentWhereUniqueInput>
}

export type MutationRemoveBillboardArgs = {
  where?: InputMaybe<BillboardWhereUniqueInput>
}

export type MutationRemoveBillboardStatusArgs = {
  where?: InputMaybe<BillboardStatusWhereUniqueInput>
}

export type MutationRemoveBookingArgs = {
  where?: InputMaybe<BookingWhereUniqueInput>
}

export type MutationRemoveCampaignArgs = {
  where?: InputMaybe<CampaignWhereUniqueInput>
}

export type MutationRemoveCampaignStatusArgs = {
  where?: InputMaybe<CampaignStatusWhereUniqueInput>
}

export type MutationRemoveFavoriteArgs = {
  where?: InputMaybe<FavoriteWhereUniqueInput>
}

export type MutationRemoveOwnerArgs = {
  where?: InputMaybe<OwnerWhereUniqueInput>
}

export type MutationUpdateAdvertiserArgs = {
  updateAdvertiserInput: UpdateAdvertiserInput
}

export type MutationUpdateAgentArgs = {
  updateAgentInput: UpdateAgentInput
}

export type MutationUpdateBillboardArgs = {
  updateBillboardInput: UpdateBillboardInput
}

export type MutationUpdateBillboardStatusArgs = {
  updateBillboardStatusInput: UpdateBillboardStatusInput
}

export type MutationUpdateBookingArgs = {
  updateBookingInput: UpdateBookingInput
}

export type MutationUpdateCampaignArgs = {
  updateCampaignInput: UpdateCampaignInput
}

export type MutationUpdateCampaignStatusArgs = {
  updateCampaignStatusInput: UpdateCampaignStatusInput
}

export type MutationUpdateFavoriteArgs = {
  updateFavoriteInput: UpdateFavoriteInput
}

export type MutationUpdateOwnerArgs = {
  updateOwnerInput: UpdateOwnerInput
}

export type Owner = {
  __typename?: 'Owner'
  createdAt: Scalars['DateTime']
  name: Scalars['String']
  uid: Scalars['String']
  updatedAt: Scalars['DateTime']
}

export type OwnerOrderByWithRelationInput = {
  billboards?: InputMaybe<BillboardOrderByRelationAggregateInput>
  createdAt?: InputMaybe<SortOrder>
  name?: InputMaybe<SortOrder>
  uid?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type OwnerRelationFilter = {
  is?: InputMaybe<OwnerWhereInput>
  isNot?: InputMaybe<OwnerWhereInput>
}

export enum OwnerScalarFieldEnum {
  CreatedAt = 'createdAt',
  Name = 'name',
  Uid = 'uid',
  UpdatedAt = 'updatedAt',
}

export type OwnerWhereInput = {
  AND?: InputMaybe<Array<OwnerWhereInput>>
  NOT?: InputMaybe<Array<OwnerWhereInput>>
  OR?: InputMaybe<Array<OwnerWhereInput>>
  billboards?: InputMaybe<BillboardListRelationFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  name?: InputMaybe<StringFilter>
  uid?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type OwnerWhereUniqueInput = {
  uid?: InputMaybe<Scalars['String']>
}

export type Query = {
  __typename?: 'Query'
  advertiser: Advertiser
  advertisers: Array<Advertiser>
  agent: Agent
  agents: Array<Agent>
  billboard: Billboard
  billboardStatus: BillboardStatus
  billboardStatuses: Array<BillboardStatus>
  billboards: Array<Billboard>
  booking: Booking
  bookings: Array<Booking>
  campaign: Campaign
  campaignStatus: CampaignStatus
  campaignStatuses: Array<CampaignStatus>
  campaigns: Array<Campaign>
  favorite: Favorite
  favorites: Array<Favorite>
  owner: Owner
  owners: Array<Owner>
}

export type QueryAdvertiserArgs = {
  where?: InputMaybe<AdvertiserWhereUniqueInput>
}

export type QueryAdvertisersArgs = {
  cursor?: InputMaybe<WhereUniqueInputUid>
  distinct?: InputMaybe<Array<AdvertiserScalarFieldEnum>>
  orderBy?: InputMaybe<Array<AdvertiserOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<AdvertiserWhereInput>
}

export type QueryAgentArgs = {
  where?: InputMaybe<AgentWhereUniqueInput>
}

export type QueryAgentsArgs = {
  cursor?: InputMaybe<WhereUniqueInputUid>
  distinct?: InputMaybe<Array<AgentScalarFieldEnum>>
  orderBy?: InputMaybe<Array<AgentOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<AgentWhereInput>
}

export type QueryBillboardArgs = {
  where?: InputMaybe<BillboardWhereUniqueInput>
}

export type QueryBillboardStatusArgs = {
  where?: InputMaybe<BillboardStatusWhereUniqueInput>
}

export type QueryBillboardStatusesArgs = {
  cursor?: InputMaybe<WhereUniqueInputBillboardId>
  distinct?: InputMaybe<Array<BillboardStatusScalarFieldEnum>>
  orderBy?: InputMaybe<Array<BillboardStatusOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<BillboardStatusWhereInput>
}

export type QueryBillboardsArgs = {
  cursor?: InputMaybe<WhereUniqueInputNumber>
  distinct?: InputMaybe<Array<BillboardScalarFieldEnum>>
  orderBy?: InputMaybe<Array<BillboardOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<BillboardWhereInput>
}

export type QueryBookingArgs = {
  where?: InputMaybe<BookingWhereUniqueInput>
}

export type QueryBookingsArgs = {
  cursor?: InputMaybe<WhereUniqueInputNumber>
  distinct?: InputMaybe<Array<BookingScalarFieldEnum>>
  orderBy?: InputMaybe<Array<BookingOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<BookingWhereInput>
}

export type QueryCampaignArgs = {
  where?: InputMaybe<CampaignWhereUniqueInput>
}

export type QueryCampaignStatusArgs = {
  where?: InputMaybe<CampaignStatusWhereUniqueInput>
}

export type QueryCampaignStatusesArgs = {
  cursor?: InputMaybe<WhereUniqueInputCampaignId>
  distinct?: InputMaybe<Array<CampaignStatusScalarFieldEnum>>
  orderBy?: InputMaybe<Array<CampaignStatusOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<CampaignStatusWhereInput>
}

export type QueryCampaignsArgs = {
  cursor?: InputMaybe<WhereUniqueInputNumber>
  distinct?: InputMaybe<Array<CampaignScalarFieldEnum>>
  orderBy?: InputMaybe<Array<CampaignOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<CampaignWhereInput>
}

export type QueryFavoriteArgs = {
  where?: InputMaybe<FavoriteWhereUniqueInput>
}

export type QueryFavoritesArgs = {
  cursor?: InputMaybe<WhereUniqueInputFavorite>
  distinct?: InputMaybe<Array<FavoriteScalarFieldEnum>>
  orderBy?: InputMaybe<Array<FavoriteOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<FavoriteWhereInput>
}

export type QueryOwnerArgs = {
  where?: InputMaybe<OwnerWhereUniqueInput>
}

export type QueryOwnersArgs = {
  cursor?: InputMaybe<WhereUniqueInputUid>
  distinct?: InputMaybe<Array<OwnerScalarFieldEnum>>
  orderBy?: InputMaybe<Array<OwnerOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']>
  take?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<OwnerWhereInput>
}

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive',
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>
  endsWith?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  gt?: InputMaybe<Scalars['String']>
  gte?: InputMaybe<Scalars['String']>
  in?: InputMaybe<Array<Scalars['String']>>
  lt?: InputMaybe<Scalars['String']>
  lte?: InputMaybe<Scalars['String']>
  mode?: InputMaybe<QueryMode>
  not?: InputMaybe<Scalars['String']>
  notIn?: InputMaybe<Array<Scalars['String']>>
  startsWith?: InputMaybe<Scalars['String']>
}

export type StringListFilter = {
  equals?: InputMaybe<Array<Scalars['String']>>
  has?: InputMaybe<Scalars['String']>
  hasEvery?: InputMaybe<Array<Scalars['String']>>
  hasSome?: InputMaybe<Array<Scalars['String']>>
  isEmpty?: InputMaybe<Scalars['Boolean']>
}

export type UpdateAdvertiserInput = {
  name?: InputMaybe<Scalars['String']>
  uid: Scalars['String']
}

export type UpdateAgentInput = {
  name?: InputMaybe<Scalars['String']>
  uid: Scalars['String']
}

export type UpdateBillboardInput = {
  address?: InputMaybe<Scalars['String']>
  angle?: InputMaybe<Scalars['Int']>
  elevation?: InputMaybe<Scalars['Int']>
  height?: InputMaybe<Scalars['Int']>
  id: Scalars['Int']
  images?: InputMaybe<Array<Scalars['String']>>
  impressionsPerDay?: InputMaybe<Scalars['Int']>
  lat?: InputMaybe<Scalars['Float']>
  lng?: InputMaybe<Scalars['Float']>
  minBookingDays?: InputMaybe<Scalars['Int']>
  ownerId?: InputMaybe<Scalars['String']>
  type?: InputMaybe<BillboardType>
  width?: InputMaybe<Scalars['Int']>
}

export type UpdateBillboardStatusInput = {
  agentId?: InputMaybe<Scalars['String']>
  billboardId: Scalars['Int']
  notes?: InputMaybe<Scalars['String']>
  status?: InputMaybe<BillboardStatusType>
}

export type UpdateBookingInput = {
  billboardId?: InputMaybe<Scalars['Int']>
  campaignId?: InputMaybe<Scalars['Int']>
  id: Scalars['Int']
  pricePerDay?: InputMaybe<Scalars['Int']>
}

export type UpdateCampaignInput = {
  endDate?: InputMaybe<Scalars['DateTime']>
  id: Scalars['Int']
  name?: InputMaybe<Scalars['String']>
  startDate?: InputMaybe<Scalars['DateTime']>
}

export type UpdateCampaignStatusInput = {
  agentId?: InputMaybe<Scalars['String']>
  campaignId: Scalars['Int']
  status?: InputMaybe<CampaignStatusType>
}

export type UpdateFavoriteInput = {
  advertiserId?: InputMaybe<Scalars['String']>
  advertiserId_billboardId: WhereUniqueInputFavoriteInner
  billboardId?: InputMaybe<Scalars['Int']>
}

export type UpdateOwnerInput = {
  name?: InputMaybe<Scalars['String']>
  uid: Scalars['String']
}

export type WhereUniqueInputBillboardId = {
  billboardId?: InputMaybe<Scalars['Int']>
}

export type WhereUniqueInputCampaignId = {
  campaignId?: InputMaybe<Scalars['Int']>
}

export type WhereUniqueInputFavorite = {
  advertiserId_billboardId?: InputMaybe<WhereUniqueInputFavoriteInner>
}

export type WhereUniqueInputFavoriteInner = {
  advertiserId?: InputMaybe<Scalars['String']>
  billboardId?: InputMaybe<Scalars['Int']>
}

export type WhereUniqueInputNumber = {
  id?: InputMaybe<Scalars['Int']>
}

export type WhereUniqueInputUid = {
  uid?: InputMaybe<Scalars['String']>
}

export type CreateAgentMutationVariables = Exact<{
  createAgentInput: CreateAgentInput
}>

export type CreateAgentMutation = {
  __typename?: 'Mutation'
  createAgent: { __typename?: 'Agent'; uid: string }
}

export const CreateAgentDocument = /*#__PURE__*/ gql`
  mutation CreateAgent($createAgentInput: CreateAgentInput!) {
    createAgent(createAgentInput: $createAgentInput) {
      uid
    }
  }
`
export type CreateAgentMutationFn = Apollo.MutationFunction<
  CreateAgentMutation,
  CreateAgentMutationVariables
>

/**
 * __useCreateAgentMutation__
 *
 * To run a mutation, you first call `useCreateAgentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAgentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAgentMutation, { data, loading, error }] = useCreateAgentMutation({
 *   variables: {
 *      createAgentInput: // value for 'createAgentInput'
 *   },
 * });
 */
export function useCreateAgentMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateAgentMutation,
    CreateAgentMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateAgentMutation, CreateAgentMutationVariables>(
    CreateAgentDocument,
    options,
  )
}
export type CreateAgentMutationHookResult = ReturnType<
  typeof useCreateAgentMutation
>
export type CreateAgentMutationResult =
  Apollo.MutationResult<CreateAgentMutation>
export type CreateAgentMutationOptions = Apollo.BaseMutationOptions<
  CreateAgentMutation,
  CreateAgentMutationVariables
>
