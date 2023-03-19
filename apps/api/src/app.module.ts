import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PrismaModule } from './common/prisma/prisma.module'
import { AdvertisersModule } from './models/advertisers/advertisers.module'
import { AgentsModule } from './models/agents/agents.module'
import { BillboardStatusesModule } from './models/billboard-statuses/billboard-statuses.module'
import { BillboardsModule } from './models/billboards/billboards.module'
import { BookingsModule } from './models/bookings/bookings.module'
import { CampaignStatusesModule } from './models/campaign-statuses/campaign-statuses.module'
import { CampaignsModule } from './models/campaigns/campaigns.module'
import { FavoritesModule } from './models/favorites/favorites.module'
import { OwnersModule } from './models/owners/owners.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      buildSchemaOptions: {
        numberScalarMode: 'integer',
      },
    }),

    PrismaModule,

    OwnersModule,
    AdvertisersModule,
    AgentsModule,
    BillboardsModule,
    BillboardStatusesModule,
    FavoritesModule,
    BillboardsModule,
    CampaignsModule,
    BookingsModule,
    CampaignStatusesModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
