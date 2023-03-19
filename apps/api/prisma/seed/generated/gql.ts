/* eslint-disable */
import * as types from './graphql'
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  '\n  mutation CreateAgent($createAgentInput: CreateAgentInput!) {\n    createAgent(createAgentInput: $createAgentInput) {\n      uid\n    }\n  }\n':
    types.CreateAgentDocument,
  '\n  mutation CreateOwner($createOwnerInput: CreateOwnerInput!) {\n    createOwner(createOwnerInput: $createOwnerInput) {\n      uid\n    }\n  }\n':
    types.CreateOwnerDocument,
  '\n  mutation CreateAdvertiser($createAdvertiserInput: CreateAdvertiserInput!) {\n    createAdvertiser(createAdvertiserInput: $createAdvertiserInput) {\n      uid\n    }\n  }\n':
    types.CreateAdvertiserDocument,
  '\n  mutation CreateBillboard($createBillboardInput: CreateBillboardInput!) {\n    createBillboard(createBillboardInput: $createBillboardInput) {\n      id\n    }\n  }\n':
    types.CreateBillboardDocument,
  '\n  mutation CreateFavorite($createFavoriteInput: CreateFavoriteInput!) {\n    createFavorite(createFavoriteInput: $createFavoriteInput) {\n      advertiserId\n      billboardId\n    }\n  }\n':
    types.CreateFavoriteDocument,
  '\n  mutation CreateBillboardStatus(\n    $createBillboardStatusInput: CreateBillboardStatusInput!\n  ) {\n    createBillboardStatus(\n      createBillboardStatusInput: $createBillboardStatusInput\n    ) {\n      agentId\n      billboardId\n    }\n  }\n':
    types.CreateBillboardStatusDocument,
  '\n  mutation CreateCampaign($createCampaignInput: CreateCampaignInput!) {\n    createCampaign(createCampaignInput: $createCampaignInput) {\n      id\n    }\n  }\n':
    types.CreateCampaignDocument,
  '\n  mutation CreateCampaignStatus(\n    $createCampaignStatusInput: CreateCampaignStatusInput!\n  ) {\n    createCampaignStatus(\n      createCampaignStatusInput: $createCampaignStatusInput\n    ) {\n      agentId\n      campaignId\n    }\n  }\n':
    types.CreateCampaignStatusDocument,
}

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation CreateAgent($createAgentInput: CreateAgentInput!) {\n    createAgent(createAgentInput: $createAgentInput) {\n      uid\n    }\n  }\n',
): (typeof documents)['\n  mutation CreateAgent($createAgentInput: CreateAgentInput!) {\n    createAgent(createAgentInput: $createAgentInput) {\n      uid\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation CreateOwner($createOwnerInput: CreateOwnerInput!) {\n    createOwner(createOwnerInput: $createOwnerInput) {\n      uid\n    }\n  }\n',
): (typeof documents)['\n  mutation CreateOwner($createOwnerInput: CreateOwnerInput!) {\n    createOwner(createOwnerInput: $createOwnerInput) {\n      uid\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation CreateAdvertiser($createAdvertiserInput: CreateAdvertiserInput!) {\n    createAdvertiser(createAdvertiserInput: $createAdvertiserInput) {\n      uid\n    }\n  }\n',
): (typeof documents)['\n  mutation CreateAdvertiser($createAdvertiserInput: CreateAdvertiserInput!) {\n    createAdvertiser(createAdvertiserInput: $createAdvertiserInput) {\n      uid\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation CreateBillboard($createBillboardInput: CreateBillboardInput!) {\n    createBillboard(createBillboardInput: $createBillboardInput) {\n      id\n    }\n  }\n',
): (typeof documents)['\n  mutation CreateBillboard($createBillboardInput: CreateBillboardInput!) {\n    createBillboard(createBillboardInput: $createBillboardInput) {\n      id\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation CreateFavorite($createFavoriteInput: CreateFavoriteInput!) {\n    createFavorite(createFavoriteInput: $createFavoriteInput) {\n      advertiserId\n      billboardId\n    }\n  }\n',
): (typeof documents)['\n  mutation CreateFavorite($createFavoriteInput: CreateFavoriteInput!) {\n    createFavorite(createFavoriteInput: $createFavoriteInput) {\n      advertiserId\n      billboardId\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation CreateBillboardStatus(\n    $createBillboardStatusInput: CreateBillboardStatusInput!\n  ) {\n    createBillboardStatus(\n      createBillboardStatusInput: $createBillboardStatusInput\n    ) {\n      agentId\n      billboardId\n    }\n  }\n',
): (typeof documents)['\n  mutation CreateBillboardStatus(\n    $createBillboardStatusInput: CreateBillboardStatusInput!\n  ) {\n    createBillboardStatus(\n      createBillboardStatusInput: $createBillboardStatusInput\n    ) {\n      agentId\n      billboardId\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation CreateCampaign($createCampaignInput: CreateCampaignInput!) {\n    createCampaign(createCampaignInput: $createCampaignInput) {\n      id\n    }\n  }\n',
): (typeof documents)['\n  mutation CreateCampaign($createCampaignInput: CreateCampaignInput!) {\n    createCampaign(createCampaignInput: $createCampaignInput) {\n      id\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation CreateCampaignStatus(\n    $createCampaignStatusInput: CreateCampaignStatusInput!\n  ) {\n    createCampaignStatus(\n      createCampaignStatusInput: $createCampaignStatusInput\n    ) {\n      agentId\n      campaignId\n    }\n  }\n',
): (typeof documents)['\n  mutation CreateCampaignStatus(\n    $createCampaignStatusInput: CreateCampaignStatusInput!\n  ) {\n    createCampaignStatus(\n      createCampaignStatusInput: $createCampaignStatusInput\n    ) {\n      agentId\n      campaignId\n    }\n  }\n']

export function graphql(source: string) {
  return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never
